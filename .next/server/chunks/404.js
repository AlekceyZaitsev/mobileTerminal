"use strict";
exports.id = 404;
exports.ids = [404];
exports.modules = {

/***/ 4404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ main_MainPage)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/context.ts
var context = __webpack_require__(1725);
;// CONCATENATED MODULE: ./src/utilites/createNewOperator.ts
const addNewOperator = (currentArray, operatorBrand, fc) => {
  if (operatorBrand.length && operatorBrand.trim()) {
    const newOperator = {
      id: Date.now(),
      name_operator: operatorBrand
    };
    fc([...currentArray, newOperator]);
  } else {
    return -1;
  }
};
// EXTERNAL MODULE: ./shared/ui/components/input/inputForm.ts
var inputForm = __webpack_require__(7739);
// EXTERNAL MODULE: ./shared/ui/components/title/Title.ts
var Title = __webpack_require__(1852);
// EXTERNAL MODULE: ./shared/ui/components/form/FormMobilePayment.ts
var FormMobilePayment = __webpack_require__(7471);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./shared/ui/styles/colors/colors.ts
var colors = __webpack_require__(5242);
;// CONCATENATED MODULE: ./shared/ui/components/link/LinkOperator.ts



const LinkOperator = external_styled_components_default()((link_default())).withConfig({
  displayName: "LinkOperator",
  componentId: "sc-1k0hq55-0"
})(["display:flex;justify-content:center;align-items:center;margin:0 0 30px 0;padding:25px;color:", ";font-family:\"Arial Black\";font-size:calc(14px + 16 * (100vw / 1280));border:1px solid ", ";border-radius:10px;background:none;transition:0.3s;cursor:pointer;:hover{transform:scale(1.05);}@media (max-width:768px){margin:0 0 15px 0;}"], colors/* Colors */.w.WHITE, colors/* Colors */.w.BLACK);
// EXTERNAL MODULE: ./src/styles/ContainerApp.ts
var ContainerApp = __webpack_require__(9679);
// EXTERNAL MODULE: ./shared/ui/components/button/FormButton.ts
var FormButton = __webpack_require__(2943);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./pages/main/MainPage.tsx












const MainPage = () => {
  const {
    data,
    fc
  } = (0,external_react_.useContext)(context/* OperatorsContext */.G);
  const {
    0: createNewOperator,
    1: setCreateNewOperator
  } = (0,external_react_.useState)('');
  return /*#__PURE__*/jsx_runtime.jsx(ContainerApp/* ContainerApp */.Y, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(FormMobilePayment/* FormMobilePayment */.U, {
      children: [/*#__PURE__*/jsx_runtime.jsx(Title/* Title */.D, {
        children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430"
      }), /*#__PURE__*/jsx_runtime.jsx("ul", {
        children: data.map(items => /*#__PURE__*/jsx_runtime.jsx("li", {
          children: /*#__PURE__*/jsx_runtime.jsx(LinkOperator, {
            href: `./operators/${items.name_operator}`,
            children: items.name_operator
          })
        }, items.id))
      }), /*#__PURE__*/jsx_runtime.jsx(inputForm/* InputForm */.M, {
        type: "text",
        onChange: e => setCreateNewOperator(e.target.value)
      }), /*#__PURE__*/jsx_runtime.jsx(FormButton/* FormButton */.O, {
        onClick: () => addNewOperator(data, createNewOperator, fc),
        children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"
      })]
    })
  });
};

/* harmony default export */ const main_MainPage = (MainPage);

/***/ }),

/***/ 1725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ OperatorsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dataOperators_dataOperators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5529);


const OperatorsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  data: _dataOperators_dataOperators__WEBPACK_IMPORTED_MODULE_1__/* .dataOperators */ .k,
  fc: undefined
});

/***/ }),

/***/ 5529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ dataOperators)
/* harmony export */ });
const dataOperators = [{
  id: 1,
  name_operator: 'МТС'
}, {
  id: 2,
  name_operator: 'Билайн'
}, {
  id: 3,
  name_operator: 'Мегафон'
}];

/***/ })

};
;