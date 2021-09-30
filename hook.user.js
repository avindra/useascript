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
 * @param {Document} d A document to work on
 */
(d => {
    const s = d.createElement('script');
    s.type = 'module';
    s.src = 'https://dra.vin/useascript/index.js';

    d.body.appendChild(s);
})(document);