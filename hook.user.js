// ==UserScript==
// @name         useascript-hook
// @namespace    https://dra.vin/
// @version      0.1
// @description  Loader for useascript, a compendium of userscripts for the Web
// @author       Avindra Goolcharan
// @match        *://*/*
// @grant        none
// ==/UserScript==

/**
 *
 * @param {Element} el A fresh <script> tag
 */
(el => {
    el.type = 'module';
    el.src = 'https://dra.vin/useascript/index.js';

    document.body.appendChild(el);
})(document.createElement('script'));