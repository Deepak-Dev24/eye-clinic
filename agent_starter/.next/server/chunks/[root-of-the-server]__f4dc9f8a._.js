module.exports = [
"[project]/.next-internal/server/app/api/connection-details/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[project]/app/api/connection-details/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$server$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/livekit-server-sdk/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$server$2d$sdk$2f$dist$2f$AccessToken$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-server-sdk/dist/AccessToken.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$protocol$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/protocol/dist/index.mjs [app-route] (ecmascript) <locals>");
;
;
;
// NOTE: you are expected to define the following environment variables in `.env.local`:
const API_KEY = process.env.LIVEKIT_API_KEY;
const API_SECRET = process.env.LIVEKIT_API_SECRET;
const LIVEKIT_URL = process.env.LIVEKIT_URL;
const revalidate = 0;
async function POST(req) {
    try {
        if (LIVEKIT_URL === undefined) {
            throw new Error('LIVEKIT_URL is not defined');
        }
        if (API_KEY === undefined) {
            throw new Error('LIVEKIT_API_KEY is not defined');
        }
        if (API_SECRET === undefined) {
            throw new Error('LIVEKIT_API_SECRET is not defined');
        }
        // Parse agent configuration from request body
        const body = await req.json();
        const agentName = body?.room_config?.agents?.[0]?.agent_name;
        // Generate participant token
        const participantName = 'user';
        const participantIdentity = `voice_assistant_user_${Math.floor(Math.random() * 10_000)}`;
        const roomName = `voice_assistant_room_${Math.floor(Math.random() * 10_000)}`;
        const participantToken = await createParticipantToken({
            identity: participantIdentity,
            name: participantName
        }, roomName, agentName);
        // Return connection details
        const data = {
            serverUrl: LIVEKIT_URL,
            roomName,
            participantToken: participantToken,
            participantName
        };
        const headers = new Headers({
            'Cache-Control': 'no-store'
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
            headers
        });
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](error.message, {
                status: 500
            });
        }
    }
}
function createParticipantToken(userInfo, roomName, agentName) {
    const at = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$server$2d$sdk$2f$dist$2f$AccessToken$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccessToken"](API_KEY, API_SECRET, {
        ...userInfo,
        ttl: '15m'
    });
    const grant = {
        room: roomName,
        roomJoin: true,
        canPublish: true,
        canPublishData: true,
        canSubscribe: true
    };
    at.addGrant(grant);
    if (agentName) {
        at.roomConfig = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$protocol$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RoomConfiguration"]({
            agents: [
                {
                    agentName
                }
            ]
        });
    }
    return at.toJwt();
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f4dc9f8a._.js.map