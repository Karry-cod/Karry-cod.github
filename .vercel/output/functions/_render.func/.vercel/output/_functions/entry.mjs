import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CTrI07iZ.mjs';
import { manifest } from './manifest_CArVERW9.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog/categories/_category_/_---page_.astro.mjs');
const _page3 = () => import('./pages/blog/tags/_tag_/_---page_.astro.mjs');
const _page4 = () => import('./pages/blog/_---page_.astro.mjs');
const _page5 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page6 = () => import('./pages/friend.astro.mjs');
const _page7 = () => import('./pages/project.astro.mjs');
const _page8 = () => import('./pages/robots.txt.astro.mjs');
const _page9 = () => import('./pages/rss.xml.astro.mjs');
const _page10 = () => import('./pages/sitemap.xml.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.mdx", _page1],
    ["src/pages/blog/categories/[category]/[...page].astro", _page2],
    ["src/pages/blog/tags/[tag]/[...page].astro", _page3],
    ["src/pages/blog/[...page].astro", _page4],
    ["src/pages/blog/[...slug].astro", _page5],
    ["src/pages/friend.mdx", _page6],
    ["src/pages/project.mdx", _page7],
    ["src/pages/robots.txt.ts", _page8],
    ["src/pages/rss.xml.ts", _page9],
    ["src/pages/sitemap.xml.ts", _page10],
    ["src/pages/index.mdx", _page11]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "603da446-f933-4a74-987e-26ee1aeccad3",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
