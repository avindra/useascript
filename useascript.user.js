// ==UserScript==
// @name         useascript
// @namespace    https://dra.vin/
// @version      0.9.0
// @description  A compendium of userscripts for the Web
// @author       Avindra Goolcharan
// @match        *://*/*
// @updateURL    https://dra.vin/useascript/useascript.meta.js
// @downloadURL  https://dra.vin/useascript/useascript.user.js
// ==/UserScript==
(()=>{var W=Object.create;var w=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var J=Object.getPrototypeOf,K=Object.prototype.hasOwnProperty;var v=t=>e=>{var o=t[e];if(o)return o();throw new Error("Module not found in bundle: "+e)};var r=(t,e)=>()=>(t&&(e=t(t=0)),e);var p=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Q=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of F(e))!K.call(t,c)&&c!==o&&w(t,c,{get:()=>e[c],enumerable:!(n=G(e,c))||n.enumerable});return t};var u=(t,e,o)=>(o=t!=null?W(J(t)):{},Q(e||!t||!t.__esModule?w(o,"default",{value:t,enumerable:!0}):o,t));var x=p(()=>{if(/\/research\/search_the_collection_database\/search_object_(?:details|image).aspx/.test(location.pathname)){let t=new URLSearchParams(location.search.substring(1)),e=t.get("objectId")||t.get("objectid");e&&(location.href=`/collection/search?keyword=${e}`)}});var S=p(()=>{var V=/s\d+-([cp])/;if(!location.href.includes("4096")){let t=location.href.replace(V,"s4096-$1");t!==location.href&&location.replace(t);let e=location.href.replace(/w\d+-h\d+/,"w4096-h4096");e!==location.href&&location.replace(e)}});var $,i,a,l=r(()=>{$=t=>new Promise(e=>setTimeout(e,t)),i=t=>{window.onpopstate=t;for(let e of["pushState","replaceState"])window.history[e]=new Proxy(window.history[e],{apply:(o,n,c)=>(t(),o.apply(n,c))});t()},a=(t,e,o=1e4)=>{let n=setInterval(()=>{let c=t();if(c)return clearInterval(n),e(c)},200);setTimeout(()=>clearInterval(n),o)}});var X={};async function Y(){let t=/\/([^/]+)\/([^/]+)\/blob\/(.+)\/(.+)/,e=location.pathname.match(t);if(e)a(()=>document.querySelector("#repos-sticky-header div[class^=prc-ButtonGroup]"),o=>{let[,n,c,m,s]=e,g=`https://cdn.jsdelivr.net/gh/${n}/${c}@${m}/${s}`,b=Object.assign(document.createElement("a"),{href:g,textContent:"JsDelivr",className:"btn-sm btn BtnGroup-item"});o.appendChild(b)});else if(/\/compare\//.test(location.pathname)){let o=()=>document.querySelectorAll("#commits_bucket .Details:not(.branch-action-item)"),n=0,c;do{if(c=o(),c.length>0)break;await $(500)}while(++n<10);let m=document.querySelector(".range-editor");if(m){let s=document.createElement("button");s.textContent=`Show ${c.length} commits`,s.onclick=()=>{c=o();let g=Array.from(c).map(b=>b.querySelector("p").textContent.trim().replace(/[\s\n…]+$/g,""));console.log(g,g.join(`
`))},m.appendChild(s)}}}var C=r(()=>{l();i(Y)});var ee={};var q,Z,E=r(()=>{l();i(()=>{let t=new URLSearchParams(location.search.substring(1)),e;for(let[o]of t.entries())e=o;if(t.get("tbm")==="isch"){t.sort();let o=t.get("q");if(o&&e!=="q"){t.delete("q"),t.set("q",o);let n=`${location.pathname}?${t.toString()}`;location.href=n}}});q=t=>{let e=t.getElementsByTagName("a");for(let o=e[0],n=1;o;n++)o.removeAttribute("data-jsarwt"),o=e[n]},Z=t=>{let e=t.target;q(e)};document.addEventListener("load",q(document.body),!1);document.body.addEventListener("AutoPagerize_DOMNodeInserted",Z,!1)});var N=p(()=>{var te=`
	.copyright-warning,
	.gita-side-content > div > div:nth-child(2),
	.gita-side-content > div > div:nth-child(3),
	.search-text,
	.gsib_b {
		display:none;
	}

	body {
		background-color: #131b42;
		background-image: none;
	}
`,oe=Object.assign(document.createElement("style"),{type:"text/css",innerText:te});document.head.appendChild(oe);var y=document.querySelector(".bg-verse-audio audio");if(y){y.onended=()=>{let t=document.querySelector(".verse-navigator a.next-element"),e=Array.from(document.querySelectorAll(".actual-verse-navigator a")),o=document.querySelector(".actual-verse-navigator a.active");e[e.length-1]===o?document.querySelector(".chapter-navigator a.next-element").click():t.click()};try{y.play()}catch{}}});var j=p(()=>{var ne={childList:!0,subtree:!0},ce=()=>{let t=document.body.lastChild;t.firstChild&&t.firstChild.id==="scrollview"&&t.remove()},ae=new MutationObserver(ce);ae.observe(document.body,ne)});var I=p(()=>{var se=`
main {
background-color: rebeccapurple;
}
#top {
background-color: wheat;
}
header div:last-child {
background-color: blanchedalmond;
}
header div:nth-child(2) {
display:none;
}
#footer {
background-color: #dfbf3f;
}
footer.mt4 {
margin-top:0;
}
[role="tabpanel"] {
background-color:#ffd381;
}
#main > div > div:first-child {
background-color:#ffdae5;
}
`;document.head.appendChild(Object.assign(document.createElement("style"),{type:"text/css",innerText:se}));var f=document.querySelector('[aria-label="Package sidebar"]'),T=document.createElement("ul"),re=(t,e)=>{let o=document.createElement("li"),n=document.createElement("a");return n.href=e,n.textContent=t,o.append(n),o};function ie(){let t=document.title.substring(0,document.title.length-6),e=[["npmgraph",`https://npmgraph.js.org/?q=${t}`],["Bundlephobia",`https://bundlephobia.com/package/${t}`],["anvaka",`https://npm.anvaka.com/#/view/2d/${t}`],["Packagephobia",`https://packagephobia.com/result?p=${t}`],["pkg-size.dev",`https://pkg-size.dev/${t}`],["npm-stat",`https://npm-stat.com/charts.html?package=${t}`],["deps.dev",`https://deps.dev/npm/${t}`],["npmx",`https://npmx.dev/package/${t}`],["socket.dev",`https://socket.dev/npm/package/${t}`],["snyk",`https://snyk.io/advisor/npm-package/${t}`]];for(let[o,n]of e)T.append(re(o,n));f.prepend(T),f.prepend(Object.assign(document.createElement("h3"),{textContent:"Analyze",className:"c84e15be f5 mt2 pt2 mb0"}))}if(f){for(let t of["https://bundlephobia.com/","https://npmgraph.js.org/","https://socket.dev/npm/package","https://snyk.io/advisor/npm-package"]){let e=f.querySelector(`[href^="${t}"]`);e&&e.remove()}ie()}});var pe={};function k(t){if(["/user","/r"].includes(L))for(let e of t.querySelectorAll("a")){let o=e.getAttribute("href");if(!o)return;if(e.title&&o!=="/s"){let n=document.createElement("span");n.textContent=`(${e.title})`,n.className="titText",e.parentNode.insertBefore(n,e)}/\.(?:(jpe?|pn)g|gif|bmp)/.test(o)?(e.style.color="blue",e.style.fontWeight="bold",o===e.textContent&&(e.textContent="{Image}")):o.indexOf("/")===0||(/https?:\/\/(?:www\.)?reddit\.com/.test(o)?(e.className+=" favicon",e.style.color="crimson",e.style.backgroundImage='url("https://www.reddit.com/static/favicon.ico")'):/https?:\/\/(?:(www|music)\.)?youtube\.com/.test(o)?(e.className+=" favicon",e.style.color="red",e.style.backgroundImage='url("https://s.ytimg.com/yt/favicon.ico")',o===e.textContent&&(e.textContent="{watch on YouTube}")):/http:\/\/(?:www\.)?facebook\.com/.test(o)?(o.match(/[&?]id=(\d+)/)?e.innerHTML=`Profile: {${RegExp.$1}}`:e.pathname.match(/^\/([^?&#]+)/)&&(e.innerHTML=`Profile: ${RegExp.$1}`),e.className+=" favicon",e.style.color="darkBlue",e.style.backgroundImage='url("https://facebook.com/favicon.ico")'):/http:\/\/(?:www\.)?en\.wikipedia\.org\//.test(o)?(/\/wiki\/([^/]+)/.test(e.pathname)&&(e.textContent===o&&(e.innerHTML=""),e.innerHTML+=` <small>{${unescape(RegExp.$1).replace(/_/g," ")}}</small>`),e.style.color="black",e.style.backgroundImage='url("https://en.wikipedia.org/favicon.ico")',e.className+=" favicon"):e.href.startsWith(`${location.protocol}//${location.host}`)||(e.className+=" favicon",e.style.color="darkGreen",e.style.backgroundImage='url("https://upload.wikimedia.org/wikipedia/commons/0/0f/External-link-ltr-icon_Dark.png")',e.style.paddingRight="11px"))}}var le,de,me,L,O=r(()=>{l();le=`
	.arrow.down {min-width:15px;min-height:14px;}
	.titText {font-size:smaller;color:darkSlateGray;font-weight:bold}
	.favicon {padding-right:17px;font-weight:bold;background-repeat:no-repeat;background-position:right center}
