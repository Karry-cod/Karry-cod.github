import { a as $$BaseLayout, $ as $$BaseCard } from '../../chunks/BaseCard_uqwO2pB_.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../../chunks/astro/server_Cqm1NFrI.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BwVghcZN.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://frosti.saroprock.com");
async function getStaticPaths() {
  const blog = await getCollection("blog");
  return blog.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content, remarkPluginFrontmatter } = await post.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.data.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BaseCard", $$BaseCard, { "title": post.data.title, "image": post.data.image, "pubDate": post.data.pubDate, "badge": post.data.badge, "categories": post.data.categories, "tags": post.data.tags, "word": remarkPluginFrontmatter.totalCharCount, "time": remarkPluginFrontmatter.readingTime, "isBlog": "true" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} ` })}`;
}, "C:/Projects/MyTest/Astro/github/blob/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Projects/MyTest/Astro/github/blob/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
