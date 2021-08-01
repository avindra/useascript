# useascript

`useascript` is a compendium of userscripts for the Internet.

It is built using ES modules to facilitate simple version control and lazy loading.

This is the last userscript you'll ever need for many cases.


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

(function() {
    'use strict';

    const el = document.createElement("script");
    el.type = "module";
    el.src = 'https://dra.vin/useascript/index.js';

    //for local testing, use something like:
    //el.src = 'http://localhost:8000/index.js';
    document.body.appendChild(el);
})();
```