// ==UserScript==
// @name         useascript
// @namespace    https://dra.vin/
// @version      0.10.0
// @description  A compendium of userscripts for the Web
// @author       Avindra Goolcharan
// @match        *://*/*
// @updateURL    https://dra.vin/useascript/useascript.meta.js
// @downloadURL  https://dra.vin/useascript/useascript.user.js
// ==/UserScript==
(()=>{var K=Object.create;var w=Object.defineProperty;var Q=Object.getOwnPropertyDescriptor;var Y=Object.getOwnPropertyNames;var X=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty;var x=t=>e=>{var o=t[e];if(o)return o();throw new Error("Module not found in bundle: "+e)};var i=(t,e)=>()=>(t&&(e=t(t=0)),e);var m=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var ee=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of Y(e))!Z.call(t,c)&&c!==o&&w(t,c,{get:()=>e[c],enumerable:!(n=Q(e,c))||n.enumerable});return t};var p=(t,e,o)=>(o=t!=null?K(X(t)):{},ee(e||!t||!t.__esModule?w(o,"default",{value:t,enumerable:!0}):o,t));var v=m(()=>{if(/\/research\/search_the_collection_database\/search_object_(?:details|image).aspx/.test(location.pathname)){let t=new URLSearchParams(location.search.substring(1)),e=t.get("objectId")||t.get("objectid");e&&(location.href=`/collection/search?keyword=${e}`)}});var S=m(()=>{var te=/s\d+-([cp])/;if(!location.href.includes("4096")){let t=location.href.replace(te,"s4096-$1");t!==location.href&&location.replace(t);let e=location.href.replace(/w\d+-h\d+/,"w4096-h4096");e!==location.href&&location.replace(e)}});var C,l,a,d=i(()=>{C=t=>new Promise(e=>setTimeout(e,t)),l=t=>{window.onpopstate=t;for(let e of["pushState","replaceState"])window.history[e]=new Proxy(window.history[e],{apply:(o,n,c)=>(t(),o.apply(n,c))});t()},a=(t,e,o=1e4)=>{let n=setInterval(()=>{let c=t();if(c)return clearInterval(n),e(c)},200);setTimeout(()=>clearInterval(n),o)}});var ne={};async function oe(){let t=/\/([^/]+)\/([^/]+)\/blob\/(.+)\/(.+)/,e=location.pathname.match(t);if(e)a(()=>document.querySelector("#repos-sticky-header div[class^=prc-ButtonGroup]"),o=>{let[,n,c,r,s]=e,f=`https://cdn.jsdelivr.net/gh/${n}/${c}@${r}/${s}`,b=Object.assign(document.createElement("a"),{href:f,textContent:"JsDelivr",className:"btn-sm btn BtnGroup-item"});o.appendChild(b)});else if(/\/compare\//.test(location.pathname)){let o=()=>document.querySelectorAll("#commits_bucket .Details:not(.branch-action-item)"),n=0,c;do{if(c=o(),c.length>0)break;await C(500)}while(++n<10);let r=document.querySelector(".range-editor");if(r){let s=document.createElement("button");s.textContent=`Show ${c.length} commits`,s.onclick=()=>{c=o();let f=Array.from(c).map(b=>b.querySelector("p").textContent.trim().replace(/[\s\n…]+$/g,""));console.log(f,f.join(`
`))},r.appendChild(s)}}}var $=i(()=>{d();l(oe)});var ae={};var q,ce,E=i(()=>{d();l(()=>{let t=new URLSearchParams(location.search.substring(1)),e;for(let[o]of t.entries())e=o;if(t.get("tbm")==="isch"){t.sort();let o=t.get("q");if(o&&e!=="q"){t.delete("q"),t.set("q",o);let n=`${location.pathname}?${t.toString()}`;location.href=n}}});q=t=>{let e=t.getElementsByTagName("a");for(let o=e[0],n=1;o;n++)o.removeAttribute("data-jsarwt"),o=e[n]},ce=t=>{let e=t.target;q(e)};document.addEventListener("load",q(document.body),!1);document.body.addEventListener("AutoPagerize_DOMNodeInserted",ce,!1)});var j=m(()=>{var re=`
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
`,se=Object.assign(document.createElement("style"),{type:"text/css",innerText:re});document.head.appendChild(se);var y=document.querySelector(".bg-verse-audio audio");if(y){y.onended=()=>{let t=document.querySelector(".verse-navigator a.next-element"),e=Array.from(document.querySelectorAll(".actual-verse-navigator a")),o=document.querySelector(".actual-verse-navigator a.active");e[e.length-1]===o?document.querySelector(".chapter-navigator a.next-element").click():t.click()};try{y.play()}catch{}}});var N=m(()=>{var ie={childList:!0,subtree:!0},le=()=>{let t=document.body.lastChild;t.firstChild&&t.firstChild.id==="scrollview"&&t.remove()},de=new MutationObserver(le);de.observe(document.body,ie)});var B=m(()=>{var me=`
	body {
		background-color: #000d4b;
	}
	#hnmain {
		background-color: #131b42;
		color:white;
	}

	td[bgcolor="#ff6600"] {
		background-color: #ffc071;
	}
	.c00 {
		color: white
	}
	.c00 a:link, a:link {
		color: #ffc071;
	}
	a:visited {
		color: #7e5828;
	}
	blockquote {
		border-left: 4px solid #ffc071;
		padding-left: .5em;
		color: #ffc071;
		margin-left: .5em;
	}

	table.comment-tree .comment a {
		max-width: unset;
		text-overflow: unset;
	}
`,pe=Object.assign(document.createElement("style"),{type:"text/css",innerText:me});document.head.appendChild(pe);var I=document.body.querySelector(".hnname").nextElementSibling;I.prepend(Object.assign(document.createElement("a"),{href:"best",textContent:"best"}),document.createTextNode(" | "));I.prepend(Object.assign(document.createElement("a"),{href:"leaders",textContent:"leaders"}),document.createTextNode(" | "));var T=new WeakSet;function L(t){return t.replace(/[&<>]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e])}function O(t){let e=L(t);return e=e.replace(/`([^`]+)`/g,"<code>$1</code>"),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*\n]+)\*/g,"<em>$1</em>"),e=e.replace(/(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'),e}function ue(t){let e=t.replace(/\r\n?/g,`
`).split(`
`),o=[],n=0;for(;n<e.length;){if(!e[n].trim()){n++;continue}if(/^\s*>/.test(e[n])){let r=[];for(;n<e.length&&/^\s*>/.test(e[n]);)r.push(e[n++].replace(/^\s*>\s?/,""));o.push("<blockquote>"+r.map(O).join("<br>")+"</blockquote>");continue}if(/^\s{2,}\S/.test(e[n])){let r=[];for(;n<e.length&&(/^\s{2,}\S/.test(e[n])||!e[n].trim());)r.push(e[n++].replace(/^\s{2}/,""));o.push("<pre><code>"+L(r.join(`
`))+"</code></pre>");continue}let c=[];for(;n<e.length&&e[n].trim()&&!/^\s*>/.test(e[n])&&!/^\s{2,}\S/.test(e[n]);)c.push(e[n++]);o.push("<p>"+O(c.join(" "))+"</p>")}return o.join("")}function he(t){if(!t||T.has(t))return;let e=t.querySelector(".commtext");if(!e)return;let o=e.innerText;e.innerHTML=ue(o),T.add(t)}document.querySelectorAll(".commtext a").forEach(t=>{t.href!==t.textContent&&(t.textContent=t.href)});document.querySelectorAll(".athing.comtr").forEach(he)});var _=m(()=>{var fe=`
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
`;document.head.appendChild(Object.assign(document.createElement("style"),{type:"text/css",innerText:fe}));var g=document.querySelector('[aria-label="Package sidebar"]'),A=document.createElement("ul"),ge=(t,e)=>{let o=document.createElement("li"),n=document.createElement("a");return n.href=e,n.textContent=t,o.append(n),o};function be(){let t=document.title.substring(0,document.title.length-6),e=[["npmgraph",`https://npmgraph.js.org/?q=${t}`],["Bundlephobia",`https://bundlephobia.com/package/${t}`],["anvaka",`https://npm.anvaka.com/#/view/2d/${t}`],["Packagephobia",`https://packagephobia.com/result?p=${t}`],["pkg-size.dev",`https://pkg-size.dev/${t}`],["npm-stat",`https://npm-stat.com/charts.html?package=${t}`],["deps.dev",`https://deps.dev/npm/${t}`],["npmx",`https://npmx.dev/package/${t}`],["socket.dev",`https://socket.dev/npm/package/${t}`],["snyk",`https://snyk.io/advisor/npm-package/${t}`]];for(let[o,n]of e)A.append(ge(o,n));g.prepend(A),g.prepend(Object.assign(document.createElement("h3"),{textContent:"Analyze",className:"c84e15be f5 mt2 pt2 mb0"}))}if(g){for(let t of["https://bundlephobia.com/","https://npmgraph.js.org/","https://socket.dev/npm/package","https://snyk.io/advisor/npm-package"]){let e=g.querySelector(`[href^="${t}"]`);e&&e.remove()}be()}});var xe={};function k(t){if(["/user","/r"].includes(M))for(let e of t.querySelectorAll("a")){let o=e.getAttribute("href");if(o){if(e.title&&o!=="/s"){let n=document.createElement("span");n.textContent=`(${e.title})`,n.className="titText",e.parentNode.insertBefore(n,e)}/\.(?:(jpe?|pn)g|gif|bmp)/.test(o)?(e.style.color="blue",e.style.fontWeight="bold",o===e.textContent&&(e.textContent="{Image}")):o.indexOf("/")===0||(/https?:\/\/(?:www\.)?reddit\.com/.test(o)?(e.className+=" favicon",e.style.color="crimson",e.style.backgroundImage='url("https://www.reddit.com/static/favicon.ico")'):/https?:\/\/(?:(www|music)\.)?youtube\.com/.test(o)?(e.className+=" favicon",e.style.color="red",e.style.backgroundImage='url("https://s.ytimg.com/yt/favicon.ico")',o===e.textContent&&(e.textContent="{watch on YouTube}")):/http:\/\/(?:www\.)?facebook\.com/.test(o)?(o.match(/[&?]id=(\d+)/)?e.innerHTML=`Profile: {${RegExp.$1}}`:e.pathname.match(/^\/([^?&#]+)/)&&(e.innerHTML=`Profile: ${RegExp.$1}`),e.className+=" favicon",e.style.color="darkBlue",e.style.backgroundImage='url("https://facebook.com/favicon.ico")'):/http:\/\/(?:www\.)?en\.wikipedia\.org\//.test(o)?(/\/wiki\/([^/]+)/.test(e.pathname)&&(e.textContent===o&&(e.innerHTML=""),e.innerHTML+=` <small>{${unescape(RegExp.$1).replace(/_/g," ")}}</small>`),e.style.color="black",e.style.backgroundImage='url("https://en.wikipedia.org/favicon.ico")',e.className+=" favicon"):e.href.startsWith(`${location.protocol}//${location.host}`)||(e.className+=" favicon",e.style.color="darkGreen",e.style.backgroundImage='url("https://upload.wikimedia.org/wikipedia/commons/0/0f/External-link-ltr-icon_Dark.png")',e.style.paddingRight="11px"))}}}var ye,ke,we,M,R=i(()=>{d();ye=`
	.arrow.down {min-width:15px;min-height:14px;}
	.titText {font-size:smaller;color:darkSlateGray;font-weight:bold}
	.favicon {padding-right:17px;font-weight:bold;background-repeat:no-repeat;background-position:right center}
`,ke=Object.assign(document.createElement("style"),{type:"text/css",innerText:ye});document.head.appendChild(ke);we=location.pathname.split(/(?!^)\//),M=we[0];if(["/media"].includes(M)){let t=document.getElementsByTagName("img")[0],e=document.createElement("canvas"),o=e.getContext("2d");t.crossOrigin="anonymous",t=t.cloneNode(!0),t.onload=()=>{e.width=t.naturalWidth,e.height=t.naturalHeight,o.drawImage(t,0,0),e.toBlob(n=>{let c=URL.createObjectURL(n);location.href=c},"image/jpeg",1)}}a(()=>document.querySelector('[aria-controls="multireddits_section"]'),t=>{t.ariaExpanded==="true"&&t.click()});l(()=>{a(()=>document.querySelector("main"),k),a(()=>document.querySelector("shreddit-post-text-body"),k),a(()=>{let t=document.querySelector("shreddit-comment-tree");if(t&&t.scrollHeight>0)return t},k)})});var P,ve,H=i(()=>{d();P=async t=>{a(()=>document.querySelector("header nav"),e=>ve(e,t))},ve=(t,e)=>{let n=t.firstChild.cloneNode(!0),c=document.createTextNode("\u{1F4DC}");n.firstChild.firstChild.replaceWith(c),c.parentNode.style.fontSize="25px";let s=n.querySelector("span");s&&(s.textContent="Useascript",Object.assign(s.style,{fontFamily:"monospace",fontSize:"smaller"})),n.removeAttribute("href"),n.onclick=e,t.prepend(n)}});var D,W=i(()=>{D=t=>{new MutationObserver(()=>{let e=t.querySelectorAll('a[href^="https://t.co"]');for(let o of e){let c=o.innerText.replace(/\s+/g,"").replace(/…$/,"").replace(/^…/,"");c.startsWith("http")&&(o.href=c,o.innerText=c)}}).observe(t,{childList:!0,subtree:!0})}});var h,z,U,G=i(()=>{d();W();h=!0,z=t=>{let e=t?"100%":"600px";a(()=>document.body.querySelector('[data-testid="primaryColumn"]'),o=>{o.style.maxWidth=e,a(()=>{let n=o.querySelector('[aria-level="1"]');if(n){let c=n.parentNode.parentNode;return D(c),c}},n=>n.style.maxWidth=e)}),a(()=>document.body.querySelector('[data-testid="sidebarColumn"]'),o=>o.style.display=h?"none":"block")},U=()=>(l(()=>{z(h)}),()=>{h=!h,z(h)})});var Ce={};var Se,V,F=i(()=>{H();G();Se=U();P(()=>Se());V=document.createElement("style");V.textContent=`
	header > div {
		margin-left: 0 !important;
	}
`;document.head.appendChild(V)});var $e={};var J=i(()=>{d();if(/^\/(?:c|user|@)\/?/.test(location.pathname)||document.getElementById("page-header")){let t=document.createElement("a"),e=ytInitialData.metadata.channelMetadataRenderer;t.textContent=e.externalId,t.href=e.channelUrl;let o=document.createElement("p");o.appendChild(t),a(()=>document.querySelector(".ytPageHeaderViewModelContentMetadata"),n=>n.nextElementSibling.prepend(o))}});var qe=x({"./britishmuseum.org/index.js":()=>Promise.resolve().then(()=>p(v())),"./ggpht.com/index.js":()=>Promise.resolve().then(()=>p(S())),"./github.com/index.js":()=>Promise.resolve().then(()=>($(),ne)),"./google.com/index.js":()=>Promise.resolve().then(()=>(E(),ae)),"./holy-bhagavad-gita.org/index.js":()=>Promise.resolve().then(()=>p(j())),"./instagram.com/index.js":()=>Promise.resolve().then(()=>p(N())),"./news.ycombinator.com/index.js":()=>Promise.resolve().then(()=>p(B())),"./npmjs.com/index.js":()=>Promise.resolve().then(()=>p(_())),"./reddit.com/index.js":()=>Promise.resolve().then(()=>(R(),xe)),"./x.com/index.js":()=>Promise.resolve().then(()=>(F(),Ce)),"./youtube.com/index.js":()=>Promise.resolve().then(()=>(J(),$e))});var u;switch(location.host){case"github.com":case"x.com":case"mobile.x.com":{u=location.host.split(".").slice(-2).join(".");break}default:{let t=location.host.replace("www.","");switch(t){case"britishmuseum.org":case"holy-bhagavad-gita.org":case"google.com":case"news.ycombinator.com":case"ggpht.com":case"instagram.com":case"npmjs.com":case"reddit.com":case"youtube.com":u=t;default:/(ggpht|googleusercontent).com$/.test(t)&&(u="ggpht.com")}}}u&&(console.log("loading script",new Date,u),qe(`./${u}/index.js`));})();
