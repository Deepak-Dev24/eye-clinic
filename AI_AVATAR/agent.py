import asyncio
import inspect
import os

from dotenv import load_dotenv
from livekit import agents
from livekit.agents import AgentSession, Agent, RoomInputOptions
from livekit.plugins import openai, cartesia, noise_cancellation
from prompts import AGENT_INSTRUCTION, SESSION_INSTRUCTION
from livekit.plugins import deepgram
from livekit.plugins import silero




# -----------------------
# Utility: clean TTS text
# -----------------------
def clean_text(text: str) -> str:
    if not text:
        return text
    lines = [l for l in text.splitlines() if not l.strip().startswith("[DEBUG]")]
    cleaned = " ".join(lines).strip()
    for token in ("<END_OF_TURN>", "END_OF_TURN>", "END"):
        cleaned = cleaned.replace(token, "")
    return cleaned.strip()

# -----------------------
# Load environment
# -----------------------
load_dotenv()

# -----------------------
# Define your Agent
# -----------------------
class Assistant(Agent):
    def __init__(self) -> None:
        combined = f"{AGENT_INSTRUCTION.strip()}\n\n{SESSION_INSTRUCTION.strip()}"
        print("---- Loaded Instructions ----")
        print(combined[:1500])
        super().__init__(instructions=combined)

# -----------------------
# Entry point for LiveKit agent
# -----------------------
async def entrypoint(ctx: agents.JobContext):
    # Create a session WITHOUT STT

    session = AgentSession(
    stt=deepgram.STT(api_key=os.getenv("DEEPGRAM_API_KEY")),
    llm=openai.LLM(model="gpt-4o-mini", temperature=0),
    tts=cartesia.TTS(model="sonic-2", voice="f786b574-daa5-4673-aa0c-cbe3e8534c02"),
   # vad=silero.VAD.load(),
   vad = silero.vad.VAD.load()

)

    # Wrap TTS to clean text
    try:
        if session.tts and hasattr(session.tts, "speak"):
            orig = session.tts.speak
            if inspect.iscoroutinefunction(orig):
                async def speak_wrapper(text, *a, __orig=orig, **kw):
                    return await __orig(clean_text(text), *a, **kw)
                session.tts.speak = speak_wrapper
            else:
                def speak_wrapper(text, *a, __orig=orig, **kw):
                    return __orig(clean_text(text), *a, **kw)
                session.tts.speak = speak_wrapper
            print("TTS speak wrapper installed.")
    except Exception as e:
        print("TTS wrapper install failed:", repr(e))

    # Start session
    await session.start(
        room=ctx.room,
        agent=Assistant(),
        room_input_options=RoomInputOptions(
            noise_cancellation=noise_cancellation.BVC(),
            close_on_disconnect=True
        ),
    )

    # Optional: generate initial reply
    await session.generate_reply(instructions=SESSION_INSTRUCTION)

# -----------------------
# Run the agent
# -----------------------
if __name__ == "__main__":
    agents.cli.run_app(agents.WorkerOptions(entrypoint_fnc=entrypoint))
