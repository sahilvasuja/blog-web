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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./client.tsx":
/*!********************!*\
  !*** ./client.tsx ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/link/error */ \"@apollo/client/link/error\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__.onError)(({ graphqlErrors , networkError  })=>{\n    if (graphqlErrors) {\n        graphqlErrors.map(({ message  })=>{\n            alert(`Graphql error ${message}`);\n        });\n    }\n});\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),\n    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({\n        uri: \"https://sahil-firstproject.hasura.app/v1/graphql\",\n        headers: {\n            \"x-hasura-admin-secret\": \"zfzk7e4yAENhUT7RYhuWYWaul5AXt5uAPd38Jzd2CyJQz7GJrutVOAsDSQGCU3z6\"\n        }\n    })\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client); //   <ApolloProvider client={client}>\n //   </ApolloProvider>\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSzBCO0FBQzRCO0FBQ3BELE1BQU1JLFlBQVlELGtFQUFPQSxDQUFDLENBQUMsRUFBRUUsY0FBYSxFQUFFQyxhQUFZLEVBQU0sR0FBSztJQUNqRSxJQUFJRCxlQUFlO1FBQ2pCQSxjQUFjRSxHQUFHLENBQUMsQ0FBQyxFQUFFQyxRQUFPLEVBQUMsR0FBSztZQUNoQ0MsTUFBTSxDQUFDLGNBQWMsRUFBRUQsUUFBUSxDQUFDO1FBQ2xDO0lBQ0YsQ0FBQztBQUNIO0FBRUEsTUFBTUUsU0FBUyxJQUFJVix3REFBWUEsQ0FBQztJQUM5QlcsT0FBTyxJQUFJVCx5REFBYUE7SUFDeEJVLE1BQU0sSUFBSVgsb0RBQVFBLENBQUM7UUFDakJZLEtBQUs7UUFDTEMsU0FBUztZQUNQLHlCQUNFO1FBQ0o7SUFDRjtBQUNGO0FBQ0EsaUVBQWVKLE1BQU1BLEVBQUMsQ0FDeEIscUNBQXFDO0NBRXJDLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhdXRoLy4vY2xpZW50LnRzeD9jZWNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQXBvbGxvUHJvdmlkZXIsXG4gICAgQXBvbGxvQ2xpZW50LFxuICAgIEh0dHBMaW5rLFxuICAgIEluTWVtb3J5Q2FjaGUsXG4gIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG4gIGltcG9ydCB7IG9uRXJyb3IgfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvbGluay9lcnJvclwiO1xuICBjb25zdCBlcnJvckxpbmsgPSBvbkVycm9yKCh7IGdyYXBocWxFcnJvcnMsIG5ldHdvcmtFcnJvciB9OmFueSkgPT4ge1xuICAgIGlmIChncmFwaHFsRXJyb3JzKSB7XG4gICAgICBncmFwaHFsRXJyb3JzLm1hcCgoeyBtZXNzYWdlfSkgPT4ge1xuICAgICAgICBhbGVydChgR3JhcGhxbCBlcnJvciAke21lc3NhZ2V9YCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBcbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gICAgbGluazogbmV3IEh0dHBMaW5rKHtcbiAgICAgIHVyaTogXCJodHRwczovL3NhaGlsLWZpcnN0cHJvamVjdC5oYXN1cmEuYXBwL3YxL2dyYXBocWxcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJ4LWhhc3VyYS1hZG1pbi1zZWNyZXRcIjpcbiAgICAgICAgICBcInpmems3ZTR5QUVOaFVUN1JZaHVXWVdhdWw1QVh0NXVBUGQzOEp6ZDJDeUpRejdHSnJ1dFZPQXNEU1FHQ1UzejZcIixcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pO1xuICBleHBvcnQgZGVmYXVsdCBjbGllbnQ7XG4vLyAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgXG4vLyAgIDwvQXBvbGxvUHJvdmlkZXI+Il0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsIm9uRXJyb3IiLCJlcnJvckxpbmsiLCJncmFwaHFsRXJyb3JzIiwibmV0d29ya0Vycm9yIiwibWFwIiwibWVzc2FnZSIsImFsZXJ0IiwiY2xpZW50IiwiY2FjaGUiLCJsaW5rIiwidXJpIiwiaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client */ \"./client.tsx\");\n\n\n\n\n\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: pageProps.session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {\n            client: _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/_app.tsx\",\n            lineNumber: 12,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFbUI7QUFDRjtBQUNqQjtBQUNmLFNBQVNHLElBQUksRUFDMUJDLFVBQVMsRUFDVEMsV0FBVyxFQUFFQyxRQUFPLEVBQUUsR0FBR0QsV0FBVyxHQUMzQixFQUFFO0lBQ1gscUJBQ0UsOERBQUNMLDREQUFlQTtRQUFDTSxTQUFTRCxVQUFVQyxPQUFPO2tCQUMzQyw0RUFBQ0wsMERBQWNBO1lBQUNDLFFBQVFBLCtDQUFNQTtzQkFDOUIsNEVBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhdXRoLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50J1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHtcbiAgQ29tcG9uZW50LFxuICBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0sXG59OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJTZXNzaW9uUHJvdmlkZXIiLCJBcG9sbG9Qcm92aWRlciIsImNsaWVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/error":
/*!********************************************!*\
  !*** external "@apollo/client/link/error" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();