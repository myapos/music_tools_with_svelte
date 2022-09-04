import { c as create_ssr_component, f as add_attribute } from "./index.js";
const baseClasses = "text-lg md:text-3xl font-bold uppercase text-red-900";
const H2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let classes = `${baseClasses} ${className}`;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<h2${add_attribute("class", classes, 0)}>${slots.default ? slots.default({}) : ``}</h2>`;
});
export {
  H2 as H
};
