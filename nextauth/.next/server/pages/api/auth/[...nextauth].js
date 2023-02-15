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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// type MyJWT = JWT & {\n//   accessToken?: string;\n// };\nconst authOptions = {\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_ID || \"cf182a6861b7f7a1c712\",\n            clientSecret: process.env.GITHUB_SECRET || \"e59db3d64458cb407853cd0058a69b561cc754d2\"\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_ID || \"1076546050061-gh9s439cd06d742t8rpjjr094d54497g.apps.googleusercontent.com\",\n            clientSecret: process.env.GOOGLE_SECRET || \"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\",\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBR3VCO0FBQ0M7QUFRdEQsdUJBQXVCO0FBQ3ZCLDBCQUEwQjtBQUMxQixLQUFLO0FBQ0EsTUFBTUcsY0FBYztJQUN6QkMsV0FBVztRQUNUSCxpRUFBY0EsQ0FBQztZQUNYSSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVMsSUFBSTtZQUNyQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxhQUFhLElBQUk7UUFDN0M7UUFDQVIsaUVBQWNBLENBQUM7WUFFYkcsVUFBVUMsUUFBUUMsR0FBRyxDQUFDSSxTQUFTLElBQUk7WUFDbkNGLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0ssYUFBYSxJQUFJO1lBQzNDQyxlQUFlO2dCQUNYQyxRQUFRO29CQUNOQyxRQUFRO29CQUNSQyxhQUFhO29CQUNiQyxlQUFlO2dCQUNqQjtZQUNGO1FBQ0o7S0FFRDtBQW1CSCxFQUFDO0FBRUQsaUVBQWVqQixnREFBUUEsQ0FBQ0csWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhdXRoLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCB7IEpXVCB9IGZyb20gJ25leHQtYXV0aC9qd3QnO1xuaW1wb3J0IHsgVXNlcixBY2NvdW50IH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgR29vZ2xlQWNjb3VudCAgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycyc7XG4vLyBpbXBvcnQgeyBHb29nbGVBY2NvdW50LCBHb29nbGVQcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcbmludGVyZmFjZSBFbnZ7XG4gICAgY2xpZW50SWQ/OmFueTtcbiAgICBjbGllbnRTZWNyZXQ/OmFueTtcbiAgIFxuICB9XG4gIC8vIHR5cGUgTXlKV1QgPSBKV1QgJiB7XG4gIC8vICAgYWNjZXNzVG9rZW4/OiBzdHJpbmc7XG4gIC8vIH07XG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCB8fCAnY2YxODJhNjg2MWI3ZjdhMWM3MTInLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUIHx8ICdlNTlkYjNkNjQ0NThjYjQwNzg1M2NkMDA1OGE2OWI1NjFjYzc1NGQyJyxcbiAgICB9KSxcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQgfHwgJzEwNzY1NDYwNTAwNjEtZ2g5czQzOWNkMDZkNzQydDhycGpqcjA5NGQ1NDQ5N2cuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVUIHx8ICdHT0NTUFgtblRkNUpxUTBEM2N4UTVyTTRNbzV2Z2xqN1cwWicsXG4gICAgICBhdXRob3JpemF0aW9uOiB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBwcm9tcHQ6IFwiY29uc2VudFwiLFxuICAgICAgICAgICAgYWNjZXNzX3R5cGU6IFwib2ZmbGluZVwiLFxuICAgICAgICAgICAgcmVzcG9uc2VfdHlwZTogXCJjb2RlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIFxuICBdXG4gIC8vIGp3dDoge1xuICAvLyAgIGVuY3J5cHRpb246IHRydWUsXG4gIC8vIH0sXG5cbiAgXG4gIC8vIGNhbGxiYWNrczoge1xuICAvLyAgIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KSB7XG4gIC8vICAgICByZXR1cm4gc2Vzc2lvbiBcbiAgLy8gICB9LFxuICBcbiAgLy8gY2FsbGJhY2tzOiB7XG4gIC8vICAgYXN5bmMgand0KHRva2VuOiBNeUpXVCwgdXNlcjogVXNlciwgYWNjb3VudDpHb29nbGVBY2NvdW50KTogUHJvbWlzZTxNeUpXVD4ge1xuICAvLyAgICAgaWYgKGFjY291bnQ/LmFjY2Vzc1Rva2VuKSB7XG4gIC8vICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjb3VudC5hY2Nlc3NUb2tlbiBhcyBzdHJpbmc7XG4gIC8vICAgICB9XG4gIC8vICAgICByZXR1cm4gdG9rZW47XG4gIC8vICAgfSxcbiAgLy8gfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpXG5cblxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCIsIkdPT0dMRV9JRCIsIkdPT0dMRV9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwicHJvbXB0IiwiYWNjZXNzX3R5cGUiLCJyZXNwb25zZV90eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

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