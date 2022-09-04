import { c as create_ssr_component, g as subscribe, e as escape, f as add_attribute, o as onDestroy, v as validate_component } from "../../../chunks/index.js";
import { b as tempo, c as bpm, m as metronomeIsPlaying, H as H1 } from "../../../chunks/H1.js";
import { H as H2 } from "../../../chunks/H2.js";
import { P, L as Link, H as H3 } from "../../../chunks/P.js";
import { Howl } from "howler";
import { R as RangeSlider, I as Icon } from "../../../chunks/RangeSlider.js";
import FaSolidPlay from "svelte-icons-pack/fa/FaSolidPlay.js";
import FaSolidStop from "svelte-icons-pack/fa/FaSolidStop.js";
import "../../../chunks/index2.js";
import "../../../chunks/stores.js";
const findTempoMarking = (tempo2) => {
  let marking = "";
  if (tempo2 >= 20 && tempo2 <= 39) {
    marking = "Grave";
  }
  if (tempo2 >= 40 && tempo2 <= 45) {
    marking = "Lento";
  }
  if (tempo2 >= 46 && tempo2 <= 55) {
    marking = "Largo";
  }
  if (tempo2 >= 56 && tempo2 <= 65) {
    marking = "Adagio";
  }
  if (tempo2 >= 66 && tempo2 <= 70) {
    marking = "Adagietto";
  }
  if (tempo2 >= 71 && tempo2 <= 73) {
    marking = "Andante Moderato";
  }
  if (tempo2 >= 74 && tempo2 <= 78) {
    marking = "Andante";
  }
  if (tempo2 >= 79 && tempo2 <= 83) {
    marking = "Andantino";
  }
  if (tempo2 >= 84 && tempo2 <= 85) {
    marking = "Marcia Moderato";
  }
  if (tempo2 >= 86 && tempo2 <= 95) {
    marking = "Moderato";
  }
  if (tempo2 >= 96 && tempo2 <= 110) {
    marking = "Allegretto";
  }
  if (tempo2 >= 111 && tempo2 <= 120) {
    marking = "Allegro Moderato";
  }
  if (tempo2 >= 121 && tempo2 <= 132) {
    marking = "Allegro";
  }
  if (tempo2 >= 133 && tempo2 <= 141) {
    marking = "Vivace";
  }
  if (tempo2 >= 142 && tempo2 <= 151) {
    marking = "Vivacissimmo";
  }
  if (tempo2 >= 152 && tempo2 <= 168) {
    marking = "Alegrissimmo";
  }
  if (tempo2 >= 169 && tempo2 <= 200) {
    marking = "Presto";
  }
  if (tempo2 >= 201 && tempo2 <= 240) {
    marking = "Prestissimo";
  }
  return marking;
};
const Bpm_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".bpm.svelte-1mpsinc{border-radius:50%}",
  map: null
};
const Bpm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let marking;
  let $tempo, $$unsubscribe_tempo;
  $$unsubscribe_tempo = subscribe(tempo, (value) => $tempo = value);
  $$result.css.add(css$1);
  marking = findTempoMarking($tempo);
  $$unsubscribe_tempo();
  return `<div class="${"flex items-center justify-center text-tuner-color text-center border-4 w-64 h-64 mx-auto border-red-900 bpm svelte-1mpsinc"}"><div class="${"flex flex-col"}"><div class="${"text-2xl"}">BPM</div>
		<div class="${"text-6xl"}">${escape($tempo)}</div>
		<div class="${"text-2xl"}">${escape(marking)}</div></div>
</div>`;
});
class Timer {
  constructor({ speed, callback, errorCallback }) {
    this.intervalId = 0;
    this.drift = 0;
    this.startedAt = 0;
    this.expectedTime = 0;
    this.isPlaying = false;
    this.speed = speed;
    this.callback = callback;
    if (errorCallback) {
      this.errorCallback = errorCallback;
    }
  }
  updateSpeed(speed) {
    this.speed = speed;
  }
  start() {
    this.startedAt = Date.now();
    this.isPlaying = true;
    this.round();
  }
  stop() {
    clearTimeout(this.intervalId);
    //! reset all values
    this.intervalId = 0;
    this.drift = 0;
    this.startedAt = 0;
    this.expectedTime = 0;
    this.isPlaying = false;
  }
  round() {
    const speed = this.speed;
    this.intervalId = window.setTimeout(() => {
      this.expectedTime = this.expectedTime + speed;
      const newTime = Date.now();
      const elapsedBySetTimeout = newTime - this.startedAt;
      this.drift = elapsedBySetTimeout - this.expectedTime;
      if (this.drift < 0 && typeof this.errorCallback !== "undefined") {
        console.error("calling errorcallback");
        this.errorCallback(this);
      } else {
        this.callback();
        this.round();
      }
    }, speed - this.drift);
  }
}
const strongMp3 = "data:audio/mpeg;base64,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";
const weakMp3 = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//uQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAAIKABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAS5AAAAAAAACCiL7joZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQZAAAArwQ2R0F4AQAAA0goAABG81ZLBnPAAAAADSDAAAABALl/GMYxjGMYAAAAAAAve79+r464IIDnCRi5nWzvwfeUBA4JwQBAEAQBMHwfB/gg74IAgCAIAmD4Pny4IAgCAIAMHwffggCAYrD/6QfB8H///7+UdoB8yOkDTKihmK3/Njwgy0t32iX6NmOc5dnX6YD80YUIthj1jiCAA0QApCECEwOAqDARq8OpFkAzXSQDB2yQNKIjQxEAfTF7qEOqgLgwtgITH1IKMJQR0xKBHzEiFFMEUAp0pG7JQCN/+YNobhh0hpGFCC4tcujDMxH5TO///4qAUkLLREACuZyq1buO+f///oCmUuSlS4TlKZa1///////+4LkrlfZymHQy/rWf///////////4k/ztRF/XZlUaf6Uxn//////////////4ZrRqNVaWU1qamq0tKDX//CoKmeq0SuzWv6q0FL9Lj7MSyoiIB9GALgIwsA7mA8Ah5gugLKYG8AMGDch0hizo5oY9KNRGI4sDp0zXv6a94gUmV4Cy5hBQMMY//uSZCOP83sUQodj4AAAAA0g4AABDGSfAg7+sgAAADSAAAAEQKD/GDSgdQVAbTAgAHswFwA7MAfALjAJQA5Qt+f//xH///b/////8hEbFN3+fz8sa2+VH/ZQxYhAIwDBMwWCgwnE0w+IQxhO0yWd44b8UzPKKrP+1pcjOiQ6AxMYJpMHpBOAOTMUDXZ6AzoRQMhhQEQkBqBgCAGGWiKnE0HZklq//q//qNv////X/qr//4cVvkVOtBtp1eDTFh2jiMAmEBoSh0FGgziMzdiWOyvcwf4FCMNDB1TFxA1AyKEdPM72h5j2iv/c7lhH/MpfHTjFrhDc+Rr45edk2ZTIz8KExrAoAByYahoYNAWrEaNAzlyHnfwa/8r/iH9Uh/lf89/gsEiY6Y665G3BQBFRTR1IAUAQCJiPw3NHstmXzXo6JacGgMwmC2WmHRMYEJBsPQGj+oa3FAOMIQAwKAy36p4XSOWaZpqOPAViGIYS9zUhBBbCEIxdk7FwOhkbznNM62eRPmmdbPhgTigZLMCsVjJVjV6vCJJgMBhemBADJ6YCAP/7kmR5DfOdFDkDn+wQAAANIAAAARptrP5OPNbIAAA0gAAABAhlkAAQhyYDJpuTByabEAQgmxhAgg55Mghh5MmnsEyaewQIEMYgQIY5MmThzyZO2MIE7YwgQh7IEI9kyd7ZMmnsECCGwYQQxzyaGOeTT1oJp20ECAiZZSl6gFQdYLBCXxbJFVgscS+LZFtk6obQxLVGEBb57woc4ROXQPkzdg5jkQHjVnDGiggVBKtqDqYrXi0lEEGoNRJPYCSIINSa4SgbAeEaIrA2BsTnyqIINTKM5EkSSbEdEokmLrRKEoyehOjIyehOSSYnunJiYrcOjIyW0XGRkuutMTJd7JyYreaWmK3mjoyPnsXGS57VpiYvatOVruLjpa7jS5c9LK5c97K1at6q1at6y5curi5cutq1autq1atrjS1bXGly577Llz31WrVv1WrXesuXCkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+5JklI/2uGw+AxpkkgAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";
const roundedButtonClasses = `
	flex 
	items-center 
	justify-center 
	border-2 
	border-slate-800
	w-16 
	h-16
	rounded-full
	cursor-pointer
	bg-slate-800
	hover:bg-red-900
	hover:border-red-900 
	`;
const ControlBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick } = $$props;
  let { className = "" } = $$props;
  const classes = `${roundedButtonClasses} ${className}`;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<div${add_attribute("class", classes, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const MIN_RANGE_TEMPO = 20;
const MAX_RANGE_TEMPO = 240;
const INITIALIZE_BEATS = 1;
const RESET_BEATS = 0;
const MIN_BPM = 1;
const MAX_BPM = 9;
const MetronomeControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rangeValues;
  let $tempo, $$unsubscribe_tempo;
  let $bpm, $$unsubscribe_bpm;
  let $metronomeIsPlaying, $$unsubscribe_metronomeIsPlaying;
  $$unsubscribe_tempo = subscribe(tempo, (value) => $tempo = value);
  $$unsubscribe_bpm = subscribe(bpm, (value) => $bpm = value);
  $$unsubscribe_metronomeIsPlaying = subscribe(metronomeIsPlaying, (value) => $metronomeIsPlaying = value);
  let countBeats = INITIALIZE_BEATS;
  const resetTimerToInitialState = (timer2) => {
    if (timer2 && $metronomeIsPlaying) {
      timer2.stop();
      countBeats = INITIALIZE_BEATS;
    }
  };
  const isValidTempo = (tempo2) => {
    return tempo2 >= MIN_RANGE_TEMPO && tempo2 <= MAX_RANGE_TEMPO;
  };
  const isValidBpm = (bpm2) => {
    return bpm2 >= MIN_BPM && bpm2 <= MAX_BPM;
  };
  const calculateSpeed = (tempo2) => parseInt(`${6e4 / tempo2}`);
  const strong = new Howl({ src: [strongMp3] });
  const weak = new Howl({ src: [weakMp3] });
  let initialSpeed = calculateSpeed($tempo);
  let timer = new Timer({
    speed: initialSpeed,
    callback: () => {
      if (countBeats === $bpm) {
        //! reset counter of beats
        countBeats = RESET_BEATS;
        weak.play();
      } else {
        strong.play();
      }
      countBeats++;
    },
    errorCallback: (self) => {
      console.error("error occured");
      self.stop();
    }
  });
  onDestroy(() => {
    resetTimerToInitialState(timer);
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    rangeValues = [$tempo];
    $$rendered = `<div class="${"grid grid-rows-2 grid-cols-3 gap-y-0"}"><div class="${"text-center flex flex-row justify-center"}">${validate_component(ControlBtn, "ControlBtn").$$render(
      $$result,
      {
        onClick: () => {
          tempo.update((prev) => {
            const newTempo = prev - 1;
            if (isValidTempo(newTempo)) {
              timer.updateSpeed(calculateSpeed(newTempo));
              return newTempo;
            }
            return prev;
          });
        },
        className: "text-yellow-600 text-5xl hover:text-white"
      },
      {},
      {
        default: () => {
          return `-`;
        }
      }
    )}</div>
	<div class="${"text-center"}">${validate_component(RangeSlider, "RangeSlider").$$render(
      $$result,
      {
        float: false,
        range: true,
        min: MIN_RANGE_TEMPO,
        max: MAX_RANGE_TEMPO,
        hoverable: true,
        id: "tempo_slider",
        values: rangeValues
      },
      {
        values: ($$value) => {
          rangeValues = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
	<div class="${"text-center flex flex-row justify-center"}">${validate_component(ControlBtn, "ControlBtn").$$render(
      $$result,
      {
        onClick: () => {
          tempo.update((prev) => {
            const newTempo = prev + 1;
            if (isValidTempo(newTempo)) {
              timer.updateSpeed(calculateSpeed(newTempo));
              return newTempo;
            }
            return prev;
          });
        },
        className: "text-yellow-600 text-5xl hover:text-white"
      },
      {},
      {
        default: () => {
          return `+`;
        }
      }
    )}</div>
	<div class="${"col-span-full mx-auto"}">${validate_component(ControlBtn, "ControlBtn").$$render(
      $$result,
      {
        onClick: () => {
          if ($metronomeIsPlaying) {
            resetTimerToInitialState(timer);
          } else {
            timer.start();
          }
          metronomeIsPlaying.update((prev) => {
            timer.isPlaying = !timer.isPlaying;
            return !prev;
          });
        }
      },
      {},
      {
        default: () => {
          return `${!$metronomeIsPlaying ? `
				${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: FaSolidPlay,
              size: "1.3rem",
              color: "var(--tuned)",
              title: "play"
            },
            {},
            {}
          )}
			` : `
				${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              src: FaSolidStop,
              size: "1.3rem",
              color: "var(--tuned)",
              title: "stop"
            },
            {},
            {}
          )}
			`}`;
        }
      }
    )}</div></div>
${validate_component(H2, "H2").$$render($$result, { className: "text-center mt-5" }, {}, {
      default: () => {
        return `Beat emphasis`;
      }
    })}
<div class="${"beat_management flex flex-row justify-center"}"><div class="${"text-center flex flex-row justify-center p-5"}">${validate_component(ControlBtn, "ControlBtn").$$render(
      $$result,
      {
        onClick: () => {
          bpm.update((prev) => {
            const newBpm = prev - 1;
            if (isValidBpm(newBpm)) {
              //! reset beats
              countBeats = INITIALIZE_BEATS;
              return newBpm;
            }
            return prev;
          });
        },
        className: "text-yellow-600 text-2xl hover:text-white w-8 h-8"
      },
      {},
      {
        default: () => {
          return `-`;
        }
      }
    )}</div>
	<div class="${"text-xl text-red-900"}">${escape($bpm)}</div>
	<div class="${"text-center flex flex-row justify-center p-5"}">${validate_component(ControlBtn, "ControlBtn").$$render(
      $$result,
      {
        onClick: () => {
          bpm.update((prev) => {
            const newBpm = prev + 1;
            if (isValidBpm(newBpm)) {
              //! reset beats
              countBeats = INITIALIZE_BEATS;
              return newBpm;
            }
            return prev;
          });
        },
        className: "text-yellow-600 text-2xl hover:text-white w-8 h-8"
      },
      {},
      {
        default: () => {
          return `+`;
        }
      }
    )}</div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_tempo();
  $$unsubscribe_bpm();
  $$unsubscribe_metronomeIsPlaying();
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tools.svelte-oj6189{background-color:var(--background-black-red);min-height:300px}",
  map: null
};
const h1ExtraClasses = "p-8";
const h2ExtraClasses = "py-2";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(H1, "H1").$$render($$result, { className: h1ExtraClasses }, {}, {
    default: () => {
      return `Metronome`;
    }
  })}
<section class="${"tools md:text-xl md:text-justify md:tracking-wide bg-red-900 w-full flex flex-col justify-center relative p-8 svelte-oj6189"}">${validate_component(Bpm, "Bpm").$$render($$result, {}, {}, {})}</section>

<section class="${"text-justify md:tracking-wide py-8 w-3/4 md:w-full md:py-8 md:px-4 md:text-2xl"}">${validate_component(MetronomeControls, "MetronomeControls").$$render($$result, {}, {}, {})}

	${validate_component(H2, "H2").$$render($$result, { className: h2ExtraClasses }, {}, {
    default: () => {
      return `What is a metronome?`;
    }
  })}
	${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `A ${validate_component(Link, "Link").$$render(
        $$result,
        {
          url: "https://en.wikipedia.org/wiki/Metronome",
          description: "metronome",
          target: "_blank",
          className: "p-0 text-red-900 hover:text-red-400"
        },
        {},
        {}
      )} from ancient Greek \u03BC\u03AD\u03C4\u03C1\u03BF\u03BD (m\xE9tron, &quot;measure&quot;) and \u03BD\u03BF\u03BC\u03CC\u03C2 (nom\xF3s, &quot;custom&quot;, &quot;melody&quot;) is a device
		that produces an audible click or other sound at a regular interval that can be set by the user,
		typically in beats per minute (BPM). Metronomes may include synchronized visual motion. Musicians
		use the device to practise playing to a regular pulse.

		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `A kind of metronome was among the inventions of Andalusian polymath Abbas ibn Firnas
			(810\u2013887). In 1815, German inventor Johann Maelzel patented his mechanical, wind-up metronome
			as a tool for musicians, under the title &quot;Instrument/Machine for the Improvement of all
			Musical Performance, called Metronome&quot;. In the 20th century, electronic metronomes and
			software metronomes were invented
		`;
        }
      })}`;
    }
  })}
	${validate_component(H2, "H2").$$render($$result, { className: h2ExtraClasses }, {}, {
    default: () => {
      return `How to use this metronome?`;
    }
  })}

	${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `General Use`;
        }
      })}
		You can control this metronome by using the plus/minus signs or the slider to adjust the tempo and
		clicking Play. Clicking on the plus/minus sign or moving the slider to the right/left with increase/decrease
		the tempo.The metronome will use the tempo to generate two kind of sounds onew weak and one strong
		every BPM cycles. The number of BPM is controlled by the Beat emphasis and is explained below.

		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `Beat emphasis`;
        }
      })}

		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `You can use the plus/minus signs in order to increase/decrease the beat emphasis of the
			metronome. The beat emphasis is used to play different sounds according to the length of the
			metronome. You can use this option to control when a strong and a weak sound will be played.
			For example for a beat emphasis equal to 4 every 4 time cycles one weak sound will be played.
			So the scheme will be 3 strong sounds + 1 weak sound = 4 sounds in total. For beat emphasis
			value of two 1 strong sound + 1 weak sound = 2 sounds in total sound and so on.
		`;
        }
      })}

		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `Tempo Markings`;
        }
      })}

		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `A ${validate_component(Link, "Link").$$render(
            $$result,
            {
              url: "https://courses.lumenlearning.com/suny-musicappreciationtheory/chapter/tempo-markings-and-changes/",
              description: "tempo",
              target: "_blank",
              className: "p-0 text-red-900 hover:text-red-400"
            },
            {},
            {}
          )} marking is a word or phrase that gives you the composer\u2019s idea of how fast the music should
			feel. How fast a piece of music feels depends on several different things, including the texture
			and complexity of the music, how often the beat gets divided into faster notes, and how fast the
			beats themselves are (the metronome marking).
		`;
        }
      })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `Also, the same tempo marking can mean quite different things to different composers; if a
			metronome marking is not available, the performer should use a knowledge of the music\u2019s style
			and genre, and musical common sense, to decide on the proper tempo. When possible, listening
			to a professional play the piece can help with tempo decisions, but it is also reasonable for
			different performers to prefer slightly different tempos for the same piece.
		`;
        }
      })}

		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `Common bpm range of tempo markings`;
        }
      })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `<ul class="${"list-disc list-inside marker:text-red-900"}"><li>Grave - between 20 and 39 beats per minute</li>
				<li>Lento - between 40 and 45 beats per minute</li>
				<li>Largo - between 46 and 55 beats per minute</li>
				<li>Adagio - between 56 and 65 beats per minute</li>
				<li>Adagietto - between 66 and 70 beats per minute</li>
				<li>Andante Moderato - between 71 and 73 beats per minute</li>
				<li>Andante - between 74 and 78 beats per minute</li>
				<li>Andantino - between 79 and 83 beats per minute</li>
				<li>Marcia Moderato - between 84 and 85 beats per minute</li>
				<li>Moderato - between 86 and 95 beats per minute</li>
				<li>Allegretto - between 96 and 110 beats per minute</li>
				<li>Allegro Moderato - between 111 and 120 beats per minute</li>
				<li>Allegro - between 121 and 132 beats per minute</li>
				<li>Vivace - between 133 and 141 beats per minute</li>
				<li>Vivacissimmo - between 142 and 151 beats per minute</li>
				<li>Alegrissimmo - between 152 and 168 beats per minute</li>
				<li>Presto - between 169 and 200 beats per minute</li>
				<li>Prestissimo - between 201 and 240 beats per minute</li></ul>`;
        }
      })}

		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `Tips on using a metronome`;
        }
      })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `You can can find some useful tips on using a metronome ${validate_component(Link, "Link").$$render(
            $$result,
            {
              url: "https://prodigies.com/blogs/music-teachers/tips-on-how-to-practice-with-a-metronome",
              description: "here",
              target: "_blank",
              className: "p-0 text-red-900 hover:text-red-400"
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })}

	${validate_component(H2, "H2").$$render($$result, { className: h2ExtraClasses }, {}, {
    default: () => {
      return `Granting Microphone Access`;
    }
  })}

	${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `This tuner will require mic access through your web browser. If you have disabled it in the
		past, then the tuner will not work. It is recommended to be used with Chrome or Firefox browsers

		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Link, "Link").$$render(
            $$result,
            {
              url: "https://support.google.com/chrome/answer/2693767?hl=en-GB&co=GENIE.Platform%3DDesktop",
              description: "Chrome",
              target: "_blank",
              className: "p-0 text-red-900 hover:text-red-400"
            },
            {},
            {}
          )}`;
        }
      })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `Go to Settings -&gt; Site Settings -&gt; Microphone and allow this site to access the microphone.
		`;
        }
      })}
		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Link, "Link").$$render(
            $$result,
            {
              url: "https://support.mozilla.org/en-US/kb/how-manage-your-camera-and-microphone-permissions#w_use-prompts-to-allow-or-block-camera-and-microphone-permissions-for-a-site",
              description: "Firefox",
              target: "_blank",
              className: "p-0 text-red-900 hover:text-red-400"
            },
            {},
            {}
          )}`;
        }
      })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `Go to Preferences -&gt; click Privacy &amp; Security -&gt; Scroll down to permissions and select
			Settings. Search this site and select Allow.
		`;
        }
      })}`;
    }
  })}
</section>`;
});
export {
  Page as default
};
