import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, F as Fragment } from './astro/server_Cqm1NFrI.mjs';
import 'kleur/colors';
import dayjs from 'dayjs';
import { $ as $$CardHorizontal } from './CardHorizontal_CANEe4Zm.mjs';
import { t } from 'i18next';

const $$Astro = createAstro("https://frosti.saroprock.com");
const $$EnvelopeCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EnvelopeCard;
  const {
    title,
    desc,
    image,
    pubDate,
    badge,
    categories,
    tags,
    word,
    time,
    url
  } = Astro2.props;
  const displayDate = dayjs(pubDate).format("ddd MMM DD YYYY");
  const hasTategories = categories && categories.length > 0;
  const hasTags = tags && tags.length > 0;
  const target = "_self";
  return renderTemplate`${renderComponent($$result, "CardHorizontal", $$CardHorizontal, { "title": title, "image": image, "url": url }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative w-full p-6 flex flex-col justify-between"> <a${addAttribute(url, "href")}${addAttribute(target, "target")}> <h1${addAttribute(title, "id")} class="text-4xl m-0 p-2"> ${title} </h1> </a> <div class="m-2">${desc}</div> <div class="m-2 w-full"> <div class="flex w-full items-center justify-between"> <div class="flex w-full items-center gap-2 flex-wrap"> ${displayDate && renderTemplate`<div class="badge badge-neutral">${displayDate}</div>`} ${badge && renderTemplate`<div class="badge badge-primary">${badge}</div>`} </div> ${time && renderTemplate`<div class="badge  whitespace-nowrap">${`${time} ${t("label.readTime")}`}</div>`} </div> <div class="flex items-center justify-between mt-2"> <div class="flex items-center gap-2 flex-wrap"> ${hasTategories ? categories.map((categoroy) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <a${addAttribute(`/blog/categories/${categoroy}`, "href")} class="btn btn-xs btn-accent"> ${categoroy} </a> ` })}`) : renderTemplate`<div class="btn btn-xs btn-secondary btn-disabled rounded-full"> ${t("label.noCategory")} </div>`} ${hasTags ? tags.map((tag) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <a${addAttribute(`/blog/tags/${tag}`, "href")} class="btn btn-xs btn-secondary"> ${tag} </a> ` })}`) : renderTemplate`<div class="btn btn-xs btn-secondary btn-disabled"> ${t("label.noTag")} </div>`} </div> ${word && renderTemplate`<div class="badge whitespace-nowrap">${`${word} ${t("label.wordCount")}`}</div>`} </div> </div> </div> ` })}`;
}, "C:/Projects/MyTest/Astro/github/blob/src/components/EnvelopeCard.astro", void 0);

export { $$EnvelopeCard as $ };
