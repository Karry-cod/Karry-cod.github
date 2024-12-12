import { $ as $$BaseCard, a as $$BaseLayout } from '../chunks/BaseCard_uqwO2pB_.mjs';
import { _ as __astro_tag_component__, F as Fragment, f as createVNode } from '../chunks/astro/server_Cqm1NFrI.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_ClFZqb9A.mjs';
import { g as $$TimeLine } from '../chunks/LinkCard_at1q76XP.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const frontmatter = {
  "totalCharCount": 137,
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "heading-1",
    "text": "About Frosti\n                          \n                          Link to About Frosti\n                        "
  }, {
    "depth": 2,
    "slug": "heading-2",
    "text": "Brief introduction\n                          \n                          Link to Brief introduction\n                        "
  }, {
    "depth": 2,
    "slug": "heading-3",
    "text": "TimeLine\n                          \n                          Link to TimeLine\n                        "
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    hr: "hr",
    p: "p",
    span: "span",
    ...props.components
  };
  return createVNode($$BaseLayout, {
    title: "About",
    children: createVNode($$BaseCard, {
      title: "About",
      children: [createVNode(_components.h1, {
        id: "heading-1",
        class: "fade-in-up",
        children: ["About Frosti", createVNode(_components.a, {
          href: "#heading-1",
          class: "anchor",
          "aria-label": "Anchor to About Frosti",
          children: ["\n                          ", createVNode(_components.span, {
            class: "anchor-icon",
            "data-pagefind-ignore": "",
            "aria-hidden": "true"
          }), "\n                          ", createVNode(_components.span, {
            class: "sr-only fade-in-up",
            children: "Link to About Frosti"
          }), "\n                        "]
        })]
      }), createVNode(_components.hr, {
        class: "fade-in-up"
      }), createVNode(_components.h2, {
        id: "heading-2",
        class: "fade-in-up",
        children: ["Brief introduction", createVNode(_components.a, {
          href: "#heading-2",
          class: "anchor",
          "aria-label": "Anchor to Brief introduction",
          children: ["\n                          ", createVNode(_components.span, {
            class: "anchor-icon",
            "data-pagefind-ignore": "",
            "aria-hidden": "true"
          }), "\n                          ", createVNode(_components.span, {
            class: "sr-only fade-in-up",
            children: "Link to Brief introduction"
          }), "\n                        "]
        })]
      }), createVNode(_components.p, {
        class: "fade-in-up",
        children: "Frosti is a static blog template created by EveSunMaple using Astro, designed to replace bloated Hexo. The author is only a high school student, and there are many imperfections in this template that need to be modified. If you are interested, please visit the Github repository."
      }), createVNode(_components.h2, {
        id: "heading-3",
        class: "fade-in-up",
        children: ["TimeLine", createVNode(_components.a, {
          href: "#heading-3",
          class: "anchor",
          "aria-label": "Anchor to TimeLine",
          children: ["\n                          ", createVNode(_components.span, {
            class: "anchor-icon",
            "data-pagefind-ignore": "",
            "aria-hidden": "true"
          }), "\n                          ", createVNode(_components.span, {
            class: "sr-only fade-in-up",
            children: "Link to TimeLine"
          }), "\n                        "]
        })]
      }), createVNode($$TimeLine, {
        items: [{
          year: "2024-5-29",
          event: "Fixed accessibility issues, improved speed"
        }, {
          year: "2024-5-30",
          event: "Improved content, updated README, score 395"
        }, {
          year: "2024-6-2",
          event: "Added ProjectCard, refined Project page, removed lazy loading"
        }, {
          year: "2024-6-2",
          event: "Optimized link styles, pagespeed score 400"
        }, {
          year: "2024-6-12",
          event: "Added busuanzi counter"
        }, {
          year: "2024-6-16",
          event: "Converted CSS to SCSS, customized waline, improved Footnotes"
        }, {
          year: "2024-6-28",
          event: "Revamped SCSS to Tailwind, updated footer"
        }, {
          year: "2024-7-8",
          event: "Lighthouse score 400, enabled text compression, reverted footer"
        }, {
          year: "2024-7-9",
          event: "Added search functionality, refined footer and navbar"
        }, {
          year: "2024-7-9",
          event: "Fixed navigation issue"
        }, {
          year: "2024-7-10",
          event: "Added twikoo comments, improved search night mode"
        }, {
          year: "2024-7-13",
          event: "Added TOC, new guide article, new components"
        }, {
          year: "2024-7-18",
          event: "Added line numbers to code blocks, tutorial for code block themes"
        }, {
          year: "2024-7-19",
          event: "Fixed astro.config.mjs issues, improved day mode code block styles"
        }, {
          year: "2024-7-21",
          event: "Restructured main element, rewrote social links, menus, navbar, comments"
        }, {
          year: "2024-7-22",
          event: "Added back-to-top button, tablet styles, new article and repo card styles"
        }, {
          year: "2024-7-22",
          event: "Cleaned global.scss, added uncategorized tag for articles without tags"
        }, {
          year: "2024-7-23",
          event: "Fixed navbar disappearance on mobile"
        }, {
          year: "2024-7-24",
          event: "Fixed project card information issues, TOC navigation on blog and project pages"
        }, {
          year: "2024-7-26",
          event: "Fixed project card style issues, type issues checked"
        }, {
          year: "2024-7-29",
          event: "Separated line numbers and top bar from code, added code language display"
        }, {
          year: "2024-7-29",
          event: "Adjusted code block top bar, padding on mobile"
        }, {
          year: "2024-7-30",
          event: "Added tab page configuration to consts.ts, updated BaseLayout.astro"
        }, {
          year: "2024-8-1",
          event: "Added pagination buttons, integrated with sidebar"
        }, {
          year: "2024-8-2",
          event: "Added category feature, pagination for category and tag lists"
        }, {
          year: "2024-8-4",
          event: "Updated README, added Vercel Web Analytics"
        }]
      })]
    })
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
const url = "/about";
const file = "C:/Projects/MyTest/Astro/github/blob/src/pages/about.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Projects/MyTest/Astro/github/blob/src/pages/about.mdx";
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
