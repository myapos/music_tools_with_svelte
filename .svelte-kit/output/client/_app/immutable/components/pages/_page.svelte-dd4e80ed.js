import{S as ot,i as rt,s as at,k as F,q as v,l as V,m as W,r as b,h as f,n as q,U as B,b as $,D as _,u as St,A as J,Y as kt,a as N,v as k,c as D,w as x,p as mt,x as T,E as It,f as w,g as Nt,t as y,d as Dt,y as I,a2 as dt,I as At,J as Et,K as Mt,a3 as Ht}from"../../chunks/index-80463ac2.js";import{s as it,a as xt,t as Pt,H as zt}from"../../chunks/H1-934753b9.js";import{h as X,m as Tt,B as Ct}from"../../chunks/Button-4d1fee33.js";import{c as Gt}from"../../chunks/index-ce4027e4.js";import{H as tt}from"../../chunks/H2-1532e9cf.js";import{P as O,H as Q}from"../../chunks/P-c9d8bdf0.js";import{L as lt}from"../../chunks/Link-4467ac7c.js";import"../../chunks/singletons-bf602f9c.js";import"../../chunks/stores-28365da6.js";const jt=s=>{let e={note:"",freq:0,deviation:0};console.log("calculating...",s);//! search in hash map to find the nearest note
const t=typeof X[s]<"u";if(console.log("noteExistInHash",t),t)e.note=X[s];else{//! find the nearest note to goalFrequency with deviation
//! calculate differences from goalFrequency
//! if the difference is near to zero (threshold applied) then this is our note
Object.keys(X).forEach(o=>{if(Math.abs(o-s)<Tt)return e.note=X[o],e.freq=o,e.deviation=s-o,!0})}if(e.note.length>0){console.log("Nearest note is",e.note," with deviation ",e.deviation);//! update the noteInfo to svelte store
it.update(o=>e)}return e},Ft=(s,e)=>{let t,n,o;for(n=0;n<e.length;n++)e[n]=0;for(n=1;n<e.length;n++)for(t=0;t<e.length;t++)o=s[t]-s[t+n],e[n]+=o*o},Vt=s=>{var e;s[0]=1;//! Very small optimization in comparison with AUBIO
//! start the running sum with the correct value:
//! the first value of the yinBuffer
var t=s[1];//! yinBuffer[1] is always 1
s[1]=1;//! now start at tau = 2
for(e=2;e<s.length;e++)t+=s[e],s[e]*=e/t},Wt=(s,e)=>{for(var t=1;t<s.length;t++)if(s[t]<e){for(;t+1<s.length&&s[t+1]<s[t];)t++;return t}return-1},qt=(s,e)=>{var t,n,o,c,r,p,l=s<1?s:s-1,h=s+1<e.length?s+1:s;return l==s?e[s]<=e[h]?s:h:h==s?e[s]<=e[l]?s:l:(t=e[l],n=e[s],o=e[h],r=Math.pow(s-l,2)*(n-o)-Math.pow(s-h,2)*(n-t),p=(s-l)*(n-o)-(s-h)*(n-t),c=s-.5*r/p,c)},Lt=(s,e)=>{for(var t=s+1,n=e.length,o=e[s];t<n&&e[t]<o;)o=e[t],t++;return t-1};//! counts how many pitches are calculated. Every length values is reset in zero.
let Z=0;//! initialization for myMedianFilter. In this array 19 values of pitch is saved and median filtering is applied
let et=[0,0,0,0,0,0,0,0,0];//! initialization for myMedianSortedFilter. This array contains sorted values of myMedianFilter
let nt=[0,0,0,0,0,0,0,0,0],Ut=.15,$t=-1;function Ot({pitchBuf:s,sampleRate:e,yinBuffer:t}){var n=-1;if(Ft(s,t),Vt(t),n=Wt(t,Ut),n!=-1){//! step 6
var o=Lt(n,t);//! step 5
var c=qt(o,t);//! conversion to Hz
$t=e/c;//! do some filtering...median filtering for 1D signal is selected
et[Z]=$t,Z<et.length-1?Z++:Z=0,nt=et.sort(function(p,l){return p-l});//! check sorted values
//! set goal frequency
const r=nt[Math.round(nt.length/2)];return jt(r),r}}function Rt({stream:s,audioContext:e}){//! Create an AudioNode from the stream.
window.source=e.createMediaStreamSource(s);var t=e.createMediaStreamSource(s);const n=e.createAnalyser();t.connect(n);var o=4096,c=e.createScriptProcessor(o,1,1);c.onaudioprocess=function(r){const p=r.inputBuffer.getChannelData(0),l=new Array(p.length/2);//! calculate pitch with YIN algorithm
Ot({pitchBuf:p,sampleRate:e.sampleRate,yinBuffer:l})},t.connect(c),c.connect(e.destination)}const Yt=s=>{console.error("Stream generation failed.",s)},Jt=()=>{//! globals for pitch detection
let s=null;window.craicAudioContext=function(){return window.webkitAudioContext||window.AudioContext}();try{s=new craicAudioContext,xt.update(()=>s);//! keep in store audioContext
}catch(e){alert("Web Audio API is not supported in this browser",e)}//! get the input audio stream and set up the nodes
try{navigator.mediaDevices.getUserMedia({audio:!0}).then(e=>Rt({stream:e,audioContext:s})).catch(e=>{Yt(e)})}catch(e){console.error("webkitGetUserMedia threw exception :"+e)}};function Kt(s){let e,t=(s[2]?"Not detected":s[1].note)+"",n;return{c(){e=F("div"),n=v(t),this.h()},l(o){e=V(o,"DIV",{class:!0});var c=W(e);n=b(c,t),c.forEach(f),this.h()},h(){q(e,"class","text-tuner-color text-xl text-center w-2/5 p-2 rounded mx-auto mt-5"),B(e,"text-tuned",s[0])},m(o,c){$(o,e,c),_(e,n)},p(o,[c]){c&6&&t!==(t=(o[2]?"Not detected":o[1].note)+"")&&St(n,t),c&1&&B(e,"text-tuned",o[0])},i:J,o:J,d(o){o&&f(e)}}}function Qt(s,e,t){let n,o;kt(s,it,r=>t(1,o=r));let{isTuned:c}=e;return s.$$set=r=>{"isTuned"in r&&t(0,c=r.isTuned)},s.$$.update=()=>{s.$$.dirty&2&&t(2,n=typeof o.note>"u")},[c,o,n]}class Xt extends ot{constructor(e){super(),rt(this,e,Qt,Kt,at,{isTuned:0})}}function Zt(s){let e=s[0]?"Stop":"Start",t,n;return{c(){t=v(e),n=v(" Tuning!")},l(o){t=b(o,e),n=b(o," Tuning!")},m(o,c){$(o,t,c),$(o,n,c)},p(o,c){c&1&&e!==(e=o[0]?"Stop":"Start")&&St(t,e)},d(o){o&&f(t),o&&f(n)}}}function gt(s){let e,t,n;function o(r){s[9](r)}let c={};return s[1]!==void 0&&(c.isTuned=s[1]),e=new Xt({props:c}),At.push(()=>Et(e,"isTuned",o)),{c(){k(e.$$.fragment)},l(r){x(e.$$.fragment,r)},m(r,p){T(e,r,p),n=!0},p(r,p){const l={};!t&&p&2&&(t=!0,l.isTuned=r[1],Mt(()=>t=!1)),e.$set(l)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){y(e.$$.fragment,r),n=!1},d(r){I(e,r)}}}function Bt(s){let e,t,n,o,c,r,p,l,h,i,d,M,S,a,m,E,j,U,G,L,u,g,H,R,Y,K;g=new Ct({props:{onClick:s[8],className:`start text-xl text-center text-tuner-color cursor-pointer
	w-2/5 p-2 bg-black hover:bg-red-900 hover:text-black
	rounded mx-auto mt-5`,$$slots:{default:[Zt]},$$scope:{ctx:s}}});let A=s[0]&&gt(s);return{c(){e=F("div"),t=F("div"),n=F("div"),o=N(),c=F("div"),r=N(),p=F("div"),l=v(_t),h=N(),i=F("div"),d=v(wt),M=N(),S=F("div"),a=v(vt),m=N(),E=F("div"),j=v(bt),U=N(),G=F("div"),L=v(yt),u=N(),k(g.$$.fragment),H=N(),A&&A.c(),this.h()},l(z){e=V(z,"DIV",{});var C=W(e);t=V(C,"DIV",{class:!0});var P=W(t);n=V(P,"DIV",{class:!0}),W(n).forEach(f),o=D(P),c=V(P,"DIV",{class:!0,style:!0}),W(c).forEach(f),r=D(P),p=V(P,"DIV",{class:!0});var ct=W(p);l=b(ct,_t),ct.forEach(f),h=D(P),i=V(P,"DIV",{class:!0});var ut=W(i);d=b(ut,wt),ut.forEach(f),M=D(P),S=V(P,"DIV",{class:!0});var ft=W(S);a=b(ft,vt),ft.forEach(f),m=D(P),E=V(P,"DIV",{class:!0});var pt=W(E);j=b(pt,bt),pt.forEach(f),U=D(P),G=V(P,"DIV",{class:!0});var ht=W(G);L=b(ht,yt),ht.forEach(f),P.forEach(f),u=D(C),x(g.$$.fragment,C),H=D(C),A&&A.l(C),C.forEach(f),this.h()},h(){q(n,"class","arc svelte-99g30b"),B(n,"tuned",s[1]),q(c,"class","indicator absolute bg-tuner-color svelte-99g30b"),mt(c,"transform","rotate("+s[3]+"deg)"),q(p,"class","note note_negative_50 bottom_50 absolute text-2xl svelte-99g30b"),q(i,"class","note note_negative_25 bottom_25 absolute text-2xl svelte-99g30b"),q(S,"class","note note_0 absolute text-2xl svelte-99g30b"),q(E,"class","note note_positive_25 bottom_25 absolute text-2xl svelte-99g30b"),q(G,"class","note note_positive_50 bottom_50 absolute text-2xl svelte-99g30b"),q(t,"class","relative flex flex-col")},m(z,C){$(z,e,C),_(e,t),_(t,n),_(t,o),_(t,c),_(t,r),_(t,p),_(p,l),_(t,h),_(t,i),_(i,d),_(t,M),_(t,S),_(S,a),_(t,m),_(t,E),_(E,j),_(t,U),_(t,G),_(G,L),_(e,u),T(g,e,null),_(e,H),A&&A.m(e,null),R=!0,Y||(K=It(n,"click",s[5]),Y=!0)},p(z,[C]){C&2&&B(n,"tuned",z[1]),(!R||C&8)&&mt(c,"transform","rotate("+z[3]+"deg)");const P={};C&1&&(P.onClick=z[8]),C&2049&&(P.$$scope={dirty:C,ctx:z}),g.$set(P),z[0]?A?(A.p(z,C),C&1&&w(A,1)):(A=gt(z),A.c(),w(A,1),A.m(e,null)):A&&(Nt(),y(A,1,1,()=>{A=null}),Dt())},i(z){R||(w(g.$$.fragment,z),w(A),R=!0)},o(z){y(g.$$.fragment,z),y(A),R=!1},d(z){z&&f(e),I(g),A&&A.d(),Y=!1,K()}}}let _t="-50Hz",wt="-25Hz",vt="0Hz",bt="25Hz",yt="50Hz",te=10;//! Hz
