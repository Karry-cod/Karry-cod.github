import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, d as addAttribute, b as renderComponent } from './astro/server_Cqm1NFrI.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_ClFZqb9A.mjs';

const $$Astro = createAstro("https://frosti.saroprock.com");
const $$CardHorizontal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardHorizontal;
  const { title, image, url } = Astro2.props;
  const target = "_self";
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-base-100 overflow-hidden shadow-xl rounded-xl flex flex-col lg:flex-row fade-in-up"> <div class="relative overflow-hidden bg-base-100 flex-1 lg:order-1 order-2 flex transition-colors rounded-none"> ${renderSlot($$result, $$slots["default"])} </div> ${image && renderTemplate`<a${addAttribute(url, "href")}${addAttribute(target, "target")} class="image-link relative w-full lg:w-2/5 h-auto rounded-none overflow-hidden lg:order-2 order-1"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": title, "width": "300", "height": "200", "format": "webp", "loading": "eager", "class": "object-cover w-full h-full" })} </a>`} </div>`;
}, "C:/Projects/MyTest/Astro/github/blob/src/layouts/CardHorizontal.astro", void 0);

export { $$CardHorizontal as $ };
