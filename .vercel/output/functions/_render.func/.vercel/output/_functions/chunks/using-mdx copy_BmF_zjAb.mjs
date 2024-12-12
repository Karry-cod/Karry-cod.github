import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_Cqm1NFrI.mjs';
import { $ as $$Image } from './_astro_assets_ClFZqb9A.mjs';
import 'clsx';

const frontmatter = {
  "title": "测试文档",
  "description": "这是一个用于测试的Markdown文档",
  "pubDate": "Jul 02 2024",
  "image": "/image/image3.png",
  "categories": ["life"],
  "tags": ["tag"],
  "totalCharCount": 332,
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "heading-1",
    "text": "标题\n                          \n                          Link to 标题\n                        "
  }, {
    "depth": 3,
    "slug": "heading-2",
    "text": "三级标题\n                          \n                          Link to 三级标题\n                        "
  }, {
    "depth": 2,
    "slug": "heading-3",
    "text": "列表\n                          \n                          Link to 列表\n                        "
  }, {
    "depth": 3,
    "slug": "heading-4",
    "text": "无序列表\n                          \n                          Link to 无序列表\n                        "
  }, {
    "depth": 3,
    "slug": "heading-5",
    "text": "有序列表\n                          \n                          Link to 有序列表\n                        "
  }, {
    "depth": 2,
    "slug": "heading-6",
    "text": "格式化文本\n                          \n                          Link to 格式化文本\n                        "
  }, {
    "depth": 2,
    "slug": "heading-7",
    "text": "链接\n                          \n                          Link to 链接\n                        "
  }, {
    "depth": 2,
    "slug": "heading-8",
    "text": "图片\n                          \n                          Link to 图片\n                        "
  }, {
    "depth": 2,
    "slug": "heading-9",
    "text": "代码\n                          \n                          Link to 代码\n                        "
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    del: "del",
    div: "div",
    em: "em",
    figure: "figure",
    g: "g",
    h2: "h2",
    h3: "h3",
    img: "img",
    input: "input",
    label: "label",
    li: "li",
    ol: "ol",
    p: "p",
    path: "path",
    pre: "pre",
    span: "span",
    strong: "strong",
    svg: "svg",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "heading-1",
      class: "fade-in-up",
      children: ["标题", createVNode(_components.a, {
        href: "#heading-1",
        class: "anchor",
        "aria-label": "Anchor to 标题",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to 标题"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: ["Markdown 支持多级标题，使用 ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "#"
      }), " 符号表示。一个 ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "#"
      }), " 表示一级标题，两个 ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "#"
      }), " 表示二级标题，以此类推。"]
    }), "\n", createVNode(_components.h3, {
      id: "heading-2",
      class: "fade-in-up",
      children: ["三级标题", createVNode(_components.a, {
        href: "#heading-2",
        class: "anchor",
        "aria-label": "Anchor to 三级标题",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to 三级标题"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: "这是一个三级标题。"
    }), "\n", createVNode(_components.h2, {
      id: "heading-3",
      class: "fade-in-up",
      children: ["列表", createVNode(_components.a, {
        href: "#heading-3",
        class: "anchor",
        "aria-label": "Anchor to 列表",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to 列表"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "heading-4",
      class: "fade-in-up",
      children: ["无序列表", createVNode(_components.a, {
        href: "#heading-4",
        class: "anchor",
        "aria-label": "Anchor to 无序列表",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to 无序列表"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.ul, {
      class: "fade-in-up",
      children: ["\n", createVNode(_components.li, {
        class: "fade-in-up",
        children: "项目一"
      }), "\n", createVNode(_components.li, {
        class: "fade-in-up",
        children: "项目二"
      }), "\n", createVNode(_components.li, {
        class: "fade-in-up",
        children: "项目三"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "heading-5",
      class: "fade-in-up",
      children: ["有序列表", createVNode(_components.a, {
        href: "#heading-5",
        class: "anchor",
        "aria-label": "Anchor to 有序列表",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to 有序列表"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.ol, {
      class: "fade-in-up",
      children: ["\n", createVNode(_components.li, {
        class: "fade-in-up",
        children: "第一项"
      }), "\n", createVNode(_components.li, {
        class: "fade-in-up",
        children: "第二项"
      }), "\n", createVNode(_components.li, {
        class: "fade-in-up",
        children: "第三项"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "heading-6",
      class: "fade-in-up",
      children: ["格式化文本", createVNode(_components.a, {
        href: "#heading-6",
        class: "anchor",
        "aria-label": "Anchor to 格式化文本",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to 格式化文本"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: ["你可以使用", createVNode(_components.strong, {
        class: "fade-in-up",
        children: "加粗"
      }), "和", createVNode(_components.em, {
        class: "fade-in-up",
        children: "斜体"
      }), "来格式化文本。"]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: createVNode(_components.strong, {
        class: "fade-in-up",
        children: "加粗示例"
      })
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: createVNode(_components.em, {
        class: "fade-in-up",
        children: "斜体示例"
      })
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: createVNode(_components.del, {
        class: "fade-in-up",
        children: "删除线示例"
      })
    }), "\n", createVNode(_components.h2, {
      id: "heading-7",
      class: "fade-in-up",
      children: ["链接", createVNode(_components.a, {
        href: "#heading-7",
        class: "anchor",
        "aria-label": "Anchor to 链接",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to 链接"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: createVNode(_components.a, {
        href: "https://www.example.com",
        class: "fade-in-up",
        rel: "nofollow",
        children: ["这是一个链接", createVNode(_components.span, {
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
    }), "\n", createVNode(_components.h2, {
      id: "heading-8",
      class: "fade-in-up",
      children: ["图片", createVNode(_components.a, {
        href: "#heading-8",
        class: "anchor",
        "aria-label": "Anchor to 图片",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to 图片"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: createVNode(_components.img, {
        src: "/image/image4.jpg",
        alt: "这是一个示例图片"
      })
    }), "\n", createVNode(_components.h2, {
      id: "heading-9",
      class: "fade-in-up",
      children: ["代码", createVNode(_components.a, {
        href: "#heading-9",
        class: "anchor",
        "aria-label": "Anchor to 代码",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to 代码"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: "你可以在文档中插入代码片段："
    }), "\n", createVNode(_components.figure, {
      class: "highlight python fade-in-up",
      children: [createVNode(_components.div, {
        class: "highlight-tools fade-in-up",
        children: [createVNode(_components.div, {
          class: "code-lang fade-in-up",
          children: "PYTHON"
        }), createVNode(_components.div, {
          class: "code-container fade-in-up",
          children: createVNode(_components.label, {
            class: "swap swap-flip btn btn-ghost btn-sm copy-btn",
            for: "59ff59d9-446b-4500-b089-030420f57c07",
            "aria-label": "Copy to clipboard",
            children: [createVNode(_components.span, {
              class: "sr-only fade-in-up",
              children: "Copy to clipboard"
            }), createVNode(_components.input, {
              class: "copy-checkbox fade-in-up",
              type: "checkbox",
              id: "59ff59d9-446b-4500-b089-030420f57c07"
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
                  color: "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                class: "fade-in-up",
                children: "def"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: " hello_world"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "():"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "    print"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                class: "fade-in-up",
                children: "\"Hello, world!\""
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ")"
              })]
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

const url = "src/content/blog/using-mdx%20copy.mdx";
const file = "C:/Projects/MyTest/Astro/github/blob/src/content/blog/using-mdx copy.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Projects/MyTest/Astro/github/blob/src/content/blog/using-mdx copy.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
