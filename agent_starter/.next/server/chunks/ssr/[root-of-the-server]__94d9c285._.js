module.exports = [
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/app/(app)/opengraph-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alt",
    ()=>alt,
    "contentType",
    ()=>contentType,
    "default",
    ()=>Image,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/og.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2d$image$2d$size$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/buffer-image-size/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mime$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/mime/dist/src/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app-config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const alt = 'About Acme';
const size = {
    width: 1200,
    height: 628
};
function isRemoteFile(uri) {
    return uri.startsWith('http');
}
function doesLocalFileExist(uri) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["existsSync"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(process.cwd(), uri));
}
// LOCAL FILES MUST BE IN PUBLIC FOLDER
async function loadFileData(filePath) {
    if (isRemoteFile(filePath)) {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${filePath} - ${response.status} ${response.statusText}`);
        }
        return await response.arrayBuffer();
    }
    // Try file system first (works in local development)
    if (doesLocalFileExist(filePath)) {
        const buffer = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["join"])(process.cwd(), filePath));
        return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    }
    // Fallback to fetching from public URL (works in production)
    const publicFilePath = filePath.replace('public/', '');
    const fontUrl = `https://${process.env.VERCEL_URL}/${publicFilePath}`;
    const response = await fetch(fontUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${fontUrl} - ${response.status} ${response.statusText}`);
    }
    return await response.arrayBuffer();
}
async function getImageData(uri, fallbackUri) {
    try {
        const fileData = await loadFileData(uri);
        const buffer = Buffer.from(fileData);
        const mimeType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mime$2f$dist$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].getType(uri);
        return {
            base64: `data:${mimeType};base64,${buffer.toString('base64')}`,
            dimensions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2d$image$2d$size$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(buffer)
        };
    } catch (e) {
        if (fallbackUri) {
            return getImageData(fallbackUri, fallbackUri);
        }
        throw e;
    }
}
function scaleImageSize(size, desiredHeight) {
    const scale = desiredHeight / size.height;
    return {
        width: size.width * scale,
        height: desiredHeight
    };
}
function cleanPageTitle(appName) {
    if (appName === __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_CONFIG_DEFAULTS"].pageTitle) {
        return 'Voice agent';
    }
    return appName;
}
const contentType = 'image/png';
async function Image() {
    const hdrs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const appConfig = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAppConfig"])(hdrs);
    const pageTitle = cleanPageTitle(appConfig.pageTitle);
    const logoUri = appConfig.logoDark || appConfig.logo;
    const isLogoUriLocal = logoUri.includes('lk-logo');
    const wordmarkUri = logoUri === __TURBOPACK__imported__module__$5b$project$5d2f$app$2d$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_CONFIG_DEFAULTS"].logoDark ? 'public/lk-wordmark.svg' : logoUri;
    // Load fonts - use file system in dev, fetch in production
    let commitMonoData;
    let everettLightData;
    try {
        commitMonoData = await loadFileData('public/commit-mono-400-regular.woff');
        everettLightData = await loadFileData('public/everett-light.woff');
    } catch (e) {
        console.error('Failed to load fonts:', e);
    // Continue without custom fonts - will fall back to system fonts
    }
    // bg
    const { base64: bgSrcBase64 } = await getImageData('public/opengraph-image-bg.png');
    // wordmark
    const { base64: wordmarkSrcBase64, dimensions: wordmarkDimensions } = isLogoUriLocal ? await getImageData(wordmarkUri) : await getImageData(logoUri);
    const wordmarkSize = scaleImageSize(wordmarkDimensions, isLogoUriLocal ? 32 : 64);
    // logo
    const { base64: logoSrcBase64, dimensions: logoDimensions } = await getImageData(logoUri, 'public/lk-logo-dark.svg');
    const logoSize = scaleImageSize(logoDimensions, 24);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](// ImageResponse JSX element
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: size.width,
            height: size.height,
            backgroundImage: `url(${bgSrcBase64})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 30,
                    left: 30,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: wordmarkSrcBase64,
                    width: wordmarkSize.width,
                    height: wordmarkSize.height
                }, void 0, false, {
                    fileName: "[project]/app/(app)/opengraph-image.tsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/opengraph-image.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 200,
                    left: 460,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: logoSrcBase64,
                    width: logoSize.width,
                    height: logoSize.height
                }, void 0, false, {
                    fileName: "[project]/app/(app)/opengraph-image.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/opengraph-image.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 100,
                    left: 30,
                    width: '380px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: '#1F1F1F',
                            padding: '2px 8px',
                            borderRadius: 4,
                            width: 72,
                            fontSize: 12,
                            fontFamily: 'CommitMono',
                            fontWeight: 600,
                            color: '#999999',
                            letterSpacing: 0.8
                        },
                        children: "SANDBOX"
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/opengraph-image.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 48,
                            fontWeight: 300,
                            fontFamily: 'Everett',
                            color: 'white',
                            lineHeight: 1
                        },
                        children: pageTitle
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/opengraph-image.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/opengraph-image.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/opengraph-image.tsx",
        lineNumber: 144,
        columnNumber: 7
    }, this), // ImageResponse options
    {
        // For convenience, we can re-use the exported opengraph-image
        // size config to also set the ImageResponse's width and height.
        ...size,
        fonts: [
            ...commitMonoData ? [
                {
                    name: 'CommitMono',
                    data: commitMonoData,
                    style: 'normal',
                    weight: 400
                }
            ] : [],
            ...everettLightData ? [
                {
                    name: 'Everett',
                    data: everettLightData,
                    style: 'normal',
                    weight: 300
                }
            ] : []
        ]
    });
}
}),
"[project]/app/(app)/opengraph-image--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(app)/opengraph-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    alt: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["alt"],
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/(app)", params, "opengraph-image");
    const { generateImageMetadata } = imageModule;
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + "?10dd23d70afb2d03"
        };
        const { size } = imageMetadata;
        if (size) {
            data.width = size.width;
            data.height = size.height;
        }
        return data;
    }
    if (generateImageMetadata) {
        const imageMetadataArray = await generateImageMetadata({
            params
        });
        return imageMetadataArray.map((imageMetadata, index)=>{
            const idParam = (imageMetadata.id || index) + '';
            return getImageMetadata(imageMetadata, idParam);
        });
    } else {
        return [
            getImageMetadata(imageModule, '')
        ];
    }
}
}),
"[project]/node_modules/next/dist/server/og/image-response.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageResponse", {
    enumerable: true,
    get: function() {
        return ImageResponse;
    }
});
function importModule() {
    return __turbopack_context__.A("[externals]/next/dist/compiled/@vercel/og/index.node.js [external] (next/dist/compiled/@vercel/og/index.node.js, esm_import, async loader)");
}
class ImageResponse extends Response {
    static #_ = this.displayName = 'ImageResponse';
    constructor(...args){
        const readable = new ReadableStream({
            async start (controller) {
                const OGImageResponse = // as the auto resolving is not working
                (await importModule()).ImageResponse;
                const imageResponse = new OGImageResponse(...args);
                if (!imageResponse.body) {
                    return controller.close();
                }
                const reader = imageResponse.body.getReader();
                while(true){
                    const { done, value } = await reader.read();
                    if (done) {
                        return controller.close();
                    }
                    controller.enqueue(value);
                }
            }
        });
        const options = args[1] || {};
        const headers = new Headers({
            'content-type': 'image/png',
            'cache-control': ("TURBOPACK compile-time truthy", 1) ? 'no-cache, no-store' : "TURBOPACK unreachable"
        });
        if (options.headers) {
            const newHeaders = new Headers(options.headers);
            newHeaders.forEach((value, key)=>headers.set(key, value));
        }
        super(readable, {
            headers,
            status: options.status,
            statusText: options.statusText
        });
    }
} //# sourceMappingURL=image-response.js.map
}),
"[project]/node_modules/next/og.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/og/image-response.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/buffer-image-size/lib/types/bmp.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function isBMP(buffer) {
    return 'BM' === buffer.toString('ascii', 0, 2);
}
function calculate(buffer) {
    return {
        'width': buffer.readUInt32LE(18),
        'height': Math.abs(buffer.readInt32LE(22))
    };
}
module.exports = {
    'detect': isBMP,
    'calculate': calculate
};
}),
"[project]/node_modules/buffer-image-size/lib/types/ico.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var TYPE_ICON = 1;
/**
 * ICON Header
 *
 * | Offset | Size | Purpose                                                                                   |
 * | 0	    | 2    | Reserved. Must always be 0.                                                               |
 * | 2      | 2    | Image type: 1 for icon (.ICO) image, 2 for cursor (.CUR) image. Other values are invalid. |
 * | 4      | 2    | Number of images in the file.                                                             |
 *
 **/ var SIZE_HEADER = 2 + 2 + 2; // 6
/**
 * Image Entry
 *
 * | Offset | Size | Purpose                                                                                          |
 * | 0	    | 1    | Image width in pixels. Can be any number between 0 and 255. Value 0 means width is 256 pixels.   |
 * | 1      | 1    | Image height in pixels. Can be any number between 0 and 255. Value 0 means height is 256 pixels. |
 * | 2      | 1    | Number of colors in the color palette. Should be 0 if the image does not use a color palette.    |
 * | 3      | 1    | Reserved. Should be 0.                                                                           |
 * | 4      | 2    | ICO format: Color planes. Should be 0 or 1.                                                      |
 * |        |      | CUR format: The horizontal coordinates of the hotspot in number of pixels from the left.         |
 * | 6      | 2    | ICO format: Bits per pixel.                                                                      |
 * |        |      | CUR format: The vertical coordinates of the hotspot in number of pixels from the top.            |
 * | 8      | 4    | The size of the image's data in bytes                                                            |
 * | 12     | 4    | The offset of BMP or PNG data from the beginning of the ICO/CUR file                             |
 *
 **/ var SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4; // 16
