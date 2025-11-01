(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APP_CONFIG_DEFAULTS",
    ()=>APP_CONFIG_DEFAULTS
]);
const APP_CONFIG_DEFAULTS = {
    companyName: 'LiveKit',
    pageTitle: 'LiveKit Voice Agent',
    pageDescription: 'A voice agent built with LiveKit',
    supportsChatInput: true,
    supportsVideoInput: true,
    supportsScreenShare: true,
    isPreConnectBufferEnabled: true,
    logo: '/lk-logo.svg',
    accent: '#002cf2',
    logoDark: '/lk-logo-dark.svg',
    accentDark: '#1fd5f9',
    startButtonText: 'Talk to Our Voice AI Assistant',
    agentName: undefined
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONFIG_ENDPOINT",
    ()=>CONFIG_ENDPOINT,
    "SANDBOX_ID",
    ()=>SANDBOX_ID,
    "THEME_MEDIA_QUERY",
    ()=>THEME_MEDIA_QUERY,
    "THEME_STORAGE_KEY",
    ()=>THEME_STORAGE_KEY,
    "cn",
    ()=>cn,
    "getAppConfig",
    ()=>getAppConfig,
    "transcriptionToChatMessage",
    ()=>transcriptionToChatMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-config.ts [app-client] (ecmascript)");
;
;
;
;
const CONFIG_ENDPOINT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_APP_CONFIG_ENDPOINT;
const SANDBOX_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SANDBOX_ID;
const THEME_STORAGE_KEY = 'theme-mode';
const THEME_MEDIA_QUERY = '(prefers-color-scheme: dark)';
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function transcriptionToChatMessage(textStream, room) {
    return {
        id: textStream.streamInfo.id,
        timestamp: textStream.streamInfo.timestamp,
        message: textStream.text,
        from: textStream.participantInfo.identity === room.localParticipant.identity ? room.localParticipant : Array.from(room.remoteParticipants.values()).find((p)=>p.identity === textStream.participantInfo.identity)
    };
}
const getAppConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cache"])(async (headers)=>{
    if (CONFIG_ENDPOINT) {
        var _ref;
        const sandboxId = (_ref = SANDBOX_ID !== null && SANDBOX_ID !== void 0 ? SANDBOX_ID : headers.get('x-sandbox-id')) !== null && _ref !== void 0 ? _ref : '';
        try {
            if (!sandboxId) {
                throw new Error('Sandbox ID is required');
            }
            const response = await fetch(CONFIG_ENDPOINT, {
                cache: 'no-store',
                headers: {
                    'X-Sandbox-ID': sandboxId
                }
            });
            const remoteConfig = await response.json();
            const config = {
                sandboxId,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_CONFIG_DEFAULTS"]
            };
            for (const [key, entry] of Object.entries(remoteConfig)){
                if (entry === null) continue;
                // Only include app config entries that are declared in defaults and, if set,
                // share the same primitive type as the default value.
                if (key in __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_CONFIG_DEFAULTS"] && __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_CONFIG_DEFAULTS"][key] === undefined || typeof config[key] === entry.type && typeof config[key] === typeof entry.value) {
                    // @ts-expect-error I'm not sure quite how to appease TypeScript, but we've thoroughly checked types above
                    config[key] = entry.value;
                }
            }
            return config;
        } catch (error) {
            console.error('ERROR: getAppConfig() - lib/utils.ts', error);
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_CONFIG_DEFAULTS"];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplyThemeScript",
    ()=>ApplyThemeScript,
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Monitor$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Monitor.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Moon$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Moon.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Sun$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/Sun.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const THEME_SCRIPT = '\n  const doc = document.documentElement;\n  const theme = localStorage.getItem("'.concat(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_STORAGE_KEY"], '") ?? "system";\n\n  if (theme === "system") {\n    if (window.matchMedia("').concat(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_MEDIA_QUERY"], '").matches) {\n      doc.classList.add("dark");\n    } else {\n      doc.classList.add("light");\n    }\n  } else {\n    doc.classList.add(theme);\n  }\n').trim().replace(/\n/g, '').replace(/\s+/g, ' ');
function applyTheme(theme) {
    const doc = document.documentElement;
    doc.classList.remove('dark', 'light');
    localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_STORAGE_KEY"], theme);
    if (theme === 'system') {
        if (window.matchMedia(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_MEDIA_QUERY"]).matches) {
            doc.classList.add('dark');
        } else {
            doc.classList.add('light');
        }
    } else {
        doc.classList.add(theme);
    }
}
function ApplyThemeScript() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        id: "theme-script",
        children: THEME_SCRIPT
    }, void 0, false, {
        fileName: "[project]/components/theme-toggle.tsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
_c = ApplyThemeScript;
function ThemeToggle(param) {
    let { className } = param;
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            var _ref;
            const storedTheme = (_ref = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_STORAGE_KEY"])) !== null && _ref !== void 0 ? _ref : 'system';
            setTheme(storedTheme);
        }
    }["ThemeToggle.useEffect"], []);
    function handleThemeChange(theme) {
        applyTheme(theme);
        setTheme(theme);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-foreground bg-background flex w-full flex-row justify-end divide-x overflow-hidden rounded-full border', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Color scheme toggle"
            }, void 0, false, {
                fileName: "[project]/components/theme-toggle.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>handleThemeChange('dark'),
                className: "cursor-pointer p-1 pl-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Enable dark color scheme"
                    }, void 0, false, {
                        fileName: "[project]/components/theme-toggle.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Moon$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoonIcon"], {
                        size: 16,
                        weight: "bold",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(theme !== 'dark' && 'opacity-25')
                    }, void 0, false, {
                        fileName: "[project]/components/theme-toggle.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/theme-toggle.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>handleThemeChange('light'),
                className: "cursor-pointer px-1.5 py-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Enable light color scheme"
                    }, void 0, false, {
                        fileName: "[project]/components/theme-toggle.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Sun$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SunIcon"], {
                        size: 16,
                        weight: "bold",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(theme !== 'light' && 'opacity-25')
                    }, void 0, false, {
                        fileName: "[project]/components/theme-toggle.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/theme-toggle.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>handleThemeChange('system'),
                className: "cursor-pointer p-1 pr-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Enable system color scheme"
                    }, void 0, false, {
                        fileName: "[project]/components/theme-toggle.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$Monitor$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonitorIcon"], {
                        size: 16,
                        weight: "bold",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(theme !== 'system' && 'opacity-25')
                    }, void 0, false, {
                        fileName: "[project]/components/theme-toggle.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/theme-toggle.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/theme-toggle.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "lftY2drIGjUjnKYqFMREOY5Pzt8=");
_c1 = ThemeToggle;
var _c, _c1;
__turbopack_context__.k.register(_c, "ApplyThemeScript");
__turbopack_context__.k.register(_c1, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_2a06114d._.js.map