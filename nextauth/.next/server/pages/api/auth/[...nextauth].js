"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// type MyJWT = JWT & {\n//   accessToken?: string;\n// };\nconst authOptions = {\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_ID || \"cf182a6861b7f7a1c712\",\n            clientSecret: process.env.GITHUB_SECRET || \"e59db3d64458cb407853cd0058a69b561cc754d2\"\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_ID || \"1076546050061-gh9s439cd06d742t8rpjjr094d54497g.apps.googleusercontent.com\",\n            clientSecret: process.env.GOOGLE_SECRET || \"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\",\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        })\n    ],\n    secret: process.env.JWT_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBR3VCO0FBQ0M7QUFTdEQsdUJBQXVCO0FBQ3ZCLDBCQUEwQjtBQUMxQixLQUFLO0FBQ0EsTUFBTUcsY0FBYztJQUN6QkMsV0FBVztRQUNUSCxpRUFBY0EsQ0FBQztZQUNYSSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVMsSUFBSTtZQUNyQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxhQUFhLElBQUk7UUFDN0M7UUFDQVIsaUVBQWNBLENBQUM7WUFFYkcsVUFBVUMsUUFBUUMsR0FBRyxDQUFDSSxTQUFTLElBQUk7WUFDbkNGLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0ssYUFBYSxJQUFJO1lBQzNDQyxlQUFlO2dCQUNYQyxRQUFRO29CQUNOQyxRQUFRO29CQUNSQyxhQUFhO29CQUNiQyxlQUFlO2dCQUNqQjtZQUNGO1FBQ0o7S0FrQkQ7SUFDREMsUUFBUVosUUFBUUMsR0FBRyxDQUFDWSxVQUFVO0FBbUJoQyxFQUFDO0FBRUQsaUVBQWVuQixnREFBUUEsQ0FBQ0csWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhdXRoLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCB7IEpXVCB9IGZyb20gJ25leHQtYXV0aC9qd3QnO1xuaW1wb3J0IHsgVXNlcixBY2NvdW50IH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgR29vZ2xlQWNjb3VudCAgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycyc7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuLy8gaW1wb3J0IHsgR29vZ2xlQWNjb3VudCwgR29vZ2xlUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSc7XG5pbnRlcmZhY2UgRW52e1xuICAgIGNsaWVudElkPzphbnk7XG4gICAgY2xpZW50U2VjcmV0Pzphbnk7XG4gICBcbiAgfVxuICAvLyB0eXBlIE15SldUID0gSldUICYge1xuICAvLyAgIGFjY2Vzc1Rva2VuPzogc3RyaW5nO1xuICAvLyB9O1xuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBHaXRodWJQcm92aWRlcih7XG4gICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQgfHwgJ2NmMTgyYTY4NjFiN2Y3YTFjNzEyJyxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCB8fCAnZTU5ZGIzZDY0NDU4Y2I0MDc4NTNjZDAwNThhNjliNTYxY2M3NTRkMicsXG4gICAgfSksXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lEIHx8ICcxMDc2NTQ2MDUwMDYxLWdoOXM0MzljZDA2ZDc0MnQ4cnBqanIwOTRkNTQ0OTdnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCB8fCAnR09DU1BYLW5UZDVKcVEwRDNjeFE1ck00TW81dmdsajdXMFonLFxuICAgICAgYXV0aG9yaXphdGlvbjoge1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgcHJvbXB0OiBcImNvbnNlbnRcIixcbiAgICAgICAgICAgIGFjY2Vzc190eXBlOiBcIm9mZmxpbmVcIixcbiAgICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IFwiY29kZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSksXG4gICAgLy8gQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgLy8gICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgLy8gICBjcmVkZW50aWFsczoge1xuICAgIC8vICAgICB1c2VybmFtZTogeyBsYWJlbDogXCJVc2VybmFtZVwiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwianNtaXRoXCIgfSxcbiAgICAvLyAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAvLyAgIH0sXG4gICAgLy8gICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xuICAgIC8vICAgIGNvbnN0IHVzZXIgPSB7IGlkOiBcIjFcIiwgbmFtZTogXCJKIFNtaXRoXCIsIGVtYWlsOiBcImpzbWl0aEBleGFtcGxlLmNvbVwiIH1cbiAgICAvLyAgICAgaWYgKHVzZXIpIHtcbiAgICAvLyAgICAgICByZXR1cm4gdXNlclxuICAgIC8vICAgICB9IFxuICAgIC8vICAgICBlbHNlIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBudWxsXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICAgIFxuICBdLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVRcbiAgLy8gand0OiB7XG4gIC8vICAgZW5jcnlwdGlvbjogdHJ1ZSxcbiAgLy8gfSxcblxuICBcbiAgLy8gY2FsbGJhY2tzOiB7XG4gIC8vICAgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcbiAgLy8gICAgIHJldHVybiBzZXNzaW9uIFxuICAvLyAgIH0sXG4gIFxuICAvLyBjYWxsYmFja3M6IHtcbiAgLy8gICBhc3luYyBqd3QodG9rZW46IE15SldULCB1c2VyOiBVc2VyLCBhY2NvdW50Okdvb2dsZUFjY291bnQpOiBQcm9taXNlPE15SldUPiB7XG4gIC8vICAgICBpZiAoYWNjb3VudD8uYWNjZXNzVG9rZW4pIHtcbiAgLy8gICAgICAgdG9rZW4uYWNjZXNzVG9rZW4gPSBhY2NvdW50LmFjY2Vzc1Rva2VuIGFzIHN0cmluZztcbiAgLy8gICAgIH1cbiAgLy8gICAgIHJldHVybiB0b2tlbjtcbiAgLy8gICB9LFxuICAvLyB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucylcblxuXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRodWJQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiR09PR0xFX0lEIiwiR09PR0xFX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJwcm9tcHQiLCJhY2Nlc3NfdHlwZSIsInJlc3BvbnNlX3R5cGUiLCJzZWNyZXQiLCJKV1RfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();