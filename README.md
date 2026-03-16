# useascript [![ci](https://github.com/avindra/useascript/actions/workflows/cicd.yml/badge.svg)](https://github.com/avindra/useascript/actions/workflows/cicd.yml)


`useascript` is a repository of userscripts for a clearer Internet 🌃

## Name meaning

The name (`use`-`a`-`script`) denotes that the various scripts supporting many websites are loaded from a `single` script. This is done to conveniently manage many userscripts and simplify the development / testing model. At the same time, it eliminates the need for a 3rd party host.

## Install

The userscript is hosted here:

https://dra.vin/useascript/useascript.user.js

It has a corresponding `.meta.js` so updates will work automatically.

## Development

We use `esbuild` for development and production builds.

### Method A

Use `make dev` to spin up `esbuild`'s built-in HTTP server.

You will have to configure a CSP bypass for sites that define such policies (many do). This can be done via `Tampermonkey > Settings > Security > Modify existing content security policy (CSP) headers`. Set this option to `Remove entirely (possibly unsecure)`. Firefox and Chrome are both known to work.

Then, install the following script hook:

```js
// ==UserScript==
// @name         useascript-local
// @namespace    https://dra.vin/
// @version      0.1
// @description  A compendium of userscripts for the Web
// @author       Avindra Goolcharan
// @match        *://*/*
// ==/UserScript==
import("http://localhost:5000/index.js");
```

### Method B

Run `make snag` to build the bundle. The script will go directly to your clipboard (assuming Wayland) using `wl-copy`. Then, paste the result into your userscript manager's editor. Although this works, it is highly recommended to instead use `Method A` which is much more convenient to develop with.

## License

Brought to you by [Avindra Goolcharan](https://dra.vin/).

The source code is fully licensed under `GPL-3.0-only`. See [COPYING](./COPYING)
for more info.