`,de=Object.assign(document.createElement("style"),{type:"text/css",innerText:le});document.head.appendChild(de);me=location.pathname.split(/(?!^)\//),L=me[0];if(["/media"].includes(L)){let t=document.getElementsByTagName("img")[0],e=document.createElement("canvas"),o=e.getContext("2d");t.crossOrigin="anonymous",t=t.cloneNode(!0),t.onload=()=>{e.width=t.naturalWidth,e.height=t.naturalHeight,o.drawImage(t,0,0),e.toBlob(n=>{let c=URL.createObjectURL(n);location.href=c},"image/jpeg",1)}}a(()=>document.querySelector('[aria-controls="multireddits_section"]'),t=>{t.ariaExpanded==="true"&&t.click()});i(()=>{a(()=>document.querySelector("main"),k),a(()=>document.querySelector("shreddit-post-text-body"),k),a(()=>{let t=document.querySelector("shreddit-comment-tree");if(t&&t.scrollHeight>0)return t},k)})});var B,ue,_=r(()=>{l();B=async t=>{a(()=>document.querySelector("header nav"),e=>ue(e,t))},ue=(t,e)=>{let n=t.firstChild.cloneNode(!0),c=document.createTextNode("\u{1F4DC}");n.firstChild.firstChild.replaceWith(c),c.parentNode.style.fontSize="25px";let s=n.querySelector("span");s&&(s.textContent="Useascript",Object.assign(s.style,{fontFamily:"monospace",fontSize:"smaller"})),n.removeAttribute("href"),n.onclick=e,t.prepend(n)}});var A,R=r(()=>{A=t=>{new MutationObserver(()=>{let e=t.querySelectorAll('a[href^="https://t.co"]');for(let o of e){let c=o.innerText.replace(/\s+/g,"").replace(/…$/,"");c.startsWith("http")&&(o.href=c,o.innerText=c)}}).observe(t,{childList:!0,subtree:!0})}});var h,M,P,D=r(()=>{l();R();h=!0,M=t=>{let e=t?"100%":"600px";a(()=>document.body.querySelector('[data-testid="primaryColumn"]'),o=>{o.style.maxWidth=e,a(()=>{let n=o.querySelector('[aria-level="1"]');if(n){let c=n.parentNode.parentNode;return A(c),c}},n=>n.style.maxWidth=e)}),a(()=>document.body.querySelector('[data-testid="sidebarColumn"]'),o=>o.style.display=h?"none":"block")},P=()=>(i(()=>{M(h)}),()=>{h=!h,M(h)})});var ge={};var he,z,H=r(()=>{_();D();he=P();B(()=>he());z=document.createElement("style");z.textContent=`
	header > div {
		margin-left: 0 !important;
	}