function isICO(buffer) {
    var type;
    if (buffer.readUInt16LE(0) !== 0) {
        return false;
    }
    type = buffer.readUInt16LE(2);
    return type === TYPE_ICON;
}
function getSizeFromOffset(buffer, offset) {
    var value = buffer.readUInt8(offset);
    return value === 0 ? 256 : value;
}
function getImageSize(buffer, imageIndex) {
    var offset = SIZE_HEADER + imageIndex * SIZE_IMAGE_ENTRY;
    return {
        'width': getSizeFromOffset(buffer, offset),
        'height': getSizeFromOffset(buffer, offset + 1)
    };
}
function calculate(buffer) {
    var nbImages = buffer.readUInt16LE(4), result = getImageSize(buffer, 0), imageIndex;
    if (nbImages === 1) {
        return result;
    }
    result.images = [
        {
            width: result.width,
            height: result.height
        }
    ];
    for(imageIndex = 1; imageIndex < nbImages; imageIndex += 1){
        result.images.push(getImageSize(buffer, imageIndex));
    }
    return result;
}
module.exports = {
    'detect': isICO,
    'calculate': calculate
};
}),
"[project]/node_modules/buffer-image-size/lib/types/cur.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var TYPE_CURSOR = 2;
function isCUR(buffer) {
    var type;
    if (buffer.readUInt16LE(0) !== 0) {
        return false;
    }
    type = buffer.readUInt16LE(2);
    return type === TYPE_CURSOR;
}
module.exports = {
    'detect': isCUR,
    'calculate': __turbopack_context__.r("[project]/node_modules/buffer-image-size/lib/types/ico.js [app-rsc] (ecmascript)").calculate
};
}),
"[project]/node_modules/buffer-image-size/lib/types/dds.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function isDDS(buffer) {
    return buffer.readUInt32LE(0) === 0x20534444;
}
function calculate(buffer) {
    // read file resolution metadata
    return {
        'height': buffer.readUInt32LE(12),
        'width': buffer.readUInt32LE(16)
    };
}
module.exports = {
    'detect': isDDS,
    'calculate': calculate
};
}),
"[project]/node_modules/buffer-image-size/lib/types/gif.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var gifRegexp = /^GIF8[79]a/;
function isGIF(buffer) {
    var signature = buffer.toString('ascii', 0, 6);
    return gifRegexp.test(signature);
}
function calculate(buffer) {
    return {
        'width': buffer.readUInt16LE(6),
        'height': buffer.readUInt16LE(8)
    };
}
module.exports = {
    'detect': isGIF,
    'calculate': calculate
};
}),
"[project]/node_modules/buffer-image-size/lib/types/jpg.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// NOTE: we only support baseline and progressive JPGs here
// due to the structure of the loader class, we only get a buffer
// with a maximum size of 4096 bytes. so if the SOF marker is outside
// if this range we can't detect the file size correctly.
function isJPG(buffer) {
    var SOIMarker = buffer.toString('hex', 0, 2);
    return 'ffd8' === SOIMarker;
}
function extractSize(buffer, i) {
    return {
        'height': buffer.readUInt16BE(i),
        'width': buffer.readUInt16BE(i + 2)
    };
}
function validateBuffer(buffer, i) {
    // index should be within buffer limits
    if (i > buffer.length) {
        throw new TypeError('Corrupt JPG, exceeded buffer limits');
    }
    // Every JPEG block must begin with a 0xFF
    if (buffer[i] !== 0xFF) {
        throw new TypeError('Invalid JPG, marker table corrupted');
    }
}
function calculate(buffer) {
    // Skip 4 chars, they are for signature
    buffer = buffer.slice(4);
    var i, next;
    while(buffer.length){
        // read length of the next block
        i = buffer.readUInt16BE(0);
        // ensure correct format
        validateBuffer(buffer, i);
        // 0xFFC0 is baseline standard(SOF)
        // 0xFFC1 is baseline optimized(SOF)
        // 0xFFC2 is progressive(SOF2)
        next = buffer[i + 1];
        if (next === 0xC0 || next === 0xC1 || next === 0xC2) {
            return extractSize(buffer, i + 5);
        }
        // move to the next block
        buffer = buffer.slice(i + 2);
    }
    throw new TypeError('Invalid JPG, no size found');
}
module.exports = {
    'detect': isJPG,
    'calculate': calculate
};
}),
"[project]/node_modules/buffer-image-size/lib/types/png.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var pngSignature = 'PNG\r\n\x1a\n';
var pngImageHeaderChunkName = 'IHDR';
// Used to detect "fried" png's: http://www.jongware.com/pngdefry.html
var pngFriedChunkName = 'CgBI';
function isPNG(buffer) {
    if (pngSignature === buffer.toString('ascii', 1, 8)) {
        var chunkName = buffer.toString('ascii', 12, 16);
        if (chunkName === pngFriedChunkName) {
            chunkName = buffer.toString('ascii', 28, 32);
        }
        if (chunkName !== pngImageHeaderChunkName) {
            throw new TypeError('invalid png');
        }
        return true;
    }
}
function calculate(buffer) {
    if (buffer.toString('ascii', 12, 16) === pngFriedChunkName) {
        return {
            'width': buffer.readUInt32BE(32),
            'height': buffer.readUInt32BE(36)
        };
    }
    return {
        'width': buffer.readUInt32BE(16),
        'height': buffer.readUInt32BE(20)
    };
}
module.exports = {
    'detect': isPNG,
    'calculate': calculate
};
}),
"[project]/node_modules/buffer-image-size/lib/types/psd.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function isPSD(buffer) {
    return '8BPS' === buffer.toString('ascii', 0, 4);
}
function calculate(buffer) {
    return {
        'width': buffer.readUInt32BE(18),
        'height': buffer.readUInt32BE(14)
    };
}
module.exports = {
    'detect': isPSD,
    'calculate': calculate
};
}),
"[project]/node_modules/buffer-image-size/lib/types/svg.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var svgReg = /<svg[^>]+[^>]*>/;
function isSVG(buffer) {
    return svgReg.test(buffer);
}
var extractorRegExps = {
    'root': /<svg\s[^>]+>/,
    'width': /\bwidth=(['"])([^%]+?)\1/,
    'height': /\bheight=(['"])([^%]+?)\1/,
    'viewbox': /\bviewBox=(['"])(.+?)\1/
};
function parseViewbox(viewbox) {
    var bounds = viewbox.split(' ');
    return {
        'width': parseInt(bounds[2], 10),
        'height': parseInt(bounds[3], 10)
    };
}
function parseAttributes(root) {
    var width = root.match(extractorRegExps.width);
    var height = root.match(extractorRegExps.height);
    var viewbox = root.match(extractorRegExps.viewbox);
    return {
        'width': width && parseInt(width[2], 10),
        'height': height && parseInt(height[2], 10),
        'viewbox': viewbox && parseViewbox(viewbox[2])
    };
}
function calculateByDimensions(attrs) {
    return {
        'width': attrs.width,
        'height': attrs.height
    };
}
function calculateByViewbox(attrs) {
    var ratio = attrs.viewbox.width / attrs.viewbox.height;
    if (attrs.width) {
        return {
            'width': attrs.width,
            'height': Math.floor(attrs.width / ratio)
        };
    }
    if (attrs.height) {
        return {
            'width': Math.floor(attrs.height * ratio),
            'height': attrs.height
        };
    }
    return {
        'width': attrs.viewbox.width,
        'height': attrs.viewbox.height
    };
}
function calculate(buffer) {
    var root = buffer.toString('utf8').match(extractorRegExps.root);
    if (root) {
        var attrs = parseAttributes(root[0]);
        if (attrs.width && attrs.height) {
            return calculateByDimensions(attrs);
        }
        if (attrs.viewbox) {
            return calculateByViewbox(attrs);
        }
    }
    throw new TypeError('invalid svg');
}
module.exports = {
    'detect': isSVG,
    'calculate': calculate
};
}),
"[project]/node_modules/buffer-image-size/lib/types/webp.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// based on https://developers.google.com/speed/webp/docs/riff_container
function isWebP(buffer) {
    var riffHeader = 'RIFF' === buffer.toString('ascii', 0, 4);
    var webpHeader = 'WEBP' === buffer.toString('ascii', 8, 12);
    var vp8Header = 'VP8' === buffer.toString('ascii', 12, 15);
    return riffHeader && webpHeader && vp8Header;
}
function calculate(buffer) {
    var chunkHeader = buffer.toString('ascii', 12, 16);
    buffer = buffer.slice(20, 30);
    // Extended webp stream signature
    if (chunkHeader === 'VP8X') {
        var extendedHeader = buffer[0];
        var validStart = (extendedHeader & 0xc0) === 0;
        var validEnd = (extendedHeader & 0x01) === 0;
        if (validStart && validEnd) {
            return calculateExtended(buffer);
        } else {
            return false;
        }
    }
    // Lossless webp stream signature
    if (chunkHeader === 'VP8 ' && buffer[0] !== 0x2f) {
        return calculateLossy(buffer);
    }
    // Lossy webp stream signature
    var signature = buffer.toString('hex', 3, 6);
    if (chunkHeader === 'VP8L' && signature !== '9d012a') {
        return calculateLossless(buffer);
    }
    return false;
}
function calculateExtended(buffer) {
    return {
        'width': 1 + buffer.readUIntLE(4, 3),
        'height': 1 + buffer.readUIntLE(7, 3)
    };
}
function calculateLossless(buffer) {
    return {
        'width': 1 + ((buffer[2] & 0x3F) << 8 | buffer[1]),
        'height': 1 + ((buffer[4] & 0xF) << 10 | buffer[3] << 2 | (buffer[2] & 0xC0) >> 6)
    };
}
function calculateLossy(buffer) {
    // `& 0x3fff` returns the last 14 bits
    // TO-DO: include webp scaling in the calculations
    return {
        'width': buffer.readInt16LE(6) & 0x3fff,
        'height': buffer.readInt16LE(8) & 0x3fff
    };
}
module.exports = {
    'detect': isWebP,
    'calculate': calculate
};
}),
"[project]/node_modules/buffer-image-size/lib/types.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// load all available handlers for browserify support
var typeHandlers = {
    bmp: __turbopack_context__.r("[project]/node_modules/buffer-image-size/lib/types/bmp.js [app-rsc] (ecmascript)"),
    cur: __turbopack_context__.r("[project]/node_modules/buffer-image-size/lib/types/cur.js [app-rsc] (ecmascript)"),
    dds: __turbopack_context__.r("[project]/node_modules/buffer-image-size/lib/types/dds.js [app-rsc] (ecmascript)"),
    gif: __turbopack_context__.r("[project]/node_modules/buffer-image-size/lib/types/gif.js [app-rsc] (ecmascript)"),
    ico: __turbopack_context__.r("[project]/node_modules/buffer-image-size/lib/types/ico.js [app-rsc] (ecmascript)"),
    jpg: __turbopack_context__.r("[project]/node_modules/buffer-image-size/lib/types/jpg.js [app-rsc] (ecmascript)"),
    png: __turbopack_context__.r("[project]/node_modules/buffer-image-size/lib/types/png.js [app-rsc] (ecmascript)"),
    psd: __turbopack_context__.r("[project]/node_modules/buffer-image-size/lib/types/psd.js [app-rsc] (ecmascript)"),
    svg: __turbopack_context__.r("[project]/node_modules/buffer-image-size/lib/types/svg.js [app-rsc] (ecmascript)"),
    webp: __turbopack_context__.r("[project]/node_modules/buffer-image-size/lib/types/webp.js [app-rsc] (ecmascript)")
};
module.exports = typeHandlers;
}),
"[project]/node_modules/buffer-image-size/lib/detector.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var typeHandlers = __turbopack_context__.r("[project]/node_modules/buffer-image-size/lib/types.js [app-rsc] (ecmascript)");
module.exports = function(buffer) {
    var type, result;
    for(type in typeHandlers){
        result = typeHandlers[type].detect(buffer);
        if (result) {
            return type;
        }
    }
};
}),
"[project]/node_modules/buffer-image-size/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var typeHandlers = __turbopack_context__.r("[project]/node_modules/buffer-image-size/lib/types.js [app-rsc] (ecmascript)");
var detector = __turbopack_context__.r("[project]/node_modules/buffer-image-size/lib/detector.js [app-rsc] (ecmascript)");
/**
 * Return size information based on a buffer
 *
 * @param {Buffer} buffer
 * @returns {Object}
 */ function lookup(buffer) {
    // detect the file type.. don't rely on the extension
    var type = detector(buffer);
    // find an appropriate handler for this file type
    if (type in typeHandlers) {
        var size = typeHandlers[type].calculate(buffer);
        if (size !== false) {
            size.type = type;
            return size;
        }
    }
    // throw up, if we don't understand the file
    throw new TypeError('unsupported file type: ' + type);
}
/**
 * @param {Buffer|string} input - buffer or relative/absolute path of the image file
 */ module.exports = function(input) {
    // Handle buffer input
    if (Buffer.isBuffer(input)) {
        return lookup(input);
    }
    // input should be a buffer at this point
    throw new TypeError('expecting only a buffer as input');
};
module.exports.types = Object.keys(typeHandlers);
}),
"[project]/node_modules/mime/dist/types/other.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const types = {
    'application/prs.cww': [
        'cww'
    ],
    'application/prs.xsf+xml': [
        'xsf'
    ],
    'application/vnd.1000minds.decision-model+xml': [
        '1km'
    ],
    'application/vnd.3gpp.pic-bw-large': [
        'plb'
    ],
    'application/vnd.3gpp.pic-bw-small': [
        'psb'
    ],
    'application/vnd.3gpp.pic-bw-var': [
        'pvb'
    ],
    'application/vnd.3gpp2.tcap': [
        'tcap'
    ],
    'application/vnd.3m.post-it-notes': [
        'pwn'
    ],
    'application/vnd.accpac.simply.aso': [
        'aso'
    ],
    'application/vnd.accpac.simply.imp': [
        'imp'
    ],
    'application/vnd.acucobol': [
        'acu'
    ],
    'application/vnd.acucorp': [
        'atc',
        'acutc'
    ],
    'application/vnd.adobe.air-application-installer-package+zip': [
        'air'
    ],
    'application/vnd.adobe.formscentral.fcdt': [
        'fcdt'
    ],
    'application/vnd.adobe.fxp': [
        'fxp',
        'fxpl'
    ],
    'application/vnd.adobe.xdp+xml': [
        'xdp'
    ],
    'application/vnd.adobe.xfdf': [
        '*xfdf'
    ],
    'application/vnd.age': [
        'age'
    ],
    'application/vnd.ahead.space': [
        'ahead'
    ],
    'application/vnd.airzip.filesecure.azf': [
        'azf'
    ],
    'application/vnd.airzip.filesecure.azs': [
        'azs'
    ],
    'application/vnd.amazon.ebook': [
        'azw'
    ],
    'application/vnd.americandynamics.acc': [
        'acc'
    ],
    'application/vnd.amiga.ami': [
        'ami'
    ],
    'application/vnd.android.package-archive': [
        'apk'
    ],
    'application/vnd.anser-web-certificate-issue-initiation': [
        'cii'
    ],
    'application/vnd.anser-web-funds-transfer-initiation': [
        'fti'
    ],
    'application/vnd.antix.game-component': [
        'atx'
    ],
    'application/vnd.apple.installer+xml': [
        'mpkg'
    ],
    'application/vnd.apple.keynote': [
        'key'
    ],
    'application/vnd.apple.mpegurl': [
        'm3u8'
    ],
    'application/vnd.apple.numbers': [
        'numbers'
    ],
    'application/vnd.apple.pages': [
        'pages'
    ],
    'application/vnd.apple.pkpass': [
        'pkpass'
    ],
    'application/vnd.aristanetworks.swi': [
        'swi'
    ],
    'application/vnd.astraea-software.iota': [
        'iota'
    ],
    'application/vnd.audiograph': [
        'aep'
    ],
    'application/vnd.autodesk.fbx': [
        'fbx'
    ],
    'application/vnd.balsamiq.bmml+xml': [
        'bmml'
    ],
    'application/vnd.blueice.multipass': [
        'mpm'
    ],
    'application/vnd.bmi': [
        'bmi'
    ],
    'application/vnd.businessobjects': [
        'rep'
    ],
    'application/vnd.chemdraw+xml': [
        'cdxml'
    ],
    'application/vnd.chipnuts.karaoke-mmd': [
        'mmd'
    ],
    'application/vnd.cinderella': [
        'cdy'
    ],
    'application/vnd.citationstyles.style+xml': [
        'csl'
    ],
    'application/vnd.claymore': [
        'cla'
    ],
    'application/vnd.cloanto.rp9': [
        'rp9'
    ],
    'application/vnd.clonk.c4group': [
        'c4g',
        'c4d',
        'c4f',
        'c4p',
        'c4u'
    ],
    'application/vnd.cluetrust.cartomobile-config': [
        'c11amc'
    ],
    'application/vnd.cluetrust.cartomobile-config-pkg': [
        'c11amz'
    ],
    'application/vnd.commonspace': [
        'csp'
    ],
    'application/vnd.contact.cmsg': [
        'cdbcmsg'
    ],
    'application/vnd.cosmocaller': [
        'cmc'
    ],
    'application/vnd.crick.clicker': [
        'clkx'
    ],
    'application/vnd.crick.clicker.keyboard': [
        'clkk'
    ],
    'application/vnd.crick.clicker.palette': [
        'clkp'
    ],
    'application/vnd.crick.clicker.template': [
        'clkt'
    ],
    'application/vnd.crick.clicker.wordbank': [
        'clkw'
    ],
    'application/vnd.criticaltools.wbs+xml': [
        'wbs'
    ],
    'application/vnd.ctc-posml': [
        'pml'
    ],
    'application/vnd.cups-ppd': [
        'ppd'
    ],
    'application/vnd.curl.car': [
        'car'
    ],
    'application/vnd.curl.pcurl': [
        'pcurl'
    ],
    'application/vnd.dart': [
        'dart'
    ],
    'application/vnd.data-vision.rdz': [
        'rdz'
    ],
    'application/vnd.dbf': [
        'dbf'
    ],
    'application/vnd.dcmp+xml': [
        'dcmp'
    ],
    'application/vnd.dece.data': [
        'uvf',
        'uvvf',
        'uvd',
        'uvvd'
    ],
    'application/vnd.dece.ttml+xml': [
        'uvt',
        'uvvt'
    ],
    'application/vnd.dece.unspecified': [
        'uvx',
        'uvvx'
    ],
    'application/vnd.dece.zip': [
        'uvz',
        'uvvz'
    ],
    'application/vnd.denovo.fcselayout-link': [
        'fe_launch'
    ],
    'application/vnd.dna': [
        'dna'
    ],
    'application/vnd.dolby.mlp': [
        'mlp'
    ],
    'application/vnd.dpgraph': [
        'dpg'
    ],
    'application/vnd.dreamfactory': [
        'dfac'
    ],
    'application/vnd.ds-keypoint': [
        'kpxx'
    ],
    'application/vnd.dvb.ait': [
        'ait'
    ],
    'application/vnd.dvb.service': [
        'svc'
    ],
    'application/vnd.dynageo': [
        'geo'
    ],
    'application/vnd.ecowin.chart': [
        'mag'
    ],
    'application/vnd.enliven': [
        'nml'
    ],
    'application/vnd.epson.esf': [
        'esf'
    ],
    'application/vnd.epson.msf': [
        'msf'
    ],
    'application/vnd.epson.quickanime': [
        'qam'
    ],
    'application/vnd.epson.salt': [
        'slt'
    ],
    'application/vnd.epson.ssf': [
        'ssf'
    ],
    'application/vnd.eszigno3+xml': [
        'es3',
        'et3'
    ],
    'application/vnd.ezpix-album': [
        'ez2'
    ],
    'application/vnd.ezpix-package': [
        'ez3'
    ],
    'application/vnd.fdf': [
        '*fdf'
    ],
    'application/vnd.fdsn.mseed': [
        'mseed'
    ],
    'application/vnd.fdsn.seed': [
        'seed',
        'dataless'
    ],
    'application/vnd.flographit': [
        'gph'
    ],
    'application/vnd.fluxtime.clip': [
        'ftc'
    ],
    'application/vnd.framemaker': [
        'fm',
        'frame',
        'maker',
        'book'
    ],
    'application/vnd.frogans.fnc': [
        'fnc'
    ],
    'application/vnd.frogans.ltf': [
        'ltf'
    ],
    'application/vnd.fsc.weblaunch': [
        'fsc'
    ],
    'application/vnd.fujitsu.oasys': [
        'oas'
    ],
    'application/vnd.fujitsu.oasys2': [
        'oa2'
    ],
    'application/vnd.fujitsu.oasys3': [
        'oa3'
    ],
    'application/vnd.fujitsu.oasysgp': [
        'fg5'
    ],
    'application/vnd.fujitsu.oasysprs': [
        'bh2'
    ],
    'application/vnd.fujixerox.ddd': [
        'ddd'
    ],
    'application/vnd.fujixerox.docuworks': [
        'xdw'
    ],
    'application/vnd.fujixerox.docuworks.binder': [
        'xbd'
    ],
    'application/vnd.fuzzysheet': [
        'fzs'
    ],
    'application/vnd.genomatix.tuxedo': [
        'txd'
    ],
    'application/vnd.geogebra.file': [
        'ggb'
    ],
    'application/vnd.geogebra.slides': [
        'ggs'
    ],
    'application/vnd.geogebra.tool': [
        'ggt'
    ],
    'application/vnd.geometry-explorer': [
        'gex',
        'gre'
    ],
    'application/vnd.geonext': [
        'gxt'
    ],
    'application/vnd.geoplan': [
        'g2w'
    ],
    'application/vnd.geospace': [
        'g3w'
    ],
    'application/vnd.gmx': [
        'gmx'
    ],
    'application/vnd.google-apps.document': [
        'gdoc'
    ],
    'application/vnd.google-apps.drawing': [
        'gdraw'
    ],
    'application/vnd.google-apps.form': [
        'gform'
    ],
    'application/vnd.google-apps.jam': [
        'gjam'
    ],
    'application/vnd.google-apps.map': [
        'gmap'
    ],
    'application/vnd.google-apps.presentation': [
        'gslides'
    ],
    'application/vnd.google-apps.script': [
        'gscript'
    ],
    'application/vnd.google-apps.site': [
        'gsite'
    ],
    'application/vnd.google-apps.spreadsheet': [
        'gsheet'
    ],
    'application/vnd.google-earth.kml+xml': [
        'kml'
    ],
    'application/vnd.google-earth.kmz': [
        'kmz'
    ],
    'application/vnd.gov.sk.xmldatacontainer+xml': [
        'xdcf'
    ],
    'application/vnd.grafeq': [
        'gqf',
        'gqs'
    ],
    'application/vnd.groove-account': [
        'gac'
    ],
    'application/vnd.groove-help': [
        'ghf'
    ],
    'application/vnd.groove-identity-message': [
        'gim'
    ],
    'application/vnd.groove-injector': [
        'grv'
    ],
    'application/vnd.groove-tool-message': [
        'gtm'
    ],
    'application/vnd.groove-tool-template': [
        'tpl'
    ],
    'application/vnd.groove-vcard': [
        'vcg'
    ],
    'application/vnd.hal+xml': [
        'hal'
    ],
    'application/vnd.handheld-entertainment+xml': [
        'zmm'
    ],
    'application/vnd.hbci': [
        'hbci'
    ],
    'application/vnd.hhe.lesson-player': [
        'les'
    ],
    'application/vnd.hp-hpgl': [
        'hpgl'
    ],
    'application/vnd.hp-hpid': [
        'hpid'
    ],
    'application/vnd.hp-hps': [
        'hps'
    ],
    'application/vnd.hp-jlyt': [
        'jlt'
    ],
    'application/vnd.hp-pcl': [
        'pcl'
    ],
    'application/vnd.hp-pclxl': [
        'pclxl'
    ],
    'application/vnd.hydrostatix.sof-data': [
        'sfd-hdstx'
    ],
    'application/vnd.ibm.minipay': [
        'mpy'
    ],
    'application/vnd.ibm.modcap': [
        'afp',
        'listafp',
        'list3820'
    ],
    'application/vnd.ibm.rights-management': [
        'irm'
    ],
    'application/vnd.ibm.secure-container': [
        'sc'
    ],
    'application/vnd.iccprofile': [
        'icc',
        'icm'
    ],
    'application/vnd.igloader': [
        'igl'
    ],
    'application/vnd.immervision-ivp': [
        'ivp'
    ],
    'application/vnd.immervision-ivu': [
        'ivu'
    ],
    'application/vnd.insors.igm': [
        'igm'
    ],
    'application/vnd.intercon.formnet': [
        'xpw',
        'xpx'
    ],
    'application/vnd.intergeo': [
        'i2g'
    ],
    'application/vnd.intu.qbo': [
        'qbo'
    ],
    'application/vnd.intu.qfx': [
        'qfx'
    ],
    'application/vnd.ipunplugged.rcprofile': [
        'rcprofile'
    ],
    'application/vnd.irepository.package+xml': [
        'irp'
    ],
    'application/vnd.is-xpr': [
        'xpr'
    ],
    'application/vnd.isac.fcs': [
        'fcs'
    ],
    'application/vnd.jam': [
        'jam'
    ],
    'application/vnd.jcp.javame.midlet-rms': [
        'rms'
    ],
    'application/vnd.jisp': [
        'jisp'
    ],
    'application/vnd.joost.joda-archive': [
        'joda'
    ],
    'application/vnd.kahootz': [
        'ktz',
        'ktr'
    ],
    'application/vnd.kde.karbon': [
        'karbon'
    ],
    'application/vnd.kde.kchart': [
        'chrt'
    ],
    'application/vnd.kde.kformula': [
        'kfo'
    ],
    'application/vnd.kde.kivio': [
        'flw'
    ],
    'application/vnd.kde.kontour': [
        'kon'
    ],
    'application/vnd.kde.kpresenter': [
        'kpr',
        'kpt'
    ],
    'application/vnd.kde.kspread': [
        'ksp'
    ],
    'application/vnd.kde.kword': [
        'kwd',
        'kwt'
    ],
    'application/vnd.kenameaapp': [
        'htke'
    ],
    'application/vnd.kidspiration': [
        'kia'
    ],
    'application/vnd.kinar': [
        'kne',
        'knp'
    ],
    'application/vnd.koan': [
        'skp',
        'skd',
        'skt',
        'skm'
    ],
    'application/vnd.kodak-descriptor': [
        'sse'
    ],
    'application/vnd.las.las+xml': [
        'lasxml'
    ],
    'application/vnd.llamagraphics.life-balance.desktop': [
        'lbd'
    ],
    'application/vnd.llamagraphics.life-balance.exchange+xml': [
        'lbe'
    ],
    'application/vnd.lotus-1-2-3': [
        '123'
    ],
    'application/vnd.lotus-approach': [
        'apr'
    ],
    'application/vnd.lotus-freelance': [
        'pre'
    ],
    'application/vnd.lotus-notes': [
        'nsf'
    ],
    'application/vnd.lotus-organizer': [
        'org'
    ],
    'application/vnd.lotus-screencam': [
        'scm'
    ],
    'application/vnd.lotus-wordpro': [
        'lwp'
    ],
    'application/vnd.macports.portpkg': [
        'portpkg'
    ],
    'application/vnd.mapbox-vector-tile': [
        'mvt'
    ],
    'application/vnd.mcd': [
        'mcd'
    ],
    'application/vnd.medcalcdata': [
        'mc1'
    ],
    'application/vnd.mediastation.cdkey': [
        'cdkey'
    ],
    'application/vnd.mfer': [
        'mwf'
    ],
    'application/vnd.mfmp': [
        'mfm'
    ],
    'application/vnd.micrografx.flo': [
        'flo'
    ],
    'application/vnd.micrografx.igx': [
        'igx'
    ],
    'application/vnd.mif': [
        'mif'
    ],
    'application/vnd.mobius.daf': [
        'daf'
    ],
    'application/vnd.mobius.dis': [
        'dis'
    ],
    'application/vnd.mobius.mbk': [
        'mbk'
    ],
    'application/vnd.mobius.mqy': [
        'mqy'
    ],
    'application/vnd.mobius.msl': [
        'msl'
    ],
    'application/vnd.mobius.plc': [
        'plc'
    ],
    'application/vnd.mobius.txf': [
        'txf'
    ],
    'application/vnd.mophun.application': [
        'mpn'
    ],
    'application/vnd.mophun.certificate': [
        'mpc'
    ],
    'application/vnd.mozilla.xul+xml': [
        'xul'
    ],
    'application/vnd.ms-artgalry': [
        'cil'
    ],
    'application/vnd.ms-cab-compressed': [
        'cab'
    ],
    'application/vnd.ms-excel': [
        'xls',
        'xlm',
        'xla',
        'xlc',
        'xlt',
        'xlw'
    ],
    'application/vnd.ms-excel.addin.macroenabled.12': [
        'xlam'
    ],
    'application/vnd.ms-excel.sheet.binary.macroenabled.12': [
        'xlsb'
    ],
    'application/vnd.ms-excel.sheet.macroenabled.12': [
        'xlsm'
    ],
    'application/vnd.ms-excel.template.macroenabled.12': [
        'xltm'
    ],
    'application/vnd.ms-fontobject': [
        'eot'
    ],
    'application/vnd.ms-htmlhelp': [
        'chm'
    ],
    'application/vnd.ms-ims': [
        'ims'
    ],
    'application/vnd.ms-lrm': [
        'lrm'
    ],
    'application/vnd.ms-officetheme': [
        'thmx'
    ],
    'application/vnd.ms-outlook': [
        'msg'
    ],
    'application/vnd.ms-pki.seccat': [
        'cat'
    ],
    'application/vnd.ms-pki.stl': [
        '*stl'
    ],
    'application/vnd.ms-powerpoint': [
        'ppt',
        'pps',
        'pot'
    ],
    'application/vnd.ms-powerpoint.addin.macroenabled.12': [
        'ppam'
    ],
    'application/vnd.ms-powerpoint.presentation.macroenabled.12': [
        'pptm'
    ],
    'application/vnd.ms-powerpoint.slide.macroenabled.12': [
        'sldm'
    ],
    'application/vnd.ms-powerpoint.slideshow.macroenabled.12': [
        'ppsm'
    ],
    'application/vnd.ms-powerpoint.template.macroenabled.12': [
        'potm'
    ],
    'application/vnd.ms-project': [
        '*mpp',
        'mpt'
    ],
    'application/vnd.ms-visio.viewer': [
        'vdx'
    ],
    'application/vnd.ms-word.document.macroenabled.12': [
        'docm'
    ],
    'application/vnd.ms-word.template.macroenabled.12': [
        'dotm'
    ],
    'application/vnd.ms-works': [
        'wps',
        'wks',
        'wcm',
        'wdb'
    ],
    'application/vnd.ms-wpl': [
        'wpl'
    ],
    'application/vnd.ms-xpsdocument': [
        'xps'
    ],
    'application/vnd.mseq': [
        'mseq'
    ],
    'application/vnd.musician': [
        'mus'
    ],
    'application/vnd.muvee.style': [
        'msty'
    ],
    'application/vnd.mynfc': [
        'taglet'
    ],
    'application/vnd.nato.bindingdataobject+xml': [
        'bdo'
    ],
    'application/vnd.neurolanguage.nlu': [
        'nlu'
    ],
    'application/vnd.nitf': [
        'ntf',
        'nitf'
    ],
    'application/vnd.noblenet-directory': [
        'nnd'
    ],
    'application/vnd.noblenet-sealer': [
        'nns'
    ],
    'application/vnd.noblenet-web': [
        'nnw'
    ],
    'application/vnd.nokia.n-gage.ac+xml': [
        '*ac'
    ],
    'application/vnd.nokia.n-gage.data': [
        'ngdat'
    ],
    'application/vnd.nokia.n-gage.symbian.install': [
        'n-gage'
    ],
    'application/vnd.nokia.radio-preset': [
        'rpst'
    ],
    'application/vnd.nokia.radio-presets': [
        'rpss'
    ],
    'application/vnd.novadigm.edm': [
        'edm'
    ],
    'application/vnd.novadigm.edx': [
        'edx'
    ],
    'application/vnd.novadigm.ext': [
        'ext'
    ],
    'application/vnd.oasis.opendocument.chart': [
        'odc'
    ],
    'application/vnd.oasis.opendocument.chart-template': [
        'otc'
    ],
    'application/vnd.oasis.opendocument.database': [
        'odb'
    ],
    'application/vnd.oasis.opendocument.formula': [
        'odf'
    ],
    'application/vnd.oasis.opendocument.formula-template': [
        'odft'
    ],
    'application/vnd.oasis.opendocument.graphics': [
        'odg'
    ],
    'application/vnd.oasis.opendocument.graphics-template': [
        'otg'
    ],
    'application/vnd.oasis.opendocument.image': [
        'odi'
    ],
    'application/vnd.oasis.opendocument.image-template': [
        'oti'
    ],
    'application/vnd.oasis.opendocument.presentation': [
        'odp'
    ],
    'application/vnd.oasis.opendocument.presentation-template': [
        'otp'
    ],
    'application/vnd.oasis.opendocument.spreadsheet': [
        'ods'
    ],
    'application/vnd.oasis.opendocument.spreadsheet-template': [
        'ots'
    ],
    'application/vnd.oasis.opendocument.text': [
        'odt'
    ],
    'application/vnd.oasis.opendocument.text-master': [
        'odm'
    ],
    'application/vnd.oasis.opendocument.text-template': [
        'ott'
    ],
    'application/vnd.oasis.opendocument.text-web': [
        'oth'
    ],
    'application/vnd.olpc-sugar': [
        'xo'
    ],
    'application/vnd.oma.dd2+xml': [
        'dd2'
    ],
    'application/vnd.openblox.game+xml': [
        'obgx'
    ],
    'application/vnd.openofficeorg.extension': [
        'oxt'
    ],
    'application/vnd.openstreetmap.data+xml': [
        'osm'
    ],
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': [
        'pptx'
    ],
    'application/vnd.openxmlformats-officedocument.presentationml.slide': [
        'sldx'
    ],
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow': [
        'ppsx'
    ],
    'application/vnd.openxmlformats-officedocument.presentationml.template': [
        'potx'
    ],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
        'xlsx'
    ],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template': [
        'xltx'
    ],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
        'docx'
    ],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template': [
        'dotx'
    ],
    'application/vnd.osgeo.mapguide.package': [
        'mgp'
    ],
    'application/vnd.osgi.dp': [
        'dp'
    ],
    'application/vnd.osgi.subsystem': [
        'esa'
    ],
    'application/vnd.palm': [
        'pdb',
        'pqa',
        'oprc'
    ],
    'application/vnd.pawaafile': [
        'paw'
    ],
    'application/vnd.pg.format': [
        'str'
    ],
    'application/vnd.pg.osasli': [
        'ei6'
    ],
    'application/vnd.picsel': [
        'efif'
    ],
    'application/vnd.pmi.widget': [
        'wg'
    ],
    'application/vnd.pocketlearn': [
        'plf'
    ],
    'application/vnd.powerbuilder6': [
        'pbd'
    ],
    'application/vnd.previewsystems.box': [
        'box'
    ],
    'application/vnd.procrate.brushset': [
        'brushset'
    ],
    'application/vnd.procreate.brush': [
        'brush'
    ],
    'application/vnd.procreate.dream': [
        'drm'
    ],
    'application/vnd.proteus.magazine': [
        'mgz'
    ],
    'application/vnd.publishare-delta-tree': [
        'qps'
    ],
    'application/vnd.pvi.ptid1': [
        'ptid'
    ],
    'application/vnd.pwg-xhtml-print+xml': [
        'xhtm'
    ],
    'application/vnd.quark.quarkxpress': [
        'qxd',
        'qxt',
        'qwd',
        'qwt',
        'qxl',
        'qxb'
    ],
    'application/vnd.rar': [
        'rar'
    ],
    'application/vnd.realvnc.bed': [
        'bed'
    ],
    'application/vnd.recordare.musicxml': [
        'mxl'
    ],
    'application/vnd.recordare.musicxml+xml': [
        'musicxml'
    ],
    'application/vnd.rig.cryptonote': [
        'cryptonote'
    ],
    'application/vnd.rim.cod': [
        'cod'
    ],
    'application/vnd.rn-realmedia': [
        'rm'
    ],
    'application/vnd.rn-realmedia-vbr': [
        'rmvb'
    ],
    'application/vnd.route66.link66+xml': [
        'link66'
    ],
    'application/vnd.sailingtracker.track': [
        'st'
    ],
    'application/vnd.seemail': [
        'see'
    ],
    'application/vnd.sema': [
        'sema'
    ],
    'application/vnd.semd': [
        'semd'
    ],
    'application/vnd.semf': [
        'semf'
    ],
    'application/vnd.shana.informed.formdata': [
        'ifm'
    ],
    'application/vnd.shana.informed.formtemplate': [
        'itp'
    ],
    'application/vnd.shana.informed.interchange': [
        'iif'
    ],
    'application/vnd.shana.informed.package': [
        'ipk'
    ],
    'application/vnd.simtech-mindmapper': [
        'twd',
        'twds'
    ],
    'application/vnd.smaf': [
        'mmf'
    ],
    'application/vnd.smart.teacher': [
        'teacher'
    ],
    'application/vnd.software602.filler.form+xml': [
        'fo'
    ],
    'application/vnd.solent.sdkm+xml': [
        'sdkm',
        'sdkd'
    ],
    'application/vnd.spotfire.dxp': [
        'dxp'
    ],
    'application/vnd.spotfire.sfs': [
        'sfs'
    ],
    'application/vnd.stardivision.calc': [
        'sdc'
    ],
    'application/vnd.stardivision.draw': [
        'sda'
    ],
    'application/vnd.stardivision.impress': [
        'sdd'
    ],
    'application/vnd.stardivision.math': [
        'smf'
    ],
    'application/vnd.stardivision.writer': [
        'sdw',
        'vor'
    ],
    'application/vnd.stardivision.writer-global': [
        'sgl'
    ],
    'application/vnd.stepmania.package': [
        'smzip'
    ],
    'application/vnd.stepmania.stepchart': [
        'sm'
    ],
    'application/vnd.sun.wadl+xml': [
        'wadl'
    ],
    'application/vnd.sun.xml.calc': [
        'sxc'
    ],
    'application/vnd.sun.xml.calc.template': [
        'stc'
    ],
    'application/vnd.sun.xml.draw': [
        'sxd'
    ],
    'application/vnd.sun.xml.draw.template': [
        'std'
    ],
    'application/vnd.sun.xml.impress': [
        'sxi'
    ],
    'application/vnd.sun.xml.impress.template': [
        'sti'
    ],
    'application/vnd.sun.xml.math': [
        'sxm'
    ],
    'application/vnd.sun.xml.writer': [
        'sxw'
    ],
    'application/vnd.sun.xml.writer.global': [
        'sxg'
    ],
    'application/vnd.sun.xml.writer.template': [
        'stw'
    ],
    'application/vnd.sus-calendar': [
        'sus',
        'susp'
    ],
    'application/vnd.svd': [
        'svd'
    ],
    'application/vnd.symbian.install': [
        'sis',
        'sisx'
    ],
    'application/vnd.syncml+xml': [
        'xsm'
    ],
    'application/vnd.syncml.dm+wbxml': [
        'bdm'
    ],
    'application/vnd.syncml.dm+xml': [
        'xdm'
    ],
    'application/vnd.syncml.dmddf+xml': [
        'ddf'
    ],
    'application/vnd.tao.intent-module-archive': [
        'tao'
    ],
    'application/vnd.tcpdump.pcap': [
        'pcap',
        'cap',
        'dmp'
    ],
    'application/vnd.tmobile-livetv': [
        'tmo'
    ],
    'application/vnd.trid.tpt': [
        'tpt'
    ],
    'application/vnd.triscape.mxs': [
        'mxs'
    ],
    'application/vnd.trueapp': [
        'tra'
    ],
    'application/vnd.ufdl': [
        'ufd',
        'ufdl'
    ],
    'application/vnd.uiq.theme': [
        'utz'
    ],
    'application/vnd.umajin': [
        'umj'
    ],
    'application/vnd.unity': [
        'unityweb'
    ],
    'application/vnd.uoml+xml': [
        'uoml',
        'uo'
    ],
    'application/vnd.vcx': [
        'vcx'
    ],
    'application/vnd.visio': [
        'vsd',
        'vst',
        'vss',
        'vsw',
        'vsdx',
        'vtx'
    ],
    'application/vnd.visionary': [
        'vis'
    ],
    'application/vnd.vsf': [
        'vsf'
    ],
    'application/vnd.wap.wbxml': [
        'wbxml'
    ],
    'application/vnd.wap.wmlc': [
        'wmlc'
    ],
    'application/vnd.wap.wmlscriptc': [
        'wmlsc'
    ],
    'application/vnd.webturbo': [
        'wtb'
    ],
    'application/vnd.wolfram.player': [
        'nbp'
    ],
    'application/vnd.wordperfect': [
        'wpd'
    ],
    'application/vnd.wqd': [
        'wqd'
    ],
    'application/vnd.wt.stf': [
        'stf'
    ],
    'application/vnd.xara': [
        'xar'
    ],
    'application/vnd.xfdl': [
        'xfdl'
    ],
    'application/vnd.yamaha.hv-dic': [
        'hvd'
    ],
    'application/vnd.yamaha.hv-script': [
        'hvs'
    ],
    'application/vnd.yamaha.hv-voice': [
        'hvp'
    ],
    'application/vnd.yamaha.openscoreformat': [
        'osf'
    ],
    'application/vnd.yamaha.openscoreformat.osfpvg+xml': [
        'osfpvg'
    ],
    'application/vnd.yamaha.smaf-audio': [
        'saf'
    ],
    'application/vnd.yamaha.smaf-phrase': [
        'spf'
    ],
    'application/vnd.yellowriver-custom-menu': [
        'cmp'
    ],
    'application/vnd.zul': [
        'zir',
        'zirz'
    ],
    'application/vnd.zzazz.deck+xml': [
        'zaz'
    ],
    'application/x-7z-compressed': [
        '7z'
    ],
    'application/x-abiword': [
        'abw'
    ],
    'application/x-ace-compressed': [
        'ace'
    ],
    'application/x-apple-diskimage': [
        '*dmg'
    ],
    'application/x-arj': [
        'arj'
    ],
    'application/x-authorware-bin': [
        'aab',
        'x32',
        'u32',
        'vox'
    ],
    'application/x-authorware-map': [
        'aam'
    ],
    'application/x-authorware-seg': [
        'aas'
    ],
    'application/x-bcpio': [
        'bcpio'
    ],
    'application/x-bdoc': [
        '*bdoc'
    ],
    'application/x-bittorrent': [
        'torrent'
    ],
    'application/x-blender': [
        'blend'
    ],
    'application/x-blorb': [
        'blb',
        'blorb'
    ],
    'application/x-bzip': [
        'bz'
    ],
    'application/x-bzip2': [
        'bz2',
        'boz'
    ],
    'application/x-cbr': [
        'cbr',
        'cba',
        'cbt',
        'cbz',
        'cb7'
    ],
    'application/x-cdlink': [
        'vcd'
    ],
    'application/x-cfs-compressed': [
        'cfs'
    ],
    'application/x-chat': [
        'chat'
    ],
    'application/x-chess-pgn': [
        'pgn'
    ],
    'application/x-chrome-extension': [
        'crx'
    ],
    'application/x-cocoa': [
        'cco'
    ],
    'application/x-compressed': [
        '*rar'
    ],
    'application/x-conference': [
        'nsc'
    ],
    'application/x-cpio': [
        'cpio'
    ],
    'application/x-csh': [
        'csh'
    ],
    'application/x-debian-package': [
        '*deb',
        'udeb'
    ],
    'application/x-dgc-compressed': [
        'dgc'
    ],
    'application/x-director': [
        'dir',
        'dcr',
        'dxr',
        'cst',
        'cct',
        'cxt',
        'w3d',
        'fgd',
        'swa'
    ],
    'application/x-doom': [
        'wad'
    ],
    'application/x-dtbncx+xml': [
        'ncx'
    ],
    'application/x-dtbook+xml': [
        'dtb'
    ],
    'application/x-dtbresource+xml': [
        'res'
    ],
    'application/x-dvi': [
        'dvi'
    ],
    'application/x-envoy': [
        'evy'
    ],
    'application/x-eva': [
        'eva'
    ],
    'application/x-font-bdf': [
        'bdf'
    ],
    'application/x-font-ghostscript': [
        'gsf'
    ],
    'application/x-font-linux-psf': [
        'psf'
    ],
    'application/x-font-pcf': [
        'pcf'
    ],
    'application/x-font-snf': [
        'snf'
    ],
    'application/x-font-type1': [
        'pfa',
        'pfb',
        'pfm',
        'afm'
    ],
    'application/x-freearc': [
        'arc'
    ],
    'application/x-futuresplash': [
        'spl'
    ],
    'application/x-gca-compressed': [
        'gca'
    ],
    'application/x-glulx': [
        'ulx'
    ],
    'application/x-gnumeric': [
        'gnumeric'
    ],
    'application/x-gramps-xml': [
        'gramps'
    ],
    'application/x-gtar': [
        'gtar'
    ],
    'application/x-hdf': [
        'hdf'
    ],
    'application/x-httpd-php': [
        'php'
    ],
    'application/x-install-instructions': [
        'install'
    ],
    'application/x-ipynb+json': [
        'ipynb'
    ],
    'application/x-iso9660-image': [
        '*iso'
    ],
    'application/x-iwork-keynote-sffkey': [
        '*key'
    ],
    'application/x-iwork-numbers-sffnumbers': [
        '*numbers'
    ],
    'application/x-iwork-pages-sffpages': [
        '*pages'
    ],
    'application/x-java-archive-diff': [
        'jardiff'
    ],
    'application/x-java-jnlp-file': [
        'jnlp'
    ],
    'application/x-keepass2': [
        'kdbx'
    ],
    'application/x-latex': [
        'latex'
    ],
    'application/x-lua-bytecode': [
        'luac'
    ],
    'application/x-lzh-compressed': [
        'lzh',
        'lha'
    ],
    'application/x-makeself': [
        'run'
    ],
    'application/x-mie': [
        'mie'
    ],
    'application/x-mobipocket-ebook': [
        '*prc',
        'mobi'
    ],
    'application/x-ms-application': [
        'application'
    ],
    'application/x-ms-shortcut': [
        'lnk'
    ],
    'application/x-ms-wmd': [
        'wmd'
    ],
    'application/x-ms-wmz': [
        'wmz'
    ],
    'application/x-ms-xbap': [
        'xbap'
    ],
    'application/x-msaccess': [
        'mdb'
    ],
    'application/x-msbinder': [
        'obd'
    ],
    'application/x-mscardfile': [
        'crd'
    ],
    'application/x-msclip': [
        'clp'
    ],
    'application/x-msdos-program': [
        '*exe'
    ],
    'application/x-msdownload': [
        '*exe',
        '*dll',
        'com',
        'bat',
        '*msi'
    ],
    'application/x-msmediaview': [
        'mvb',
        'm13',
        'm14'
    ],
    'application/x-msmetafile': [
        '*wmf',
        '*wmz',
        '*emf',
        'emz'
    ],
    'application/x-msmoney': [
        'mny'
    ],
    'application/x-mspublisher': [
        'pub'
    ],
    'application/x-msschedule': [
        'scd'
    ],
    'application/x-msterminal': [
        'trm'
    ],
    'application/x-mswrite': [
        'wri'
    ],
    'application/x-netcdf': [
        'nc',
        'cdf'
    ],
    'application/x-ns-proxy-autoconfig': [
        'pac'
    ],
    'application/x-nzb': [
        'nzb'
    ],
    'application/x-perl': [
        'pl',
        'pm'
    ],
    'application/x-pilot': [
        '*prc',
        '*pdb'
    ],
    'application/x-pkcs12': [
        'p12',
        'pfx'
    ],
    'application/x-pkcs7-certificates': [
        'p7b',
        'spc'
    ],
    'application/x-pkcs7-certreqresp': [
        'p7r'
    ],
    'application/x-rar-compressed': [
        '*rar'
    ],
    'application/x-redhat-package-manager': [
        'rpm'
    ],
    'application/x-research-info-systems': [
        'ris'
    ],
    'application/x-sea': [
        'sea'
    ],
    'application/x-sh': [
        'sh'
    ],
    'application/x-shar': [
        'shar'
    ],
    'application/x-shockwave-flash': [
        'swf'
    ],
    'application/x-silverlight-app': [
        'xap'
    ],
    'application/x-sql': [
        '*sql'
    ],
    'application/x-stuffit': [
        'sit'
    ],
    'application/x-stuffitx': [
        'sitx'
    ],
    'application/x-subrip': [
        'srt'
    ],
    'application/x-sv4cpio': [
        'sv4cpio'
    ],
    'application/x-sv4crc': [
        'sv4crc'
    ],
    'application/x-t3vm-image': [
        't3'
    ],
    'application/x-tads': [
        'gam'
    ],
    'application/x-tar': [
        'tar'
    ],
    'application/x-tcl': [
        'tcl',
        'tk'
    ],
    'application/x-tex': [
        'tex'
    ],
    'application/x-tex-tfm': [
        'tfm'
    ],
    'application/x-texinfo': [
        'texinfo',
        'texi'
    ],
    'application/x-tgif': [
        '*obj'
    ],
    'application/x-ustar': [
        'ustar'
    ],
    'application/x-virtualbox-hdd': [
        'hdd'
    ],
    'application/x-virtualbox-ova': [
        'ova'
    ],
    'application/x-virtualbox-ovf': [
        'ovf'
    ],
    'application/x-virtualbox-vbox': [
        'vbox'
    ],
    'application/x-virtualbox-vbox-extpack': [
        'vbox-extpack'
    ],
    'application/x-virtualbox-vdi': [
        'vdi'
    ],
    'application/x-virtualbox-vhd': [
        'vhd'
    ],
    'application/x-virtualbox-vmdk': [
        'vmdk'
    ],
    'application/x-wais-source': [
        'src'
    ],
    'application/x-web-app-manifest+json': [
        'webapp'
    ],
    'application/x-x509-ca-cert': [
        'der',
        'crt',
        'pem'
    ],
    'application/x-xfig': [
        'fig'
    ],
    'application/x-xliff+xml': [
        '*xlf'
    ],
    'application/x-xpinstall': [
        'xpi'
    ],
    'application/x-xz': [
        'xz'
    ],
    'application/x-zip-compressed': [
        '*zip'
    ],
    'application/x-zmachine': [
        'z1',
        'z2',
        'z3',
        'z4',
        'z5',
        'z6',
        'z7',
        'z8'
    ],
    'audio/vnd.dece.audio': [
        'uva',
        'uvva'
    ],
    'audio/vnd.digital-winds': [
        'eol'
    ],
    'audio/vnd.dra': [
        'dra'
    ],
    'audio/vnd.dts': [
        'dts'
    ],
    'audio/vnd.dts.hd': [
        'dtshd'
    ],
    'audio/vnd.lucent.voice': [
        'lvp'
    ],
    'audio/vnd.ms-playready.media.pya': [
        'pya'
    ],
    'audio/vnd.nuera.ecelp4800': [
        'ecelp4800'
    ],
    'audio/vnd.nuera.ecelp7470': [
        'ecelp7470'
    ],
    'audio/vnd.nuera.ecelp9600': [
        'ecelp9600'
    ],
    'audio/vnd.rip': [
        'rip'
    ],
    'audio/x-aac': [
        '*aac'
    ],
    'audio/x-aiff': [
        'aif',
        'aiff',
        'aifc'
    ],
    'audio/x-caf': [
        'caf'
    ],
    'audio/x-flac': [
        'flac'
    ],
    'audio/x-m4a': [
        '*m4a'
    ],
    'audio/x-matroska': [
        'mka'
    ],
    'audio/x-mpegurl': [
        'm3u'
    ],
    'audio/x-ms-wax': [
        'wax'
    ],
    'audio/x-ms-wma': [
        'wma'
    ],
    'audio/x-pn-realaudio': [
        'ram',
        'ra'
    ],
    'audio/x-pn-realaudio-plugin': [
        'rmp'
    ],
    'audio/x-realaudio': [
        '*ra'
    ],
    'audio/x-wav': [
        '*wav'
    ],
    'chemical/x-cdx': [
        'cdx'
    ],
    'chemical/x-cif': [
        'cif'
    ],
    'chemical/x-cmdf': [
        'cmdf'
    ],
    'chemical/x-cml': [
        'cml'
    ],
    'chemical/x-csml': [
        'csml'
    ],
    'chemical/x-xyz': [
        'xyz'
    ],
    'image/prs.btif': [
        'btif',
        'btf'
    ],
    'image/prs.pti': [
        'pti'
    ],
    'image/vnd.adobe.photoshop': [
        'psd'
    ],
    'image/vnd.airzip.accelerator.azv': [
        'azv'
    ],
    'image/vnd.blockfact.facti': [
        'facti'
    ],
    'image/vnd.dece.graphic': [
        'uvi',
        'uvvi',
        'uvg',
        'uvvg'
    ],
    'image/vnd.djvu': [
        'djvu',
        'djv'
    ],
    'image/vnd.dvb.subtitle': [
        '*sub'
    ],
    'image/vnd.dwg': [
        'dwg'
    ],
    'image/vnd.dxf': [
        'dxf'
    ],
    'image/vnd.fastbidsheet': [
        'fbs'
    ],
    'image/vnd.fpx': [
        'fpx'
    ],
    'image/vnd.fst': [
        'fst'
    ],
    'image/vnd.fujixerox.edmics-mmr': [
        'mmr'
    ],
    'image/vnd.fujixerox.edmics-rlc': [
        'rlc'
    ],
    'image/vnd.microsoft.icon': [
        'ico'
    ],
    'image/vnd.ms-dds': [
        'dds'
    ],
    'image/vnd.ms-modi': [
        'mdi'
    ],
    'image/vnd.ms-photo': [
        'wdp'
    ],
    'image/vnd.net-fpx': [
        'npx'
    ],
    'image/vnd.pco.b16': [
        'b16'
    ],
    'image/vnd.tencent.tap': [
        'tap'
    ],
    'image/vnd.valve.source.texture': [
        'vtf'
    ],
    'image/vnd.wap.wbmp': [
        'wbmp'
    ],
    'image/vnd.xiff': [
        'xif'
    ],
    'image/vnd.zbrush.pcx': [
        'pcx'
    ],
    'image/x-3ds': [
        '3ds'
    ],
    'image/x-adobe-dng': [
        'dng'
    ],
    'image/x-cmu-raster': [
        'ras'
    ],
    'image/x-cmx': [
        'cmx'
    ],
    'image/x-freehand': [
        'fh',
        'fhc',
        'fh4',
        'fh5',
        'fh7'
    ],
    'image/x-icon': [
        '*ico'
    ],
    'image/x-jng': [
        'jng'
    ],
    'image/x-mrsid-image': [
        'sid'
    ],
    'image/x-ms-bmp': [
        '*bmp'
    ],
    'image/x-pcx': [
        '*pcx'
    ],
    'image/x-pict': [
        'pic',
        'pct'
    ],
    'image/x-portable-anymap': [
        'pnm'
    ],
    'image/x-portable-bitmap': [
        'pbm'
    ],
    'image/x-portable-graymap': [
        'pgm'
    ],
    'image/x-portable-pixmap': [
        'ppm'
    ],
    'image/x-rgb': [
        'rgb'
    ],
    'image/x-tga': [
        'tga'
    ],
    'image/x-xbitmap': [
        'xbm'
    ],
    'image/x-xpixmap': [
        'xpm'
    ],
    'image/x-xwindowdump': [
        'xwd'
    ],
    'message/vnd.wfa.wsc': [
        'wsc'
    ],
    'model/vnd.bary': [
        'bary'
    ],
    'model/vnd.cld': [
        'cld'
    ],
    'model/vnd.collada+xml': [
        'dae'
    ],
    'model/vnd.dwf': [
        'dwf'
    ],
    'model/vnd.gdl': [
        'gdl'
    ],
    'model/vnd.gtw': [
        'gtw'
    ],
    'model/vnd.mts': [
        '*mts'
    ],
    'model/vnd.opengex': [
        'ogex'
    ],
    'model/vnd.parasolid.transmit.binary': [
        'x_b'
    ],
    'model/vnd.parasolid.transmit.text': [
        'x_t'
    ],
    'model/vnd.pytha.pyox': [
        'pyo',
        'pyox'
    ],
    'model/vnd.sap.vds': [
        'vds'
    ],
    'model/vnd.usda': [
        'usda'
    ],
    'model/vnd.usdz+zip': [
        'usdz'
    ],
    'model/vnd.valve.source.compiled-map': [
        'bsp'
    ],
    'model/vnd.vtu': [
        'vtu'
    ],
    'text/prs.lines.tag': [
        'dsc'
    ],
    'text/vnd.curl': [
        'curl'
    ],
    'text/vnd.curl.dcurl': [
        'dcurl'
    ],
    'text/vnd.curl.mcurl': [
        'mcurl'
    ],
    'text/vnd.curl.scurl': [
        'scurl'
    ],
    'text/vnd.dvb.subtitle': [
        'sub'
    ],
    'text/vnd.familysearch.gedcom': [
        'ged'
    ],
    'text/vnd.fly': [
        'fly'
    ],
    'text/vnd.fmi.flexstor': [
        'flx'
    ],
    'text/vnd.graphviz': [
        'gv'
    ],
    'text/vnd.in3d.3dml': [
        '3dml'
    ],
    'text/vnd.in3d.spot': [
        'spot'
    ],
    'text/vnd.sun.j2me.app-descriptor': [
        'jad'
    ],
    'text/vnd.wap.wml': [
        'wml'
    ],
    'text/vnd.wap.wmlscript': [
        'wmls'
    ],
    'text/x-asm': [
        's',
        'asm'
    ],
    'text/x-c': [
        'c',
        'cc',
        'cxx',
        'cpp',
        'h',
        'hh',
        'dic'
    ],
    'text/x-component': [
        'htc'
    ],
    'text/x-fortran': [
        'f',
        'for',
        'f77',
        'f90'
    ],
    'text/x-handlebars-template': [
        'hbs'
    ],
    'text/x-java-source': [
        'java'
    ],
    'text/x-lua': [
        'lua'
    ],
    'text/x-markdown': [
        'mkd'
    ],
    'text/x-nfo': [
        'nfo'
    ],
    'text/x-opml': [
        'opml'
    ],
    'text/x-org': [
        '*org'
    ],
    'text/x-pascal': [
        'p',
        'pas'
    ],
    'text/x-processing': [
        'pde'
    ],
    'text/x-sass': [
        'sass'
    ],
    'text/x-scss': [
        'scss'
    ],
    'text/x-setext': [
        'etx'
    ],
    'text/x-sfv': [
        'sfv'
    ],
    'text/x-suse-ymp': [
        'ymp'
    ],
    'text/x-uuencode': [
        'uu'
    ],
    'text/x-vcalendar': [
        'vcs'
    ],
    'text/x-vcard': [
        'vcf'
    ],
    'video/vnd.dece.hd': [
        'uvh',
        'uvvh'
    ],
    'video/vnd.dece.mobile': [
        'uvm',
        'uvvm'
    ],
    'video/vnd.dece.pd': [
        'uvp',
        'uvvp'
    ],
    'video/vnd.dece.sd': [
        'uvs',
        'uvvs'
    ],
    'video/vnd.dece.video': [
        'uvv',
        'uvvv'
    ],
    'video/vnd.dvb.file': [
        'dvb'
    ],
    'video/vnd.fvt': [
        'fvt'
    ],
    'video/vnd.mpegurl': [
        'mxu',
        'm4u'
    ],
    'video/vnd.ms-playready.media.pyv': [
        'pyv'
    ],
    'video/vnd.uvvu.mp4': [
        'uvu',
        'uvvu'
    ],
    'video/vnd.vivo': [
        'viv'
    ],
    'video/x-f4v': [
        'f4v'
    ],
    'video/x-fli': [
        'fli'
    ],
    'video/x-flv': [
        'flv'
    ],
    'video/x-m4v': [
        'm4v'
    ],
    'video/x-matroska': [
        'mkv',
        'mk3d',
        'mks'
    ],
    'video/x-mng': [
        'mng'
    ],
    'video/x-ms-asf': [
        'asf',
        'asx'
    ],
    'video/x-ms-vob': [
        'vob'
    ],
    'video/x-ms-wm': [
        'wm'
    ],
    'video/x-ms-wmv': [
        'wmv'
    ],
    'video/x-ms-wmx': [
        'wmx'
    ],
    'video/x-ms-wvx': [
        'wvx'
    ],
    'video/x-msvideo': [
        'avi'
    ],
    'video/x-sgi-movie': [
        'movie'
    ],
    'video/x-smv': [
        'smv'
    ],
    'x-conference/x-cooltalk': [
        'ice'
    ]
};
Object.freeze(types);
const __TURBOPACK__default__export__ = types;
}),
"[project]/node_modules/mime/dist/types/standard.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const types = {
    'application/andrew-inset': [
        'ez'
    ],
    'application/appinstaller': [
        'appinstaller'
    ],
    'application/applixware': [
        'aw'
    ],
    'application/appx': [
        'appx'
    ],
    'application/appxbundle': [
        'appxbundle'
    ],
    'application/atom+xml': [
        'atom'
    ],
    'application/atomcat+xml': [
        'atomcat'
    ],
    'application/atomdeleted+xml': [
        'atomdeleted'
    ],
    'application/atomsvc+xml': [
        'atomsvc'
    ],
    'application/atsc-dwd+xml': [
        'dwd'
    ],
    'application/atsc-held+xml': [
        'held'
    ],
    'application/atsc-rsat+xml': [
        'rsat'
    ],
    'application/automationml-aml+xml': [
        'aml'
    ],
    'application/automationml-amlx+zip': [
        'amlx'
    ],
    'application/bdoc': [
        'bdoc'
    ],
    'application/calendar+xml': [
        'xcs'
    ],
    'application/ccxml+xml': [
        'ccxml'
    ],
    'application/cdfx+xml': [
        'cdfx'
    ],
    'application/cdmi-capability': [
        'cdmia'
    ],
    'application/cdmi-container': [
        'cdmic'
    ],
    'application/cdmi-domain': [
        'cdmid'
    ],
    'application/cdmi-object': [
        'cdmio'
    ],
    'application/cdmi-queue': [
        'cdmiq'
    ],
    'application/cpl+xml': [
        'cpl'
    ],
    'application/cu-seeme': [
        'cu'
    ],
    'application/cwl': [
        'cwl'
    ],
    'application/dash+xml': [
        'mpd'
    ],
    'application/dash-patch+xml': [
        'mpp'
    ],
    'application/davmount+xml': [
        'davmount'
    ],
    'application/dicom': [
        'dcm'
    ],
    'application/docbook+xml': [
        'dbk'
    ],
    'application/dssc+der': [
        'dssc'
    ],
    'application/dssc+xml': [
        'xdssc'
    ],
    'application/ecmascript': [
        'ecma'
    ],
    'application/emma+xml': [
        'emma'
    ],
    'application/emotionml+xml': [
        'emotionml'
    ],
    'application/epub+zip': [
        'epub'
    ],
    'application/exi': [
        'exi'
    ],
    'application/express': [
        'exp'
    ],
    'application/fdf': [
        'fdf'
    ],
    'application/fdt+xml': [
        'fdt'
    ],
    'application/font-tdpfr': [
        'pfr'
    ],
    'application/geo+json': [
        'geojson'
    ],
    'application/gml+xml': [
        'gml'
    ],
    'application/gpx+xml': [
        'gpx'
    ],
    'application/gxf': [
        'gxf'
    ],
    'application/gzip': [
        'gz'
    ],
    'application/hjson': [
        'hjson'
    ],
    'application/hyperstudio': [
        'stk'
    ],
    'application/inkml+xml': [
        'ink',
        'inkml'
    ],
    'application/ipfix': [
        'ipfix'
    ],
    'application/its+xml': [
        'its'
    ],
    'application/java-archive': [
        'jar',
        'war',
        'ear'
    ],
    'application/java-serialized-object': [
        'ser'
    ],
    'application/java-vm': [
        'class'
    ],
    'application/javascript': [
        '*js'
    ],
    'application/json': [
        'json',
        'map'
    ],
    'application/json5': [
        'json5'
    ],
    'application/jsonml+json': [
        'jsonml'
    ],
    'application/ld+json': [
        'jsonld'
    ],
    'application/lgr+xml': [
        'lgr'
    ],
    'application/lost+xml': [
        'lostxml'
    ],
    'application/mac-binhex40': [
        'hqx'
    ],
    'application/mac-compactpro': [
        'cpt'
    ],
    'application/mads+xml': [
        'mads'
    ],
    'application/manifest+json': [
        'webmanifest'
    ],
    'application/marc': [
        'mrc'
    ],
    'application/marcxml+xml': [
        'mrcx'
    ],
    'application/mathematica': [
        'ma',
        'nb',
        'mb'
    ],
    'application/mathml+xml': [
        'mathml'
    ],
    'application/mbox': [
        'mbox'
    ],
    'application/media-policy-dataset+xml': [
        'mpf'
    ],
    'application/mediaservercontrol+xml': [
        'mscml'
    ],
    'application/metalink+xml': [
        'metalink'
    ],
    'application/metalink4+xml': [
        'meta4'
    ],
    'application/mets+xml': [
        'mets'
    ],
    'application/mmt-aei+xml': [
        'maei'
    ],
    'application/mmt-usd+xml': [
        'musd'
    ],
    'application/mods+xml': [
        'mods'
    ],
    'application/mp21': [
        'm21',
        'mp21'
    ],
    'application/mp4': [
        '*mp4',
        '*mpg4',
        'mp4s',
        'm4p'
    ],
    'application/msix': [
        'msix'
    ],
    'application/msixbundle': [
        'msixbundle'
    ],
    'application/msword': [
        'doc',
        'dot'
    ],
    'application/mxf': [
        'mxf'
    ],
    'application/n-quads': [
        'nq'
    ],
    'application/n-triples': [
        'nt'
    ],
    'application/node': [
        'cjs'
    ],
    'application/octet-stream': [
        'bin',
        'dms',
        'lrf',
        'mar',
        'so',
        'dist',
        'distz',
        'pkg',
        'bpk',
        'dump',
        'elc',
        'deploy',
        'exe',
        'dll',
        'deb',
        'dmg',
        'iso',
        'img',
        'msi',
        'msp',
        'msm',
        'buffer'
    ],
    'application/oda': [
        'oda'
    ],
    'application/oebps-package+xml': [
        'opf'
    ],
    'application/ogg': [
        'ogx'
    ],
    'application/omdoc+xml': [
        'omdoc'
    ],
    'application/onenote': [
        'onetoc',
        'onetoc2',
        'onetmp',
        'onepkg',
        'one',
        'onea'
    ],
    'application/oxps': [
        'oxps'
    ],
    'application/p2p-overlay+xml': [
        'relo'
    ],
    'application/patch-ops-error+xml': [
        'xer'
    ],
    'application/pdf': [
        'pdf'
    ],
    'application/pgp-encrypted': [
        'pgp'
    ],
    'application/pgp-keys': [
        'asc'
    ],
    'application/pgp-signature': [
        'sig',
        '*asc'
    ],
    'application/pics-rules': [
        'prf'
    ],
    'application/pkcs10': [
        'p10'
    ],
    'application/pkcs7-mime': [
        'p7m',
        'p7c'
    ],
    'application/pkcs7-signature': [
        'p7s'
    ],
    'application/pkcs8': [
        'p8'
    ],
    'application/pkix-attr-cert': [
        'ac'
    ],
    'application/pkix-cert': [
        'cer'
    ],
    'application/pkix-crl': [
        'crl'
    ],
    'application/pkix-pkipath': [
        'pkipath'
    ],
    'application/pkixcmp': [
        'pki'
    ],
    'application/pls+xml': [
        'pls'
    ],
    'application/postscript': [
        'ai',
        'eps',
        'ps'
    ],
    'application/provenance+xml': [
        'provx'
    ],
    'application/pskc+xml': [
        'pskcxml'
    ],
    'application/raml+yaml': [
        'raml'
    ],
    'application/rdf+xml': [
        'rdf',
        'owl'
    ],
    'application/reginfo+xml': [
        'rif'
    ],
    'application/relax-ng-compact-syntax': [
        'rnc'
    ],
    'application/resource-lists+xml': [
        'rl'
    ],
    'application/resource-lists-diff+xml': [
        'rld'
    ],
    'application/rls-services+xml': [
        'rs'
    ],
    'application/route-apd+xml': [
        'rapd'
    ],
    'application/route-s-tsid+xml': [
        'sls'
    ],
    'application/route-usd+xml': [
        'rusd'
    ],
    'application/rpki-ghostbusters': [
        'gbr'
    ],
    'application/rpki-manifest': [
        'mft'
    ],
    'application/rpki-roa': [
        'roa'
    ],
    'application/rsd+xml': [
        'rsd'
    ],
    'application/rss+xml': [
        'rss'
    ],
    'application/rtf': [
        'rtf'
    ],
    'application/sbml+xml': [
        'sbml'
    ],
    'application/scvp-cv-request': [
        'scq'
    ],
    'application/scvp-cv-response': [
        'scs'
    ],
    'application/scvp-vp-request': [
        'spq'
    ],
    'application/scvp-vp-response': [
        'spp'
    ],
    'application/sdp': [
        'sdp'
    ],
    'application/senml+xml': [
        'senmlx'
    ],
    'application/sensml+xml': [
        'sensmlx'
    ],
    'application/set-payment-initiation': [
        'setpay'
    ],
    'application/set-registration-initiation': [
        'setreg'
    ],
    'application/shf+xml': [
        'shf'
    ],
    'application/sieve': [
        'siv',
        'sieve'
    ],
    'application/smil+xml': [
        'smi',
        'smil'
    ],
    'application/sparql-query': [
        'rq'
    ],
    'application/sparql-results+xml': [
        'srx'
    ],
    'application/sql': [
        'sql'
    ],
    'application/srgs': [
        'gram'
    ],
    'application/srgs+xml': [
        'grxml'
    ],
    'application/sru+xml': [
        'sru'
    ],
    'application/ssdl+xml': [
        'ssdl'
    ],
    'application/ssml+xml': [
        'ssml'
    ],
    'application/swid+xml': [
        'swidtag'
    ],
    'application/tei+xml': [
        'tei',
        'teicorpus'
    ],
    'application/thraud+xml': [
        'tfi'
    ],
    'application/timestamped-data': [
        'tsd'
    ],
    'application/toml': [
        'toml'
    ],
    'application/trig': [
        'trig'
    ],
    'application/ttml+xml': [
        'ttml'
    ],
    'application/ubjson': [
        'ubj'
    ],
    'application/urc-ressheet+xml': [
        'rsheet'
    ],
    'application/urc-targetdesc+xml': [
        'td'
    ],
    'application/voicexml+xml': [
        'vxml'
    ],
    'application/wasm': [
        'wasm'
    ],
    'application/watcherinfo+xml': [
        'wif'
    ],
    'application/widget': [
        'wgt'
    ],
    'application/winhlp': [
        'hlp'
    ],
    'application/wsdl+xml': [
        'wsdl'
    ],
    'application/wspolicy+xml': [
        'wspolicy'
    ],
    'application/xaml+xml': [
        'xaml'
    ],
    'application/xcap-att+xml': [
        'xav'
    ],
    'application/xcap-caps+xml': [
        'xca'
    ],
    'application/xcap-diff+xml': [
        'xdf'
    ],
    'application/xcap-el+xml': [
        'xel'
    ],
    'application/xcap-ns+xml': [
        'xns'
    ],
    'application/xenc+xml': [
        'xenc'
    ],
    'application/xfdf': [
        'xfdf'
    ],
    'application/xhtml+xml': [
        'xhtml',
        'xht'
    ],
    'application/xliff+xml': [
        'xlf'
    ],
    'application/xml': [
        'xml',
        'xsl',
        'xsd',
        'rng'
    ],
    'application/xml-dtd': [
        'dtd'
    ],
    'application/xop+xml': [
        'xop'
    ],
    'application/xproc+xml': [
        'xpl'
    ],
    'application/xslt+xml': [
        '*xsl',
        'xslt'
    ],
    'application/xspf+xml': [
        'xspf'
    ],
    'application/xv+xml': [
        'mxml',
        'xhvml',
        'xvml',
        'xvm'
    ],
    'application/yang': [
        'yang'
    ],
    'application/yin+xml': [
        'yin'
    ],
    'application/zip': [
        'zip'
    ],
    'application/zip+dotlottie': [
        'lottie'
    ],
    'audio/3gpp': [
        '*3gpp'
    ],
    'audio/aac': [
        'adts',
        'aac'
    ],
    'audio/adpcm': [
        'adp'
    ],
    'audio/amr': [
        'amr'
    ],
    'audio/basic': [
        'au',
        'snd'
    ],
    'audio/midi': [
        'mid',
        'midi',
        'kar',
        'rmi'
    ],
    'audio/mobile-xmf': [
        'mxmf'
    ],
    'audio/mp3': [
        '*mp3'
    ],
    'audio/mp4': [
        'm4a',
        'mp4a',
        'm4b'
    ],
    'audio/mpeg': [
        'mpga',
        'mp2',
        'mp2a',
        'mp3',
        'm2a',
        'm3a'
    ],
    'audio/ogg': [
        'oga',
        'ogg',
        'spx',
        'opus'
    ],
    'audio/s3m': [
        's3m'
    ],
    'audio/silk': [
        'sil'
    ],
    'audio/wav': [
        'wav'
    ],
    'audio/wave': [
        '*wav'
    ],
    'audio/webm': [
        'weba'
    ],
    'audio/xm': [
        'xm'
    ],
    'font/collection': [
        'ttc'
    ],
    'font/otf': [
        'otf'
    ],
    'font/ttf': [
        'ttf'
    ],
    'font/woff': [
        'woff'
    ],
    'font/woff2': [
        'woff2'
    ],
    'image/aces': [
        'exr'
    ],
    'image/apng': [
        'apng'
    ],
    'image/avci': [
        'avci'
    ],
    'image/avcs': [
        'avcs'
    ],
    'image/avif': [
        'avif'
    ],
    'image/bmp': [
        'bmp',
        'dib'
    ],
    'image/cgm': [
        'cgm'
    ],
    'image/dicom-rle': [
        'drle'
    ],
    'image/dpx': [
        'dpx'
    ],
    'image/emf': [
        'emf'
    ],
    'image/fits': [
        'fits'
    ],
    'image/g3fax': [
        'g3'
    ],
    'image/gif': [
        'gif'
    ],
    'image/heic': [
        'heic'
    ],
    'image/heic-sequence': [
        'heics'
    ],
    'image/heif': [
        'heif'
    ],
    'image/heif-sequence': [
        'heifs'
    ],
    'image/hej2k': [
        'hej2'
    ],
    'image/ief': [
        'ief'
    ],
    'image/jaii': [
        'jaii'
    ],
    'image/jais': [
        'jais'
    ],
    'image/jls': [
        'jls'
    ],
    'image/jp2': [
        'jp2',
        'jpg2'
    ],
    'image/jpeg': [
        'jpg',
        'jpeg',
        'jpe'
    ],
    'image/jph': [
        'jph'
    ],
    'image/jphc': [
        'jhc'
    ],
    'image/jpm': [
        'jpm',
        'jpgm'
    ],
    'image/jpx': [
        'jpx',
        'jpf'
    ],
    'image/jxl': [
        'jxl'
    ],
    'image/jxr': [
        'jxr'
    ],
    'image/jxra': [
        'jxra'
    ],
    'image/jxrs': [
        'jxrs'
    ],
    'image/jxs': [
        'jxs'
    ],
    'image/jxsc': [
        'jxsc'
    ],
    'image/jxsi': [
        'jxsi'
    ],
    'image/jxss': [
        'jxss'
    ],
    'image/ktx': [
        'ktx'
    ],
    'image/ktx2': [
        'ktx2'
    ],
    'image/pjpeg': [
        'jfif'
    ],
    'image/png': [
        'png'
    ],
    'image/sgi': [
        'sgi'
    ],
    'image/svg+xml': [
        'svg',
        'svgz'
    ],
    'image/t38': [
        't38'
    ],
    'image/tiff': [
        'tif',
        'tiff'
    ],
    'image/tiff-fx': [
        'tfx'
    ],
    'image/webp': [
        'webp'
    ],
    'image/wmf': [
        'wmf'
    ],
    'message/disposition-notification': [
        'disposition-notification'
    ],
    'message/global': [
        'u8msg'
    ],
    'message/global-delivery-status': [
        'u8dsn'
    ],
    'message/global-disposition-notification': [
        'u8mdn'
    ],
    'message/global-headers': [
        'u8hdr'
    ],
    'message/rfc822': [
        'eml',
        'mime',
        'mht',
        'mhtml'
    ],
    'model/3mf': [
        '3mf'
    ],
    'model/gltf+json': [
        'gltf'
    ],
    'model/gltf-binary': [
        'glb'
    ],
    'model/iges': [
        'igs',
        'iges'
    ],
    'model/jt': [
        'jt'
    ],
    'model/mesh': [
        'msh',
        'mesh',
        'silo'
    ],
    'model/mtl': [
        'mtl'
    ],
    'model/obj': [
        'obj'
    ],
    'model/prc': [
        'prc'
    ],
    'model/step': [
        'step',
        'stp',
        'stpnc',
        'p21',
        '210'
    ],
    'model/step+xml': [
        'stpx'
    ],
    'model/step+zip': [
        'stpz'
    ],
    'model/step-xml+zip': [
        'stpxz'
    ],
    'model/stl': [
        'stl'
    ],
    'model/u3d': [
        'u3d'
    ],
    'model/vrml': [
        'wrl',
        'vrml'
    ],
    'model/x3d+binary': [
        '*x3db',
        'x3dbz'
    ],
    'model/x3d+fastinfoset': [
        'x3db'
    ],
    'model/x3d+vrml': [
        '*x3dv',
        'x3dvz'
    ],
    'model/x3d+xml': [
        'x3d',
        'x3dz'
    ],
    'model/x3d-vrml': [
        'x3dv'
    ],
    'text/cache-manifest': [
        'appcache',
        'manifest'
    ],
    'text/calendar': [
        'ics',
        'ifb'
    ],
    'text/coffeescript': [
        'coffee',
        'litcoffee'
    ],
    'text/css': [
        'css'
    ],
    'text/csv': [
        'csv'
    ],
    'text/html': [
        'html',
        'htm',
        'shtml'
    ],
    'text/jade': [
        'jade'
    ],
    'text/javascript': [
        'js',
        'mjs'
    ],
    'text/jsx': [
        'jsx'
    ],
    'text/less': [
        'less'
    ],
    'text/markdown': [
        'md',
        'markdown'
    ],
    'text/mathml': [
        'mml'
    ],
    'text/mdx': [
        'mdx'
    ],
    'text/n3': [
        'n3'
    ],
    'text/plain': [
        'txt',
        'text',
        'conf',
        'def',
        'list',
        'log',
        'in',
        'ini'
    ],
    'text/richtext': [
        'rtx'
    ],
    'text/rtf': [
        '*rtf'
    ],
    'text/sgml': [
        'sgml',
        'sgm'
    ],
    'text/shex': [
        'shex'
    ],
    'text/slim': [
        'slim',
        'slm'
    ],
    'text/spdx': [
        'spdx'
    ],
    'text/stylus': [
        'stylus',
        'styl'
    ],
    'text/tab-separated-values': [
        'tsv'
    ],
    'text/troff': [
        't',
        'tr',
        'roff',
        'man',
        'me',
        'ms'
    ],
    'text/turtle': [
        'ttl'
    ],
    'text/uri-list': [
        'uri',
        'uris',
        'urls'
    ],
    'text/vcard': [
        'vcard'
    ],
    'text/vtt': [
        'vtt'
    ],
    'text/wgsl': [
        'wgsl'
    ],
    'text/xml': [
        '*xml'
    ],
    'text/yaml': [
        'yaml',
        'yml'
    ],
    'video/3gpp': [
        '3gp',
        '3gpp'
    ],
    'video/3gpp2': [
        '3g2'
    ],
    'video/h261': [
        'h261'
    ],
    'video/h263': [
        'h263'
    ],
    'video/h264': [
        'h264'
    ],
    'video/iso.segment': [
        'm4s'
    ],
    'video/jpeg': [
        'jpgv'
    ],
    'video/jpm': [
        '*jpm',
        '*jpgm'
    ],
    'video/mj2': [
        'mj2',
        'mjp2'
    ],
    'video/mp2t': [
        'ts',
        'm2t',
        'm2ts',
        'mts'
    ],
    'video/mp4': [
        'mp4',
        'mp4v',
        'mpg4'
    ],
    'video/mpeg': [
        'mpeg',
        'mpg',
        'mpe',
        'm1v',
        'm2v'
    ],
    'video/ogg': [
        'ogv'
    ],
    'video/quicktime': [
        'qt',
        'mov'
    ],
    'video/webm': [
        'webm'
    ]
};
Object.freeze(types);
const __TURBOPACK__default__export__ = types;
}),
"[project]/node_modules/mime/dist/src/Mime.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Mime_extensionToType, _Mime_typeToExtension, _Mime_typeToExtensions;
class Mime {
    constructor(...args){
        _Mime_extensionToType.set(this, new Map());
        _Mime_typeToExtension.set(this, new Map());
        _Mime_typeToExtensions.set(this, new Map());
        for (const arg of args){
            this.define(arg);
        }
    }
    define(typeMap, force = false) {
        for (let [type, extensions] of Object.entries(typeMap)){
            type = type.toLowerCase();
            extensions = extensions.map((ext)=>ext.toLowerCase());
            if (!__classPrivateFieldGet(this, _Mime_typeToExtensions, "f").has(type)) {
                __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").set(type, new Set());
            }
            const allExtensions = __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type);
            let first = true;
            for (let extension of extensions){
                const starred = extension.startsWith('*');
                extension = starred ? extension.slice(1) : extension;
                allExtensions?.add(extension);
                if (first) {
                    __classPrivateFieldGet(this, _Mime_typeToExtension, "f").set(type, extension);
                }
                first = false;
                if (starred) continue;
                const currentType = __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(extension);
                if (currentType && currentType != type && !force) {
                    throw new Error(`"${type} -> ${extension}" conflicts with "${currentType} -> ${extension}". Pass \`force=true\` to override this definition.`);
                }
                __classPrivateFieldGet(this, _Mime_extensionToType, "f").set(extension, type);
            }
        }
        return this;
    }
    getType(path) {
        if (typeof path !== 'string') return null;
        const last = path.replace(/^.*[/\\]/s, '').toLowerCase();
        const ext = last.replace(/^.*\./s, '').toLowerCase();
        const hasPath = last.length < path.length;
        const hasDot = ext.length < last.length - 1;
        if (!hasDot && hasPath) return null;
        return __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(ext) ?? null;
    }
    getExtension(type) {
        if (typeof type !== 'string') return null;
        type = type?.split?.(';')[0];
        return (type && __classPrivateFieldGet(this, _Mime_typeToExtension, "f").get(type.trim().toLowerCase())) ?? null;
    }
    getAllExtensions(type) {
        if (typeof type !== 'string') return null;
        return __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type.toLowerCase()) ?? null;
    }
    _freeze() {
        this.define = ()=>{
            throw new Error('define() not allowed for built-in Mime objects. See https://github.com/broofa/mime/blob/main/README.md#custom-mime-instances');
        };
        Object.freeze(this);
        for (const extensions of __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").values()){
            Object.freeze(extensions);
        }
        return this;
    }
    _getTestState() {
        return {
            types: __classPrivateFieldGet(this, _Mime_extensionToType, "f"),
            extensions: __classPrivateFieldGet(this, _Mime_typeToExtension, "f")
        };
    }
}
_Mime_extensionToType = new WeakMap(), _Mime_typeToExtension = new WeakMap(), _Mime_typeToExtensions = new WeakMap();
const __TURBOPACK__default__export__ = Mime;
}),
"[project]/node_modules/mime/dist/src/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mime$2f$dist$2f$types$2f$other$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mime/dist/types/other.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mime$2f$dist$2f$types$2f$standard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mime/dist/types/standard.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mime$2f$dist$2f$src$2f$Mime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mime/dist/src/Mime.js [app-rsc] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mime$2f$dist$2f$src$2f$Mime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mime$2f$dist$2f$types$2f$standard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mime$2f$dist$2f$types$2f$other$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])._freeze();
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__94d9c285._.js.map