# useascript

`useascript` is a compendium of userscripts for the Internet.

Some would say its a _`metaverse`_.

## Usage

Sample usage can be found below.

```js
// ==UserScript==
// @name         useascript-hook
// @namespace    https://dra.vin/
// @version      0.1
// @description  Loader for useascript, a compendium of userscripts for the Web
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

/**
 * @param {Element} el
 */
(el => {
    el.type = "module";
    el.src = 'https://dra.vin/useascript/index.js';

    document.body.appendChild(el);
})(document.createElement("script"));
```

## License

The source code is fully licensed under `GPL-3.0-only`. See [COPYING](./COPYING) for more info.
