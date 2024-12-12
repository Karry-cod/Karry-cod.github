import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_Cqm1NFrI.mjs';
import { $ as $$Image } from './_astro_assets_ClFZqb9A.mjs';
import { $ as $$Warning, a as $$Info } from './LinkCard_at1q76XP.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to customize code box",
  "description": "Modify the code box style",
  "pubDate": "07 18 2024",
  "image": "/image/image1.jpg",
  "categories": ["tech"],
  "tags": ["Frosti", "Blog", "Project"],
  "totalCharCount": 219,
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "heading-1",
    "text": "添加行号\n                          \n                          Link to 添加行号\n                        "
  }, {
    "depth": 2,
    "slug": "heading-2",
    "text": "改变主题\n                          \n                          Link to 改变主题\n                        "
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    figure: "figure",
    g: "g",
    h2: "h2",
    input: "input",
    label: "label",
    p: "p",
    path: "path",
    pre: "pre",
    span: "span",
    svg: "svg",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "heading-1",
      class: "fade-in-up",
      children: ["添加行号", createVNode(_components.a, {
        href: "#heading-1",
        class: "anchor",
        "aria-label": "Anchor to 添加行号",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to 添加行号"
        }), "\n                        "]
      })]
    }), "\n", createVNode($$Warning, {
      children: createVNode(_components.p, {
        class: "fade-in-up",
        children: ["此方法仅在 ", createVNode(_components.code, {
          class: "fade-in-up",
          children: "Shiki"
        }), " 中可用， ", createVNode(_components.code, {
          class: "fade-in-up",
          children: "Prism"
        }), " 无法通过 CSS 直接生成行号。"]
      })
    }), "\n", createVNode($$Info, {
      children: ["在 ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "v2.2.1"
      }), " 更新后默认添加行号。"]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: ["在 ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "src\\styles\\global.scss"
      }), " 中添加以下内容："]
    }), "\n", createVNode(_components.figure, {
      class: "highlight scss fade-in-up",
      children: [createVNode(_components.div, {
        class: "highlight-tools fade-in-up",
        children: [createVNode(_components.div, {
          class: "code-lang fade-in-up",
          children: "SCSS"
        }), createVNode(_components.div, {
          class: "code-container fade-in-up",
          children: createVNode(_components.label, {
            class: "swap swap-flip btn btn-ghost btn-sm copy-btn",
            for: "41f683a6-8d74-4fa4-9abd-a3df760de2cb",
            "aria-label": "Copy to clipboard",
            children: [createVNode(_components.span, {
              class: "sr-only fade-in-up",
              children: "Copy to clipboard"
            }), createVNode(_components.input, {
              class: "copy-checkbox fade-in-up",
              type: "checkbox",
              id: "41f683a6-8d74-4fa4-9abd-a3df760de2cb"
            }), createVNode(_components.div, {
              class: "swap-on",
              children: createVNode(_components.svg, {
                viewBox: "0 -0.5 25 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                class: "stroke-current shrink-0 h-6 w-6 fade-in-up",
                children: createVNode(_components.path, {
                  d: "M5.5 12.5L10.167 17L19.5 8",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "fade-in-up"
                })
              })
            }), createVNode(_components.div, {
              class: "swap-off",
              children: createVNode(_components.svg, {
                viewBox: "0 -0.5 25 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                class: "stroke-current shrink-0 h-6 w-6 fade-in-up",
                children: [createVNode(_components.path, {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M17.676 14.248C17.676 15.8651 16.3651 17.176 14.748 17.176H7.428C5.81091 17.176 4.5 15.8651 4.5 14.248V6.928C4.5 5.31091 5.81091 4 7.428 4H14.748C16.3651 4 17.676 5.31091 17.676 6.928V14.248Z",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "fade-in-up"
                }), createVNode(_components.path, {
                  d: "M10.252 20H17.572C19.1891 20 20.5 18.689 20.5 17.072V9.75195",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "fade-in-up"
                })]
              })
            })]
          })
        })]
      }), createVNode(_components.div, {
        class: "highlight-code fade-in-up",
        children: [createVNode(_components.pre, {
          class: "frosti-code gutter fade-in-up",
          children: createVNode(_components.code, {
            class: "fade-in-up",
            children: [createVNode(_components.div, {
              class: "line fade-in-up",
              children: "1"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "2"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "3"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "4"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "5"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "6"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "7"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "8"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "9"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "10"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "11"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "12"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "13"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "14"
            })]
          })
        }), createVNode(_components.pre, {
          class: "frosti-code code fade-in-up",
          children: createVNode(_components.code, {
            class: "fade-in-up",
            children: [createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                class: "fade-in-up",
                children: "pre"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: " .line"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: " {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "  counter-increment"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "line"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "  padding-left"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "2.5"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                class: "fade-in-up",
                children: "em"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "}"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up"
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                class: "fade-in-up",
                children: "pre"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: " :not"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: ":last-child"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ")"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: ".line::before"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: " {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#22863A",
                  "--shiki-dark": "#85E89D"
                },
                class: "fade-in-up",
                children: "  content"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "counter"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "line"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ");"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "  position"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "absolute"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "  left"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "  width"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "3"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                class: "fade-in-up",
                children: "em"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "  text-align"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "right"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "  margin-right"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "10"
              }), createVNode(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                class: "fade-in-up",
                children: "px"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "  color"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "#888"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "}"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up"
            })]
          })
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "heading-2",
      class: "fade-in-up",
      children: ["改变主题", createVNode(_components.a, {
        href: "#heading-2",
        class: "anchor",
        "aria-label": "Anchor to 改变主题",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to 改变主题"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: ["Frosti 使用 ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "Shiki"
      }), " 来渲染代码框， ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "Shiki"
      }), " 已经提供了足够多的主题，不推荐使用 ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "Prism"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: ["有关于 ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "Shiki"
      }), " 的主题详见：", createVNode(_components.a, {
        href: "https://shiki.style/themes",
        class: "fade-in-up",
        rel: "nofollow",
        children: ["https://shiki.style/themes", createVNode(_components.span, {
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
      })]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: ["在 ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "astro.config.mjs"
      }), " 中修改内容："]
    }), "\n", createVNode(_components.figure, {
      class: "highlight js fade-in-up",
      children: [createVNode(_components.div, {
        class: "highlight-tools fade-in-up",
        children: [createVNode(_components.div, {
          class: "code-lang fade-in-up",
          children: "JS"
        }), createVNode(_components.div, {
          class: "code-container fade-in-up",
          children: createVNode(_components.label, {
            class: "swap swap-flip btn btn-ghost btn-sm copy-btn",
            for: "ee3d9a7f-c20d-421e-b5df-96bb89f4dbd0",
            "aria-label": "Copy to clipboard",
            children: [createVNode(_components.span, {
              class: "sr-only fade-in-up",
              children: "Copy to clipboard"
            }), createVNode(_components.input, {
              class: "copy-checkbox fade-in-up",
              type: "checkbox",
              id: "ee3d9a7f-c20d-421e-b5df-96bb89f4dbd0"
            }), createVNode(_components.div, {
              class: "swap-on",
              children: createVNode(_components.svg, {
                viewBox: "0 -0.5 25 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                class: "stroke-current shrink-0 h-6 w-6 fade-in-up",
                children: createVNode(_components.path, {
                  d: "M5.5 12.5L10.167 17L19.5 8",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "fade-in-up"
                })
              })
            }), createVNode(_components.div, {
              class: "swap-off",
              children: createVNode(_components.svg, {
                viewBox: "0 -0.5 25 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                class: "stroke-current shrink-0 h-6 w-6 fade-in-up",
                children: [createVNode(_components.path, {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M17.676 14.248C17.676 15.8651 16.3651 17.176 14.748 17.176H7.428C5.81091 17.176 4.5 15.8651 4.5 14.248V6.928C4.5 5.31091 5.81091 4 7.428 4H14.748C16.3651 4 17.676 5.31091 17.676 6.928V14.248Z",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "fade-in-up"
                }), createVNode(_components.path, {
                  d: "M10.252 20H17.572C19.1891 20 20.5 18.689 20.5 17.072V9.75195",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "fade-in-up"
                })]
              })
            })]
          })
        })]
      }), createVNode(_components.div, {
        class: "highlight-code fade-in-up",
        children: [createVNode(_components.pre, {
          class: "frosti-code gutter fade-in-up",
          children: createVNode(_components.code, {
            class: "fade-in-up",
            children: [createVNode(_components.div, {
              class: "line fade-in-up",
              children: "1"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "2"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "3"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "4"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "5"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "6"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "7"
            }), createVNode(_components.div, {
              class: "line fade-in-up",
              children: "8"
            })]
          })
        }), createVNode(_components.pre, {
          class: "frosti-code code fade-in-up",
          children: createVNode(_components.code, {
            class: "fade-in-up",
            children: [createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "markdown"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "  shikiConfig"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "    themes"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ": {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "      light"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                class: "fade-in-up",
                children: "'github-light'"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ","
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "      dark"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                class: "fade-in-up",
                children: "'github-dark'"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ","
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "    },"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "  },"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "},"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up"
            })]
          })
        })]
      })]
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

const url = "src/content/blog/How-to-customize-code-box.mdx";
const file = "C:/Projects/MyTest/Astro/github/blob/src/content/blog/How-to-customize-code-box.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Projects/MyTest/Astro/github/blob/src/content/blog/How-to-customize-code-box.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
