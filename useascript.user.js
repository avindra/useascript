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
(()=>{var V=Object.create;var w=Object.defineProperty;var F=Object.getOwnPropertyDescriptor;var J=Object.getOwnPropertyNames;var K=Object.getPrototypeOf,Q=Object.prototype.hasOwnProperty;var x=t=>e=>{var o=t[e];if(o)return o();throw new Error("Module not found in bundle: "+e)};var r=(t,e)=>()=>(t&&(e=t(t=0)),e);var d=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Y=(t,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of J(e))!Q.call(t,c)&&c!==o&&w(t,c,{get:()=>e[c],enumerable:!(n=F(e,c))||n.enumerable});return t};var m=(t,e,o)=>(o=t!=null?V(K(t)):{},Y(e||!t||!t.__esModule?w(o,"default",{value:t,enumerable:!0}):o,t));var v=d(()=>{if(/\/research\/search_the_collection_database\/search_object_(?:details|image).aspx/.test(location.pathname)){let t=new URLSearchParams(location.search.substring(1)),e=t.get("objectId")||t.get("objectid");e&&(location.href=`/collection/search?keyword=${e}`)}});var S=d(()=>{var X=/s\d+-([cp])/;if(!location.href.includes("4096")){let t=location.href.replace(X,"s4096-$1");t!==location.href&&location.replace(t);let e=location.href.replace(/w\d+-h\d+/,"w4096-h4096");e!==location.href&&location.replace(e)}});var C,i,a,l=r(()=>{C=t=>new Promise(e=>setTimeout(e,t)),i=t=>{window.onpopstate=t;for(let e of["pushState","replaceState"])window.history[e]=new Proxy(window.history[e],{apply:(o,n,c)=>(t(),o.apply(n,c))});t()},a=(t,e,o=1e4)=>{let n=setInterval(()=>{let c=t();if(c)return clearInterval(n),e(c)},200);setTimeout(()=>clearInterval(n),o)}});var ee={};async function Z(){let t=/\/([^/]+)\/([^/]+)\/blob\/(.+)\/(.+)/,e=location.pathname.match(t);if(e)a(()=>document.querySelector("#repos-sticky-header div[class^=prc-ButtonGroup]"),o=>{let[,n,c,u,s]=e,g=`https://cdn.jsdelivr.net/gh/${n}/${c}@${u}/${s}`,b=Object.assign(document.createElement("a"),{href:g,textContent:"JsDelivr",className:"btn-sm btn BtnGroup-item"});o.appendChild(b)});else if(/\/compare\//.test(location.pathname)){let o=()=>document.querySelectorAll("#commits_bucket .Details:not(.branch-action-item)"),n=0,c;do{if(c=o(),c.length>0)break;await C(500)}while(++n<10);let u=document.querySelector(".range-editor");if(u){let s=document.createElement("button");s.textContent=`Show ${c.length} commits`,s.onclick=()=>{c=o();let g=Array.from(c).map(b=>b.querySelector("p").textContent.trim().replace(/[\s\n…]+$/g,""));console.log(g,g.join(`
`))},u.appendChild(s)}}}var $=r(()=>{l();i(Z)});var oe={};var q,te,E=r(()=>{l();i(()=>{let t=new URLSearchParams(location.search.substring(1)),e;for(let[o]of t.entries())e=o;if(t.get("tbm")==="isch"){t.sort();let o=t.get("q");if(o&&e!=="q"){t.delete("q"),t.set("q",o);let n=`${location.pathname}?${t.toString()}`;location.href=n}}});q=t=>{let e=t.getElementsByTagName("a");for(let o=e[0],n=1;o;n++)o.removeAttribute("data-jsarwt"),o=e[n]},te=t=>{let e=t.target;q(e)};document.addEventListener("load",q(document.body),!1);document.body.addEventListener("AutoPagerize_DOMNodeInserted",te,!1)});var N=d(()=>{var ne=`
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
`,ce=Object.assign(document.createElement("style"),{type:"text/css",innerText:ne});document.head.appendChild(ce);var y=document.querySelector(".bg-verse-audio audio");if(y){y.onended=()=>{let t=document.querySelector(".verse-navigator a.next-element"),e=Array.from(document.querySelectorAll(".actual-verse-navigator a")),o=document.querySelector(".actual-verse-navigator a.active");e[e.length-1]===o?document.querySelector(".chapter-navigator a.next-element").click():t.click()};try{y.play()}catch{}}});var j=d(()=>{var ae={childList:!0,subtree:!0},se=()=>{let t=document.body.lastChild;t.firstChild&&t.firstChild.id==="scrollview"&&t.remove()},re=new MutationObserver(se);re.observe(document.body,ae)});var O=d(()=>{var ie=`
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
`,le=Object.assign(document.createElement("style"),{type:"text/css",innerText:ie});document.head.appendChild(le);var T=document.body.querySelector(".hnname").nextElementSibling;T.prepend(Object.assign(document.createElement("a"),{href:"best",textContent:"best"}),document.createTextNode(" | "));T.prepend(Object.assign(document.createElement("a"),{href:"leaders",textContent:"leaders"}),document.createTextNode(" | "))});var L=d(()=>{var de=`
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
`;document.head.appendChild(Object.assign(document.createElement("style"),{type:"text/css",innerText:de}));var f=document.querySelector('[aria-label="Package sidebar"]'),I=document.createElement("ul"),me=(t,e)=>{let o=document.createElement("li"),n=document.createElement("a");return n.href=e,n.textContent=t,o.append(n),o};function pe(){let t=document.title.substring(0,document.title.length-6),e=[["npmgraph",`https://npmgraph.js.org/?q=${t}`],["Bundlephobia",`https://bundlephobia.com/package/${t}`],["anvaka",`https://npm.anvaka.com/#/view/2d/${t}`],["Packagephobia",`https://packagephobia.com/result?p=${t}`],["pkg-size.dev",`https://pkg-size.dev/${t}`],["npm-stat",`https://npm-stat.com/charts.html?package=${t}`],["deps.dev",`https://deps.dev/npm/${t}`],["npmx",`https://npmx.dev/package/${t}`],["socket.dev",`https://socket.dev/npm/package/${t}`],["snyk",`https://snyk.io/advisor/npm-package/${t}`]];for(let[o,n]of e)I.append(me(o,n));f.prepend(I),f.prepend(Object.assign(document.createElement("h3"),{textContent:"Analyze",className:"c84e15be f5 mt2 pt2 mb0"}))}if(f){for(let t of["https://bundlephobia.com/","https://npmgraph.js.org/","https://socket.dev/npm/package","https://snyk.io/advisor/npm-package"]){let e=f.querySelector(`[href^="${t}"]`);e&&e.remove()}pe()}});var fe={};function k(t){if(["/user","/r"].includes(B))for(let e of t.querySelectorAll("a")){let o=e.getAttribute("href");if(o){if(e.title&&o!=="/s"){let n=document.createElement("span");n.textContent=`(${e.title})`,n.className="titText",e.parentNode.insertBefore(n,e)}/\.(?:(jpe?|pn)g|gif|bmp)/.test(o)?(e.style.color="blue",e.style.fontWeight="bold",o===e.textContent&&(e.textContent="{Image}")):o.indexOf("/")===0||(/https?:\/\/(?:www\.)?reddit\.com/.test(o)?(e.className+=" favicon",e.style.color="crimson",e.style.backgroundImage='url("https://www.reddit.com/static/favicon.ico")'):/https?:\/\/(?:(www|music)\.)?youtube\.com/.test(o)?(e.className+=" favicon",e.style.color="red",e.style.backgroundImage='url("https://s.ytimg.com/yt/favicon.ico")',o===e.textContent&&(e.textContent="{watch on YouTube}")):/http:\/\/(?:www\.)?facebook\.com/.test(o)?(o.match(/[&?]id=(\d+)/)?e.innerHTML=`Profile: {${RegExp.$1}}`:e.pathname.match(/^\/([^?&#]+)/)&&(e.innerHTML=`Profile: ${RegExp.$1}`),e.className+=" favicon",e.style.color="darkBlue",e.style.backgroundImage='url("https://facebook.com/favicon.ico")'):/http:\/\/(?:www\.)?en\.wikipedia\.org\//.test(o)?(/\/wiki\/([^/]+)/.test(e.pathname)&&(e.textContent===o&&(e.innerHTML=""),e.innerHTML+=` <small>{${unescape(RegExp.$1).replace(/_/g," ")}}</small>`),e.style.color="black",e.style.backgroundImage='url("https://en.wikipedia.org/favicon.ico")',e.className+=" favicon"):e.href.startsWith(`${location.protocol}//${location.host}`)||(e.className+=" favicon",e.style.color="darkGreen",e.style.backgroundImage='url("https://upload.wikimedia.org/wikipedia/commons/0/0f/External-link-ltr-icon_Dark.png")',e.style.paddingRight="11px"))}}}var ue,he,ge,B,A=r(()=>{l();ue=`
	.arrow.down {min-width:15px;min-height:14px;}
	.titText {font-size:smaller;color:darkSlateGray;font-weight:bold}
	.favicon {padding-right:17px;font-weight:bold;background-repeat:no-repeat;background-position:right center}
`,he=Object.assign(document.createElement("style"),{type:"text/css",innerText:ue});document.head.appendChild(he);ge=location.pathname.split(/(?!^)\//),B=ge[0];if(["/media"].includes(B)){let t=document.getElementsByTagName("img")[0],e=document.createElement("canvas"),o=e.getContext("2d");t.crossOrigin="anonymous",t=t.cloneNode(!0),t.onload=()=>{e.width=t.naturalWidth,e.height=t.naturalHeight,o.drawImage(t,0,0),e.toBlob(n=>{let c=URL.createObjectURL(n);location.href=c},"image/jpeg",1)}}a(()=>document.querySelector('[aria-controls="multireddits_section"]'),t=>{t.ariaExpanded==="true"&&t.click()});i(()=>{a(()=>document.querySelector("main"),k),a(()=>document.querySelector("shreddit-post-text-body"),k),a(()=>{let t=document.querySelector("shreddit-comment-tree");if(t&&t.scrollHeight>0)return t},k)})});var _,be,M=r(()=>{l();_=async t=>{a(()=>document.querySelector("header nav"),e=>be(e,t))},be=(t,e)=>{let n=t.firstChild.cloneNode(!0),c=document.createTextNode("\u{1F4DC}");n.firstChild.firstChild.replaceWith(c),c.parentNode.style.fontSize="25px";let s=n.querySelector("span");s&&(s.textContent="Useascript",Object.assign(s.style,{fontFamily:"monospace",fontSize:"smaller"})),n.removeAttribute("href"),n.onclick=e,t.prepend(n)}});var R,P=r(()=>{R=t=>{new MutationObserver(()=>{let e=t.querySelectorAll('a[href^="https://t.co"]');for(let o of e){let c=o.innerText.replace(/\s+/g,"").replace(/…$/,"").replace(/^…/,"");c.startsWith("http")&&(o.href=c,o.innerText=c)}}).observe(t,{childList:!0,subtree:!0})}});var h,D,H,z=r(()=>{l();P();h=!0,D=t=>{let e=t?"100%":"600px";a(()=>document.body.querySelector('[data-testid="primaryColumn"]'),o=>{o.style.maxWidth=e,a(()=>{let n=o.querySelector('[aria-level="1"]');if(n){let c=n.parentNode.parentNode;return R(c),c}},n=>n.style.maxWidth=e)}),a(()=>document.body.querySelector('[data-testid="sidebarColumn"]'),o=>o.style.display=h?"none":"block")},H=()=>(i(()=>{D(h)}),()=>{h=!h,D(h)})});var ke={};var ye,U,W=r(()=>{M();z();ye=H();_(()=>ye());U=document.createElement("style");U.textContent=`
	header > div {
		margin-left: 0 !important;
	}
`;document.head.appendChild(U)});var we={};var G=r(()=>{l();if(/^\/(?:c|user|@)\/?/.test(location.pathname)||document.getElementById("page-header")){let t=document.createElement("a"),e=ytInitialData.metadata.channelMetadataRenderer;t.textContent=e.externalId,t.href=e.channelUrl;let o=document.createElement("p");o.appendChild(t),a(()=>document.querySelector(".ytPageHeaderViewModelContentMetadata"),n=>n.nextElementSibling.prepend(o))}});var xe=x({"./britishmuseum.org/index.js":()=>Promise.resolve().then(()=>m(v())),"./ggpht.com/index.js":()=>Promise.resolve().then(()=>m(S())),"./github.com/index.js":()=>Promise.resolve().then(()=>($(),ee)),"./google.com/index.js":()=>Promise.resolve().then(()=>(E(),oe)),"./holy-bhagavad-gita.org/index.js":()=>Promise.resolve().then(()=>m(N())),"./instagram.com/index.js":()=>Promise.resolve().then(()=>m(j())),"./news.ycombinator.com/index.js":()=>Promise.resolve().then(()=>m(O())),"./npmjs.com/index.js":()=>Promise.resolve().then(()=>m(L())),"./reddit.com/index.js":()=>Promise.resolve().then(()=>(A(),fe)),"./x.com/index.js":()=>Promise.resolve().then(()=>(W(),ke)),"./youtube.com/index.js":()=>Promise.resolve().then(()=>(G(),we))});var p;switch(location.host){case"github.com":case"x.com":case"mobile.x.com":{p=location.host.split(".").slice(-2).join(".");break}default:{let t=location.host.replace("www.","");switch(t){case"britishmuseum.org":case"holy-bhagavad-gita.org":case"google.com":case"news.ycombinator.com":case"ggpht.com":case"instagram.com":case"npmjs.com":case"reddit.com":case"youtube.com":p=t;default:/(ggpht|googleusercontent).com$/.test(t)&&(p="ggpht.com")}}}p&&(console.log("loading script",new Date,p),xe(`./${p}/index.js`));})();
