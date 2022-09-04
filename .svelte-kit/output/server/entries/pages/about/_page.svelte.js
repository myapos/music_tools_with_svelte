import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { H as H3, P, L as Link } from "../../../chunks/P.js";
import "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"text-justify md:tracking-wide py-8 w-3/4 md:w-full md:py-8 md:px-4 md:text-2xl"}">${validate_component(H3, "H3").$$render($$result, {}, {}, {
    default: () => {
      return `A few words`;
    }
  })}

	${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `In these pages you can find a collection of tools that are useful for musicians. The tools that
		you can find are constituted of the following
		<ul class="${"list-disc list-inside marker:text-red-900"}"><li>Tuner</li>
			<li>Tone generator</li>
			<li>Metronome</li></ul>
		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `Technical details`;
        }
      })}
		The whole project is built with the
		${validate_component(Link, "Link").$$render(
        $$result,
        {
          url: "https://svelte.dev/",
          description: "svelte",
          target: "_blank",
          className: "p-0 text-red-900 hover:text-red-400"
        },
        {},
        {}
      )}
		framework and the ${validate_component(Link, "Link").$$render(
        $$result,
        {
          url: "https://kit.svelte.dev/",
          description: "SvelteKit",
          target: "_blank",
          className: "p-0 text-red-900 hover:text-red-400"
        },
        {},
        {}
      )}. Here you can find more information about the implementation approach that I followed in
		order to implement this collection of tools.

		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `Tuner`;
        }
      })}
		For the detection of pitch I used the algorithm of ${validate_component(Link, "Link").$$render(
        $$result,
        {
          url: "http://mroy.chez-alice.fr/yin/index.html",
          description: "YIN",
          target: "_blank",
          className: "p-0 text-red-900 hover:text-red-400"
        },
        {},
        {}
      )} and the ${validate_component(Link, "Link").$$render(
        $$result,
        {
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",
          description: "Web Audio API ",
          target: "_blank",
          className: "p-0 text-red-900 hover:text-red-400"
        },
        {},
        {}
      )}
		in Javascript

		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `Tone generator`;
        }
      })}
		For the implementation of the tone genarator I used the ${validate_component(Link, "Link").$$render(
        $$result,
        {
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",
          description: "Web Audio API",
          target: "_blank",
          className: "p-0 text-red-900 hover:text-red-400"
        },
        {},
        {}
      )} in Javascript

		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `Metronome`;
        }
      })}

		For the implementation of the metronme I used a custom implementation of a precise timer.
		Internally it uses the ${validate_component(Link, "Link").$$render(
        $$result,
        {
          url: "https://developer.mozilla.org/en-US/docs/Web/API/setTimeout",
          description: "setTimeout",
          target: "_blank",
          className: "p-0 text-red-900 hover:text-red-400"
        },
        {},
        {}
      )} funciton of Javascript with autocorrection of the native drift in order to keep the tempo steady.
	`;
    }
  })}

	${validate_component(H3, "H3").$$render($$result, {}, {}, {
    default: () => {
      return `Github repo`;
    }
  })}

	${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `You can find the code of the whole project ${validate_component(Link, "Link").$$render(
        $$result,
        {
          url: "https://github.com/myapos/music_tools_with_svelte",
          description: "here",
          target: "_blank",
          className: "p-0 text-red-900 hover:text-red-400"
        },
        {},
        {}
      )}`;
    }
  })}

	${validate_component(H3, "H3").$$render($$result, {}, {}, {
    default: () => {
      return `About me`;
    }
  })}
	${validate_component(P, "P").$$render($$result, { className: "mb-[300px]" }, {}, {
    default: () => {
      return `You can find some information about me in my personal site ${validate_component(Link, "Link").$$render(
        $$result,
        {
          url: "https://myapos.oncrete.gr/",
          description: "here",
          target: "_blank",
          className: "p-0 text-red-900 hover:text-red-400"
        },
        {},
        {}
      )} and in my ${validate_component(Link, "Link").$$render(
        $$result,
        {
          url: "https://codebitshub.com/",
          description: "blog",
          target: "_blank",
          className: "p-0 text-red-900 hover:text-red-400"
        },
        {},
        {}
      )}`;
    }
  })}</section>`;
});
export {
  Page as default
};
