import { c as create_ssr_component, v as validate_component, j as each, f as add_attribute } from "../../../chunks/index.js";
import { H as H3, P, L as Link } from "../../../chunks/P.js";
import "../../../chunks/stores.js";
const usefulLinks = [
  { url: "https://myapos.oncrete.gr/", description: "My personal web page" },
  { url: "https://codebitshub.com/", description: "My personal blog" },
  { url: "https://svelte.dev/", description: "Svelte" },
  {
    url: "https://marcgg.com/blog/2016/11/01/javascript-audio/",
    description: "Generate Sounds Programmatically With Javascript"
  },
  {
    url: "https://medium.com/@jackhuang.wz/building-a-metronome-in-python-c8e16826fe4f",
    description: "Building a metronome"
  },
  {
    url: "https://www.youtube.com/watch?v=D08gOHOjeEk&list=PLXAhCH9FJ8zU2lR4ZvJGianiyVJlqm0z0",
    description: "Javascript metronome"
  },
  { url: "https://www.szynalski.com/tone-generator/", description: "Online Tone Generator" },
  { url: "https://theonlinemetronome.com/online-metronome", description: "The online metronome" }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let numOfLinks = Object.keys(usefulLinks).length;
  return `<section class="${"text-justify md:tracking-wide py-8 w-3/4 md:w-full md:py-8 md:px-4 md:text-2xl"}">${validate_component(H3, "H3").$$render($$result, {}, {}, {
    default: () => {
      return `Useful links`;
    }
  })}
	${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `Here you can find some useful links and articles that I used in order to build these tools`;
    }
  })}

	<hr class="${"mt-2 border-1 border-red-900"}">
	${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `<ul class="${"list-disc list-inside marker:text-red-900"}">${each(usefulLinks, (link, index) => {
        return `<li${add_attribute("class", `${index === numOfLinks - 1 ? "mb-[546px]" : ""}`, 0)}>${validate_component(Link, "Link").$$render(
          $$result,
          {
            url: link.url,
            target: "_blank",
            description: link.description,
            className: "md:text-2xl"
          },
          {},
          {}
        )}
				</li>`;
      })}</ul>`;
    }
  })}</section>`;
});
export {
  Page as default
};
