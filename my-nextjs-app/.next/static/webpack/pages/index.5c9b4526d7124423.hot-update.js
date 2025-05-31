/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "(pages-dir-browser)/./src/components/CodeEditor.tsx":
/*!***************************************!*\
  !*** ./src/components/CodeEditor.tsx ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(pages-dir-browser)/./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(pages-dir-browser)/./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(pages-dir-browser)/./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CodeEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CodeEditor */ \"(pages-dir-browser)/./src/components/CodeEditor.tsx\");\n/* harmony import */ var _components_CodeEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_CodeEditor__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            minHeight: \"100vh\",\n            background: \"linear-gradient(135deg, #7c3aed 0%, #c084fc 50%, #d8b4fe 100%)\",\n            padding: \"3rem 1rem\",\n            fontFamily: \"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\",\n            color: \"white\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            justifyContent: \"start\",\n            userSelect: \"none\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                style: {\n                    textAlign: \"center\",\n                    marginBottom: \"3rem\",\n                    maxWidth: 600,\n                    userSelect: \"text\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            fontWeight: 900,\n                            fontSize: \"3rem\",\n                            textShadow: \"0 2px 10px rgba(0, 0, 0, 0.3)\"\n                        },\n                        children: \"Enligence AI — React Component Editor\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Uzair\\\\Desktop\\\\git-demo-clones\\\\new-project\\\\my-nextjs-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"1.25rem\",\n                            fontWeight: 600,\n                            color: \"rgba(255,255,255,0.85)\",\n                            marginTop: 8,\n                            textShadow: \"0 1px 6px rgba(0, 0, 0, 0.15)\"\n                        },\n                        children: \"Edit your React components dynamically with AI-powered code updates.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Uzair\\\\Desktop\\\\git-demo-clones\\\\new-project\\\\my-nextjs-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Uzair\\\\Desktop\\\\git-demo-clones\\\\new-project\\\\my-nextjs-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_CodeEditor__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Uzair\\\\Desktop\\\\git-demo-clones\\\\new-project\\\\my-nextjs-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Uzair\\\\Desktop\\\\git-demo-clones\\\\new-project\\\\my-nextjs-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDd0I7QUFFbkMsU0FBU0U7SUFDdEIscUJBQ0UsOERBQUNDO1FBQ0NDLE9BQU87WUFDTEMsV0FBVztZQUNYQyxZQUNFO1lBQ0ZDLFNBQVM7WUFDVEMsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxZQUFZO1lBQ1pDLGdCQUFnQjtZQUNoQkMsWUFBWTtRQUNkOzswQkFFQSw4REFBQ0M7Z0JBQ0NYLE9BQU87b0JBQ0xZLFdBQVc7b0JBQ1hDLGNBQWM7b0JBQ2RDLFVBQVU7b0JBQ1ZKLFlBQVk7Z0JBQ2Q7O2tDQUVBLDhEQUFDSzt3QkFDQ2YsT0FBTzs0QkFDTGdCLFlBQVk7NEJBQ1pDLFVBQVU7NEJBQ1ZDLFlBQVk7d0JBQ2Q7a0NBQ0Q7Ozs7OztrQ0FHRCw4REFBQ0M7d0JBQ0NuQixPQUFPOzRCQUNMaUIsVUFBVTs0QkFDVkQsWUFBWTs0QkFDWlgsT0FBTzs0QkFDUGUsV0FBVzs0QkFDWEYsWUFBWTt3QkFDZDtrQ0FDRDs7Ozs7Ozs7Ozs7OzBCQUtILDhEQUFDckIsK0RBQVVBOzs7Ozs7Ozs7OztBQUdqQjtLQWxEd0JDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFV6YWlyXFxEZXNrdG9wXFxnaXQtZGVtby1jbG9uZXNcXG5ldy1wcm9qZWN0XFxteS1uZXh0anMtYXBwXFxzcmNcXHBhZ2VzXFxpbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvZGVFZGl0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29kZUVkaXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjM2FlZCAwJSwgI2MwODRmYyA1MCUsICNkOGI0ZmUgMTAwJSlcIixcbiAgICAgICAgcGFkZGluZzogXCIzcmVtIDFyZW1cIixcbiAgICAgICAgZm9udEZhbWlseTogXCInU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZlwiLFxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3RhcnRcIixcbiAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxoZWFkZXJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjNyZW1cIixcbiAgICAgICAgICBtYXhXaWR0aDogNjAwLFxuICAgICAgICAgIHVzZXJTZWxlY3Q6IFwidGV4dFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aDFcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFdlaWdodDogOTAwLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiM3JlbVwiLFxuICAgICAgICAgICAgdGV4dFNoYWRvdzogXCIwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBFbmxpZ2VuY2UgQUkg4oCUIFJlYWN0IENvbXBvbmVudCBFZGl0b3JcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHBcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMS4yNXJlbVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgY29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjg1KVwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiA4LFxuICAgICAgICAgICAgdGV4dFNoYWRvdzogXCIwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBFZGl0IHlvdXIgUmVhY3QgY29tcG9uZW50cyBkeW5hbWljYWxseSB3aXRoIEFJLXBvd2VyZWQgY29kZSB1cGRhdGVzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPENvZGVFZGl0b3IgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvZGVFZGl0b3IiLCJIb21lIiwiZGl2Iiwic3R5bGUiLCJtaW5IZWlnaHQiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImZvbnRGYW1pbHkiLCJjb2xvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidXNlclNlbGVjdCIsImhlYWRlciIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsIm1heFdpZHRoIiwiaDEiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0ZXh0U2hhZG93IiwicCIsIm1hcmdpblRvcCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./src/pages/index.tsx\n"));

/***/ })

});