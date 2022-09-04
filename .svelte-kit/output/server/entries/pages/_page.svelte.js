import { c as create_ssr_component, g as subscribe, e as escape, j as set_store_value, v as validate_component, n as noop } from "../../chunks/index.js";
import { s as stateNoteInfo, a as stateAudioContext, t as tweened, H as H1 } from "../../chunks/H1.js";
import { h as hashFreqNotes, m as minimumThreshold, B as Button } from "../../chunks/Button.js";
import { H as H2 } from "../../chunks/H2.js";
import { P, L as Link, H as H3 } from "../../chunks/P.js";
import "../../chunks/index2.js";
import "../../chunks/stores.js";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
const matchNote = (goalfrequency) => {
  let noteInfo = {
    note: "",
    freq: 0,
    deviation: 0
  };
  console.log("calculating...", goalfrequency);
  //! search in hash map to find the nearest note
  const noteExistInHash = typeof hashFreqNotes[goalfrequency] !== "undefined";
  console.log("noteExistInHash", noteExistInHash);
  if (!noteExistInHash) {
    //! find the nearest note to goalFrequency with deviation
    //! calculate differences from goalFrequency
    //! if the difference is near to zero (threshold applied) then this is our note
    Object.keys(hashFreqNotes).forEach((freq) => {
      const diff = Math.abs(freq - goalfrequency);
      if (diff < minimumThreshold) {
        noteInfo.note = hashFreqNotes[freq];
        noteInfo.freq = freq;
        noteInfo.deviation = goalfrequency - freq;
        return true;
      }
    });
  } else {
    noteInfo.note = hashFreqNotes[goalfrequency];
  }
  const foundNote = noteInfo.note.length > 0;
  if (foundNote) {
    console.log("Nearest note is", noteInfo.note, " with deviation ", noteInfo.deviation);
    //! update the noteInfo to svelte store
    stateNoteInfo.update((prev) => {
      return noteInfo;
    });
  }
  return noteInfo;
};
const difference = (difBuf, yinBuffer) => {
  let j, tau;
  let delta;
  for (tau = 0; tau < yinBuffer.length; tau++) {
    yinBuffer[tau] = 0;
  }
  for (tau = 1; tau < yinBuffer.length; tau++) {
    for (j = 0; j < yinBuffer.length; j++) {
      delta = difBuf[j] - difBuf[j + tau];
      yinBuffer[tau] += delta * delta;
    }
  }
};
const cumulativeMeanNormalizedDifference = (yinBuffer) => {
  var tau;
  yinBuffer[0] = 1;
  //! Very small optimization in comparison with AUBIO
  //! start the running sum with the correct value:
  //! the first value of the yinBuffer
  var runningSum = yinBuffer[1];
  //! yinBuffer[1] is always 1
  yinBuffer[1] = 1;
  //! now start at tau = 2
  for (tau = 2; tau < yinBuffer.length; tau++) {
    runningSum += yinBuffer[tau];
    yinBuffer[tau] *= tau / runningSum;
  }
};
const absoluteThreshold = (yinBuffer, threshold2) => {
  for (var tau = 1; tau < yinBuffer.length; tau++) {
    if (yinBuffer[tau] < threshold2) {
      while (tau + 1 < yinBuffer.length && yinBuffer[tau + 1] < yinBuffer[tau])
        tau++;
      return tau;
    }
  }
  return -1;
};
const parabolicInterpolation = (tauEstimate, yinBuffer) => {
  var s0, s1, s2, newtauEstimate;
  var ar, par;
  var x0 = tauEstimate < 1 ? tauEstimate : tauEstimate - 1;
  var x2 = tauEstimate + 1 < yinBuffer.length ? tauEstimate + 1 : tauEstimate;
  if (x0 == tauEstimate)
    return yinBuffer[tauEstimate] <= yinBuffer[x2] ? tauEstimate : x2;
  if (x2 == tauEstimate)
    return yinBuffer[tauEstimate] <= yinBuffer[x0] ? tauEstimate : x0;
  s0 = yinBuffer[x0];
  s1 = yinBuffer[tauEstimate];
  s2 = yinBuffer[x2];
  ar = Math.pow(tauEstimate - x0, 2) * (s1 - s2) - Math.pow(tauEstimate - x2, 2) * (s1 - s0);
  par = (tauEstimate - x0) * (s1 - s2) - (tauEstimate - x2) * (s1 - s0);
  newtauEstimate = tauEstimate - 0.5 * ar / par;
  return newtauEstimate;
};
const bestlocal = (tauEstimate, yinBuffer) => {
  var i = tauEstimate + 1;
  var n = yinBuffer.length;
  var k = yinBuffer[tauEstimate];
  while (i < n && yinBuffer[i] < k) {
    k = yinBuffer[i];
    i++;
  }
  return i - 1;
};
//! counts how many pitches are calculated. Every length values is reset in zero.
let count = 0;
//! initialization for myMedianFilter. In this array 19 values of pitch is saved and median filtering is applied
let myMedianFilter = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//! initialization for myMedianSortedFilter. This array contains sorted values of myMedianFilter
let myMedianSortedFilter = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let threshold = 0.15;
let pitchInHertz = -1;
function myYIN({ pitchBuf, sampleRate, yinBuffer }) {
  var tauEstimate = -1;
  difference(pitchBuf, yinBuffer);
  cumulativeMeanNormalizedDifference(yinBuffer);
  tauEstimate = absoluteThreshold(yinBuffer, threshold);
  if (tauEstimate != -1) {
    //! step 6
    var localTau = bestlocal(tauEstimate, yinBuffer);
    //! step 5
    var betterTau = parabolicInterpolation(localTau, yinBuffer);
    //! conversion to Hz
    pitchInHertz = sampleRate / betterTau;
    //! do some filtering...median filtering for 1D signal is selected
    myMedianFilter[count] = pitchInHertz;
    if (count < myMedianFilter.length - 1) {
      count++;
    } else {
      count = 0;
    }
    myMedianSortedFilter = myMedianFilter.sort(function(a, b) {
      return a - b;
    });
    //! check sorted values
    //! set goal frequency
    const goalfrequency = myMedianSortedFilter[Math.round(myMedianSortedFilter.length / 2)];
    matchNote(goalfrequency);
    return goalfrequency;
  }
}
function gotStream({ stream, audioContext }) {
  //! Create an AudioNode from the stream.
  window.source = audioContext.createMediaStreamSource(stream);
  var microphone = audioContext.createMediaStreamSource(stream);
  const analyser = audioContext.createAnalyser();
  microphone.connect(analyser);
  var bufferSize = 4096;
  var myPCMProcessingNode = audioContext.createScriptProcessor(bufferSize, 1, 1);
  myPCMProcessingNode.onaudioprocess = function(e) {
    const input = e.inputBuffer.getChannelData(0);
    const yinBuffer = new Array(input.length / 2);
    //! calculate pitch with YIN algorithm
    myYIN({
      pitchBuf: input,
      sampleRate: audioContext.sampleRate,
      yinBuffer
    });
  };
  microphone.connect(myPCMProcessingNode);
  myPCMProcessingNode.connect(audioContext.destination);
}
const didntGetStream = (err) => {
  console.error("Stream generation failed.", err);
};
const audio = () => {
  //! globals for pitch detection
  let audioContext = null;
  window.craicAudioContext = function() {
    return window.webkitAudioContext || window.AudioContext;
  }();
  try {
    audioContext = new craicAudioContext();
    stateAudioContext.update(() => {
      return audioContext;
    });
    //! keep in store audioContext
  } catch (e) {
    alert("Web Audio API is not supported in this browser", e);
  }
  //! get the input audio stream and set up the nodes
  try {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      return gotStream({
        stream,
        audioContext
      });
    }).catch((err) => {
      didntGetStream(err);
    });
  } catch (e) {
    console.error("webkitGetUserMedia threw exception :" + e);
  }
};
const DisplayNote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasNote;
  let $stateNoteInfo, $$unsubscribe_stateNoteInfo;
  $$unsubscribe_stateNoteInfo = subscribe(stateNoteInfo, (value) => $stateNoteInfo = value);
  let { isTuned } = $$props;
  if ($$props.isTuned === void 0 && $$bindings.isTuned && isTuned !== void 0)
    $$bindings.isTuned(isTuned);
  hasNote = typeof $stateNoteInfo.note === "undefined";
  $$unsubscribe_stateNoteInfo();
  return `<div class="${[
    "text-tuner-color text-xl text-center w-2/5 p-2 rounded mx-auto mt-5",
    isTuned ? "text-tuned" : ""
  ].join(" ").trim()}">${escape(hasNote ? "Not detected" : $stateNoteInfo.note)}
</div>`;
});
const Tuner_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".tuned.svelte-99g30b{border-color:var(--tuned) transparent transparent transparent !important}.bottom_25.svelte-99g30b{bottom:10rem}.bottom_50.svelte-99g30b{bottom:-1rem}.note.svelte-99g30b{color:var(--tuner-color)}.note_negative_50.svelte-99g30b{left:0px}.note_negative_25.svelte-99g30b{left:-5px}.note_positive_50.svelte-99g30b{left:90%}.note_positive_25.svelte-99g30b{right:0}.note_0.svelte-99g30b{left:46%;bottom:13rem}.indicator.svelte-99g30b{width:10px;height:160px;border-radius:5px;left:50%;bottom:1rem;transform-origin:bottom}.arc.svelte-99g30b{width:500px;height:200px;border:solid 25px;border-color:var(--tuner-color) transparent transparent transparent;border-radius:75%/300px 300px 0 0;margin-top:2rem}",
  map: null
};
let note_negative_50 = "-50Hz";
let note_negative_25 = "-25Hz";
let note_0 = "0Hz";
let note_positive_25 = "25Hz";
let note_positive_50 = "50Hz";
let tunedDeviation = 10;
//! Hz
const Tuner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let degreesOffset;
  let rotate;
  let isTuned;
  let $rotate, $$unsubscribe_rotate = noop, $$subscribe_rotate = () => ($$unsubscribe_rotate(), $$unsubscribe_rotate = subscribe(rotate, ($$value) => $rotate = $$value), rotate);
  let $stateNoteInfo, $$unsubscribe_stateNoteInfo;
  $$unsubscribe_stateNoteInfo = subscribe(stateNoteInfo, (value) => $stateNoteInfo = value);
  let startedTuning = false;
  let stopTuning = () => {
    if (startedTuning) {
      stateAudioContext.update((ctx) => {
        try {
          ctx.close();
          return ctx;
        } catch (e) {
          console.error("error", e);
        }
      });
    }
  };
  const tweenConfig = { duration: 400, easing: cubicOut };
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      console.log("stateNoteInfo", $stateNoteInfo);
    }
    degreesOffset = 90 / minimumThreshold * $stateNoteInfo.deviation;
    $$subscribe_rotate(rotate = tweened(0, tweenConfig));
    {
      {
        set_store_value(rotate, $rotate = degreesOffset, $rotate);
      }
    }
    isTuned = startedTuning && Math.abs(degreesOffset) < tunedDeviation;
    $$rendered = `<div><div class="${"relative flex flex-col"}"><div class="${["arc svelte-99g30b", isTuned ? "tuned" : ""].join(" ").trim()}"></div>
		<div class="${"indicator absolute bg-tuner-color svelte-99g30b"}" style="${"transform: rotate(" + escape($rotate, true) + "deg);"}"></div>
		<div class="${"note note_negative_50 bottom_50 absolute text-2xl svelte-99g30b"}">${escape(note_negative_50)}</div>
		<div class="${"note note_negative_25 bottom_25 absolute text-2xl svelte-99g30b"}">${escape(note_negative_25)}</div>
		<div class="${"note note_0 absolute text-2xl svelte-99g30b"}">${escape(note_0)}</div>
		<div class="${"note note_positive_25 bottom_25 absolute text-2xl svelte-99g30b"}">${escape(note_positive_25)}</div>
		<div class="${"note note_positive_50 bottom_50 absolute text-2xl svelte-99g30b"}">${escape(note_positive_50)}</div></div>

	${validate_component(Button, "Button").$$render(
      $$result,
      {
        onClick: () => {
          if (startedTuning) {
            //! if it already started and click again stop tuning
            console.log("stop tuning");
            stopTuning();
          } else {
            //! start tuning
            console.log("start tuning");
            audio();
          }
          startedTuning = !startedTuning;
        },
        className: "start text-xl text-center text-tuner-color cursor-pointer\n	w-2/5 p-2 bg-black hover:bg-red-900 hover:text-black\n	rounded mx-auto mt-5"
      },
      {},
      {
        default: () => {
          return `${escape(startedTuning ? "Stop" : "Start")} Tuning!`;
        }
      }
    )}

	${startedTuning ? `${validate_component(DisplayNote, "DisplayNote").$$render(
      $$result,
      { isTuned },
      {
        isTuned: ($$value) => {
          isTuned = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}
</div>`;
  } while (!$$settled);
  $$unsubscribe_rotate();
  $$unsubscribe_stateNoteInfo();
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tools.svelte-wc1eop{background-color:var(--background-black-red);min-height:450px}",
  map: null
};
const h1ExtraClasses = "p-8";
const h2ExtraClasses = "py-2";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(H1, "H1").$$render($$result, { className: h1ExtraClasses }, {}, {
    default: () => {
      return `Instrument tuner`;
    }
  })}

<section class="${"tools md:text-xl md:text-justify md:tracking-wide bg-red-900 w-full flex justify-center items-center relative p-8 svelte-wc1eop"}">${validate_component(Tuner, "Tuner").$$render($$result, {}, {}, {})}</section>

<section class="${"text-justify md:tracking-wide py-8 w-3/4 md:w-full md:py-8 md:px-4 md:text-2xl"}">${validate_component(H2, "H2").$$render($$result, { className: h2ExtraClasses }, {}, {
    default: () => {
      return `What is an electronic tuner?`;
    }
  })}
	${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `In music, an ${validate_component(Link, "Link").$$render(
        $$result,
        {
          url: "https://en.wikipedia.org/wiki/Electronic_tuner",
          description: "electronic tuner",
          target: "_blank",
          className: "p-0 text-red-900 hover:text-red-400"
        },
        {},
        {}
      )}
		is a device that detects and displays the pitch of musical notes played on a musical instrument.
		<span class="${"font-semibold text-red-900"}">&quot;Pitch&quot;</span> is the perceived fundamental frequency of
		a musical note, which is typically measured in Hertz. Simple tuners indicate\u2014typically with an analog
		needle or dial, LEDs, or an LCD screen\u2014whether a pitch is lower, higher, or equal to the desired
		pitch. Since the early 2010s, software applications can turn a smartphone, tablet, or personal computer
		into a tuner.More complex and expensive tuners indicate pitch more precisely. Tuners vary in size
		from units that fit in a pocket to 19&quot; rack-mount units. Instrument technicians and piano tuners
		typically use more expensive, accurate tuners.
	`;
    }
  })}
	${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `The simplest tuners detect and display tuning only for a single pitch\u2014often &quot;A&quot; or &quot;E&quot;\u2014or for a
		small number of pitches, such as the six used in the standard tuning of a guitar (E,A,D,G,B,E).
		More complex tuners offer chromatic tuning for all 12 pitches of the equally tempered octave.
		Some electronic tuners offer additional features, such as pitch calibration, temperament
		options, the sounding of a desired pitch through an amplifier plus speaker, and adjustable
		&quot;read-time&quot; settings that affect how long the tuner takes to measure the pitch of the note.
	`;
    }
  })}
	${validate_component(H2, "H2").$$render($$result, { className: h2ExtraClasses }, {}, {
    default: () => {
      return `How to use an electronic tuner?`;
    }
  })}

	${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `Using a tuner while playing will help you improve your intonation and have a better grasp of the
		characteristics of your instrument. Make sure the integrated microphone has web connectivity
		before using this instrument tuner. Below are some simple steps you can follow in order to use
		this tuner.

		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `STEP 1`;
        }
      })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `Try to play a note with your musical instrument. The tuner will detect the pitch and display
			it. In the same time it will detect the deviation from the pitch that is detected and will
			rotate the needle accordingly. For example playing the A pitch will be matched with 440Hz and
			will place the needle in a vertical position right in the middle of the arc. Additionally,
			when a note is detected with zero deviation the color of the arc and the detected pitch will
			change meaning that the pitch is considered to be detected succesfully.
		`;
        }
      })}
		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `STEP 2`;
        }
      })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `When the tuner detects the note that you are playing, try to adjust your note bringing the
			pitch up or down in order to tune your instrument. When the needle is positioned in the middle
			of the arc then the deviation of the detected pitch is almost zero. That means that the pitch
			is detected with great accuracy and the note is tuned.
		`;
        }
      })}
		${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `STEP 3`;
        }
      })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `Repeat the process for every chord of your instrument. For example for a mandolin to be tuned
			your goal is to tune the instrument to E-A-D-G notes. When every chord is tuned then your
			instrument is tuned.
		`;
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
