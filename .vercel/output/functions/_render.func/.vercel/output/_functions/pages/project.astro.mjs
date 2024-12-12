import { b as $$Icon, $ as $$BaseCard, a as $$BaseLayout } from '../chunks/BaseCard_uqwO2pB_.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, _ as __astro_tag_component__, F as Fragment, f as createVNode } from '../chunks/astro/server_Cqm1NFrI.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_ClFZqb9A.mjs';
import '../chunks/LinkCard_at1q76XP.mjs';
import 'kleur/colors';
import { $ as $$CardHorizontal } from '../chunks/CardHorizontal_CANEe4Zm.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://frosti.saroprock.com");
const $$GithubInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GithubInfo;
  const { url } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "github-info", "github-info", { "class": "m-2 flex", "data-url": url }, { "default": () => renderTemplate` ${maybeRenderHead()}<span class="repo-user flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "ri:github-line" })} <span class="text-sm badge badge-ghost"> <span class="loading loading-spinner loading-xs"></span> </span> </span> <span>&thinsp;</span> <span class="repo-watch flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "ri:eye-line" })} <span class="text-sm badge badge-ghost"> <span class="loading loading-spinner loading-xs"></span> </span> </span> <span>&thinsp;</span> <span class="repo-fork flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "ri:git-fork-line" })} <span class="text-sm badge badge-ghost"> <span class="loading loading-spinner loading-xs"></span> </span> </span> <span>&thinsp;</span> <span class="repo-star flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "ri:star-line" })} <span class="text-sm badge badge-ghost"> <span class="loading loading-spinner loading-xs"></span> </span> </span> ` })} `;
}, "C:/Projects/MyTest/Astro/github/blob/src/widget/GithubInfo.astro", void 0);

const $$Astro = createAstro("https://frosti.saroprock.com");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, image, desc, url, badge, target = "_blank" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "CardHorizontal", $$CardHorizontal, { "title": title, "image": image, "url": url }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative w-full p-6 flex flex-col justify-between"> <a${addAttribute(url, "href")}${addAttribute(target, "target")}> <h1${addAttribute(title, "id")} class="text-4xl m-0 p-2"> ${title} </h1> </a> <div class="m-2">${desc}</div> ${badge && renderTemplate`<div class="badge badge-ghost m-2">${badge}</div>`} ${renderComponent($$result2, "GithubInfo", $$GithubInfo, { "url": url })} </div> ` })}`;
}, "C:/Projects/MyTest/Astro/github/blob/src/components/ProjectCard.astro", void 0);

const frontmatter = {
  "totalCharCount": 62,
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "heading-1",
    "text": "Project\n                          \n                          Link to Project\n                        "
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    hr: "hr",
    span: "span",
    ...props.components
  };
  return createVNode($$BaseLayout, {
    title: "Project",
    children: [createVNode($$BaseCard, {
      title: "Project",
      children: [createVNode(_components.h1, {
        id: "heading-1",
        class: "fade-in-up",
        children: ["Project", createVNode(_components.a, {
          href: "#heading-1",
          class: "anchor",
          "aria-label": "Anchor to Project",
          children: ["\n                          ", createVNode(_components.span, {
            class: "anchor-icon",
            "data-pagefind-ignore": "",
            "aria-hidden": "true"
          }), "\n                          ", createVNode(_components.span, {
            class: "sr-only fade-in-up",
            children: "Link to Project"
          }), "\n                        "]
        })]
      }), createVNode(_components.hr, {
        class: "fade-in-up"
      })]
    }), createVNode($$ProjectCard, {
      title: "Frosti",
      image: "https://frosti.saroprock.com/view.png",
      desc: "一个干净、优美、快速的博客模板！",
      url: "https://github.com/EveSunMaple/Frosti",
      badge: "Astro",
      target: "_self"
    }), createVNode($$ProjectCard, {
      title: "Word-testing-application",
      image: "https://raw.githubusercontent.com/EveSunMaple/Word-testing-application/master/view.png",
      desc: "一个用Python和Tkinter制作的单词测试应用",
      url: "https://github.com/EveSunMaple/Word-testing-application",
      badge: "Python",
      target: "_self"
    }), createVNode($$ProjectCard, {
      title: "InfinitySky",
      image: "https://raw.githubusercontent.com/EveSunMaple/InfinitySky/master/view.png",
      desc: "一个ExtraEasy2D的示例项目",
      url: "https://github.com/EveSunMaple/InfinitySky",
      badge: "C++",
      target: "_self"
    }), createVNode($$ProjectCard, {
      title: "code-judge",
      image: "https://raw.githubusercontent.com/EveSunMaple/code-judge/master/index.png",
      desc: "An elegant yet uncomplicated CPP judging system for informatics competitions.",
      url: "https://github.com/EveSunMaple/code-judge",
      badge: "C++",
      target: "_self"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "/project";
const file = "C:/Projects/MyTest/Astro/github/blob/src/pages/project.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Projects/MyTest/Astro/github/blob/src/pages/project.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  __usesAstroImage,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