function ee(s,e,t){let n,o,c,r,p=J,l=()=>(p(),p=Ht(o,E=>t(3,r=E)),o),h;kt(s,it,E=>t(7,h=E)),s.$$.on_destroy.push(()=>p());let i=!1,d=()=>{i&&xt.update(E=>{try{return E.close(),E}catch(j){console.error("error",j)}})};const M={duration:400,easing:Gt},S=()=>{dt(o,r=45,r)},a=()=>{if(i){//! if it already started and click again stop tuning
console.log("stop tuning"),d()}else{//! start tuning
console.log("start tuning"),Jt()}t(0,i=!i)};function m(E){c=E,t(1,c),t(0,i),t(6,n),t(7,h)}return s.$$.update=()=>{s.$$.dirty&128&&console.log("stateNoteInfo",h),s.$$.dirty&128&&t(6,n=90/Tt*h.deviation),s.$$.dirty&64&&dt(o,r=n,r),s.$$.dirty&65&&t(1,c=i&&Math.abs(n)<te)},l(t(2,o=Pt(0,M))),[i,c,o,r,d,S,n,h,a,m]}class ne extends ot{constructor(e){super(),rt(this,e,ee,Bt,at,{})}}function se(s){let e;return{c(){e=v("Instrument tuner")},l(t){e=b(t,"Instrument tuner")},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}function oe(s){let e;return{c(){e=v("What is an electronic tuner?")},l(t){e=b(t,"What is an electronic tuner?")},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}function re(s){let e,t,n,o,c,r,p;return t=new lt({props:{url:"https://en.wikipedia.org/wiki/Electronic_tuner",description:"electronic tuner",target:"_blank",className:"p-0 text-red-900 hover:text-red-400"}}),{c(){e=v("In music, an "),k(t.$$.fragment),n=v(`
		is a device that detects and displays the pitch of musical notes played on a musical instrument.
		`),o=F("span"),c=v('"Pitch"'),r=v(` is the perceived fundamental frequency of
		a musical note, which is typically measured in Hertz. Simple tuners indicate\u2014typically with an analog
		needle or dial, LEDs, or an LCD screen\u2014whether a pitch is lower, higher, or equal to the desired
		pitch. Since the early 2010s, software applications can turn a smartphone, tablet, or personal computer
		into a tuner.More complex and expensive tuners indicate pitch more precisely. Tuners vary in size
		from units that fit in a pocket to 19" rack-mount units. Instrument technicians and piano tuners
		typically use more expensive, accurate tuners.`),this.h()},l(l){e=b(l,"In music, an "),x(t.$$.fragment,l),n=b(l,`
		is a device that detects and displays the pitch of musical notes played on a musical instrument.
		`),o=V(l,"SPAN",{class:!0});var h=W(o);c=b(h,'"Pitch"'),h.forEach(f),r=b(l,` is the perceived fundamental frequency of
		a musical note, which is typically measured in Hertz. Simple tuners indicate\u2014typically with an analog
		needle or dial, LEDs, or an LCD screen\u2014whether a pitch is lower, higher, or equal to the desired
		pitch. Since the early 2010s, software applications can turn a smartphone, tablet, or personal computer
		into a tuner.More complex and expensive tuners indicate pitch more precisely. Tuners vary in size
		from units that fit in a pocket to 19" rack-mount units. Instrument technicians and piano tuners
		typically use more expensive, accurate tuners.`),this.h()},h(){q(o,"class","font-semibold text-red-900")},m(l,h){$(l,e,h),T(t,l,h),$(l,n,h),$(l,o,h),_(o,c),$(l,r,h),p=!0},p:J,i(l){p||(w(t.$$.fragment,l),p=!0)},o(l){y(t.$$.fragment,l),p=!1},d(l){l&&f(e),I(t,l),l&&f(n),l&&f(o),l&&f(r)}}}function ae(s){let e;return{c(){e=v(`The simplest tuners detect and display tuning only for a single pitch\u2014often "A" or "E"\u2014or for a
		small number of pitches, such as the six used in the standard tuning of a guitar (E,A,D,G,B,E).
		More complex tuners offer chromatic tuning for all 12 pitches of the equally tempered octave.
		Some electronic tuners offer additional features, such as pitch calibration, temperament
		options, the sounding of a desired pitch through an amplifier plus speaker, and adjustable
		"read-time" settings that affect how long the tuner takes to measure the pitch of the note.`)},l(t){e=b(t,`The simplest tuners detect and display tuning only for a single pitch\u2014often "A" or "E"\u2014or for a
		small number of pitches, such as the six used in the standard tuning of a guitar (E,A,D,G,B,E).
		More complex tuners offer chromatic tuning for all 12 pitches of the equally tempered octave.
		Some electronic tuners offer additional features, such as pitch calibration, temperament
		options, the sounding of a desired pitch through an amplifier plus speaker, and adjustable
		"read-time" settings that affect how long the tuner takes to measure the pitch of the note.`)},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}function ie(s){let e;return{c(){e=v("How to use an electronic tuner?")},l(t){e=b(t,"How to use an electronic tuner?")},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}function le(s){let e;return{c(){e=v("STEP 1")},l(t){e=b(t,"STEP 1")},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}function ce(s){let e;return{c(){e=v(`Try to play a note with your musical instrument. The tuner will detect the pitch and display
			it. In the same time it will detect the deviation from the pitch that is detected and will
			rotate the needle accordingly. For example playing the A pitch will be matched with 440Hz and
			will place the needle in a vertical position right in the middle of the arc. Additionally,
			when a note is detected with zero deviation the color of the arc and the detected pitch will
			change meaning that the pitch is considered to be detected succesfully.`)},l(t){e=b(t,`Try to play a note with your musical instrument. The tuner will detect the pitch and display
			it. In the same time it will detect the deviation from the pitch that is detected and will
			rotate the needle accordingly. For example playing the A pitch will be matched with 440Hz and
			will place the needle in a vertical position right in the middle of the arc. Additionally,
			when a note is detected with zero deviation the color of the arc and the detected pitch will
			change meaning that the pitch is considered to be detected succesfully.`)},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}function ue(s){let e;return{c(){e=v("STEP 2")},l(t){e=b(t,"STEP 2")},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}function fe(s){let e;return{c(){e=v(`When the tuner detects the note that you are playing, try to adjust your note bringing the
			pitch up or down in order to tune your instrument. When the needle is positioned in the middle
			of the arc then the deviation of the detected pitch is almost zero. That means that the pitch
			is detected with great accuracy and the note is tuned.`)},l(t){e=b(t,`When the tuner detects the note that you are playing, try to adjust your note bringing the
			pitch up or down in order to tune your instrument. When the needle is positioned in the middle
			of the arc then the deviation of the detected pitch is almost zero. That means that the pitch
			is detected with great accuracy and the note is tuned.`)},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}function pe(s){let e;return{c(){e=v("STEP 3")},l(t){e=b(t,"STEP 3")},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}function he(s){let e;return{c(){e=v(`Repeat the process for every chord of your instrument. For example for a mandolin to be tuned
			your goal is to tune the instrument to E-A-D-G notes. When every chord is tuned then your
			instrument is tuned.`)},l(t){e=b(t,`Repeat the process for every chord of your instrument. For example for a mandolin to be tuned
			your goal is to tune the instrument to E-A-D-G notes. When every chord is tuned then your
			instrument is tuned.`)},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}function me(s){let e,t,n,o,c,r,p,l,h,i,d,M,S;return t=new Q({props:{$$slots:{default:[le]},$$scope:{ctx:s}}}),o=new O({props:{$$slots:{default:[ce]},$$scope:{ctx:s}}}),r=new Q({props:{$$slots:{default:[ue]},$$scope:{ctx:s}}}),l=new O({props:{$$slots:{default:[fe]},$$scope:{ctx:s}}}),i=new Q({props:{$$slots:{default:[pe]},$$scope:{ctx:s}}}),M=new O({props:{$$slots:{default:[he]},$$scope:{ctx:s}}}),{c(){e=v(`Using a tuner while playing will help you improve your intonation and have a better grasp of the
		characteristics of your instrument. Make sure the integrated microphone has web connectivity
		before using this instrument tuner. Below are some simple steps you can follow in order to use
		this tuner.

		`),k(t.$$.fragment),n=N(),k(o.$$.fragment),c=N(),k(r.$$.fragment),p=N(),k(l.$$.fragment),h=N(),k(i.$$.fragment),d=N(),k(M.$$.fragment)},l(a){e=b(a,`Using a tuner while playing will help you improve your intonation and have a better grasp of the
		characteristics of your instrument. Make sure the integrated microphone has web connectivity
		before using this instrument tuner. Below are some simple steps you can follow in order to use
		this tuner.

		`),x(t.$$.fragment,a),n=D(a),x(o.$$.fragment,a),c=D(a),x(r.$$.fragment,a),p=D(a),x(l.$$.fragment,a),h=D(a),x(i.$$.fragment,a),d=D(a),x(M.$$.fragment,a)},m(a,m){$(a,e,m),T(t,a,m),$(a,n,m),T(o,a,m),$(a,c,m),T(r,a,m),$(a,p,m),T(l,a,m),$(a,h,m),T(i,a,m),$(a,d,m),T(M,a,m),S=!0},p(a,m){const E={};m&1&&(E.$$scope={dirty:m,ctx:a}),t.$set(E);const j={};m&1&&(j.$$scope={dirty:m,ctx:a}),o.$set(j);const U={};m&1&&(U.$$scope={dirty:m,ctx:a}),r.$set(U);const G={};m&1&&(G.$$scope={dirty:m,ctx:a}),l.$set(G);const L={};m&1&&(L.$$scope={dirty:m,ctx:a}),i.$set(L);const u={};m&1&&(u.$$scope={dirty:m,ctx:a}),M.$set(u)},i(a){S||(w(t.$$.fragment,a),w(o.$$.fragment,a),w(r.$$.fragment,a),w(l.$$.fragment,a),w(i.$$.fragment,a),w(M.$$.fragment,a),S=!0)},o(a){y(t.$$.fragment,a),y(o.$$.fragment,a),y(r.$$.fragment,a),y(l.$$.fragment,a),y(i.$$.fragment,a),y(M.$$.fragment,a),S=!1},d(a){a&&f(e),I(t,a),a&&f(n),I(o,a),a&&f(c),I(r,a),a&&f(p),I(l,a),a&&f(h),I(i,a),a&&f(d),I(M,a)}}}function de(s){let e;return{c(){e=v("Granting Microphone Access")},l(t){e=b(t,"Granting Microphone Access")},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}function $e(s){let e,t;return e=new lt({props:{url:"https://support.google.com/chrome/answer/2693767?hl=en-GB&co=GENIE.Platform%3DDesktop",description:"Chrome",target:"_blank",className:"p-0 text-red-900 hover:text-red-400"}}),{c(){k(e.$$.fragment)},l(n){x(e.$$.fragment,n)},m(n,o){T(e,n,o),t=!0},p:J,i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function ge(s){let e;return{c(){e=v("Go to Settings -> Site Settings -> Microphone and allow this site to access the microphone.")},l(t){e=b(t,"Go to Settings -> Site Settings -> Microphone and allow this site to access the microphone.")},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}function _e(s){let e,t;return e=new lt({props:{url:"https://support.mozilla.org/en-US/kb/how-manage-your-camera-and-microphone-permissions#w_use-prompts-to-allow-or-block-camera-and-microphone-permissions-for-a-site",description:"Firefox",target:"_blank",className:"p-0 text-red-900 hover:text-red-400"}}),{c(){k(e.$$.fragment)},l(n){x(e.$$.fragment,n)},m(n,o){T(e,n,o),t=!0},p:J,i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function we(s){let e;return{c(){e=v(`Go to Preferences -> click Privacy & Security -> Scroll down to permissions and select
			Settings. Search this site and select Allow.`)},l(t){e=b(t,`Go to Preferences -> click Privacy & Security -> Scroll down to permissions and select
			Settings. Search this site and select Allow.`)},m(t,n){$(t,e,n)},d(t){t&&f(e)}}}function ve(s){let e,t,n,o,c,r,p,l,h;return t=new Q({props:{$$slots:{default:[$e]},$$scope:{ctx:s}}}),o=new O({props:{$$slots:{default:[ge]},$$scope:{ctx:s}}}),r=new Q({props:{$$slots:{default:[_e]},$$scope:{ctx:s}}}),l=new O({props:{$$slots:{default:[we]},$$scope:{ctx:s}}}),{c(){e=v(`This tuner will require mic access through your web browser. If you have disabled it in the
		past, then the tuner will not work. It is recommended to be used with Chrome or Firefox browsers

		`),k(t.$$.fragment),n=N(),k(o.$$.fragment),c=N(),k(r.$$.fragment),p=N(),k(l.$$.fragment)},l(i){e=b(i,`This tuner will require mic access through your web browser. If you have disabled it in the
		past, then the tuner will not work. It is recommended to be used with Chrome or Firefox browsers

		`),x(t.$$.fragment,i),n=D(i),x(o.$$.fragment,i),c=D(i),x(r.$$.fragment,i),p=D(i),x(l.$$.fragment,i)},m(i,d){$(i,e,d),T(t,i,d),$(i,n,d),T(o,i,d),$(i,c,d),T(r,i,d),$(i,p,d),T(l,i,d),h=!0},p(i,d){const M={};d&1&&(M.$$scope={dirty:d,ctx:i}),t.$set(M);const S={};d&1&&(S.$$scope={dirty:d,ctx:i}),o.$set(S);const a={};d&1&&(a.$$scope={dirty:d,ctx:i}),r.$set(a);const m={};d&1&&(m.$$scope={dirty:d,ctx:i}),l.$set(m)},i(i){h||(w(t.$$.fragment,i),w(o.$$.fragment,i),w(r.$$.fragment,i),w(l.$$.fragment,i),h=!0)},o(i){y(t.$$.fragment,i),y(o.$$.fragment,i),y(r.$$.fragment,i),y(l.$$.fragment,i),h=!1},d(i){i&&f(e),I(t,i),i&&f(n),I(o,i),i&&f(c),I(r,i),i&&f(p),I(l,i)}}}function be(s){let e,t,n,o,c,r,p,l,h,i,d,M,S,a,m,E,j,U,G,L;return e=new zt({props:{className:ye,$$slots:{default:[se]},$$scope:{ctx:s}}}),o=new ne({}),p=new tt({props:{className:st,$$slots:{default:[oe]},$$scope:{ctx:s}}}),h=new O({props:{$$slots:{default:[re]},$$scope:{ctx:s}}}),d=new O({props:{$$slots:{default:[ae]},$$scope:{ctx:s}}}),S=new tt({props:{className:st,$$slots:{default:[ie]},$$scope:{ctx:s}}}),m=new O({props:{$$slots:{default:[me]},$$scope:{ctx:s}}}),j=new tt({props:{className:st,$$slots:{default:[de]},$$scope:{ctx:s}}}),G=new O({props:{$$slots:{default:[ve]},$$scope:{ctx:s}}}),{c(){k(e.$$.fragment),t=N(),n=F("section"),k(o.$$.fragment),c=N(),r=F("section"),k(p.$$.fragment),l=N(),k(h.$$.fragment),i=N(),k(d.$$.fragment),M=N(),k(S.$$.fragment),a=N(),k(m.$$.fragment),E=N(),k(j.$$.fragment),U=N(),k(G.$$.fragment),this.h()},l(u){x(e.$$.fragment,u),t=D(u),n=V(u,"SECTION",{class:!0});var g=W(n);x(o.$$.fragment,g),g.forEach(f),c=D(u),r=V(u,"SECTION",{class:!0});var H=W(r);x(p.$$.fragment,H),l=D(H),x(h.$$.fragment,H),i=D(H),x(d.$$.fragment,H),M=D(H),x(S.$$.fragment,H),a=D(H),x(m.$$.fragment,H),E=D(H),x(j.$$.fragment,H),U=D(H),x(G.$$.fragment,H),H.forEach(f),this.h()},h(){q(n,"class","tools md:text-xl md:text-justify md:tracking-wide bg-red-900 w-full flex justify-center relative p-8 svelte-oj6189"),q(r,"class","text-justify md:tracking-wide py-8 w-3/4 md:w-full md:py-8 md:px-4 md:text-2xl")},m(u,g){T(e,u,g),$(u,t,g),$(u,n,g),T(o,n,null),$(u,c,g),$(u,r,g),T(p,r,null),_(r,l),T(h,r,null),_(r,i),T(d,r,null),_(r,M),T(S,r,null),_(r,a),T(m,r,null),_(r,E),T(j,r,null),_(r,U),T(G,r,null),L=!0},p(u,[g]){const H={};g&1&&(H.$$scope={dirty:g,ctx:u}),e.$set(H);const R={};g&1&&(R.$$scope={dirty:g,ctx:u}),p.$set(R);const Y={};g&1&&(Y.$$scope={dirty:g,ctx:u}),h.$set(Y);const K={};g&1&&(K.$$scope={dirty:g,ctx:u}),d.$set(K);const A={};g&1&&(A.$$scope={dirty:g,ctx:u}),S.$set(A);const z={};g&1&&(z.$$scope={dirty:g,ctx:u}),m.$set(z);const C={};g&1&&(C.$$scope={dirty:g,ctx:u}),j.$set(C);const P={};g&1&&(P.$$scope={dirty:g,ctx:u}),G.$set(P)},i(u){L||(w(e.$$.fragment,u),w(o.$$.fragment,u),w(p.$$.fragment,u),w(h.$$.fragment,u),w(d.$$.fragment,u),w(S.$$.fragment,u),w(m.$$.fragment,u),w(j.$$.fragment,u),w(G.$$.fragment,u),L=!0)},o(u){y(e.$$.fragment,u),y(o.$$.fragment,u),y(p.$$.fragment,u),y(h.$$.fragment,u),y(d.$$.fragment,u),y(S.$$.fragment,u),y(m.$$.fragment,u),y(j.$$.fragment,u),y(G.$$.fragment,u),L=!1},d(u){I(e,u),u&&f(t),u&&f(n),I(o),u&&f(c),u&&f(r),I(p),I(h),I(d),I(S),I(m),I(j),I(G)}}}const ye="p-8",st="py-2";class Me extends ot{constructor(e){super(),rt(this,e,null,be,at,{})}}export{Me as default};
