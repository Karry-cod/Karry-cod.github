import { F as Fragment, _ as __astro_tag_component__, f as createVNode } from './astro/server_Cqm1NFrI.mjs';
import { $ as $$Image } from './_astro_assets_ClFZqb9A.mjs';
import { b as $$Collapse, c as $$Diff, d as $$Error, $ as $$Warning, a as $$Info, e as $$Success, f as $$Kbd, g as $$TimeLine, h as $$LinkCard } from './LinkCard_at1q76XP.mjs';
import 'clsx';

const frontmatter = {
  "title": "Using mdx in Frosti",
  "description": "Using MDX in Frosti to enrich article content with more components",
  "pubDate": "07 12 2024",
  "image": "/image/image2.jpg",
  "categories": ["tech"],
  "tags": ["Frosti", "Blog", "Project"],
  "totalCharCount": 441,
  "readingTime": 4
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "heading-1",
    "text": "Preface\n                          \n                          Link to Preface\n                        "
  }, {
    "depth": 2,
    "slug": "heading-2",
    "text": "Main text\n                          \n                          Link to Main text\n                        "
  }, {
    "depth": 3,
    "slug": "heading-3",
    "text": "Getting started\n                          \n                          Link to Getting started\n                        "
  }, {
    "depth": 3,
    "slug": "heading-4",
    "text": "Introducing\n                          \n                          Link to Introducing\n                        "
  }, {
    "depth": 3,
    "slug": "heading-5",
    "text": "Example\n                          \n                          Link to Example\n                        "
  }, {
    "depth": 4,
    "slug": "heading-6",
    "text": "Collapse\n                          \n                          Link to Collapse\n                        "
  }, {
    "depth": 4,
    "slug": "heading-7",
    "text": "Diff\n                          \n                          Link to Diff\n                        "
  }, {
    "depth": 4,
    "slug": "heading-8",
    "text": "Error\n                          \n                          Link to Error\n                        "
  }, {
    "depth": 4,
    "slug": "heading-9",
    "text": "Warning\n                          \n                          Link to Warning\n                        "
  }, {
    "depth": 4,
    "slug": "heading-10",
    "text": "Message\n                          \n                          Link to Message\n                        "
  }, {
    "depth": 4,
    "slug": "heading-11",
    "text": "Success\n                          \n                          Link to Success\n                        "
  }, {
    "depth": 4,
    "slug": "heading-12",
    "text": "Kbd\n                          \n                          Link to Kbd\n                        "
  }, {
    "depth": 4,
    "slug": "heading-13",
    "text": "TimeLine\n                          \n                          Link to TimeLine\n                        "
  }, {
    "depth": 4,
    "slug": "heading-14",
    "text": "LinkCard\n                          \n                          Link to LinkCard\n                        "
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
    h3: "h3",
    h4: "h4",
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
      children: ["Preface", createVNode(_components.a, {
        href: "#heading-1",
        class: "anchor",
        "aria-label": "Anchor to Preface",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to Preface"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: ["This article describes how to use the components provided by Frosti in ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "mdx"
      }), " to realize the functions that can’t be realized by normal ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "md"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "heading-2",
      class: "fade-in-up",
      children: ["Main text", createVNode(_components.a, {
        href: "#heading-2",
        class: "anchor",
        "aria-label": "Anchor to Main text",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to Main text"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "heading-3",
      class: "fade-in-up",
      children: ["Getting started", createVNode(_components.a, {
        href: "#heading-3",
        class: "anchor",
        "aria-label": "Anchor to Getting started",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to Getting started"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: ["First you need to create an ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "mdx"
      }), " file, which is as simple as changing the extension to ", createVNode(_components.code, {
        class: "fade-in-up",
        children: ".mdx"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "heading-4",
      class: "fade-in-up",
      children: ["Introducing", createVNode(_components.a, {
        href: "#heading-4",
        class: "anchor",
        "aria-label": "Anchor to Introducing",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to Introducing"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: ["The components provided by Frosti are placed in the ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "/blog"
      }), " and ", createVNode(_components.code, {
        class: "fade-in-up",
        children: "/page"
      }), " folders. Write something under the document properties (frontmatter):"]
    }), "\n", createVNode(_components.figure, {
      class: "highlight astro fade-in-up",
      children: [createVNode(_components.div, {
        class: "highlight-tools fade-in-up",
        children: [createVNode(_components.div, {
          class: "code-lang fade-in-up",
          children: "ASTRO"
        }), createVNode(_components.div, {
          class: "code-container fade-in-up",
          children: createVNode(_components.label, {
            class: "swap swap-flip btn btn-ghost btn-sm copy-btn",
            for: "cfab67fe-e6ab-4f95-96ca-e2bc18ad5506",
            "aria-label": "Copy to clipboard",
            children: [createVNode(_components.span, {
              class: "sr-only fade-in-up",
              children: "Copy to clipboard"
            }), createVNode(_components.input, {
              class: "copy-checkbox fade-in-up",
              type: "checkbox",
              id: "cfab67fe-e6ab-4f95-96ca-e2bc18ad5506"
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
            })]
          })
        }), createVNode(_components.pre, {
          class: "frosti-code code fade-in-up",
          children: createVNode(_components.code, {
            class: "fade-in-up",
            children: [createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "import Collapse from \"../../components/blog/collapse.astro\"; import Diff from"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "\"../../components/blog/diff.astro\"; import Error from"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "\"../../components/blog/error.astro\"; import Info from"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "\"../../components/blog/info.astro\"; import Kbd from"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "\"../../components/blog/kbd.astro\"; import Success from"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "\"../../components/blog/success.astro\"; import Warning from"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "\"../../components/blog/warning.astro\"; import TimeLine from"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "\"../../components/page/TimeLine.astro\"; import LinkCard from"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "\"../../components/page/LinkCard.astro\";"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up"
            })]
          })
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "heading-5",
      class: "fade-in-up",
      children: ["Example", createVNode(_components.a, {
        href: "#heading-5",
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
    }), "\n", createVNode(_components.h4, {
      id: "heading-6",
      class: "fade-in-up",
      children: ["Collapse", createVNode(_components.a, {
        href: "#heading-6",
        class: "anchor",
        "aria-label": "Anchor to Collapse",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to Collapse"
        }), "\n                        "]
      })]
    }), "\n", createVNode($$Collapse, {
      title: "This is an example text.",
      children: createVNode(_components.p, {
        class: "fade-in-up",
        children: "This is the hidden content!"
      })
    }), "\n", createVNode(_components.figure, {
      class: "highlight astro fade-in-up",
      children: [createVNode(_components.div, {
        class: "highlight-tools fade-in-up",
        children: [createVNode(_components.div, {
          class: "code-lang fade-in-up",
          children: "ASTRO"
        }), createVNode(_components.div, {
          class: "code-container fade-in-up",
          children: createVNode(_components.label, {
            class: "swap swap-flip btn btn-ghost btn-sm copy-btn",
            for: "d9b4d93f-7863-47c1-a891-394b135f3a96",
            "aria-label": "Copy to clipboard",
            children: [createVNode(_components.span, {
              class: "sr-only fade-in-up",
              children: "Copy to clipboard"
            }), createVNode(_components.input, {
              class: "copy-checkbox fade-in-up",
              type: "checkbox",
              id: "d9b4d93f-7863-47c1-a891-394b135f3a96"
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
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Collapse"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: " title"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                class: "fade-in-up",
                children: "\"This is an example text.\""
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ">"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "  This is the hidden content!"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "</"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Collapse"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ">"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up"
            })]
          })
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "heading-7",
      class: "fade-in-up",
      children: ["Diff", createVNode(_components.a, {
        href: "#heading-7",
        class: "anchor",
        "aria-label": "Anchor to Diff",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to Diff"
        }), "\n                        "]
      })]
    }), "\n", createVNode($$Diff, {
      r: "/image/r.png",
      l: "/image/l.png"
    }), "\n", createVNode(_components.figure, {
      class: "highlight astro fade-in-up",
      children: [createVNode(_components.div, {
        class: "highlight-tools fade-in-up",
        children: [createVNode(_components.div, {
          class: "code-lang fade-in-up",
          children: "ASTRO"
        }), createVNode(_components.div, {
          class: "code-container fade-in-up",
          children: createVNode(_components.label, {
            class: "swap swap-flip btn btn-ghost btn-sm copy-btn",
            for: "7e433156-3a9b-4701-b0fd-38d7e8af1494",
            "aria-label": "Copy to clipboard",
            children: [createVNode(_components.span, {
              class: "sr-only fade-in-up",
              children: "Copy to clipboard"
            }), createVNode(_components.input, {
              class: "copy-checkbox fade-in-up",
              type: "checkbox",
              id: "7e433156-3a9b-4701-b0fd-38d7e8af1494"
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
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Diff"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: " r"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                class: "fade-in-up",
                children: "\"/image/r.png\""
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: " l"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                class: "fade-in-up",
                children: "\"/image/l.png\""
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: " />"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up"
            })]
          })
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "heading-8",
      class: "fade-in-up",
      children: ["Error", createVNode(_components.a, {
        href: "#heading-8",
        class: "anchor",
        "aria-label": "Anchor to Error",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to Error"
        }), "\n                        "]
      })]
    }), "\n", createVNode($$Error, {
      children: ["Maybe something went wrong? ", createVNode(_components.a, {
        href: "https://www.baidu.com",
        class: "fade-in-up",
        rel: "nofollow",
        children: ["www.baidu.com", createVNode(_components.span, {
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
    }), "\n", createVNode(_components.figure, {
      class: "highlight astro fade-in-up",
      children: [createVNode(_components.div, {
        class: "highlight-tools fade-in-up",
        children: [createVNode(_components.div, {
          class: "code-lang fade-in-up",
          children: "ASTRO"
        }), createVNode(_components.div, {
          class: "code-container fade-in-up",
          children: createVNode(_components.label, {
            class: "swap swap-flip btn btn-ghost btn-sm copy-btn",
            for: "a9f75b1e-eaa3-4c64-bff2-f6507b4c58d4",
            "aria-label": "Copy to clipboard",
            children: [createVNode(_components.span, {
              class: "sr-only fade-in-up",
              children: "Copy to clipboard"
            }), createVNode(_components.input, {
              class: "copy-checkbox fade-in-up",
              type: "checkbox",
              id: "a9f75b1e-eaa3-4c64-bff2-f6507b4c58d4"
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
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Error"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ">Maybe something went wrong? </"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Error"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ">"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up"
            })]
          })
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "heading-9",
      class: "fade-in-up",
      children: ["Warning", createVNode(_components.a, {
        href: "#heading-9",
        class: "anchor",
        "aria-label": "Anchor to Warning",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to Warning"
        }), "\n                        "]
      })]
    }), "\n", createVNode($$Warning, {
      children: "Hey! Watch out for potholes! "
    }), "\n", createVNode(_components.figure, {
      class: "highlight astro fade-in-up",
      children: [createVNode(_components.div, {
        class: "highlight-tools fade-in-up",
        children: [createVNode(_components.div, {
          class: "code-lang fade-in-up",
          children: "ASTRO"
        }), createVNode(_components.div, {
          class: "code-container fade-in-up",
          children: createVNode(_components.label, {
            class: "swap swap-flip btn btn-ghost btn-sm copy-btn",
            for: "f4e7f715-877c-4765-86ee-b8732209ce1b",
            "aria-label": "Copy to clipboard",
            children: [createVNode(_components.span, {
              class: "sr-only fade-in-up",
              children: "Copy to clipboard"
            }), createVNode(_components.input, {
              class: "copy-checkbox fade-in-up",
              type: "checkbox",
              id: "f4e7f715-877c-4765-86ee-b8732209ce1b"
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
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Warning"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ">Hey! Watch out for potholes! </"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Warning"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ">"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up"
            })]
          })
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "heading-10",
      class: "fade-in-up",
      children: ["Message", createVNode(_components.a, {
        href: "#heading-10",
        class: "anchor",
        "aria-label": "Anchor to Message",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to Message"
        }), "\n                        "]
      })]
    }), "\n", createVNode($$Info, {
      children: "It’s just a message. "
    }), "\n", createVNode(_components.figure, {
      class: "highlight astro fade-in-up",
      children: [createVNode(_components.div, {
        class: "highlight-tools fade-in-up",
        children: [createVNode(_components.div, {
          class: "code-lang fade-in-up",
          children: "ASTRO"
        }), createVNode(_components.div, {
          class: "code-container fade-in-up",
          children: createVNode(_components.label, {
            class: "swap swap-flip btn btn-ghost btn-sm copy-btn",
            for: "15e8eb3a-c0a8-4432-b33e-870df4de6706",
            "aria-label": "Copy to clipboard",
            children: [createVNode(_components.span, {
              class: "sr-only fade-in-up",
              children: "Copy to clipboard"
            }), createVNode(_components.input, {
              class: "copy-checkbox fade-in-up",
              type: "checkbox",
              id: "15e8eb3a-c0a8-4432-b33e-870df4de6706"
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
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Info"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ">It's just a message. </"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Info"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ">"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up"
            })]
          })
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "heading-11",
      class: "fade-in-up",
      children: ["Success", createVNode(_components.a, {
        href: "#heading-11",
        class: "anchor",
        "aria-label": "Anchor to Success",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to Success"
        }), "\n                        "]
      })]
    }), "\n", createVNode($$Success, {
      children: "Congratulations on your successful deployment! "
    }), "\n", createVNode(_components.figure, {
      class: "highlight astro fade-in-up",
      children: [createVNode(_components.div, {
        class: "highlight-tools fade-in-up",
        children: [createVNode(_components.div, {
          class: "code-lang fade-in-up",
          children: "ASTRO"
        }), createVNode(_components.div, {
          class: "code-container fade-in-up",
          children: createVNode(_components.label, {
            class: "swap swap-flip btn btn-ghost btn-sm copy-btn",
            for: "656897f6-13da-46a9-98b5-eec91eb049bb",
            "aria-label": "Copy to clipboard",
            children: [createVNode(_components.span, {
              class: "sr-only fade-in-up",
              children: "Copy to clipboard"
            }), createVNode(_components.input, {
              class: "copy-checkbox fade-in-up",
              type: "checkbox",
              id: "656897f6-13da-46a9-98b5-eec91eb049bb"
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
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Success"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ">Congratulations on your successful deployment! </"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Success"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ">"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up"
            })]
          })
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "heading-12",
      class: "fade-in-up",
      children: ["Kbd", createVNode(_components.a, {
        href: "#heading-12",
        class: "anchor",
        "aria-label": "Anchor to Kbd",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to Kbd"
        }), "\n                        "]
      })]
    }), "\n", createVNode(_components.p, {
      class: "fade-in-up",
      children: [createVNode($$Kbd, {
        children: "Ctrl"
      }), " + ", createVNode($$Kbd, {
        children: "C"
      }), " to copy the text."]
    }), "\n", createVNode(_components.figure, {
      class: "highlight astro fade-in-up",
      children: [createVNode(_components.div, {
        class: "highlight-tools fade-in-up",
        children: [createVNode(_components.div, {
          class: "code-lang fade-in-up",
          children: "ASTRO"
        }), createVNode(_components.div, {
          class: "code-container fade-in-up",
          children: createVNode(_components.label, {
            class: "swap swap-flip btn btn-ghost btn-sm copy-btn",
            for: "df8c5bb9-f0c7-4896-8be6-c02e61d3482e",
            "aria-label": "Copy to clipboard",
            children: [createVNode(_components.span, {
              class: "sr-only fade-in-up",
              children: "Copy to clipboard"
            }), createVNode(_components.input, {
              class: "copy-checkbox fade-in-up",
              type: "checkbox",
              id: "df8c5bb9-f0c7-4896-8be6-c02e61d3482e"
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
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Kbd"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ">Ctrl</"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Kbd"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "> + <"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Kbd"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: ">C</"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "Kbd"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "> to copy the text."
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up"
            })]
          })
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "heading-13",
      class: "fade-in-up",
      children: ["TimeLine", createVNode(_components.a, {
        href: "#heading-13",
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
    }), "\n", createVNode($$TimeLine, {
      items: [{
        year: "1984",
        event: "First Macintosh computer"
      }, {
        year: "1998",
        event: "iMac"
      }, {
        year: "2001",
        event: "iPod"
      }, {
        year: "2007",
        event: "iPhone"
      }, {
        year: "2015",
        event: "Apple Watch"
      }]
    }), "\n", createVNode(_components.figure, {
      class: "highlight astro fade-in-up",
      children: [createVNode(_components.div, {
        class: "highlight-tools fade-in-up",
        children: [createVNode(_components.div, {
          class: "code-lang fade-in-up",
          children: "ASTRO"
        }), createVNode(_components.div, {
          class: "code-container fade-in-up",
          children: createVNode(_components.label, {
            class: "swap swap-flip btn btn-ghost btn-sm copy-btn",
            for: "eb1fadae-7072-49f3-8d55-b45c8c4843a7",
            "aria-label": "Copy to clipboard",
            children: [createVNode(_components.span, {
              class: "sr-only fade-in-up",
              children: "Copy to clipboard"
            }), createVNode(_components.input, {
              class: "copy-checkbox fade-in-up",
              type: "checkbox",
              id: "eb1fadae-7072-49f3-8d55-b45c8c4843a7"
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
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "TimeLine"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "  items"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                class: "fade-in-up",
                children: "{["
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "    { "
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "year:"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: " \"1984\", "
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "event:"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: " \""
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "First"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: " Macintosh"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: " computer"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "\" },"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "    { "
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "year:"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: " \"1998\", "
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "event:"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: " \""
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "iMac"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "\" },"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "    { "
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "year:"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: " \"2001\", "
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "event:"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: " \""
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "iPod"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "\" },"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "    { "
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "year:"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: " \"2007\", "
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "event:"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: " \""
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "iPhone"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "\" },"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "    { "
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "year:"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: " \"2015\", "
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "event:"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: " \""
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "Apple"
              }), createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: " Watch"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "\" },"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "  ]}"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "/>"
              })
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up"
            })]
          })
        })]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "heading-14",
      class: "fade-in-up",
      children: ["LinkCard", createVNode(_components.a, {
        href: "#heading-14",
        class: "anchor",
        "aria-label": "Anchor to LinkCard",
        children: ["\n                          ", createVNode(_components.span, {
          class: "anchor-icon",
          "data-pagefind-ignore": "",
          "aria-hidden": "true"
        }), "\n                          ", createVNode(_components.span, {
          class: "sr-only fade-in-up",
          children: "Link to LinkCard"
        }), "\n                        "]
      })]
    }), "\n", createVNode($$LinkCard, {
      title: "Frosti",
      desc: "My blog project!",
      url: "https://github.com/EveSunMaple/Frosti",
      img: "/favicon.ico"
    }), "\n", createVNode(_components.figure, {
      class: "highlight astro fade-in-up",
      children: [createVNode(_components.div, {
        class: "highlight-tools fade-in-up",
        children: [createVNode(_components.div, {
          class: "code-lang fade-in-up",
          children: "ASTRO"
        }), createVNode(_components.div, {
          class: "code-container fade-in-up",
          children: createVNode(_components.label, {
            class: "swap swap-flip btn btn-ghost btn-sm copy-btn",
            for: "4382fdf5-8eea-41bb-bc0f-af85a0cdc3db",
            "aria-label": "Copy to clipboard",
            children: [createVNode(_components.span, {
              class: "sr-only fade-in-up",
              children: "Copy to clipboard"
            }), createVNode(_components.input, {
              class: "copy-checkbox fade-in-up",
              type: "checkbox",
              id: "4382fdf5-8eea-41bb-bc0f-af85a0cdc3db"
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
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                class: "fade-in-up",
                children: "LinkCard"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "  title"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                class: "fade-in-up",
                children: "\"Frosti\""
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "  desc"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                class: "fade-in-up",
                children: "\"My blog project!\""
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "  url"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                class: "fade-in-up",
                children: "\"https://github.com/EveSunMaple/Frosti\""
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                class: "fade-in-up",
                children: "  img"
              }), createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                class: "fade-in-up",
                children: "\"/favicon.ico\""
              })]
            }), "\n", createVNode(_components.span, {
              class: "line fade-in-up",
              children: createVNode(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                class: "fade-in-up",
                children: "/>"
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

const url = "src/content/blog/frosti-mdx.mdx";
const file = "C:/Projects/MyTest/Astro/github/blob/src/content/blog/frosti-mdx.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Projects/MyTest/Astro/github/blob/src/content/blog/frosti-mdx.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
