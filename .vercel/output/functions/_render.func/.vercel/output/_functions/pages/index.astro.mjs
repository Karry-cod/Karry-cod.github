import { $ as $$BaseCard, a as $$BaseLayout } from '../chunks/BaseCard_uqwO2pB_.mjs';
import { _ as __astro_tag_component__, F as Fragment, f as createVNode } from '../chunks/astro/server_Cqm1NFrI.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_ClFZqb9A.mjs';
import '../chunks/LinkCard_at1q76XP.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const frontmatter = {
  "totalCharCount": 435,
  "readingTime": 3
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "heading-1",
    "text": "Hi 你好! 👋\n                          \n                          Link to Hi 你好! 👋\n                        "
  }, {
    "depth": 1,
    "slug": "heading-2",
    "text": "Frosti Introduction\n                          \n                          Link to Frosti Introduction\n                        "
  }, {
    "depth": 2,
    "slug": "heading-3",
    "text": "Welcome to Frosti Blog Template\n                          \n                          Link to Welcome to Frosti Blog Template\n                        "
  }, {
    "depth": 3,
    "slug": "heading-4",
    "text": "🧊 Frosti\n                          \n                          Link to 🧊 Frosti\n                        "
  }, {
    "depth": 3,
    "slug": "heading-5",
    "text": "Why Choose Frosti?\n                          \n                          Link to Why Choose Frosti?\n                        "
  }, {
    "depth": 3,
    "slug": "heading-6",
    "text": "Feature Highlights\n                          \n                          Link to Feature Highlights\n                        "
  }, {
    "depth": 3,
    "slug": "heading-7",
    "text": "How to Get Started?\n                          \n                          Link to How to Get Started?\n                        "
  }, {
    "depth": 3,
    "slug": "heading-8",
    "text": "Future Plans\n                          \n                          Link to Future Plans\n                        "
  }, {
    "depth": 3,
    "slug": "heading-9",
    "text": "Special Thanks\n                          \n                          Link to Special Thanks\n                        "
  }, {
    "depth": 3,
    "slug": "heading-10",
    "text": "Star History\n                          \n                          Link to Star History\n                        "
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
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
  return createVNode($$BaseLayout, {
    title: "Home",
    children: [createVNode($$BaseCard, {
      title: "Home",
      children: createVNode("div", {
        class: "flex",
        children: createVNode("div", {
          class: "p-6",
          children: [createVNode(_components.h1, {
            id: "heading-1",
            class: "fade-in-up",
            children: ["Hi 你好! 👋", createVNode(_components.a, {
              href: "#heading-1",
              class: "anchor",
              "aria-label": "Anchor to Hi 你好! 👋",
              children: ["\n                          ", createVNode(_components.span, {
                class: "anchor-icon",
                "data-pagefind-ignore": "",
                "aria-hidden": "true"
              }), "\n                          ", createVNode(_components.span, {
                class: "sr-only fade-in-up",
                children: "Link to Hi 你好! 👋"
              }), "\n                        "]
            })]
          }), createVNode(_components.p, {
            class: "fade-in-up",
            children: "这是我的个人博客！"
          }), createVNode(_components.p, {
            class: "fade-in-up",
            children: "一个干净，整洁，简约的博客站哦~"
          })]
        })
      })
    }), createVNode($$BaseCard, {
      title: "Home",
      image: "/index.webp",
      children: [createVNode(_components.h1, {
        id: "heading-2",
        class: "fade-in-up",
        children: ["Frosti Introduction", createVNode(_components.a, {
          href: "#heading-2",
          class: "anchor",
          "aria-label": "Anchor to Frosti Introduction",
          children: ["\n                          ", createVNode(_components.span, {
            class: "anchor-icon",
            "data-pagefind-ignore": "",
            "aria-hidden": "true"
          }), "\n                          ", createVNode(_components.span, {
            class: "sr-only fade-in-up",
            children: "Link to Frosti Introduction"
          }), "\n                        "]
        })]
      }), createVNode(_components.hr, {
        class: "fade-in-up"
      }), createVNode(_components.h2, {
        id: "heading-3",
        class: "fade-in-up",
        children: ["Welcome to Frosti Blog Template", createVNode(_components.a, {
          href: "#heading-3",
          class: "anchor",
          "aria-label": "Anchor to Welcome to Frosti Blog Template",
          children: ["\n                          ", createVNode(_components.span, {
            class: "anchor-icon",
            "data-pagefind-ignore": "",
            "aria-hidden": "true"
          }), "\n                          ", createVNode(_components.span, {
            class: "sr-only fade-in-up",
            children: "Link to Welcome to Frosti Blog Template"
          }), "\n                        "]
        })]
      }), createVNode(_components.h3, {
        id: "heading-4",
        class: "fade-in-up",
        children: ["🧊 Frosti", createVNode(_components.a, {
          href: "#heading-4",
          class: "anchor",
          "aria-label": "Anchor to 🧊 Frosti",
          children: ["\n                          ", createVNode(_components.span, {
            class: "anchor-icon",
            "data-pagefind-ignore": "",
            "aria-hidden": "true"
          }), "\n                          ", createVNode(_components.span, {
            class: "sr-only fade-in-up",
            children: "Link to 🧊 Frosti"
          }), "\n                        "]
        })]
      }), createVNode(_components.p, {
        class: "fade-in-up",
        children: createVNode(_components.strong, {
          class: "fade-in-up",
          children: ["A clean, elegant, and fast static blog template! 🚀 Developed with ", createVNode(_components.a, {
            href: "https://astro.build/",
            class: "fade-in-up",
            rel: "nofollow",
            children: ["Astro", createVNode(_components.span, {
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
          }), "!"]
        })
      }), createVNode(_components.p, {
        class: "fade-in-up",
        children: [createVNode(_components.a, {
          href: "https://frosti.saroprock.com",
          class: "fade-in-up",
          rel: "nofollow",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "🖥️ Frosti Demo"
          }), createVNode(_components.span, {
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
        }), "   /   ", createVNode(_components.a, {
          href: "https://github.com/EveSunMaple/Frosti/blob/main/README.zh-CN.md",
          class: "fade-in-up",
          rel: "nofollow",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "🌏 Chinese README"
          }), createVNode(_components.span, {
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
        }), "   /   ", createVNode(_components.a, {
          href: "https://www.saroprock.com",
          class: "fade-in-up",
          rel: "nofollow",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "❤️ My Blog"
          }), createVNode(_components.span, {
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
      }), createVNode(_components.h3, {
        id: "heading-5",
        class: "fade-in-up",
        children: ["Why Choose Frosti?", createVNode(_components.a, {
          href: "#heading-5",
          class: "anchor",
          "aria-label": "Anchor to Why Choose Frosti?",
          children: ["\n                          ", createVNode(_components.span, {
            class: "anchor-icon",
            "data-pagefind-ignore": "",
            "aria-hidden": "true"
          }), "\n                          ", createVNode(_components.span, {
            class: "sr-only fade-in-up",
            children: "Link to Why Choose Frosti?"
          }), "\n                        "]
        })]
      }), createVNode(_components.ul, {
        class: "fade-in-up",
        children: ["\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "Lightning-fast Access Speed and Excellent SEO"
          }), ": Your blog content spreads quickly and efficiently."]
        }), "\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "View Transition Animations"
          }), ": Smooth visual experience with Swup."]
        }), "\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "Integrated Sidebar"
          }), ": Includes social info cards, theme switch, back-to-top button, and persistent article directory."]
        }), "\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "Powerful Search Functionality"
          }), ": Easily search articles using pagefind."]
        }), "\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "Day/Night Mode"
          }), ": Adapt to different reading environments."]
        }), "\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "Rich Components"
          }), ": Collapsible pages, link cards, timeline components, various alerts, code block copy button, image comparison, and end-of-article copyright information."]
        }), "\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "Comment System"
          }), ": Built with ", createVNode(_components.a, {
            href: "https://waline.js.org/",
            class: "fade-in-up",
            rel: "nofollow",
            children: ["Waline", createVNode(_components.span, {
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
          }), " for interactive discussions."]
        }), "\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "Responsive Design"
          }), ": Crafted with ", createVNode(_components.a, {
            href: "https://tailwindcss.com/",
            class: "fade-in-up",
            rel: "nofollow",
            children: ["Tailwind CSS", createVNode(_components.span, {
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
          }), " and ", createVNode(_components.a, {
            href: "https://daisyui.com/",
            class: "fade-in-up",
            rel: "nofollow",
            children: ["daisyUI", createVNode(_components.span, {
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
          }), " to fit different devices."]
        }), "\n"]
      }), createVNode(_components.h3, {
        id: "heading-6",
        class: "fade-in-up",
        children: ["Feature Highlights", createVNode(_components.a, {
          href: "#heading-6",
          class: "anchor",
          "aria-label": "Anchor to Feature Highlights",
          children: ["\n                          ", createVNode(_components.span, {
            class: "anchor-icon",
            "data-pagefind-ignore": "",
            "aria-hidden": "true"
          }), "\n                          ", createVNode(_components.span, {
            class: "sr-only fade-in-up",
            children: "Link to Feature Highlights"
          }), "\n                        "]
        })]
      }), createVNode(_components.ul, {
        class: "fade-in-up",
        children: ["\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "Easy Installation and Use"
          }), ": Install with just one command, customize everything in ", createVNode(_components.code, {
            class: "fade-in-up",
            children: "consts.ts"
          }), "."]
        }), "\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "Variety of Article Components"
          }), ": Enhance the presentation of your blog content."]
        }), "\n"]
      }), createVNode(_components.h3, {
        id: "heading-7",
        class: "fade-in-up",
        children: ["How to Get Started?", createVNode(_components.a, {
          href: "#heading-7",
          class: "anchor",
          "aria-label": "Anchor to How to Get Started?",
          children: ["\n                          ", createVNode(_components.span, {
            class: "anchor-icon",
            "data-pagefind-ignore": "",
            "aria-hidden": "true"
          }), "\n                          ", createVNode(_components.span, {
            class: "sr-only fade-in-up",
            children: "Link to How to Get Started?"
          }), "\n                        "]
        })]
      }), createVNode(_components.ol, {
        class: "fade-in-up",
        children: ["\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: ["\n", createVNode(_components.p, {
            class: "fade-in-up",
            children: createVNode(_components.strong, {
              class: "fade-in-up",
              children: "Install Frosti"
            })
          }), "\n", createVNode(_components.p, {
            class: "fade-in-up",
            children: "Simply run the following command in your terminal:"
          }), "\n", createVNode(_components.figure, {
            class: "highlight sh fade-in-up",
            children: [createVNode(_components.div, {
              class: "highlight-tools fade-in-up",
              children: [createVNode(_components.div, {
                class: "code-lang fade-in-up",
                children: "SH"
              }), createVNode(_components.div, {
                class: "code-container fade-in-up",
                children: createVNode(_components.label, {
                  class: "swap swap-flip btn btn-ghost btn-sm copy-btn",
                  for: "a7bb3541-5c02-4b81-9c4c-cf4abc63f733",
                  "aria-label": "Copy to clipboard",
                  children: [createVNode(_components.span, {
                    class: "sr-only fade-in-up",
                    children: "Copy to clipboard"
                  }), createVNode(_components.input, {
                    class: "copy-checkbox fade-in-up",
                    type: "checkbox",
                    id: "a7bb3541-5c02-4b81-9c4c-cf4abc63f733"
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
                  children: createVNode(_components.div, {
                    class: "line fade-in-up",
                    children: "1"
                  })
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
                      children: "npm"
                    }), createVNode(_components.span, {
                      style: {
                        color: "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      class: "fade-in-up",
                      children: " create"
                    }), createVNode(_components.span, {
                      style: {
                        color: "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      class: "fade-in-up",
                      children: " astro@latest"
                    }), createVNode(_components.span, {
                      style: {
                        color: "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      class: "fade-in-up",
                      children: " --"
                    }), createVNode(_components.span, {
                      style: {
                        color: "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      class: "fade-in-up",
                      children: " --template"
                    }), createVNode(_components.span, {
                      style: {
                        color: "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      class: "fade-in-up",
                      children: " EveSunMaple/Frosti"
                    })]
                  }), "\n", createVNode(_components.span, {
                    class: "line fade-in-up"
                  })]
                })
              })]
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: ["\n", createVNode(_components.p, {
            class: "fade-in-up",
            children: createVNode(_components.strong, {
              class: "fade-in-up",
              children: "Configure the Comment System"
            })
          }), "\n", createVNode(_components.p, {
            class: "fade-in-up",
            children: ["Set up ", createVNode(_components.a, {
              href: "https://waline.js.org/",
              class: "fade-in-up",
              rel: "nofollow",
              children: ["Waline", createVNode(_components.span, {
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
            }), " to enable comments. Check ", createVNode(_components.code, {
              class: "fade-in-up",
              children: "src\\components\\Comment.astro"
            }), " for details."]
          }), "\n"]
        }), "\n"]
      }), createVNode(_components.h3, {
        id: "heading-8",
        class: "fade-in-up",
        children: ["Future Plans", createVNode(_components.a, {
          href: "#heading-8",
          class: "anchor",
          "aria-label": "Anchor to Future Plans",
          children: ["\n                          ", createVNode(_components.span, {
            class: "anchor-icon",
            "data-pagefind-ignore": "",
            "aria-hidden": "true"
          }), "\n                          ", createVNode(_components.span, {
            class: "sr-only fade-in-up",
            children: "Link to Future Plans"
          }), "\n                        "]
        })]
      }), createVNode(_components.ul, {
        class: "fade-in-up",
        children: ["\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "Integrate Headless CMS"
          }), "."]
        }), "\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: [createVNode(_components.strong, {
            class: "fade-in-up",
            children: "Fix Known Style Bugs"
          }), "."]
        }), "\n", createVNode(_components.li, {
          class: "fade-in-up",
          children: createVNode(_components.strong, {
            class: "fade-in-up",
            children: "More Features Coming Soon…"
          })
        }), "\n"]
      }), createVNode(_components.h3, {
        id: "heading-9",
        class: "fade-in-up",
        children: ["Special Thanks", createVNode(_components.a, {
          href: "#heading-9",
          class: "anchor",
          "aria-label": "Anchor to Special Thanks",
          children: ["\n                          ", createVNode(_components.span, {
            class: "anchor-icon",
            "data-pagefind-ignore": "",
            "aria-hidden": "true"
          }), "\n                          ", createVNode(_components.span, {
            class: "sr-only fade-in-up",
            children: "Link to Special Thanks"
          }), "\n                        "]
        })]
      }), createVNode(_components.p, {
        class: "fade-in-up",
        children: ["A big thanks to @", createVNode(_components.a, {
          href: "https://github.com/saicaca",
          class: "fade-in-up",
          rel: "nofollow",
          children: ["Saicaca", createVNode(_components.span, {
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
        }), " and @", createVNode(_components.a, {
          href: "https://github.com/WRXinYue",
          class: "fade-in-up",
          rel: "nofollow",
          children: ["WRXinYue", createVNode(_components.span, {
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
        }), " for their inspiration and help with Frosti."]
      }), createVNode(_components.h3, {
        id: "heading-10",
        class: "fade-in-up",
        children: ["Star History", createVNode(_components.a, {
          href: "#heading-10",
          class: "anchor",
          "aria-label": "Anchor to Star History",
          children: ["\n                          ", createVNode(_components.span, {
            class: "anchor-icon",
            "data-pagefind-ignore": "",
            "aria-hidden": "true"
          }), "\n                          ", createVNode(_components.span, {
            class: "sr-only fade-in-up",
            children: "Link to Star History"
          }), "\n                        "]
        })]
      }), createVNode(_components.p, {
        class: "fade-in-up",
        children: createVNode(_components.img, {
          src: "https://api.star-history.com/svg?repos=EveSunMaple/Frosti&type=Date",
          alt: "Star History Chart"
        })
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
const url = "";
const file = "C:/Projects/MyTest/Astro/github/blob/src/pages/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Projects/MyTest/Astro/github/blob/src/pages/index.mdx";
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
