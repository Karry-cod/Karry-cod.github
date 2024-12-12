import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, d as addAttribute, b as renderComponent } from './astro/server_Cqm1NFrI.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image } from './_astro_assets_ClFZqb9A.mjs';

const $$Astro$3 = createAstro("https://frosti.saroprock.com");
const $$Collapse = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Collapse;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details tabindex="0" class="collapse collapse-arrow border-base-300 bg-base-200 border fade-in-up"> <summary class="collapse-title text-xl font-medium">${title}</summary> <div class="collapse-content">${renderSlot($$result, $$slots["default"])}</div> </details>`;
}, "C:/Projects/MyTest/Astro/github/blob/src/components/blog/collapse.astro", void 0);

const $$Astro$2 = createAstro("https://frosti.saroprock.com");
const $$Diff = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Diff;
  const { r, l } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="diff aspect-[16/9] fade-in-up"> <div class="diff-item-1"> <img alt="daisy"${addAttribute(r, "src")}> </div> <div class="diff-item-2"> <img alt="daisy"${addAttribute(l, "src")}> </div> <div class="diff-resizer"></div> </div>`;
}, "C:/Projects/MyTest/Astro/github/blob/src/components/blog/diff.astro", void 0);

const $$Error = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div role="alert" class="alert alert-error fade-in-up"> <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${renderSlot($$result, $$slots["default"])}</span> </div>`;
}, "C:/Projects/MyTest/Astro/github/blob/src/components/blog/error.astro", void 0);

const $$Info = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div role="alert" class="alert alert-info fade-in-up"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${renderSlot($$result, $$slots["default"])}</span> </div>`;
}, "C:/Projects/MyTest/Astro/github/blob/src/components/blog/info.astro", void 0);

const $$Kbd = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<kbd class="kbd fade-in-up">${renderSlot($$result, $$slots["default"])}</kbd>`;
}, "C:/Projects/MyTest/Astro/github/blob/src/components/blog/kbd.astro", void 0);

const $$Success = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div role="alert" class="alert alert-success fade-in-up"> <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${renderSlot($$result, $$slots["default"])}</span> </div>`;
}, "C:/Projects/MyTest/Astro/github/blob/src/components/blog/success.astro", void 0);

const $$Warning = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div role="alert" class="alert alert-warning fade-in-up"> <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <span>${renderSlot($$result, $$slots["default"])}</span> </div>`;
}, "C:/Projects/MyTest/Astro/github/blob/src/components/blog/warning.astro", void 0);

const $$Astro$1 = createAstro("https://frosti.saroprock.com");
const $$TimeLine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="timeline timeline-vertical m-0 p-0 fade-in-up"> ${items.map((item, index) => renderTemplate`<li class="fade-in-up"> ${index !== 0 && renderTemplate`<hr class="bg-neutral-content">`} ${index % 2 === 0 ? renderTemplate`<div class="timeline-start"><time class="font-mono italic">${item.year}</time></div>
        <div class="timeline-middle"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path> </svg> </div>
        <div class="timeline-end timeline-box">${item.event}</div>` : renderTemplate`<div class="timeline-start timeline-box">${item.event}</div>
        <div class="timeline-middle"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path> </svg> </div>
        <div class="timeline-end"><time class="font-mono italic">${item.year}</time></div>`} <hr class="bg-neutral-content"> </li>`)} </ul>`;
}, "C:/Projects/MyTest/Astro/github/blob/src/components/page/TimeLine.astro", void 0);

const $$Astro = createAstro("https://frosti.saroprock.com");
const $$LinkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkCard;
  const { title, img, desc, url, badge, target = "_blank" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg bg-base-100 hover:shadow-xl transition-all ease-in-out hover:scale-[102%] link-card fade-in-up"> <a${addAttribute(url, "href")}${addAttribute(target, "target")}> <div class="hero-content flex-col md:flex-row"> ${img && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": img, "width": 100, "height": 100, "format": "webp", "alt": title, "loading": "eager", "class": "max-w-full md:max-w-[13rem] rounded-lg" })}`} <div class="grow w-full"> <h1 class="text-xl font-bold"> ${title} ${badge && renderTemplate`<div class="badge badge-secondary mx-2">${badge}</div>`} </h1> <p class="py-1 text-1xl">${desc}</p> </div> </div> </a> </div>`;
}, "C:/Projects/MyTest/Astro/github/blob/src/components/page/LinkCard.astro", void 0);

export { $$Warning as $, $$Info as a, $$Collapse as b, $$Diff as c, $$Error as d, $$Success as e, $$Kbd as f, $$TimeLine as g, $$LinkCard as h };
