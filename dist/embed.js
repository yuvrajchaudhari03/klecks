!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=r.parcelRequire94c2;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},r.parcelRequire94c2=o),o.register("2evKT",(function(t,r){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("3kC7t",(function(t,r){function n(e,t,r,n,i,o,a){try{var l=e[o](a),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,i)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function l(e){n(a,i,o,l,s,"next",e)}function s(e){n(a,i,o,l,s,"throw",e)}l(void 0)}))}}e(t.exports,"default",(function(){return i}))})),o.register("3Rl3W",(function(t,r){e(t.exports,"default",(function(){return i}));var n=o("7U0Ew");function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){(0,n.default)(e,t,r[t])}))}return e}})),o.register("7U0Ew",(function(t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}e(t.exports,"default",(function(){return n}))})),o.register("a7ch7",(function(t,r){function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}e(t.exports,"default",(function(){return n}))})),o.register("cijLd",(function(e,t){var r=function(e){"use strict";var t,r=function(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]},n=function(e,t,r,n){var i=t&&t.prototype instanceof o?t:o,a=Object.create(i.prototype),l=new p(n||[]);return a._invoke=u(e,r,l),a},i=function(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}},o=function(){},a=function(){},l=function(){},s=function(e){["next","throw","return"].forEach((function(t){r(e,t,(function(e){return this._invoke(t,e)}))}))},c=function(e,t){function r(n,o,a,l){var s=i(e[n],e,o);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&b.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,a,l)}),(function(e){r("throw",e,a,l)})):t.resolve(u).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,l)}))}l(s.arg)}var n;this._invoke=function(e,i){function o(){return new t((function(t,n){r(e,i,t,n)}))}return n=n?n.then(o,o):o()}},u=function(e,t,r){var n=_;return function(o,a){if(n===x)throw new Error("Generator is already running");if(n===E){if("throw"===o)throw a;return g()}for(r.method=o,r.arg=a;;){var l=r.delegate;if(l){var s=O(l,r);if(s){if(s===R)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===_)throw n=E,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=x;var c=i(e,t,r);if("normal"===c.type){if(n=r.done?E:w,c.arg===R)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=E,r.method="throw",r.arg=c.arg)}}},f=function(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)},d=function(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t},p=function(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(f,this),this.reset(!0)},h=function(e){if(e){var r=e[y];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function r(){for(;++n<e.length;)if(b.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:g}},g=function(){return{value:t,done:!0}},m=Object.prototype,b=m.hasOwnProperty,v="function"==typeof Symbol?Symbol:{},y=v.iterator||"@@iterator",H=v.asyncIterator||"@@asyncIterator",S=v.toStringTag||"@@toStringTag";try{r({},"")}catch(e){r=function(e,t,r){return e[t]=r}}e.wrap=n;var _="suspendedStart",w="suspendedYield",x="executing",E="completed",R={},A={};r(A,y,(function(){return this}));var F=Object.getPrototypeOf,k=F&&F(F(h([])));k&&k!==m&&b.call(k,y)&&(A=k);var L=l.prototype=o.prototype=Object.create(A);function O(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method))return R;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return R}var o=i(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,R;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,R):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,R)}return a.prototype=l,r(L,"constructor",l),r(l,"constructor",a),a.displayName=r(l,S,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,r(e,S,"GeneratorFunction")),e.prototype=Object.create(L),e},e.awrap=function(e){return{__await:e}},s(c.prototype),r(c.prototype,H,(function(){return this})),e.AsyncIterator=c,e.async=function(t,r,i,o,a){void 0===a&&(a=Promise);var l=new c(n(t,r,i,o),a);return e.isGeneratorFunction(r)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},s(L),r(L,S,"Generator"),r(L,y,(function(){return this})),r(L,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=h,p.prototype={constructor:p,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(d),!e)for(var r in this)"t"===r.charAt(0)&&b.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){var r=function(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i};if(this.done)throw e;for(var n=this,i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=b.call(o,"catchLoc"),s=b.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&b.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,R):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),R},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),d(r),R}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;d(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:h(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),R}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),o.register("f6OTe",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=t),t}})),o.register("1mH1z",(function(r,n){e(r.exports,"LS_LANGUAGE_KEY",(function(){return d})),e(r.exports,"languageStrings",(function(){return v})),e(r.exports,"LANG",(function(){return y})),e(r.exports,"initLANG",(function(){return H}));var i=o("3kC7t"),a=o("gFgFC"),l=o("kiQ5H"),s=o("7U0Ew"),c=o("3Rl3W"),u=o("cijLd"),f=o("fgfvl"),d="klecks-language",p=function(){"use strict";function e(){(0,a.default)(this,e),(0,s.default)(this,"listeners",[]),this.data=(0,c.default)({},f.english),this.code="en"}return(0,l.default)(e,[{key:"setLanguage",value:function(e){var r=this;return(0,i.default)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("en"!==e){t.next=4;break}r.data=(0,c.default)({},f.english),t.next=11;break;case 4:return t.t0=c.default,t.t1={},t.t2=f.english,t.next=9,(0,f.loadLanguage)(e);case 9:t.t3=t.sent,r.data=(0,t.t0)(t.t1,t.t2,t.t3);case 11:r.code=e,document.documentElement.setAttribute("lang",e),r.listeners.forEach((function(e){e()}));case 14:case"end":return t.stop()}}),n)})))()}},{key:"get",value:function(e){if(!(e in this.data))throw new Error("translation code doesn't exist: "+e);return this.data[e]}},{key:"getLanguage",value:function(){var e=this;return f.languages.find((function(t){return t.code===e.code}))}},{key:"getCode",value:function(){return this.code}},{key:"subscribe",value:function(e){this.listeners.includes(e)||this.listeners.push(e)}},{key:"unsubscribe",value:function(e){for(var t=0;t<this.listeners.length;t++)if(e===this.listeners[t])return void this.listeners.splice(t,1)}}]),e}(),h="en",g=function(e){var t=m[e],r=f.languages.find((function(e){return e.code.toLowerCase()===t.toLowerCase()}));if(r)return h=r.code,"break"},m=[];(navigator.languages?navigator.languages:[navigator.language]).forEach((function(e){var t=e.split("-");m.push(e),2===t.length&&m.push(t[0])}));try{localStorage.getItem(d)&&m.unshift(localStorage.getItem(d))}catch(e){}for(var b=0;b<m.length;b++){if("break"===g(b))break}var v=new p,y=function(e,t){if(t){var r=v.get(e);return Object.keys(t).forEach((function(e){r=r.replace("{".concat(e,"}"),t[e])})),r}return v.get(e)},H=function(){return v.setLanguage(h)}})),o.register("gFgFC",(function(t,r){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e(t.exports,"default",(function(){return n}))})),o.register("kiQ5H",(function(t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}e(t.exports,"default",(function(){return i}))})),o.register("fgfvl",(function(r,n){e(r.exports,"english",(function(){return s})),e(r.exports,"languages",(function(){return c})),e(r.exports,"loadLanguage",(function(){return u}));var i,a=o("3kC7t"),l=o("cijLd"),s=t(o("iQKsR")),c=[{code:"en",name:"English"},{code:"de",name:"Deutsch"},{code:"ja",name:"日本語"},{code:"zh-CN",name:"简体中文"},{code:"zh-TW",name:"繁體中文"}],u=(i=(0,a.default)(t(l).mark((function e(r){return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("en"!==r){e.next=4;break}return e.abrupt("return",s);case 4:if("de"!==r){e.next=10;break}return e.next=7,o("79ZVO");case 7:case 13:case 19:case 25:return e.abrupt("return",e.sent);case 10:if("ja"!==r){e.next=16;break}return e.next=13,o("24FtO");case 16:if("zh-CN"!==r){e.next=22;break}return e.next=19,o("jex1i");case 22:if("zh-TW"!==r){e.next=26;break}return e.next=25,o("jLsx7");case 26:throw new Error("unknown language code");case 27:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)})})),o.register("iQKsR",(function(e,t){e.exports=JSON.parse('{"switch-ui-left-right":"Switch left/right UI","toggle-show-tools":"Show/Hide Tools","scroll":"Scroll","donate":"Donate","home":"Home","modal-new-tab":"Open in new tab","tab-layers":"Layers","tab-edit":"Edit","tab-file":"File","tool-brush":"Brush","tool-paint-bucket":"Paint Bucket","tool-gradient":"Gradient","tool-shape":"Shape","tool-text":"Text","tool-hand":"Hand Tool","tool-zoom":"Zoom","tool-undo-redo":"Undo / Redo","undo":"Undo","redo":"Redo","brush-pen":"Pen","brush-blend":"Blend","brush-sketchy":"Sketchy","brush-pixel":"Pixel","brush-chemy":"Chemy","brush-smudge":"Smudge","brush-size":"Size","brush-blending":"Blending","brush-toggle-pressure":"Toggle Pressure Sensitivity","brush-pen-circle":"Circle","brush-pen-chalk":"Chalk","brush-pen-calligraphy":"Calligraphy","brush-pen-square":"Square","brush-sketchy-scale":"Scale","brush-pixel-dither":"Dither","brush-chemy-fill":"Fill","brush-chemy-stroke":"Stroke","brush-chemy-mirror-x":"Horizontal Symmetry","brush-chemy-mirror-y":"Vertical Symmetry","brush-chemy-gradient":"Gradient","brush-eraser-transparent-bg":"Transparent Background","stabilizer":"Stabilizer","stabilizer-title":"Stroke Stabilizer","eyedropper":"Eyedropper","secondary-color":"Secondary Color","manual-color-input":"Manual Color Input","mci-hex":"Hex","mci-copy":"Copy","modal-ok":"Ok","modal-cancel":"Cancel","modal-close":"Close","layers-active-layer":"Active Layer","layers-layer":"Layer","layers-copy":"copy","layers-blending":"Blending","layers-new":"New Layer","layers-remove":"Remove Layer","layers-duplicate":"Duplicate Layer","layers-merge":"Merge with layer below","layers-rename":"Rename","layers-blend-normal":"normal","layers-blend-darken":"darken","layers-blend-multiply":"multiply","layers-blend-color-burn":"color burn","layers-blend-lighten":"lighten","layers-blend-screen":"screen","layers-blend-color-dodge":"color dodge","layers-blend-overlay":"overlay","layers-blend-soft-light":"soft light","layers-blend-hard-light":"hard light","layers-blend-difference":"difference","layers-blend-exclusion":"exclusion","layers-blend-hue":"hue","layers-blend-saturation":"saturation","layers-blend-color":"color","layers-blend-luminosity":"luminosity","layers-rename-title":"Rename Layer","layers-rename-name":"Name","layers-rename-clear":"Clear Name","layers-rename-sketch":"Sketch","layers-rename-colors":"Colors","layers-rename-shading":"Shading","layers-rename-lines":"Lines","layers-rename-effects":"Effects","layers-rename-foreground":"Foreground","layers-merge-modal-title":"Merge/Mix Layers","layers-merge-description":"Merges the selected layer with the one underneath. Select the mix mode:","file-no-autosave":"No autosave, no cloud storage","file-new":"New","file-import":"Import","file-save":"Save","file-save-png":"Save PNG","file-save-psd":"Save PSD","file-save-layers":"Save Layers","file-copy":"Copy","file-copy-title":"Copy To Clipboard","file-share":"Share","file-storage":"Browser Storage","file-storage-thumb-title":"Restores when reopening page","file-storage-about":"About Browser Storage","file-storage-cant-access":"Can\'t access","file-storage-empty":"Empty","file-storage-store":"Store","file-storage-clear":"Clear","file-storage-storing":"Storing","file-storage-overwrite":"Overwrite","file-storage-min-ago":"{x}min ago","file-storage-hours-ago":"{x}h ago","file-storage-days-ago":"{x}d ago","file-storage-month-ago":"> 1month ago","file-storage-restored":"Restored from Browser Storage","file-storage-stored":"Stored to Browser Storage","file-storage-failed":"Failed to store to Browser Storage","file-storage-failed-1":"Failed to store. Possible causes:","file-storage-failed-2":"Out of disk space","file-storage-failed-3":"Storage disabled in incognito tab","file-storage-failed-4":"Browser doesn\'t support storage","file-storage-failed-clear":"Failed to clear.","file-upload":"Upload","cleared-layer":"Cleared layer","filled":"Filled","new-title":"New Image","new-current":"Current","new-fit":"Fit","new-oversize":"Oversize","new-square":"Square","new-landscape":"Landscape","new-portrait":"Portrait","new-screen":"Screen","new-video":"Video","new-din-paper":"DIN Paper","new-px":"px","new-ratio":"Ratio","upload-title":"Upload to Imgur","upload-link-notice":"Anyone with the link to your uploaded image will be able to view it.","upload-name":"Title","upload-title-untitled":"Untitled","upload-caption":"Caption","upload-tos":"Terms of Service","upload-tos-2":"for imgur.com","upload-submit":"Upload","upload-uploading":"Uploading...","upload-success":"Upload Successful","upload-failed":"Upload failed.","upload-delete":"To delete your image from Imgur visit:","cropcopy-title-copy":"Copy To Clipboard","cropcopy-title-crop":"Crop","cropcopy-click-hold":"Right-click or press hold to copy.","cropcopy-btn-copy":"To Clipboard","cropcopy-copied":"Copied.","cropcopy-btn-crop":"Apply Crop","crop-drag-to-crop":"Drag to crop","filter-crop-extend":"Crop/Extend","filter-flip":"Flip","filter-perspective":"Perspective","filter-resize":"Resize","filter-rotate":"Rotate","filter-transform":"Transform","filter-bright-contrast":"Bright/Contrast","filter-curves":"Curves","filter-hue-sat":"Hue/Saturation","filter-invert":"Invert","filter-tilt-shift":"Tilt Shift","filter-to-alpha":"To Alpha","filter-triangle-blur":"Triangle Blur","filter-unsharp-mask":"Unsharp Mask","filter-crop-title":"Crop / Extend","filter-crop-description":"Crop or extend the image.","filter-crop-left":"Left","filter-crop-right":"Right","filter-crop-top":"Top","filter-crop-bottom":"Bottom","filter-crop-rule-thirds":"Rule of Thirds","filter-crop-fill":"Fill","filter-flip-title":"Flip","filter-flip-description":"Flips layer or whole image.","filter-flip-horizontal":"Horizontal","filter-flip-vertical":"Vertical","filter-flip-image":"Flip Image","filter-flip-layer":"Flip Layer","filter-perspective-title":"Perspective","filter-perspective-description":"Transforms the selected layer.","filter-resize-title":"Resize","filter-resize-description":"Resizes the image.","filter-rotate-title":"Rotate","filter-rotate-description":"Rotates the image.","filter-transform-empty":"Layer is empty.","filter-transform-title":"Transform","filter-transform-description":"Transforms selected layer. Hold Shift for additional behavior.","filter-transform-rotation":"Rotation","filter-transform-flip":"Flip","filter-transform-center":"Center","filter-transform-constrain":"Constrain","filter-transform-snap":"Snap","filter-transform-snap-title":"Snap Rotation And Position","filter-bright-contrast-title":"Brightness / Contrast","filter-bright-contrast-description":"Change brightness and contrast for the selected layer.","filter-bright-contrast-brightness":"Brightness","filter-bright-contrast-contrast":"Contrast","filter-curves-title":"Curves","filter-curves-description":"Apply curves on the selected layer.","filter-curves-all":"All","filter-hue-sat-title":"Hue / Saturation","filter-hue-sat-description":"Change hue and saturation for the selected layer.","filter-hue-sat-hue":"Hue","filter-hue-sat-saturation":"Saturation","filter-applied":"applied","filter-tilt-shift-title":"Tilt Shift","filter-tilt-shift-description":"Applies tilt shift on the selected layer.","filter-tilt-shift-blur":"Blur Radius","filter-tilt-shift-gradient":"Gradient Radius","filter-to-alpha-title":"To Alpha","filter-to-alpha-description":"Generates alpha channel for selected layer from:","filter-to-alpha-inverted-lum":"Inverted Luminance","filter-to-alpha-lum":"Luminance","filter-to-alpha-replace":"Replace RGB","filter-triangle-blur-title":"Triangle Blur","filter-triangle-blur-description":"Applies triangle blur on the selected layer.","filter-unsharp-mask-title":"Unsharp Mask","filter-unsharp-mask-description":"Sharpens the selected layer by scaling pixels away from the average of their neighbors.","filter-unsharp-mask-strength":"Strength","filter-grid":"Grid","filter-grid-description":"Draws grid on selected layer.","filter-noise":"Noise","filter-noise-description":"Adds noise to selected layer.","filter-noise-scale":"Scale","filter-noise-alpha":"Alpha","filter-pattern":"Pattern","filter-pattern-description":"Generates pattern on selected layer. Drag the preview for further controls.","filter-distort":"Distort","filter-distort-description":"Distorts the selected layer.","filter-distort-phase":"Phase","filter-distort-stepsize":"Step Size","filter-distort-sync-xy":"Sync XY","filter-vanish-point":"Vanish Point","filter-vanish-point-title":"Vanishing Point","filter-vanish-point-description":"Adds vanishing point to selected layer. Drag preview to move.","filter-vanish-point-lines":"Lines","import-opening":"Opening file...","import-title":"Import Image","import-too-large":"Image too large, will be downscaled.","import-btn-as-layer":"As Layer","import-btn-as-image":"As Image","import-as-layer-title":"Import Image as New Layer","import-as-layer-description":"Adjust the position of the imported image.","import-as-layer-limit-reached":"Layer limit reached. Image will be placed on existing layer.","import-as-layer-fit":"Fit","import-flatten":"Flatten image","import-unsupported-file":"Unsupported file type. See Help for supported types.","import-broken-file":"Couldn\'t load image. File might be corrupted.","import-psd-unsupported":"Unsupported features. PSD had to be flattened.","import-psd-limited-support":"PSD support is limited. Flattened will more likely look correct.","import-psd-too-large":"Image exceeds maximum dimensions of {x} x {x} pixels. Unable to import.","import-psd-size":"Image size","hand-reset":"Reset","hand-fit":"Fit","bucket-tolerance":"Tolerance","bucket-sample":"Sample","bucket-sample-title":"Which layers to sample color from","bucket-sample-all":"All","bucket-sample-active":"Active","bucket-sample-above":"Above","bucket-grow":"Grow","bucket-grow-title":"Grow filled area (in pixels)","bucket-contiguous":"Contiguous","bucket-contiguous-title":"Only fill connected areas","gradient-linear":"Linear","gradient-linear-mirror":"Linear-Mirror","gradient-radial":"Radial","shape-stroke":"Stroke","shape-fill":"Fill","shape-rect":"Rectangle","shape-ellipse":"Ellipse","shape-line":"Line","shape-line-width":"Line Width","shape-outwards":"Outwards","shape-fixed":"Fixed 1:1","text-instruction":"Click canvas to place text","text-title":"Add Text","text-placeholder":"Your text (multiline Shift+Enter)","text-color":"Color","text-size":"Size","text-left":"Left","text-center":"Center","text-right":"Right","text-italic":"Italic","text-bold":"Bold","save-reminder-title":"Unsaved Work","save-reminder-text":"Image was not saved in {a} minutes{b}. Save now to prevent eventual loss.","save-reminder-save-psd":"Save As PSD","save-reminder-psd-layers":"PSD will remember all layers.","submit":"Submit","submit-title":"Submit Drawing","submit-prompt":"Submit drawing?","submit-submitting":"Submitting","embed-init-loading":"Loading app","embed-init-waiting":"Waiting for image","unsaved":"Unsaved","help":"Help","tab-settings":"Settings","settings-language":"Language","settings-preferred-language":"Preferred Language","settings-language-reload":"Will update after reloading.","licenses":"Licenses","source-code":"Source Code","auto":"auto","zoom-in":"Zoom In","zoom-out":"Zoom Out","radius":"Radius","constrain-proportions":"Constrain Proportions","width":"Width","height":"Height","opacity":"Opacity","red":"Red","green":"Green","blue":"Blue","eraser":"Eraser","center":"Center","background":"Background","scaling-algorithm":"Scaling Algorithm","algorithm-smooth":"Smooth","algorithm-pixelated":"Pixelated","preview":"Preview","angle-snap":"Snap","angle-snap-title":"45° Angle Snapping","lock-alpha":"Lock Alpha","lock-alpha-title":"Locks layer\'s alpha channel","reverse":"Reverse","compare-before":"Before","compare-after":"After"}')})),o.register("79ZVO",(function(e,t){e.exports=o("ih7W4")(o("f6OTe").getBundleURL("dGDZJ")+o("2evKT").resolve("5RGAp")).then((function(){return o("fz5vW")}))})),o.register("ih7W4",(function(e,t){"use strict";var r=o("5Y6Bl");e.exports=r((function(e){return new Promise((function(t,r){var n=document.getElementsByTagName("script");if([].concat(n).some((function(t){return t.src===e})))t();else{var i=document.createElement("link");i.href=e,i.rel="preload",i.as="script",document.head.appendChild(i);var o=document.createElement("script");o.async=!0,o.type="text/javascript",o.src=e,o.onerror=function(t){var n=new TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(t.message));o.onerror=o.onload=null,o.remove(),r(n)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),o.register("5Y6Bl",(function(e,t){"use strict";var r={},n={},i={};function o(e){switch(e){case"preload":return n;case"prefetch":return i;default:return r}}e.exports=function(e,t){return function(r){var n=o(t);return n[r]?n[r]:n[r]=e.apply(null,arguments).catch((function(e){throw delete n[r],e}))}}})),o.register("24FtO",(function(e,t){e.exports=o("ih7W4")(o("f6OTe").getBundleURL("dGDZJ")+o("2evKT").resolve("y5edP")).then((function(){return o("7ZPTi")}))})),o.register("jex1i",(function(e,t){e.exports=o("ih7W4")(o("f6OTe").getBundleURL("dGDZJ")+o("2evKT").resolve("dsJ3g")).then((function(){return o("blNy6")}))})),o.register("jLsx7",(function(e,t){e.exports=o("ih7W4")(o("f6OTe").getBundleURL("dGDZJ")+o("2evKT").resolve("lF1Tu")).then((function(){return o("iRLcJ")}))})),o.register("a8fvS",(function(e,t){e.exports=o("ih7W4")(o("f6OTe").getBundleURL("dGDZJ")+o("2evKT").resolve("dafOa")).then((function(){return o("6NgYC")}))})),o("2evKT").register(JSON.parse('{"dGDZJ":"embed.js","eHdqz":"klecks-logo.77be0db3.png","5RGAp":"de.9c960829.js","y5edP":"ja.eb3fd8b6.js","dsJ3g":"zh-CN.fa3b5f63.js","lF1Tu":"zh-TW.ee142baf.js","dafOa":"main-embed.b3857d4a.js","l7FYj":"check.8d706b11.svg","kbyFQ":"cancel.17aa34ea.svg","5H9IS":"brush-pressure.f4437531.svg","la7yv":"copy.4adadd0c.svg","cTtMO":"tool-picker.d0e69c3a.svg","iQ1f0":"angle.f0b557ac.svg","1mb1v":"add-layer.ce1078bb.svg","11KJK":"duplicate-layer.3314e3c7.svg","floUo":"merge-layers.19da79a6.svg","kino6":"remove-layer.4e9b2b7d.svg","hhQeq":"rename-layer.7c31d4f4.svg","1dLwT":"cursor-picker.db2f5b39.png","9wZxU":"cursor-zoom-ew.fbb85406.png","hQSEH":"cursor-fill.8027a243.png","916ZI":"cursor-text.dcaa5de5.png","045N6":"cursor-rotate.5b164044.png","3x5dR":"new-image.09cdcd80.svg","hbDTd":"import.7a68c844.svg","16iGk":"export.bc31616f.svg","2ME3z":"share.454898d1.svg","hZnSk":"help.208e9032.svg","6mHrC":"tool-paint.6cdb3344.svg","hS5Hj":"tool-fill.3358320a.svg","4KGfM":"tool-gradient.64486254.svg","doX4v":"tool-text.1cbd0325.svg","7NqHO":"tool-shape.3de78c3f.svg","dz3mY":"caret-down.68d4cd16.svg","2gZH2":"tool-hand.e7fc81b9.svg","04ZZm":"tool-zoom-in.d413f042.svg","j9xio":"tool-zoom-out.299f4d1f.svg","AnO0a":"tool-undo.540bf765.svg","nTvP2":"inverted-border.3353c7f3.svg","6toXQ":"edit-rotate.fd0e572a.svg","b1UMP":"ui-collapse.2b5dfc6a.svg","lvwQ5":"align-left.4876a845.svg","imAvm":"align-center.6f56d4bd.svg","dC0sF":"align-right.1521d61c.svg","h3hPo":"typo-italic.39f02a8d.svg","1pAeY":"typo-bold.8156fef3.svg","5tPq3":"edit-brightness-contrast.8430cb26.svg","cazOx":"edit-crop.16c534dd.svg","245NA":"edit-curves.bbdb97b2.svg","1hkCG":"edit-flip.00fd2c6b.svg","k2eFf":"edit-hue-saturation.c9c1c847.svg","krKGd":"edit-invert.fa435c66.png","ehfxY":"edit-perspective.e23100db.svg","beOjS":"edit-resize.56391e2b.svg","Gk9bV":"edit-tilt-shift.dd20efff.png","csed7":"edit-to-alpha.f7a2065a.svg","equSE":"edit-transform.c8795430.svg","h1dN3":"edit-triangle-blur.9df2dbef.png","LfAXI":"edit-unsharp-mask.c58e988c.png","cB6q6":"edit-grid.e900ce7b.svg","S9ano":"edit-noise.51bd751c.svg","4eqRj":"edit-pattern.1a06e094.svg","8mvSV":"edit-vanish-point.fc5858e4.svg","kbc0v":"edit-distort.bdb643f2.svg","iiCd6":"brush-pen.49a7b91e.svg","6fRlX":"brush-blend.3706e8a1.svg","hC7PC":"brush-sketchy.9e5d0120.png","eZgVv":"brush-pixel.673f3e4c.svg","fPZin":"brush-eraser.a9e10dce.svg","fp7H1":"brush-smudge.45852bcd.svg","eX098":"brush-chemy.a5a188f6.svg","2oHM2":"upload.fb8f9195.svg","iGeXe":"loading.7ff8a2ac.gif","kNYzr":"dist.485e9c04.js","kSWIa":"bitbof-logo.bc5e3ed5.svg","4FMUg":"ui-swap-lr.7f474f51.svg","79hnx":"licenses.fa0a4b09.js","eFiVD":"checkmark.5cb0764b.svg","2BZYe":"constrain.62f04e45.svg","k9Nks":"tab-settings.be84ac7c.svg","bBxqy":"tab-layers.c8a104e7.svg","4GTbM":"embed.css"}'));var a,l,s=o("3kC7t"),c=o("3Rl3W"),u=o("a7ch7"),f=o("cijLd");function d(){if(l)return l;var e,t;try{throw new Error}catch(t){e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g)}return t=e[e.length-1],l=(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}a=o("f6OTe").getBundleURL("dGDZJ")+o("2evKT").resolve("eHdqz");var p=o("1mH1z"),h=!1;!function(){for(var e=document.getElementsByTagName("link"),t=0;t<e.length;t++)"stylesheet"===e[t].rel&&(e[t].disabled=!0);var r=document.createElement("link");r.rel="stylesheet",r.href=d()+"embed.css",document.head.appendChild(r)}(),window.Klecks=function(e){if(h)throw new Error("Already created an embed");var r,n;h=!0,e=(0,u.default)((0,c.default)({},e),{embedUrl:e.embedUrl?e.embedUrl:d()});var i,l,g=[],m=this;(0,s.default)(t(f).mark((function l(){var s,c,u,d;return t(f).wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,p.initLANG)();case 2:for(s=document.createElement("div"),c=[["position","fixed"],["left","0"],["top","0"],["width","500px"],["height","500px"],["display","flex"],["alignItems","center"],["justifyContent","center"],["flexDirection","column"],["background","rgb(158,158,158)"],["fontFamily","Arial, sans-serif"],["fontSize","30px"],["color","#e3e3e3"]],u=0;u<c.length;u++)s.style[c[u][0]]=c[u][1];return s.id="loading-screen",s.innerHTML='<img width="150" height="54" src="'+(e.logoImg?e.logoImg:t(a))+'" alt="Logo"/>\n<div style="margin: 15px 0 0 0; display: flex; align-items: center">\n<div class="spinner"></div>\n<span id="loading-screen-text">'+(0,p.LANG)("embed-init-loading")+"</span></div>",document.body.appendChild(s),l.next=10,o("a8fvS");case 10:d=l.sent,i=new d.Embed(e),m.openProject=i.openProject,m.getPNG=i.getPNG,m.getPSD=i.getPSD,m.initError=i.initError,r&&i.openProject(r),n&&i.initError(n),g.length&&i.readPSDs(g);case 19:case"end":return l.stop()}}),l)})))(),this.openProject=function(e){if(r)throw new Error("Already called openProject");r=e},this.initError=function(e){n=e},this.readPSD=(l=(0,s.default)(t(f).mark((function e(r){var n;return t(f).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e,t){var n={blob:r,callback:function(r){g.splice(g.indexOf(n),1),r?e(r):t()}};i?i.readPSDs([n]):g.push(n)})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)}))),function(e){return l.apply(this,arguments)})}}();
//# sourceMappingURL=embed.js.map
