import { c as create_ssr_component, g as subscribe, f as add_attribute, e as escape } from "./index.js";
import { p as page } from "./stores.js";
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { url = "" } = $$props;
  let { description = "" } = $$props;
  let { target = "" } = $$props;
  let { className = "" } = $$props;
  let classes = `${className}`;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  isActive = false;
  $$unsubscribe_page();
  return `<a${add_attribute("href", url, 0)}${add_attribute("target", target, 0)} class="${[
    escape(classes, true),
    (isActive ? "text-orange-300" : "") + " " + (isActive ? "bg-red-800" : "")
  ].join(" ").trim()}">${escape(description ? description : "")} ${slots.default ? slots.default({}) : ``}
</a>`;
});
const baseClasses = "my-2 text-sm md:text-3xl font-bold uppercase text-red-900";
const H3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let classes = `${baseClasses} ${className}`;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<h2${add_attribute("class", classes, 0)}>${slots.default ? slots.default({}) : ``}</h2>`;
});
const P = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<p class="${"" + escape((className == null ? void 0 : className.length) > 0 ? className : "", true) + " mt-2 tracking-wider"}">${slots.default ? slots.default({}) : ``}</p>`;
});
export {
  H3 as H,
  Link as L,
  P
};
