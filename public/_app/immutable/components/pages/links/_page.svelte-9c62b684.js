import{S as q,i as B,s as C,k as y,v as g,a as _,l as x,m as O,w as k,c as b,h as m,n as L,b as $,x as w,D as d,f as p,t as h,y as v,q as P,r as U,g as G,d as T,B as A,A as D}from"../../../chunks/index-e0c17b50.js";import{H as M,P as S}from"../../../chunks/P-e65f51ab.js";import{L as N}from"../../../chunks/Link-b6e6e3d2.js";import"../../../chunks/singletons-8d6d768f.js";import"../../../chunks/stores-24316458.js";const H=[{url:"https://myapos.oncrete.gr/",description:"My personal web page"},{url:"https://codebitshub.com/",description:"My personal blog"},{url:"https://svelte.dev/",description:"Svelte"},{url:"https://marcgg.com/blog/2016/11/01/javascript-audio/",description:"Generate Sounds Programmatically With Javascript"},{url:"https://medium.com/@jackhuang.wz/building-a-metronome-in-python-c8e16826fe4f",description:"Building a metronome"},{url:"https://www.youtube.com/watch?v=D08gOHOjeEk&list=PLXAhCH9FJ8zU2lR4ZvJGianiyVJlqm0z0",description:"Javascript metronome"},{url:"https://www.szynalski.com/tone-generator/",description:"Online Tone Generator"},{url:"https://theonlinemetronome.com/online-metronome",description:"The online metronome"}];function z(c,e,n){const l=c.slice();return l[1]=e[n],l[3]=n,l}function R(c){let e;return{c(){e=P("Useful links")},l(n){e=U(n,"Useful links")},m(n,l){$(n,e,l)},d(n){n&&m(e)}}}function F(c){let e;return{c(){e=P("Here you can find some useful links and articles that I used in order to build these tools")},l(n){e=U(n,"Here you can find some useful links and articles that I used in order to build these tools")},m(n,l){$(n,e,l)},d(n){n&&m(e)}}}function I(c){let e,n,l,t;return n=new N({props:{url:c[1].url,target:"_blank",description:c[1].description,className:"md:text-2xl"}}),{c(){e=y("li"),g(n.$$.fragment),l=_(),this.h()},l(u){e=x(u,"LI",{class:!0});var s=O(e);k(n.$$.fragment,s),l=b(s),s.forEach(m),this.h()},h(){L(e,"class",`${c[3]===c[0]-1?"mb-[546px]":""}`)},m(u,s){$(u,e,s),w(n,e,null),d(e,l),t=!0},p:D,i(u){t||(p(n.$$.fragment,u),t=!0)},o(u){h(n.$$.fragment,u),t=!1},d(u){u&&m(e),v(n)}}}function V(c){let e,n,l=H,t=[];for(let s=0;s<l.length;s+=1)t[s]=I(z(c,l,s));const u=s=>h(t[s],1,1,()=>{t[s]=null});return{c(){e=y("ul");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=x(s,"UL",{class:!0});var o=O(e);for(let r=0;r<t.length;r+=1)t[r].l(o);o.forEach(m),this.h()},h(){L(e,"class","list-disc list-inside marker:text-red-900")},m(s,o){$(s,e,o);for(let r=0;r<t.length;r+=1)t[r].m(e,null);n=!0},p(s,o){if(o&1){l=H;let r;for(r=0;r<l.length;r+=1){const f=z(s,l,r);t[r]?(t[r].p(f,o),p(t[r],1)):(t[r]=I(f),t[r].c(),p(t[r],1),t[r].m(e,null))}for(G(),r=l.length;r<t.length;r+=1)u(r);T()}},i(s){if(!n){for(let o=0;o<l.length;o+=1)p(t[o]);n=!0}},o(s){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)h(t[o]);n=!1},d(s){s&&m(e),A(t,s)}}}function W(c){let e,n,l,t,u,s,o,r,f;return n=new M({props:{$$slots:{default:[R]},$$scope:{ctx:c}}}),t=new S({props:{$$slots:{default:[F]},$$scope:{ctx:c}}}),r=new S({props:{$$slots:{default:[V]},$$scope:{ctx:c}}}),{c(){e=y("section"),g(n.$$.fragment),l=_(),g(t.$$.fragment),u=_(),s=y("hr"),o=_(),g(r.$$.fragment),this.h()},l(a){e=x(a,"SECTION",{class:!0});var i=O(e);k(n.$$.fragment,i),l=b(i),k(t.$$.fragment,i),u=b(i),s=x(i,"HR",{class:!0}),o=b(i),k(r.$$.fragment,i),i.forEach(m),this.h()},h(){L(s,"class","mt-2 border-1 border-red-900"),L(e,"class","text-justify md:tracking-wide py-8 w-3/4 md:w-full md:py-8 md:px-4 md:text-2xl")},m(a,i){$(a,e,i),w(n,e,null),d(e,l),w(t,e,null),d(e,u),d(e,s),d(e,o),w(r,e,null),f=!0},p(a,[i]){const j={};i&16&&(j.$$scope={dirty:i,ctx:a}),n.$set(j);const E={};i&16&&(E.$$scope={dirty:i,ctx:a}),t.$set(E);const J={};i&16&&(J.$$scope={dirty:i,ctx:a}),r.$set(J)},i(a){f||(p(n.$$.fragment,a),p(t.$$.fragment,a),p(r.$$.fragment,a),f=!0)},o(a){h(n.$$.fragment,a),h(t.$$.fragment,a),h(r.$$.fragment,a),f=!1},d(a){a&&m(e),v(n),v(t),v(r)}}}function X(c){return[Object.keys(H).length]}class te extends q{constructor(e){super(),B(this,e,X,W,C,{})}}export{te as default};
