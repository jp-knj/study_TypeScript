parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ztkr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),t=require("react/jsx-runtime");function a(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class s extends e.Component{constructor(...e){super(...e),a(this,"state",{active:0}),a(this,"handleIndexClick",e=>{this.setState({active:+e.target.dataset.index})})}render(){const{active:e}=this.state,{images:a}=this.props;return(0,t.jsxs)("div",{className:"carousel",children:[(0,t.jsx)("img",{src:a[e],alt:"animal"}),(0,t.jsx)("div",{className:"carousel-smaller",children:a.map((a,s)=>(0,t.jsx)("img",{src:a,onClick:this.handleIndexClick,"data-index":s,className:s===e?"active":"",alt:"animal thumbnail"},a))})]})}}a(s,"defaultProps",{images:["http://pets-images.dev-apis.com/pets/none.jpg"]});var i=s;exports.default=i;
},{}],"mD05":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),r=require("react-router-dom"),t=require("react/jsx-runtime");function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class s extends e.Component{constructor(...e){super(...e),o(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0,redirect:!1}}componentDidCatch(e,r){console.error("ErrorBoundary caught an error",e,r)}componentDidUpdate(){this.state.hasError&&setTimeout(()=>this.setState({redirect:!0}),5e3)}render(){return this.state.redirect?(0,t.jsx)(r.Redirect,{to:"/"}):this.state.hasError?(0,t.jsxs)("h2",{children:["There was an error with this listing. ",(0,t.jsx)(r.Link,{to:"/",children:"Click here"})," ","to back to the home page or wait five seconds."]}):this.props.children}}var i=s;exports.default=i;
},{}],"C/Dc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=p;var e=require("react"),t=require("react-router-dom"),r=i(require("./ThemeContext")),o=i(require("./Carousel")),s=i(require("./ErrorBoundary")),n=require("react/jsx-runtime");function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const d=(0,e.lazy)(()=>require("_bundle_loader")(require.resolve("./Modal")));class u extends e.Component{constructor(...e){super(...e),c(this,"state",{loading:!0,showModal:!1}),c(this,"toggleModal",()=>this.setState({showModal:!this.state.showModal})),c(this,"adopt",()=>window.location="http://bit.ly/pet-adopt")}async componentDidMount(){const e=await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`),t=await e.json();this.setState(Object.assign({loading:!1},t.pets[0]))}render(){if(this.state.loading)return(0,n.jsx)("h2",{children:"loading … "});const{animal:e,breed:t,city:s,state:i,description:a,name:l,images:c,showModal:u}=this.state;return(0,n.jsxs)("div",{className:"details",children:[(0,n.jsx)(o.default,{images:c}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:l}),(0,n.jsx)("h2",{children:`${e} — ${t} — ${s}, ${i}`}),(0,n.jsx)(r.default.Consumer,{children:([e])=>(0,n.jsxs)("button",{onClick:this.toggleModal,style:{backgroundColor:e},children:["Adopt ",l]})}),(0,n.jsx)("p",{children:a}),u?(0,n.jsx)(d,{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h1",{children:["Would you like to adopt ",l,"?"]}),(0,n.jsxs)("div",{className:"buttons",children:[(0,n.jsx)("button",{onClick:this.adopt,children:"Yes"}),(0,n.jsx)("button",{onClick:this.toggleModal,children:"No"})]})]})}):null]})]})}}const h=(0,t.withRouter)(u);function p(e){return(0,n.jsx)(s.default,{children:(0,n.jsx)(h,l({},e))})}
},{"./ThemeContext":"2tnM","./Carousel":"Ztkr","./ErrorBoundary":"mD05","_bundle_loader":"Cm3W","./Modal":[["Modal.327b7e11.js","KnKP"],"Modal.327b7e11.js.map","KnKP"]}],"CSru":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"Cm3W":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"CSru"}],"6FAI":[function(require,module,exports) {
var n=require("fs");module.exports=function(e){return new Promise(function(t,i){n.readFile(__dirname+e,"utf8",function(n,e){n?i(n):setImmediate(function(){t(e)})})}).then(function(n){new Function("",n)()})};
},{}],0:[function(require,module,exports) {
var b=require("Cm3W");b.register("js",require("6FAI"));b.load([]).then(function(){require("C/Dc");});
},{}]},{},[0], null)
//# sourceMappingURL=/Details.d90cbc89.js.map