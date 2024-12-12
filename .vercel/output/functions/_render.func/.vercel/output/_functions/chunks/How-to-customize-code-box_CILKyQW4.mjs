const id = "How-to-customize-code-box.mdx";
						const collection = "blog";
						const slug = "how-to-customize-code-box";
						const body = "\r\nimport Collapse from \"../../components/blog/collapse.astro\";\r\nimport Diff from \"../../components/blog/diff.astro\";\r\nimport Error from \"../../components/blog/error.astro\";\r\nimport Info from \"../../components/blog/info.astro\";\r\nimport Kbd from \"../../components/blog/kbd.astro\";\r\nimport Success from \"../../components/blog/success.astro\";\r\nimport Warning from \"../../components/blog/warning.astro\";\r\nimport TimeLine from \"../../components/page/TimeLine.astro\";\r\nimport LinkCard from \"../../components/page/LinkCard.astro\";\r\n\r\n## 添加行号\r\n\r\n<Warning>\r\n  此方法仅在 `Shiki` 中可用， `Prism` 无法通过 CSS 直接生成行号。\r\n</Warning>\r\n\r\n<Info>在 `v2.2.1` 更新后默认添加行号。</Info>\r\n\r\n在 `src\\styles\\global.scss` 中添加以下内容：\r\n\r\n```scss\r\npre .line {\r\n  counter-increment: line;\r\n  padding-left: 2.5em;\r\n}\r\n\r\npre :not(:last-child).line::before {\r\n  content: counter(line);\r\n  position: absolute;\r\n  left: 0;\r\n  width: 3em;\r\n  text-align: right;\r\n  margin-right: 10px;\r\n  color: #888;\r\n}\r\n```\r\n\r\n## 改变主题\r\n\r\nFrosti 使用 `Shiki` 来渲染代码框， `Shiki` 已经提供了足够多的主题，不推荐使用 `Prism`。\r\n\r\n有关于 `Shiki` 的主题详见：https://shiki.style/themes\r\n\r\n在 `astro.config.mjs` 中修改内容：\r\n\r\n```js\r\nmarkdown: {\r\n  shikiConfig: {\r\n    themes: {\r\n      light: 'github-light',\r\n      dark: 'github-dark',\r\n    },\r\n  },\r\n},\r\n```\r\n";
						const data = {title:"How to customize code box",description:"Modify the code box style",pubDate:new Date(1721232000000),image:"/image/image1.jpg",categories:["tech"],tags:["Frosti","Blog","Project"]};
						const _internal = {
							type: 'content',
							filePath: "C:/Projects/MyTest/Astro/github/blob/src/content/blog/How-to-customize-code-box.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
