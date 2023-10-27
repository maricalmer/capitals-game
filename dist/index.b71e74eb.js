// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fXfvm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _indexCss = require("../assets/index.css");
var _map = require("./Map");
var _useSubmitBtn = require("../hooks/useSubmitBtn");
const map = new (0, _map.Map)();
(0, _useSubmitBtn.checkAnswer)(map);

},{"../assets/index.css":"9lDpJ","./Map":"5vXJ1","../hooks/useSubmitBtn":"irbwx"}],"9lDpJ":[function() {},{}],"5vXJ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Map", ()=>Map);
var _map = require("../utils/map");
var _marker = require("./Marker");
class Map {
    constructor(){
        this.googleMap = new google.maps.Map(document.getElementById("map"), {
            zoom: 2.2,
            minZoom: 2.2,
            center: {
                lat: 20,
                lng: 20
            },
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            keyboardShortcuts: false,
            gestureHandling: "cooperative",
            styles: (0, _map.mapStyling)
        });
        this.marker = new (0, _marker.Marker)(this);
    }
    resetMapView() {
        this.googleMap.setCenter({
            lat: 20,
            lng: 20
        });
        this.googleMap.setZoom(2.2);
    }
}

},{"../utils/map":"7jk0d","./Marker":"lu0fH","@parcel/transformer-js/src/esmodule-helpers.js":"jUH9C"}],"7jk0d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapStyling", ()=>mapStyling);
const mapStyling = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#c9b2a6"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b9d3c2"
            }
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jUH9C"}],"jUH9C":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lu0fH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Marker", ()=>Marker);
var _capitals = require("../utils/capitals");
class Marker {
    constructor(map){
        this.cityData = this.pickRandomCapital();
        this.googleMarker = new google.maps.Marker({
            map: map.googleMap,
            position: {
                lat: this.cityData["lat"],
                lng: this.cityData["lng"]
            },
            animation: google.maps.Animation.DROP
        });
        this.addBouncingAnimation(this.googleMarker);
        this.addContentToMarker(this.googleMarker);
    }
    addBouncingAnimation(marker) {
        setTimeout(function() {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }, 1000);
    }
    pickRandomCapital() {
        const randomIndex = Math.floor(Math.random() * 251);
        const capitalData = {
            country: (0, _capitals.countriesData)[randomIndex][0],
            name: (0, _capitals.countriesData)[randomIndex][1],
            lat: (0, _capitals.countriesData)[randomIndex][2],
            lng: (0, _capitals.countriesData)[randomIndex][3]
        };
        return capitalData;
    }
    addContentToMarker(marker) {
        this.googleMarker.addListener("click", ()=>{
            const infoWindow = new google.maps.InfoWindow({
                content: `
                    City: ${this.cityData["name"]}<br>
                    Country: ${this.cityData["country"]}
                  `
            });
            infoWindow.open(marker.getMap(), marker);
        });
    }
}

},{"../utils/capitals":"lyq42","@parcel/transformer-js/src/esmodule-helpers.js":"jUH9C"}],"lyq42":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "countriesData", ()=>countriesData);
const countriesData = [
    [
        "United Arab Emirates",
        "Abu Dhabi",
        24.299174,
        54.697277
    ],
    [
        "Nigeria",
        "Abuja",
        9.076479,
        7.398574
    ],
    [
        "Ghana",
        "Accra",
        5.603717,
        -0.186964
    ],
    [
        "Pitcairn Islands",
        "Adamstown",
        -25.06629,
        -130.100464
    ],
    [
        "Ethiopia",
        "Addis Ababa",
        8.980603,
        38.757761
    ],
    [
        "Algeria",
        "Algiers",
        36.752887,
        3.042048
    ],
    [
        "Niue",
        "Alofi",
        -19.055371,
        -169.917871
    ],
    [
        "Jordan",
        "Amman",
        31.956578,
        35.945695
    ],
    [
        "Netherlands",
        "Amsterdam",
        52.370216,
        4.895168
    ],
    [
        "Andorra",
        "Andorra la Vella",
        42.506317,
        1.521835
    ],
    [
        "Turkey",
        "Ankara",
        39.933364,
        32.859742
    ],
    [
        "Madagascar",
        "Antananarivo",
        -18.87919,
        47.507905
    ],
    [
        "Samoa",
        "Apia",
        -13.850696,
        -171.751355
    ],
    [
        "Turkmenistan",
        "Ashgabat",
        37.960077,
        58.326063
    ],
    [
        "Eritrea",
        "Asmara",
        15.322877,
        38.925052
    ],
    [
        "Kazakhstan",
        "Astana",
        51.160523,
        71.470356
    ],
    [
        "Paraguay",
        "Asuncion",
        -25.26374,
        -57.575926
    ],
    [
        "Greece",
        "Athens",
        37.983917,
        23.72936
    ],
    [
        "Cook Islands",
        "Avarua",
        -21.212901,
        -159.782306
    ],
    [
        "Iraq",
        "Baghdad",
        33.312806,
        44.361488
    ],
    [
        "Azerbaijan",
        "Baku",
        40.409262,
        49.867092
    ],
    [
        "Mali",
        "Bamako",
        12.639232,
        -8.002889
    ],
    [
        "Brunei",
        "Bandar Seri Begawan",
        4.903052,
        114.939821
    ],
    [
        "Thailand",
        "Bangkok",
        13.756331,
        100.501765
    ],
    [
        "Central African Republic",
        "Bangui",
        4.394674,
        18.55819
    ],
    [
        "Gambia",
        "Banjul",
        13.454876,
        -16.579032
    ],
    [
        "Guadeloupe",
        "Basse-Terre",
        16.014453,
        -61.706411
    ],
    [
        "St. Kitts and Nevis",
        "Basseterre",
        17.302606,
        -62.717692
    ],
    [
        "China",
        "Beijing",
        39.904211,
        116.407395
    ],
    [
        "Lebanon",
        "Beirut",
        33.888629,
        35.495479
    ],
    [
        "Serbia",
        "Belgrade",
        44.786568,
        20.448922
    ],
    [
        "Belize",
        "Belmopan",
        17.251011,
        -88.75902
    ],
    [
        "Germany",
        "Berlin",
        52.520007,
        13.404954
    ],
    [
        "Switzerland",
        "Bern",
        46.947974,
        7.447447
    ],
    [
        "Kyrgyzstan",
        "Bishkek",
        42.874621,
        74.569762
    ],
    [
        "Guinea-Bissau",
        "Bissau",
        11.881655,
        -15.617794
    ],
    [
        "Colombia",
        "Bogot\xe1",
        4.710989,
        -74.072092
    ],
    [
        "Bouvet Island",
        "Bouvet Island",
        -54.43,
        3.38
    ],
    [
        "Brazil",
        "Bras\xedlia",
        -15.794229,
        -47.882166
    ],
    [
        "Slovakia",
        "Bratislava",
        48.145892,
        17.107137
    ],
    [
        "Congo (Republic)",
        "Brazzaville",
        -4.26336,
        15.242885
    ],
    [
        "Barbados",
        "Bridgetown",
        13.113222,
        -59.598809
    ],
    [
        "Belgium",
        "Brussels",
        50.85034,
        4.35171
    ],
    [
        "Romania",
        "Bucharest",
        44.426767,
        26.102538
    ],
    [
        "Hungary",
        "Budapest",
        47.497912,
        19.040235
    ],
    [
        "Argentina",
        "Buenos Aires",
        -34.603684,
        -58.381559
    ],
    [
        "Burundi",
        "Bujumbura",
        -3.361378,
        29.359878
    ],
    [
        "Egypt",
        "Cairo",
        30.04442,
        31.235712
    ],
    [
        "British Indian Ocean Territory",
        "Camp Justice",
        21.3419,
        55.4778
    ],
    [
        "Australia",
        "Canberra",
        -35.282,
        149.128684
    ],
    [
        "Venezuela",
        "Caracas",
        10.480594,
        -66.903606
    ],
    [
        "St. Lucia",
        "Castries",
        14.010109,
        -60.987469
    ],
    [
        "French Guiana",
        "Cayenne",
        4.92242,
        -52.313453
    ],
    [
        "U.S. Virgin Islands",
        "Charlotte Amalie",
        18.3419,
        -64.930701
    ],
    [
        "Moldova",
        "Chisinau",
        47.010453,
        28.86381
    ],
    [
        "Turks and Caicos Islands",
        "Cockburn Town",
        21.467458,
        -71.13891
    ],
    [
        "Guinea",
        "Conakry",
        9.641185,
        -13.578401
    ],
    [
        "Denmark",
        "Copenhagen",
        55.676097,
        12.568337
    ],
    [
        "Senegal",
        "Dakar",
        14.764504,
        -17.366029
    ],
    [
        "Syria",
        "Damascus",
        33.513807,
        36.276528
    ],
    [
        "Bangladesh",
        "Dhaka",
        23.810332,
        90.412518
    ],
    [
        "Timor-Leste",
        "Dili",
        -8.556856,
        125.560314
    ],
    [
        "Djibouti",
        "Djibouti",
        11.572077,
        43.145647
    ],
    [
        "Tanzania",
        "Dodoma",
        -6.162959,
        35.751607
    ],
    [
        "Qatar",
        "Doha",
        25.285447,
        51.53104
    ],
    [
        "Isle of Man",
        "Douglas",
        54.152337,
        -4.486123
    ],
    [
        "Ireland",
        "Dublin",
        53.349805,
        -6.26031
    ],
    [
        "Tajikistan",
        "Dushanbe",
        38.559772,
        68.787038
    ],
    [
        "Tristan da Cunha",
        "Edinburgh of the Seven Seas",
        -37.068042,
        -12.311315
    ],
    [
        "Western Sahara",
        "El Aai\xfan",
        27.125287,
        -13.1625
    ],
    [
        "Christmas Island",
        "Flying Fish Cove",
        -10.420686,
        105.679379
    ],
    [
        "Martinique",
        "Fort-de-France",
        14.616065,
        -61.05878
    ],
    [
        "Sierra Leone",
        "Freetown",
        8.465677,
        -13.231722
    ],
    [
        "Tuvalu",
        "Funafuti",
        -8.520066,
        179.198128
    ],
    [
        "Botswana",
        "Gaborone",
        -24.628208,
        25.923147
    ],
    [
        "Cayman Islands",
        "George Town",
        19.286932,
        -81.367439
    ],
    [
        "Guyana",
        "Georgetown",
        6.801279,
        -58.155125
    ],
    [
        "Gibraltar",
        "Gibraltar",
        36.140773,
        -5.353599
    ],
    [
        "Guatemala",
        "Guatemala City",
        14.634915,
        -90.506882
    ],
    [
        "St. Barth\xe9lemy",
        "Gustavia",
        17.896435,
        -62.852201
    ],
    [
        "Guam",
        "Hag\xe5t\xf1a",
        13.470891,
        144.751278
    ],
    [
        "Bermuda",
        "Hamilton",
        32.294816,
        -64.781375
    ],
    [
        "Vietnam",
        "Hanoi",
        21.027764,
        105.83416
    ],
    [
        "Zimbabwe",
        "Harare",
        -17.825166,
        31.03351
    ],
    [
        "Cuba",
        "Havana",
        23.05407,
        -82.345189
    ],
    [
        "Finland",
        "Helsinki",
        60.173324,
        24.941025
    ],
    [
        "Hong Kong",
        "Hong Kong",
        22.396428,
        114.109497
    ],
    [
        "Solomon Islands",
        "Honiara",
        -9.445638,
        159.9729
    ],
    [
        "Pakistan",
        "Islamabad",
        33.729388,
        73.093146
    ],
    [
        "Indonesia",
        "Jakarta",
        -6.208763,
        106.845599
    ],
    [
        "South Sudan",
        "Juba",
        4.859363,
        31.57125
    ],
    [
        "Afghanistan",
        "Kabul",
        34.575503,
        69.240073
    ],
    [
        "Uganda",
        "Kampala",
        0.347596,
        32.58252
    ],
    [
        "Nepal",
        "Kathmandu",
        27.717245,
        85.323961
    ],
    [
        "Sudan",
        "Khartoum",
        15.500654,
        32.559899
    ],
    [
        "Ukraine",
        "Kiev",
        50.4501,
        30.5234
    ],
    [
        "Rwanda",
        "Kigali",
        -1.957875,
        30.112735
    ],
    [
        "South Georgia and the South Sandwich Islands",
        "King Edward Point",
        -54.28325,
        -36.493735
    ],
    [
        "Jamaica",
        "Kingston",
        18.042327,
        -76.802893
    ],
    [
        "Norfolk Island",
        "Kingston",
        -29.056394,
        167.959588
    ],
    [
        "Saint Vincent and the Grenadines",
        "Kingstown",
        13.160025,
        -61.224816
    ],
    [
        "Congo (DRC)",
        "Kinshasa",
        -4.441931,
        15.266293
    ],
    [
        "Malaysia",
        "Kuala Lumpur",
        3.139003,
        101.686855
    ],
    [
        "Kuwait",
        "Kuwait City",
        29.375859,
        47.977405
    ],
    [
        "Bolivia",
        "La Paz",
        -16.489689,
        -68.119294
    ],
    [
        "Gabon",
        "Libreville",
        0.416198,
        9.467268
    ],
    [
        "Malawi",
        "Lilongwe",
        -13.962612,
        33.774119
    ],
    [
        "Peru",
        "Lima",
        -12.046374,
        -77.042793
    ],
    [
        "Portugal",
        "Lisbon",
        38.722252,
        -9.139337
    ],
    [
        "Slovenia",
        "Ljubljana",
        46.056947,
        14.505751
    ],
    [
        "Togo",
        "Lom\xe9",
        6.172497,
        1.231362
    ],
    [
        "United Kingdom",
        "London",
        51.507351,
        -0.127758
    ],
    [
        "Svalbard and Jan Mayen",
        "Longyearbyen",
        78.062,
        22.055
    ],
    [
        "Angola",
        "Luanda",
        -8.839988,
        13.289437
    ],
    [
        "Zambia",
        "Lusaka",
        -15.387526,
        28.322817
    ],
    [
        "Luxembourg",
        "Luxembourg",
        49.611621,
        6.131935
    ],
    [
        "Macau",
        "Macau",
        22.166667,
        113.55
    ],
    [
        "Spain",
        "Madrid",
        40.416775,
        -3.70379
    ],
    [
        "Marshall Islands",
        "Majuro",
        7.116421,
        171.185774
    ],
    [
        "Equatorial Guinea",
        "Malabo",
        3.750412,
        8.737104
    ],
    [
        "Maldives",
        "Mal\xe9",
        4.175496,
        73.509347
    ],
    [
        "Mayotte",
        "Mamoudzou",
        -12.780949,
        45.227872
    ],
    [
        "Nicaragua",
        "Managua",
        12.114993,
        -86.236174
    ],
    [
        "Bahrain",
        "Manama",
        26.228516,
        50.58605
    ],
    [
        "Philippines",
        "Manila",
        14.599512,
        120.98422
    ],
    [
        "Mozambique",
        "Maputo",
        -25.891968,
        32.605135
    ],
    [
        "Aland Islands",
        "Mariehamn",
        60.1,
        19.933333
    ],
    [
        "St. Martin",
        "Marigot",
        18.067519,
        -63.082466
    ],
    [
        "Lesotho",
        "Maseru",
        -29.363219,
        27.51436
    ],
    [
        "Wallis and Futuna",
        "Mata-Utu",
        -13.282509,
        -176.176447
    ],
    [
        "Swaziland",
        "Mbabane",
        -26.305448,
        31.136672
    ],
    [
        "Mexico",
        "Mexico City",
        19.432608,
        -99.133208
    ],
    [
        "Belarus",
        "Minsk",
        53.90454,
        27.561524
    ],
    [
        "Somalia",
        "Mogadishu",
        2.046934,
        45.318162
    ],
    [
        "Monaco",
        "Monaco",
        43.737411,
        7.420816
    ],
    [
        "Liberia",
        "Monrovia",
        6.290743,
        -10.760524
    ],
    [
        "Uruguay",
        "Montevideo",
        -34.901113,
        -56.164531
    ],
    [
        "Comoros",
        "Moroni",
        -11.717216,
        43.247315
    ],
    [
        "Russia",
        "Moscow",
        55.755826,
        37.6173
    ],
    [
        "Oman",
        "Muscat",
        23.58589,
        58.405923
    ],
    [
        "Chad",
        "N'Djamena",
        12.134846,
        15.055742
    ],
    [
        "Kenya",
        "Nairobi",
        -1.292066,
        36.821946
    ],
    [
        "Bahamas",
        "Nassau",
        25.047984,
        -77.355413
    ],
    [
        "Myanmar (Burma)",
        "Naypyidaw",
        19.763306,
        96.07851
    ],
    [
        "India",
        "New Delhi",
        28.613939,
        77.209021
    ],
    [
        "Palau",
        "Ngerulmud",
        7.500384,
        134.624289
    ],
    [
        "Niger",
        "Niamey",
        13.511596,
        2.125385
    ],
    [
        "Cyprus",
        "Nicosia",
        35.185566,
        33.382276
    ],
    [
        "Northern Cyprus",
        "Nicosia",
        35.185566,
        33.382276
    ],
    [
        "Mauritania",
        "Nouakchott",
        18.07353,
        -15.958237
    ],
    [
        "New Caledonia",
        "Noum\xe9a",
        -22.255823,
        166.450524
    ],
    [
        "Tonga",
        "Nuku'alofa",
        -21.139342,
        -175.204947
    ],
    [
        "Tokelau",
        "Nukunonu",
        -9.2005,
        -171.848
    ],
    [
        "Greenland",
        "Nuuk",
        64.18141,
        -51.694138
    ],
    [
        "Aruba",
        "Oranjestad",
        12.509204,
        -70.008631
    ],
    [
        "Norway",
        "Oslo",
        59.913869,
        10.752245
    ],
    [
        "Canada",
        "Ottawa",
        45.42153,
        -75.697193
    ],
    [
        "Burkina Faso",
        "Ouagadougou",
        12.371428,
        -1.51966
    ],
    [
        "American Samoa",
        "Pago Pago",
        -14.275632,
        -170.702036
    ],
    [
        "Micronesia",
        "Palikir",
        6.914712,
        158.161027
    ],
    [
        "Panama",
        "Panama City",
        9.101179,
        -79.402864
    ],
    [
        "French Polynesia",
        "Papeete",
        -17.551625,
        -149.558476
    ],
    [
        "Suriname",
        "Paramaribo",
        5.852036,
        -55.203828
    ],
    [
        "France",
        "Paris",
        48.856614,
        2.352222
    ],
    [
        "Cambodia",
        "Phnom Penh",
        11.544873,
        104.892167
    ],
    [
        "Montserrat",
        "Plymouth",
        16.706523,
        -62.215738
    ],
    [
        "Montenegro",
        "Podgorica",
        42.43042,
        19.259364
    ],
    [
        "Mauritius",
        "Port Louis",
        -20.166896,
        57.502332
    ],
    [
        "Papua New Guinea",
        "Port Moresby",
        -9.4438,
        147.180267
    ],
    [
        "Vanuatu",
        "Port Vila",
        -17.733251,
        168.327325
    ],
    [
        "Trinidad and Tobago",
        "Port of Spain",
        10.654901,
        -61.501926
    ],
    [
        "Haiti",
        "Port-au-Prince",
        18.594395,
        -72.307433
    ],
    [
        "Benin",
        "Porto-Novo",
        6.496857,
        2.628852
    ],
    [
        "Czech Republic",
        "Prague",
        50.075538,
        14.4378
    ],
    [
        "Cape Verde",
        "Praia",
        14.93305,
        -23.513327
    ],
    [
        "South Africa",
        "Pretoria",
        -25.747868,
        28.229271
    ],
    [
        "Kosovo",
        "Pristina",
        42.662914,
        21.165503
    ],
    [
        "North Korea",
        "Pyongyang",
        39.039219,
        125.762524
    ],
    [
        "Ecuador",
        "Quito",
        -0.180653,
        -78.467838
    ],
    [
        "Morocco",
        "Rabat",
        33.97159,
        -6.849813
    ],
    [
        "Palestine",
        "Ramallah",
        31.9073509,
        35.5354719
    ],
    [
        "Iceland",
        "Reykjav\xedk",
        64.126521,
        -21.817439
    ],
    [
        "Latvia",
        "Riga",
        56.949649,
        24.105186
    ],
    [
        "Saudi Arabia",
        "Riyadh",
        24.749403,
        46.902838
    ],
    [
        "British Virgin Islands",
        "Road Town",
        18.428612,
        -64.618466
    ],
    [
        "Italy",
        "Rome",
        41.902784,
        12.496366
    ],
    [
        "Dominica",
        "Roseau",
        15.309168,
        -61.379355
    ],
    [
        "R\xe9union",
        "Saint-Denis",
        -20.882057,
        55.450675
    ],
    [
        "French Southern Territories",
        "Saint-Pierre",
        -21.3419,
        55.4778
    ],
    [
        "Northern Mariana Islands",
        "Saipan",
        15.177801,
        145.750967
    ],
    [
        "Costa Rica",
        "San Jos\xe9",
        9.928069,
        -84.090725
    ],
    [
        "Puerto Rico",
        "San Juan",
        18.466334,
        -66.105722
    ],
    [
        "San Marino",
        "San Marino",
        43.935591,
        12.447281
    ],
    [
        "El Salvador",
        "San Salvador",
        13.69294,
        -89.218191
    ],
    [
        "Yemen",
        "Sana'a",
        15.369445,
        44.191007
    ],
    [
        "Chile",
        "Santiago",
        -33.44889,
        -70.669265
    ],
    [
        "Dominican Republic",
        "Santo Domingo",
        18.486058,
        -69.931212
    ],
    [
        "Bosnia and Herzegovina",
        "Sarajevo",
        43.856259,
        18.413076
    ],
    [
        "South Korea",
        "Seoul",
        37.566535,
        126.977969
    ],
    [
        "Singapore",
        "Singapore",
        1.280095,
        103.850949
    ],
    [
        "Macedonia (FYROM)",
        "Skopje",
        41.997346,
        21.427996
    ],
    [
        "Bulgaria",
        "Sofia",
        42.697708,
        23.321868
    ],
    [
        "Antarctica",
        "South Pole",
        -90,
        0
    ],
    [
        "Sri Lanka",
        "Sri Jayawardenepura Kotte",
        6.89407,
        79.902478
    ],
    [
        "Grenada",
        "St. George's",
        12.056098,
        -61.7488
    ],
    [
        "Jersey",
        "St. Helier",
        49.186823,
        -2.106568
    ],
    [
        "Antigua and Barbuda",
        "St. John's",
        17.12741,
        -61.846772
    ],
    [
        "Guernsey",
        "St. Peter Port",
        49.455443,
        -2.536871
    ],
    [
        "Saint Pierre and Miquelon",
        "St. Pierre",
        46.775846,
        -56.180636
    ],
    [
        "Falkland Islands (Islas Malvinas)",
        "Stanley",
        -51.697713,
        -57.851663
    ],
    [
        "Nagorno-Karabakh Republic",
        "Stepanakert",
        39.826385,
        46.763595
    ],
    [
        "Sweden",
        "Stockholm",
        59.329323,
        18.068581
    ],
    [
        "Abkhazia",
        "Sukhumi",
        43.001525,
        41.023415
    ],
    [
        "Fiji",
        "Suva",
        -18.124809,
        178.450079
    ],
    [
        "S\xe3o Tom\xe9 and Pr\xedncipe",
        "S\xe3o Tom\xe9",
        0.330192,
        6.733343
    ],
    [
        "Taiwan",
        "Taipei",
        25.032969,
        121.565418
    ],
    [
        "Estonia",
        "Tallinn",
        59.436961,
        24.753575
    ],
    [
        "Kiribati",
        "Tarawa Atoll",
        1.451817,
        172.971662
    ],
    [
        "Uzbekistan",
        "Tashkent",
        41.299496,
        69.240073
    ],
    [
        "Georgia",
        "Tbilisi",
        41.715138,
        44.827096
    ],
    [
        "Honduras",
        "Tegucigalpa",
        14.072275,
        -87.192136
    ],
    [
        "Iran",
        "Tehran",
        35.689198,
        51.388974
    ],
    [
        "Israel",
        "Tel Aviv",
        32.0853,
        34.781768
    ],
    [
        "Anguilla",
        "The Valley",
        18.214813,
        -63.057441
    ],
    [
        "Bhutan",
        "Thimphu",
        27.472792,
        89.639286
    ],
    [
        "Albania",
        "Tirana",
        41.327546,
        19.818698
    ],
    [
        "Transnistria",
        "Tiraspol",
        46.848185,
        29.596805
    ],
    [
        "Japan",
        "Tokyo",
        35.709026,
        139.731992
    ],
    [
        "Libya",
        "Tripoli",
        32.887209,
        13.191338
    ],
    [
        "South Ossetia",
        "Tskhinvali",
        42.22146,
        43.964405
    ],
    [
        "Tunisia",
        "Tunis",
        36.806495,
        10.181532
    ],
    [
        "Faroe Islands",
        "T\xf3rshavn",
        62.007864,
        -6.790982
    ],
    [
        "Mongolia",
        "Ulaanbaatar",
        47.886399,
        106.905744
    ],
    [
        "Liechtenstein",
        "Vaduz",
        47.14103,
        9.520928
    ],
    [
        "Malta",
        "Valletta",
        35.898909,
        14.514553
    ],
    [
        "Vatican City",
        "Vatican City",
        41.902179,
        12.453601
    ],
    [
        "Seychelles",
        "Victoria",
        -4.619143,
        55.451315
    ],
    [
        "Austria",
        "Vienna",
        48.208174,
        16.373819
    ],
    [
        "Laos",
        "Vientiane",
        17.975706,
        102.633104
    ],
    [
        "Lithuania",
        "Vilnius",
        54.687156,
        25.279651
    ],
    [
        "Poland",
        "Warsaw",
        52.229676,
        21.012229
    ],
    [
        "United States",
        "Washington",
        38.907192,
        -77.036871
    ],
    [
        "New Zealand",
        "Wellington",
        -41.28646,
        174.776236
    ],
    [
        "Cocos (Keeling) Islands",
        "West Island",
        -12.188834,
        96.829316
    ],
    [
        "Cura\xe7ao",
        "Willemstad",
        12.122422,
        -68.882423
    ],
    [
        "Netherlands Antilles",
        "Willemstad",
        12.1091242,
        -68.9316546
    ],
    [
        "Namibia",
        "Windhoek",
        -22.560881,
        17.065755
    ],
    [
        "C\xf4te d'Ivoire",
        "Yamoussoukro",
        6.827623,
        -5.289343
    ],
    [
        "Cameroon",
        "Yaound\xe9",
        3.848033,
        11.502075
    ],
    [
        "Nauru",
        "Yaren",
        -0.546686,
        166.921091
    ],
    [
        "Armenia",
        "Yerevan",
        40.179186,
        44.499103
    ],
    [
        "Croatia",
        "Zagreb",
        45.815011,
        15.981919
    ]
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jUH9C"}],"irbwx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkAnswer", ()=>checkAnswer);
var _map = require("../src/Map");
var _useConfetti = require("../hooks/useConfetti");
const updateScore = ()=>{
    let userScore = document.querySelector(".form__score-value");
    if (userScore) {
        let score = parseInt(userScore.innerHTML);
        score++;
        userScore.innerHTML = score.toString();
    }
};
const reloadMap = ()=>{
    const map = new (0, _map.Map)();
    checkAnswer(map);
};
const checkAnswer = (map)=>{
    const button = document.querySelector(".form__submit");
    button?.addEventListener("click", function myCallback(event) {
        event.preventDefault();
        const answer = map.marker.cityData["name"].toLowerCase();
        let inputField = document.querySelector(".form__input");
        if (inputField?.value.toLowerCase() === answer) {
            updateScore();
            inputField.innerHTML = "";
            inputField.classList.remove("form__input--wrong-input");
            (0, _useConfetti.throwConfettis)();
            reloadMap();
            this.removeEventListener("click", myCallback);
        } else inputField?.classList.add("form__input--wrong-input");
    });
};

},{"../src/Map":"5vXJ1","../hooks/useConfetti":"casih","@parcel/transformer-js/src/esmodule-helpers.js":"jUH9C"}],"casih":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "throwConfettis", ()=>throwConfettis);
var _jsConfetti = require("js-confetti");
var _jsConfettiDefault = parcelHelpers.interopDefault(_jsConfetti);
const throwConfettis = ()=>{
    const colors = [
        "#B4436C",
        "#114B5F",
        "#A53860",
        "#2F4858",
        "#7C77B9",
        "#574B60",
        "#2D3319",
        "#673C4F",
        "#13293D",
        "#1E3231"
    ];
    const randomColor = colors[colors.length * Math.random() | 0];
    const jsConfetti = new (0, _jsConfettiDefault.default)();
    jsConfetti.addConfetti({
        confettiColors: [
            randomColor
        ]
    });
};

},{"js-confetti":"gZbVi","@parcel/transformer-js/src/esmodule-helpers.js":"jUH9C"}],"gZbVi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function normalizeComputedStyleValue(string) {
    // "250px" --> 250
    return +string.replace(/px/, "");
}
function fixDPR(canvas) {
    var dpr = window.devicePixelRatio;
    var computedStyles = getComputedStyle(canvas);
    var width = normalizeComputedStyleValue(computedStyles.getPropertyValue("width"));
    var height = normalizeComputedStyleValue(computedStyles.getPropertyValue("height"));
    canvas.setAttribute("width", (width * dpr).toString());
    canvas.setAttribute("height", (height * dpr).toString());
}
function generateRandomNumber(min, max) {
    var fractionDigits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits);
}
function generateRandomArrayElement(arr) {
    return arr[generateRandomNumber(0, arr.length)];
}
var FREE_FALLING_OBJECT_ACCELERATION = 0.00125;
var MIN_DRAG_FORCE_COEFFICIENT = 0.0005;
var MAX_DRAG_FORCE_COEFFICIENT = 0.0009;
var ROTATION_SLOWDOWN_ACCELERATION = 0.00001;
var INITIAL_SHAPE_RADIUS = 6;
var INITIAL_EMOJI_SIZE = 80;
var MIN_INITIAL_CONFETTI_SPEED = 0.9;
var MAX_INITIAL_CONFETTI_SPEED = 1.7;
var MIN_FINAL_X_CONFETTI_SPEED = 0.2;
var MAX_FINAL_X_CONFETTI_SPEED = 0.6;
var MIN_INITIAL_ROTATION_SPEED = 0.03;
var MAX_INITIAL_ROTATION_SPEED = 0.07;
var MIN_CONFETTI_ANGLE = 15;
var MAX_CONFETTI_ANGLE = 82;
var MAX_CONFETTI_POSITION_SHIFT = 150;
var SHAPE_VISIBILITY_TRESHOLD = 100;
var DEFAULT_CONFETTI_NUMBER = 250;
var DEFAULT_EMOJIS_NUMBER = 40;
var DEFAULT_CONFETTI_COLORS = [
    "#fcf403",
    "#62fc03",
    "#f4fc03",
    "#03e7fc",
    "#03fca5",
    "#a503fc",
    "#fc03ad",
    "#fc03c2"
];
function getWindowWidthCoefficient(canvasWidth) {
    var HD_SCREEN_WIDTH = 1920;
    return Math.log(canvasWidth) / Math.log(HD_SCREEN_WIDTH);
}
var ConfettiShape = /*#__PURE__*/ function() {
    function ConfettiShape(args) {
        _classCallCheck(this, ConfettiShape);
        var initialPosition = args.initialPosition, direction = args.direction, confettiRadius = args.confettiRadius, confettiColors = args.confettiColors, emojis = args.emojis, emojiSize = args.emojiSize, canvasWidth = args.canvasWidth;
        var randomConfettiSpeed = generateRandomNumber(MIN_INITIAL_CONFETTI_SPEED, MAX_INITIAL_CONFETTI_SPEED, 3);
        var initialSpeed = randomConfettiSpeed * getWindowWidthCoefficient(canvasWidth);
        this.confettiSpeed = {
            x: initialSpeed,
            y: initialSpeed
        };
        this.finalConfettiSpeedX = generateRandomNumber(MIN_FINAL_X_CONFETTI_SPEED, MAX_FINAL_X_CONFETTI_SPEED, 3);
        this.rotationSpeed = emojis.length ? 0.01 : generateRandomNumber(MIN_INITIAL_ROTATION_SPEED, MAX_INITIAL_ROTATION_SPEED, 3) * getWindowWidthCoefficient(canvasWidth);
        this.dragForceCoefficient = generateRandomNumber(MIN_DRAG_FORCE_COEFFICIENT, MAX_DRAG_FORCE_COEFFICIENT, 6);
        this.radius = {
            x: confettiRadius,
            y: confettiRadius
        };
        this.initialRadius = confettiRadius;
        this.rotationAngle = direction === "left" ? generateRandomNumber(0, 0.2, 3) : generateRandomNumber(-0.2, 0, 3);
        this.emojiSize = emojiSize;
        this.emojiRotationAngle = generateRandomNumber(0, 2 * Math.PI);
        this.radiusYUpdateDirection = "down";
        var angle = direction === "left" ? generateRandomNumber(MAX_CONFETTI_ANGLE, MIN_CONFETTI_ANGLE) * Math.PI / 180 : generateRandomNumber(-MIN_CONFETTI_ANGLE, -MAX_CONFETTI_ANGLE) * Math.PI / 180;
        this.absCos = Math.abs(Math.cos(angle));
        this.absSin = Math.abs(Math.sin(angle));
        var positionShift = generateRandomNumber(-MAX_CONFETTI_POSITION_SHIFT, 0);
        var shiftedInitialPosition = {
            x: initialPosition.x + (direction === "left" ? -positionShift : positionShift) * this.absCos,
            y: initialPosition.y - positionShift * this.absSin
        };
        this.currentPosition = Object.assign({}, shiftedInitialPosition);
        this.initialPosition = Object.assign({}, shiftedInitialPosition);
        this.color = emojis.length ? null : generateRandomArrayElement(confettiColors);
        this.emoji = emojis.length ? generateRandomArrayElement(emojis) : null;
        this.createdAt = new Date().getTime();
        this.direction = direction;
    }
    _createClass(ConfettiShape, [
        {
            key: "draw",
            value: function draw(canvasContext) {
                var currentPosition = this.currentPosition, radius = this.radius, color = this.color, emoji = this.emoji, rotationAngle = this.rotationAngle, emojiRotationAngle = this.emojiRotationAngle, emojiSize = this.emojiSize;
                var dpr = window.devicePixelRatio;
                if (color) {
                    canvasContext.fillStyle = color;
                    canvasContext.beginPath();
                    canvasContext.ellipse(currentPosition.x * dpr, currentPosition.y * dpr, radius.x * dpr, radius.y * dpr, rotationAngle, 0, 2 * Math.PI);
                    canvasContext.fill();
                } else if (emoji) {
                    canvasContext.font = "".concat(emojiSize, "px serif");
                    canvasContext.save();
                    canvasContext.translate(dpr * currentPosition.x, dpr * currentPosition.y);
                    canvasContext.rotate(emojiRotationAngle);
                    canvasContext.textAlign = "center";
                    canvasContext.fillText(emoji, 0, 0);
                    canvasContext.restore();
                }
            }
        },
        {
            key: "updatePosition",
            value: function updatePosition(iterationTimeDelta, currentTime) {
                var confettiSpeed = this.confettiSpeed, dragForceCoefficient = this.dragForceCoefficient, finalConfettiSpeedX = this.finalConfettiSpeedX, radiusYUpdateDirection = this.radiusYUpdateDirection, rotationSpeed = this.rotationSpeed, createdAt = this.createdAt, direction = this.direction;
                var timeDeltaSinceCreation = currentTime - createdAt;
                if (confettiSpeed.x > finalConfettiSpeedX) this.confettiSpeed.x -= dragForceCoefficient * iterationTimeDelta;
                this.currentPosition.x += confettiSpeed.x * (direction === "left" ? -this.absCos : this.absCos) * iterationTimeDelta;
                this.currentPosition.y = this.initialPosition.y - confettiSpeed.y * this.absSin * timeDeltaSinceCreation + FREE_FALLING_OBJECT_ACCELERATION * Math.pow(timeDeltaSinceCreation, 2) / 2;
                this.rotationSpeed -= this.emoji ? 0.0001 : ROTATION_SLOWDOWN_ACCELERATION * iterationTimeDelta;
                if (this.rotationSpeed < 0) this.rotationSpeed = 0; // no need to update rotation radius for emoji
                if (this.emoji) {
                    this.emojiRotationAngle += this.rotationSpeed * iterationTimeDelta % (2 * Math.PI);
                    return;
                }
                if (radiusYUpdateDirection === "down") {
                    this.radius.y -= iterationTimeDelta * rotationSpeed;
                    if (this.radius.y <= 0) {
                        this.radius.y = 0;
                        this.radiusYUpdateDirection = "up";
                    }
                } else {
                    this.radius.y += iterationTimeDelta * rotationSpeed;
                    if (this.radius.y >= this.initialRadius) {
                        this.radius.y = this.initialRadius;
                        this.radiusYUpdateDirection = "down";
                    }
                }
            }
        },
        {
            key: "getIsVisibleOnCanvas",
            value: function getIsVisibleOnCanvas(canvasHeight) {
                return this.currentPosition.y < canvasHeight + SHAPE_VISIBILITY_TRESHOLD;
            }
        }
    ]);
    return ConfettiShape;
}();
function createCanvas() {
    var canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "1000";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);
    return canvas;
}
function normalizeConfettiConfig(confettiConfig) {
    var _confettiConfig$confe = confettiConfig.confettiRadius, confettiRadius = _confettiConfig$confe === void 0 ? INITIAL_SHAPE_RADIUS : _confettiConfig$confe, _confettiConfig$confe2 = confettiConfig.confettiNumber, confettiNumber = _confettiConfig$confe2 === void 0 ? confettiConfig.confettiesNumber || (confettiConfig.emojis ? DEFAULT_EMOJIS_NUMBER : DEFAULT_CONFETTI_NUMBER) : _confettiConfig$confe2, _confettiConfig$confe3 = confettiConfig.confettiColors, confettiColors = _confettiConfig$confe3 === void 0 ? DEFAULT_CONFETTI_COLORS : _confettiConfig$confe3, _confettiConfig$emoji = confettiConfig.emojis, emojis = _confettiConfig$emoji === void 0 ? confettiConfig.emojies || [] : _confettiConfig$emoji, _confettiConfig$emoji2 = confettiConfig.emojiSize, emojiSize = _confettiConfig$emoji2 === void 0 ? INITIAL_EMOJI_SIZE : _confettiConfig$emoji2; // deprecate wrong plural forms, used in early releases
    if (confettiConfig.emojies) console.error("emojies argument is deprecated, please use emojis instead");
    if (confettiConfig.confettiesNumber) console.error("confettiesNumber argument is deprecated, please use confettiNumber instead");
    return {
        confettiRadius: confettiRadius,
        confettiNumber: confettiNumber,
        confettiColors: confettiColors,
        emojis: emojis,
        emojiSize: emojiSize
    };
}
var ConfettiBatch = /*#__PURE__*/ function() {
    function ConfettiBatch(canvasContext) {
        var _this = this;
        _classCallCheck(this, ConfettiBatch);
        this.canvasContext = canvasContext;
        this.shapes = [];
        this.promise = new Promise(function(completionCallback) {
            return _this.resolvePromise = completionCallback;
        });
    }
    _createClass(ConfettiBatch, [
        {
            key: "getBatchCompletePromise",
            value: function getBatchCompletePromise() {
                return this.promise;
            }
        },
        {
            key: "addShapes",
            value: function addShapes() {
                var _this$shapes;
                (_this$shapes = this.shapes).push.apply(_this$shapes, arguments);
            }
        },
        {
            key: "complete",
            value: function complete() {
                var _a;
                if (this.shapes.length) return false;
                (_a = this.resolvePromise) === null || _a === void 0 || _a.call(this);
                return true;
            }
        },
        {
            key: "processShapes",
            value: function processShapes(time, canvasHeight, cleanupInvisibleShapes) {
                var _this2 = this;
                var timeDelta = time.timeDelta, currentTime = time.currentTime;
                this.shapes = this.shapes.filter(function(shape) {
                    // Render the shapes in this batch
                    shape.updatePosition(timeDelta, currentTime);
                    shape.draw(_this2.canvasContext); // Only cleanup the shapes if we're being asked to
                    if (!cleanupInvisibleShapes) return true;
                    return shape.getIsVisibleOnCanvas(canvasHeight);
                });
            }
        }
    ]);
    return ConfettiBatch;
}();
var JSConfetti = /*#__PURE__*/ function() {
    function JSConfetti() {
        var jsConfettiConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, JSConfetti);
        this.activeConfettiBatches = [];
        this.canvas = jsConfettiConfig.canvas || createCanvas();
        this.canvasContext = this.canvas.getContext("2d");
        this.requestAnimationFrameRequested = false;
        this.lastUpdated = new Date().getTime();
        this.iterationIndex = 0;
        this.loop = this.loop.bind(this);
        requestAnimationFrame(this.loop);
    }
    _createClass(JSConfetti, [
        {
            key: "loop",
            value: function loop() {
                this.requestAnimationFrameRequested = false;
                fixDPR(this.canvas);
                var currentTime = new Date().getTime();
                var timeDelta = currentTime - this.lastUpdated;
                var canvasHeight = this.canvas.offsetHeight;
                var cleanupInvisibleShapes = this.iterationIndex % 10 === 0;
                this.activeConfettiBatches = this.activeConfettiBatches.filter(function(batch) {
                    batch.processShapes({
                        timeDelta: timeDelta,
                        currentTime: currentTime
                    }, canvasHeight, cleanupInvisibleShapes); // Do not remove invisible shapes on every iteration
                    if (!cleanupInvisibleShapes) return true;
                    return !batch.complete();
                });
                this.iterationIndex++;
                this.queueAnimationFrameIfNeeded(currentTime);
            }
        },
        {
            key: "queueAnimationFrameIfNeeded",
            value: function queueAnimationFrameIfNeeded(currentTime) {
                if (this.requestAnimationFrameRequested) // We already have a pended animation frame, so there is no more work
                return;
                if (this.activeConfettiBatches.length < 1) // No shapes to animate, so don't queue another frame
                return;
                this.requestAnimationFrameRequested = true; // Capture the last updated time for animation
                this.lastUpdated = currentTime || new Date().getTime();
                requestAnimationFrame(this.loop);
            }
        },
        {
            key: "addConfetti",
            value: function addConfetti() {
                var confettiConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var _normalizeConfettiCon = normalizeConfettiConfig(confettiConfig), confettiRadius = _normalizeConfettiCon.confettiRadius, confettiNumber = _normalizeConfettiCon.confettiNumber, confettiColors = _normalizeConfettiCon.confettiColors, emojis = _normalizeConfettiCon.emojis, emojiSize = _normalizeConfettiCon.emojiSize; // Use the bounding rect rather tahn the canvas width / height, because
                // .width / .height are unset until a layout pass has been completed. Upon
                // confetti being immediately queued on a page load, this hasn't happened so
                // the default of 300x150 will be returned, causing an improper source point
                // for the confetti animation.
                var canvasRect = this.canvas.getBoundingClientRect();
                var canvasWidth = canvasRect.width;
                var canvasHeight = canvasRect.height;
                var yPosition = canvasHeight * 5 / 7;
                var leftConfettiPosition = {
                    x: 0,
                    y: yPosition
                };
                var rightConfettiPosition = {
                    x: canvasWidth,
                    y: yPosition
                };
                var confettiGroup = new ConfettiBatch(this.canvasContext);
                for(var i = 0; i < confettiNumber / 2; i++){
                    var confettiOnTheRight = new ConfettiShape({
                        initialPosition: leftConfettiPosition,
                        direction: "right",
                        confettiRadius: confettiRadius,
                        confettiColors: confettiColors,
                        confettiNumber: confettiNumber,
                        emojis: emojis,
                        emojiSize: emojiSize,
                        canvasWidth: canvasWidth
                    });
                    var confettiOnTheLeft = new ConfettiShape({
                        initialPosition: rightConfettiPosition,
                        direction: "left",
                        confettiRadius: confettiRadius,
                        confettiColors: confettiColors,
                        confettiNumber: confettiNumber,
                        emojis: emojis,
                        emojiSize: emojiSize,
                        canvasWidth: canvasWidth
                    });
                    confettiGroup.addShapes(confettiOnTheRight, confettiOnTheLeft);
                }
                this.activeConfettiBatches.push(confettiGroup);
                this.queueAnimationFrameIfNeeded();
                return confettiGroup.getBatchCompletePromise();
            }
        },
        {
            key: "clearCanvas",
            value: function clearCanvas() {
                this.activeConfettiBatches = [];
            }
        }
    ]);
    return JSConfetti;
}();
exports.default = JSConfetti;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jUH9C"}]},["fXfvm","h7u1C"], "h7u1C", "parcelRequire94c2")

//# sourceMappingURL=index.b71e74eb.js.map
