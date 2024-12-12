import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_Cqm1NFrI.mjs';
import { $ as $$Image } from './_astro_assets_ClFZqb9A.mjs';
import 'clsx';

const frontmatter = {
  "title": "Using MDX",
  "description": "Lorem ipsum dolor sit amet",
  "pubDate": "Jul 02 2022",
  "image": "/image/image4.jpg",
  "categories": ["tech"],
  "badge": "Pin",
  "totalCharCount": 187,
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "heading-1",
    "text": "Why MDX?\n                          \n                          Link to Why MDX?\n                        "
  }, {
    "depth": 2,
    "slug": "heading-2",
    "text": "Example\n                          \n                          Link to Example\n                        "
  }, {
    "depth": 2,
    "slug": "heading-3",
    "text": "More Links\n                          \n                          Link to More Links\n                        "
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    g: "g",
    h2: "h2",
    li: "li",
    p: "p",
    path: "path",
    span: "span",
    strong: "strong",
    svg: "svg",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      class: "fade-in-up",
      children: ["This theme comes with the ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/integrations-guide/mdx/",
        class: "fade-in-up",
        rel: "nofollow",
        children: ["@astrojs/mdx", createVNode(_components.span, {
          children: createVNode(_components.svg, {
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [createVNode(_components.g, {
              id: "SVGRepo_bgCarrier",
              "stroke-width": "0"
            }), createVNode(_components.g, {
              id: "SVGRepo_tracerCarrier",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }), createVNode(_components.g, {
              id: "SVGRepo_iconCarrier",
              children: createVNode(_components.g, {
                id: "SVGRepo_iconCarrier",
                children: createVNode(_components.path, {
                  d: "M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11",
                  stroke: "#888",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              })
            })]
          })
        })]
      }), " integration installed and configured in your ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "astro.config.mjs"
      }), " config file. If you prefer not to use MDX, you can disable support by removing the integration from your config file."]
    }), "\n", createVNode(_components.h2, {
      id: "heading-1",
      class: "fade-in-up",
      children: ["Why MDX?", createVNode(_components.a, {
        href: "#heading-1",
        class: "anchor",
        "aria-label": "Anchor to Why MDX?",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to Why MDX?"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: ["MDX is a special flavor of Markdown that supports embedded JavaScript & JSX syntax. This unlocks the ability to ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/markdown-content/#mdx-features",
        class: "fade-in-up",
        rel: "nofollow",
        children: ["mix JavaScript and UI Components into your Markdown content", createVNode(_components.span, {
          children: createVNode(_components.svg, {
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [createVNode(_components.g, {
              id: "SVGRepo_bgCarrier",
              "stroke-width": "0"
            }), createVNode(_components.g, {
              id: "SVGRepo_tracerCarrier",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }), createVNode(_components.g, {
              id: "SVGRepo_iconCarrier",
              children: createVNode(_components.g, {
                id: "SVGRepo_iconCarrier",
                children: createVNode(_components.path, {
                  d: "M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11",
                  stroke: "#888",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              })
            })]
          })
        })]
      }), " for things like interactive charts or alerts."]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: "If you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze."
    }), "\n", createVNode(_components.h2, {
      id: "heading-2",
      class: "fade-in-up",
      children: ["Example", createVNode(_components.a, {
        href: "#heading-2",
        class: "anchor",
        "aria-label": "Anchor to Example",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to Example"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: ["Here is how you import and use a UI component inside of MDX.", createVNode(_components.br, {
        class: "fade-in-up"
      }), "\nWhen you open this page in the browser, you should see the clickable button below."]
    }), "\n", createVNode(_components.h2, {
      id: "heading-3",
      class: "fade-in-up",
      children: ["More Links", createVNode(_components.a, {
        href: "#heading-3",
        class: "anchor",
        "aria-label": "Anchor to More Links",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to More Links"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.ul, {
      class: "fade-in-up",
      children: ["\n", createVNode(_components.li, {
        class: "fade-in-up",
        children: createVNode(_components.a, {
          href: "https://mdxjs.com/docs/what-is-mdx",
          class: "fade-in-up",
          rel: "nofollow",
          children: ["MDX Syntax Documentation", createVNode(_components.span, {
            children: createVNode(_components.svg, {
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [createVNode(_components.g, {
                id: "SVGRepo_bgCarrier",
                "stroke-width": "0"
              }), createVNode(_components.g, {
                id: "SVGRepo_tracerCarrier",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }), createVNode(_components.g, {
                id: "SVGRepo_iconCarrier",
                children: createVNode(_components.g, {
                  id: "SVGRepo_iconCarrier",
                  children: createVNode(_components.path, {
                    d: "M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11",
                    stroke: "#888",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                })
              })]
            })
          })]
        })
      }), "\n", createVNode(_components.li, {
        class: "fade-in-up",
        children: createVNode(_components.a, {
          href: "https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages",
          class: "fade-in-up",
          rel: "nofollow",
          children: ["Astro Usage Documentation", createVNode(_components.span, {
            children: createVNode(_components.svg, {
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [createVNode(_components.g, {
                id: "SVGRepo_bgCarrier",
                "stroke-width": "0"
              }), createVNode(_components.g, {
                id: "SVGRepo_tracerCarrier",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }), createVNode(_components.g, {
                id: "SVGRepo_iconCarrier",
                children: createVNode(_components.g, {
                  id: "SVGRepo_iconCarrier",
                  children: createVNode(_components.path, {
                    d: "M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11",
                    stroke: "#888",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                })
              })]
            })
          })]
        })
      }), "\n", createVNode(_components.li, {
        class: "fade-in-up",
        children: [createVNode(_components.strong, {
          class: "fade-in-up",
          children: "Note:"
        }), " ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/reference/directives-reference/#client-directives",
          class: "fade-in-up",
          rel: "nofollow",
          children: ["Client Directives", createVNode(_components.span, {
            children: createVNode(_components.svg, {
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [createVNode(_components.g, {
                id: "SVGRepo_bgCarrier",
                "stroke-width": "0"
              }), createVNode(_components.g, {
                id: "SVGRepo_tracerCarrier",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }), createVNode(_components.g, {
                id: "SVGRepo_iconCarrier",
                children: createVNode(_components.g, {
                  id: "SVGRepo_iconCarrier",
                  children: createVNode(_components.path, {
                    d: "M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11",
                    stroke: "#888",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                })
              })]
            })
          })]
        }), " are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default."]
      }), "\n"]
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

const url = "src/content/blog/using-mdx.mdx";
const file = "C:/Projects/MyTest/Astro/github/blob/src/content/blog/using-mdx.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Projects/MyTest/Astro/github/blob/src/content/blog/using-mdx.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