`;document.head.appendChild(z)});var fe={};var U=r(()=>{l();if(/^\/(?:c|user|@)\/?/.test(location.pathname)||document.getElementById("page-header")){let t=document.createElement("a"),e=ytInitialData.metadata.channelMetadataRenderer;t.textContent=e.externalId,t.href=e.channelUrl;let o=document.createElement("p");o.appendChild(t),a(()=>document.querySelector(".yt-page-header-view-model__page-header-title"),n=>n.nextElementSibling.prepend(o))}});var be=v({"./britishmuseum.org/index.js":()=>Promise.resolve().then(()=>u(x())),"./ggpht.com/index.js":()=>Promise.resolve().then(()=>u(S())),"./github.com/index.js":()=>Promise.resolve().then(()=>(C(),X)),"./google.com/index.js":()=>Promise.resolve().then(()=>(E(),ee)),"./holy-bhagavad-gita.org/index.js":()=>Promise.resolve().then(()=>u(N())),"./instagram.com/index.js":()=>Promise.resolve().then(()=>u(j())),"./npmjs.com/index.js":()=>Promise.resolve().then(()=>u(I())),"./reddit.com/index.js":()=>Promise.resolve().then(()=>(O(),pe)),"./x.com/index.js":()=>Promise.resolve().then(()=>(H(),ge)),"./youtube.com/index.js":()=>Promise.resolve().then(()=>(U(),fe))});var d;switch(location.host){case"github.com":case"x.com":case"mobile.x.com":{d=location.host.split(".").slice(-2).join(".");break}default:{let t=location.host.replace("www.","");switch(t){case"britishmuseum.org":case"holy-bhagavad-gita.org":case"google.com":case"ggpht.com":case"instagram.com":case"npmjs.com":case"reddit.com":case"youtube.com":d=t;default:/(ggpht|googleusercontent).com$/.test(t)&&(d="ggpht.com")}}}d&&(console.log("loading script",new Date,d),be(`./${d}/index.js`));})();
