import{S as u,i as _,s as w,Z as d,_ as v,$ as k,m as z,h as g,a0 as c,b as N,a1 as H,A as m}from"./index-80463ac2.js";function b(n){let t,i=[{width:n[1]},{height:n[1]},{"stroke-width":"0"},{class:n[2]},n[0].a,n[4],{xmlns:"http://www.w3.org/2000/svg"}],l={};for(let e=0;e<i.length;e+=1)l=d(l,i[e]);return{c(){t=v("svg"),this.h()},l(e){t=k(e,"svg",{width:!0,height:!0,"stroke-width":!0,class:!0,xmlns:!0});var s=z(t);s.forEach(g),this.h()},h(){c(t,l)},m(e,s){N(e,t,s),t.innerHTML=n[3]},p(e,[s]){s&8&&(t.innerHTML=e[3]),c(t,l=H(i,[s&2&&{width:e[1]},s&2&&{height:e[1]},{"stroke-width":"0"},s&4&&{class:e[2]},s&1&&e[0].a,s&16&&e[4],{xmlns:"http://www.w3.org/2000/svg"}]))},i:m,o:m,d(e){e&&g(t)}}}function I(n,t,i){let{src:l}=t,{size:e="1em"}=t,{color:s=void 0}=t,{title:h=void 0}=t,{className:o=""}=t,f,r;return n.$$set=a=>{"src"in a&&i(0,l=a.src),"size"in a&&i(1,e=a.size),"color"in a&&i(5,s=a.color),"title"in a&&i(6,h=a.title),"className"in a&&i(2,o=a.className)},n.$$.update=()=>{n.$$.dirty&33&&(i(4,r={}),s&&(l.a.stroke!=="none"&&i(4,r.stroke=s,r),l.a.fill!=="none"&&i(4,r.fill=s,r))),n.$$.dirty&65&&i(3,f=(h?`<title>${h}</title>`:"")+l.c)},[l,e,o,f,r,s,h]}class M extends u{constructor(t){super(),_(this,t,I,b,w,{src:0,size:1,color:5,title:6,className:2})}}export{M as I};
