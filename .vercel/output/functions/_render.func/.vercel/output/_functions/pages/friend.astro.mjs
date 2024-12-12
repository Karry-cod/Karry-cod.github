import { $ as $$BaseCard, a as $$BaseLayout } from '../chunks/BaseCard_uqwO2pB_.mjs';
import { _ as __astro_tag_component__, F as Fragment, f as createVNode } from '../chunks/astro/server_Cqm1NFrI.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_ClFZqb9A.mjs';
import { h as $$LinkCard } from '../chunks/LinkCard_at1q76XP.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const frontmatter = {
  "totalCharCount": 58,
  "readingTime": 1
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "heading-1",
    "text": "Friend\n                          \n                          Link to Friend\n                        "
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
    title: "Friend",
    children: createVNode($$BaseCard, {
      title: "Friend",
      children: [createVNode(_components.h1, {
        id: "heading-1",
        class: "fade-in-up",
        children: ["Friend", createVNode(_components.a, {
          href: "#heading-1",
          class: "anchor",
          "aria-label": "Anchor to Friend",
          children: ["\n                          ", createVNode(_components.span, {
            class: "anchor-icon",
            "data-pagefind-ignore": "",
            "aria-hidden": "true"
          }), "\n                          ", createVNode(_components.span, {
            class: "sr-only fade-in-up",
            children: "Link to Friend"
          }), "\n                        "]
        })]
      }), createVNode(_components.hr, {
        class: "fade-in-up"
      }), createVNode("div", {
        class: "grid grid-cols-2 gap-4",
        children: [createVNode($$LinkCard, {
          title: "EveSunMaple",
          desc: "一位普通的高中学生",
          url: "https://www.saroprock.com",
          img: "https://thirdwx.qlogo.cn/mmopen/vi_32/FERlb0lET4jiaQ5d4tpzib0CcmE3kmZtFbiaOFz7LNeHAm6LUaTNfJ7MMgPicIUlkz3Sl5NA5mibr3OzWzPNnia0Y7Nak4Ew8oTN4d8UCk2AG9dec/132"
        }), createVNode($$LinkCard, {
          title: "EveSunMaple",
          desc: "Author of Frosti Theme Template",
          url: "https://www.saroprock.com",
          img: "https://www.saroprock.com/profile.webp"
        })]
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
const url = "/friend";
const file = "C:/Projects/MyTest/Astro/github/blob/src/pages/friend.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Projects/MyTest/Astro/github/blob/src/pages/friend.mdx";
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
