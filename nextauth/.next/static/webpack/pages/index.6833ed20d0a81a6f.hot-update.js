"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/Headers.tsx":
/*!**************************************!*\
  !*** ./pages/components/Headers.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Headers = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    function profile() {\n        console.log(session.user, \"8\");\n        console.log(\"first\");\n        router.push(\"/userprofile\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-teal-600 border-gray-200 px-2 sm:px-4 py-2.5 rounded \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container flex flex-wrap items-center justify-between mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"self-center text-xl font-semibold whitespace-nowrap text-white\",\n                        children: \"Blogs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex md:order-2 space-x-5\",\n                    children: [\n                        status === \"authenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/api/auth/signout\",\n                            className: \"text-white bg-slate-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 \",\n                            children: \"Sign OUT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 37\n                        }, undefined) : \"\",\n                        status !== \"authenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/api/auth/callback/google\",\n                            className: \"text-white bg-teal-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0\",\n                            children: \"Sign IN\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 40\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-white bg-teal-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0\",\n                            onClick: profile,\n                            children: session.user.name\n                        }, void 0, false, {\n                            fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"items-center justify-between hidden w-full md:flex md:w-auto md:order-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/createblogs\",\n                                    className: \"block py-2 pl-3 pr-4 hover:text-green-300 text-white rounded md:bg-transparent md:p-0\",\n                                    \"aria-current\": \"page\",\n                                    children: \"List\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/createblogs\",\n                                    className: \"block py-2 pl-3 pr-4 hover:text-green-300 text-white rounded md:bg-transparent md:p-0\",\n                                    \"aria-current\": \"page\",\n                                    children: \"Create\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"block py-2 pl-3 pr-4 hover:text-green-300 text-white rounded md:bg-transparent md:p-0\",\n                                    \"aria-current\": \"page\",\n                                    children: \"View\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"block py-2 pl-3 pr-4 hover:text-green-300 text-white rounded md:bg-transparent md:p-0\",\n                                    \"aria-current\": \"page\",\n                                    children: \"Edit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sahilvasuja/Desktop/blog/nextauth/pages/components/Headers.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Headers, \"6qmYa+8MTHRrO97QW2taisqHZrE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Headers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Headers);\nvar _c;\n$RefreshReg$(_c, \"Headers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0hlYWRlcnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlDO0FBQ1o7QUFDZTtBQUNKO0FBQ3hDLE1BQU1JLFVBQVUsSUFBTTs7SUFDcEIsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUcsTUFBTUMsUUFBTyxFQUFFQyxPQUFNLEVBQUUsR0FBUU4sMkRBQVVBO0lBR2pELFNBQVNPLFVBQVM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ0osUUFBUUssSUFBSSxFQUFFO1FBQzFCRixRQUFRQyxHQUFHLENBQUM7UUFDYk4sT0FBT1EsSUFBSSxDQUFDO0lBQ2I7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUFFRixXQUFVOzhCQUVYLDRFQUFDRzt3QkFBS0gsV0FBVTtrQ0FBaUU7Ozs7Ozs7Ozs7OzhCQUluRiw4REFBQ0M7b0JBQUlELFdBQVU7O3dCQUNiUCxXQUFTLGdDQUFpQiw4REFBQ1Asa0RBQUlBOzRCQUM3QmtCLE1BQUs7NEJBQ0xKLFdBQVU7c0NBQ1g7Ozs7O3dDQUVTLEVBQUU7d0JBRVhQLFdBQVMsZ0NBQW1CLDhEQUFDUCxrREFBSUE7NEJBQ2hDa0IsTUFBSzs0QkFDTEosV0FBVTtzQ0FDWDs7Ozs7c0RBRVMsOERBQUNLOzRCQUFFTCxXQUFVOzRCQUE2Rk0sU0FBU1o7c0NBQzNIRixRQUFRSyxJQUFJLENBQUNVLElBQUk7Ozs7O3FDQUFLOzs7Ozs7OzhCQUcxQiw4REFBQ047b0JBQUlELFdBQVU7OEJBQ25CLDRFQUFDUTt3QkFBR1IsV0FBVTs7MENBQ1osOERBQUNTOzBDQUNDLDRFQUFDdkIsa0RBQUlBO29DQUFDa0IsTUFBSztvQ0FBZUosV0FBVTtvQ0FBeUZVLGdCQUFhOzhDQUFPOzs7Ozs7Ozs7OzswQ0FFbkosOERBQUNEOzBDQUNDLDRFQUFDdkIsa0RBQUlBO29DQUFDa0IsTUFBSztvQ0FBZUosV0FBVTtvQ0FBeUZVLGdCQUFhOzhDQUFPOzs7Ozs7Ozs7OzswQ0FFbkosOERBQUNEOzBDQUNDLDRFQUFDUDtvQ0FBRUUsTUFBSztvQ0FBSUosV0FBVTtvQ0FBeUZVLGdCQUFhOzhDQUFPOzs7Ozs7Ozs7OzswQ0FFckksOERBQUNEOzBDQUNDLDRFQUFDUDtvQ0FBRUUsTUFBSztvQ0FBSUosV0FBVTtvQ0FBeUZVLGdCQUFhOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZM0k7R0E1RE1yQjs7UUFDV0Qsa0RBQVNBO1FBQ2VELHVEQUFVQTs7O0tBRjdDRTtBQThETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL0hlYWRlcnMudHN4PzkzMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuY29uc3QgSGVhZGVycyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH06IGFueSA9IHVzZVNlc3Npb24oKVxuICBcblxuICBmdW5jdGlvbiBwcm9maWxlKCl7XG4gICAgY29uc29sZS5sb2coc2Vzc2lvbi51c2VyLCBcIjhcIik7XG4gICAgY29uc29sZS5sb2coXCJmaXJzdFwiKVxuICAgcm91dGVyLnB1c2goJy91c2VycHJvZmlsZScpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJiZy10ZWFsLTYwMCBib3JkZXItZ3JheS0yMDAgcHgtMiBzbTpweC00IHB5LTIuNSByb3VuZGVkIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBteC1hdXRvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgey8qIDxpbWcgc3JjPVwiaHR0cHM6Ly9mbG93Yml0ZS5jb20vZG9jcy9pbWFnZXMvbG9nby5zdmdcIiBjbGFzc05hbWU9XCJoLTYgbXItMyBzbTpoLTlcIiBhbHQ9XCJGbG93Yml0ZSBMb2dvXCIgLz4gKi99XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZi1jZW50ZXIgdGV4dC14bCBmb250LXNlbWlib2xkIHdoaXRlc3BhY2Utbm93cmFwIHRleHQtd2hpdGVcIj5cbiAgICAgICAgIEJsb2dzXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtZDpvcmRlci0yIHNwYWNlLXgtNVwiPlxuICAgICAgICB7IHN0YXR1cz09PVwiYXV0aGVudGljYXRlZFwiPyA8TGlua1xuICAgICAgICAgICAgaHJlZj1cIi9hcGkvYXV0aC9zaWdub3V0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctc2xhdGUtNTAwICBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgbXItMyBtZDptci0wIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2lnbiBPVVRcbiAgICAgICAgICA8L0xpbms+IDogJydcbiAgICAgICAgfVxuICAgICAgICAgeyBzdGF0dXMhPT1cImF1dGhlbnRpY2F0ZWRcIj8gICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cIi9hcGkvYXV0aC9jYWxsYmFjay9nb29nbGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy10ZWFsLTUwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgbXItMyBtZDptci0wXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduIElOXG4gICAgICAgICAgPC9MaW5rPiA6IDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctdGVhbC01MDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIG1yLTMgbWQ6bXItMFwiIG9uQ2xpY2s9e3Byb2ZpbGV9XG4gICAgICAgICAgPntzZXNzaW9uLnVzZXIubmFtZX08L3A+XG4gICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoaWRkZW4gdy1mdWxsIG1kOmZsZXggbWQ6dy1hdXRvIG1kOm9yZGVyLTFcIj5cbiAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTQgbXQtNCBib3JkZXIgIHJvdW5kZWQtbGcgIG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtOCBtZDptdC0wIG1kOnRleHQtc20gbWQ6Zm9udC1tZWRpdW0gbWQ6Ym9yZGVyLTAgXCI+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlYmxvZ3NcIiBjbGFzc05hbWU9XCJibG9jayBweS0yIHBsLTMgcHItNCAgaG92ZXI6dGV4dC1ncmVlbi0zMDAgdGV4dC13aGl0ZSByb3VuZGVkIG1kOmJnLXRyYW5zcGFyZW50IG1kOnAtMFwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5MaXN0PC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVibG9nc1wiIGNsYXNzTmFtZT1cImJsb2NrIHB5LTIgcGwtMyBwci00ICBob3Zlcjp0ZXh0LWdyZWVuLTMwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgbWQ6YmctdHJhbnNwYXJlbnQgbWQ6cC0wXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPkNyZWF0ZTwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBwbC0zIHByLTQgIGhvdmVyOnRleHQtZ3JlZW4tMzAwIHRleHQtd2hpdGUgcm91bmRlZCBtZDpiZy10cmFuc3BhcmVudCBtZDpwLTBcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+VmlldzwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBwbC0zIHByLTQgIGhvdmVyOnRleHQtZ3JlZW4tMzAwIHRleHQtd2hpdGUgcm91bmRlZCBtZDpiZy10cmFuc3BhcmVudCBtZDpwLTBcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+RWRpdDwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvbmF2PlxuXG5cbiAgXG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcnM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIkhlYWRlcnMiLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInByb2ZpbGUiLCJjb25zb2xlIiwibG9nIiwidXNlciIsInB1c2giLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJhIiwic3BhbiIsImhyZWYiLCJwIiwib25DbGljayIsIm5hbWUiLCJ1bCIsImxpIiwiYXJpYS1jdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Headers.tsx\n"));

/***/ })

});