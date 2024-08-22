/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Dosis\", sans-serif;\r\n  font-size: 20px;\r\n  box-sizing: border-box;\r\n  user-select: none;\r\n  list-style: none;\r\n}\r\n\r\n#content {\r\n  background-image: url(https://bartbzd.github.io/restaurant-page/81ed676f008bf7676288.png);\r\n  background-size: cover;\r\n  -webkit-background-size: cover;\r\n  -moz-background-size: cover;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n}\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 40px 0px 0px 30px;\r\n}\r\n.logoImg {\r\n  width: auto;\r\n  height: 50px;\r\n  margin-left: 30px;\r\n}\r\n\r\n.header-nav {\r\n  display: flex;\r\n  gap: 20px;\r\n  font-weight: 500;\r\n  margin-left: 5%;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  color: #343634;\r\n}\r\n\r\n.header-nav :hover {\r\n  color: #90fcc3;\r\n  transition: 0.5s;\r\n}\r\n\r\n.maintext {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: 60px;\r\n}\r\n\r\n.mainTextImg {\r\n  height: auto;\r\n  width: 50%;\r\n  margin-top: 160px;\r\n  animation: 0.3s ease-in-out 0s 1 simmer;\r\n}\r\n\r\n.mainTextBtn {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #343634;\r\n  width: 160px;\r\n  height: 50px;\r\n  margin-top: 160px;\r\n  border: none;\r\n  border-radius: 30px;\r\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 5px 5px;\r\n  transition: 0.3s;\r\n  background-size: 200% auto;\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #90fcc3 0%,\r\n    #e0fea2 51%,\r\n    #90fcc3 100%\r\n  );\r\n  animation: 0.3s ease-in-out 0s 1 simmer;\r\n}\r\n\r\n.mainCupImg {\r\n  width: 47%;\r\n  position: absolute;\r\n  top: 20%;\r\n  right: 0;\r\n  animation: growslide 0.5s;\r\n}\r\n\r\n/* about*/\r\n\r\n.about-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 625px;\r\n  height: 60%;\r\n  margin: 0 auto;\r\n  margin-top: 40px;\r\n  padding: 25px 35px;\r\n  overflow: hidden;\r\n  backdrop-filter: blur(40px) brightness(1.15);\r\n  border-radius: 40px;\r\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 5px 5px;\r\n  animation: 0.3s ease-out 0s 1 moveup;\r\n}\r\n\r\n.about-section p {\r\n  color: #464846;\r\n  padding-bottom: 15px;\r\n  font-size: 17px;\r\n  font-weight: 600;\r\n  margin-top: 10px;\r\n}\r\n\r\n.about-section p:first-child {\r\n  text-indent: 20px;\r\n}\r\n\r\n.about-title {\r\n  color: #343634;\r\n  font-size: 26px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.about-pic {\r\n  width: 100%;\r\n  border-radius: 30px;\r\n  margin: 10px 0;\r\n}\r\n\r\n/* menu*/\r\n\r\n.menu-section {\r\n  z-index: 1;\r\n  backdrop-filter: blur(40px) brightness(1.15);\r\n  -webkit-backdrop-filter: blur(40px) brightness(1.15);\r\n  -moz-backdrop-filter: blur(40px) brightness(1.15);\r\n  border-radius: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 625px;\r\n  height: 675px;\r\n  margin: 0 auto;\r\n  margin-top: 40px;\r\n  overflow: hidden;\r\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 5px 5px;\r\n  animation: 0.3s ease-out 0s 1 moveup;\r\n}\r\n\r\n.left {\r\n  background-color: rgba(18, 40, 32, 0.5215686275);\r\n  width: 35%;\r\n  display: flex;\r\n}\r\n\r\n.right {\r\n  width: 75%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  padding: 50px 35px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.menu-titles {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.right p {\r\n  color: #464846;\r\n  padding-top: 10px;\r\n  font-size: 17px;\r\n  font-weight: 600;\r\n}\r\n\r\n.right h3 {\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\n\r\n.contact-section {\r\n  color: #aebeae;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-radius: 40px;\r\n  width: 625px;\r\n  height: 500px;\r\n  margin: 0 auto;\r\n  margin-top: 40px;\r\n}\r\n\r\n.contact-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 40%;\r\n  background-color: rgba(18, 40, 32, 0.4588235294);\r\n  animation: 0.3s ease-in-out 0s 1 leftslide;\r\n}\r\n.contact-form {\r\n  display: flex;\r\n  color: #343634;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 57%;\r\n  animation: 0.3s ease-in-out 0s 1 rightslide;\r\n}\r\n\r\n.contact-text,\r\n.contact-form {\r\n  padding: 35px 35px;\r\n  backdrop-filter: blur(40px) brightness(1.15);\r\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 5px 5px;\r\n  border-radius: 40px;\r\n}\r\n\r\n.item-addres {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.item-addres h3 {\r\n  color: #343634;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n.item-addres p {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.form {\r\n  margin-top: 5px;\r\n  \r\n}\r\n\r\n.form p {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin-bottom: 4px;\r\n  padding-left: 5px;\r\n}\r\n.form input {\r\n  color: #d1fcb6;\r\n  background-color: rgba(101, 107, 103, 0.5019607843);\r\n  width: 100%;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  border: none;\r\n  outline-width: 0;\r\n\r\n  margin-bottom: 4px;\r\n  padding-left: 5px;\r\n}\r\n.form textarea {\r\n  width: 100%;\r\n  height: 50%;\r\n  resize: none;\r\n\r\n  color: #d1fcb6;\r\n  background-color: rgba(101, 107, 103, 0.5019607843);\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  border: none;\r\n  outline-width: 0;\r\n}\r\n\r\n.button {\r\n  user-select: none;\r\n  margin: 0 auto;\r\n  margin-top: 60px;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  border-radius: 30px;\r\n  border: none;\r\n  width: 115px;\r\n  height: 40px;\r\n  color: #343634;\r\n  transition: 0.3s;\r\n  background-size: 200% auto;\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #90fcc3 0%,\r\n    #e0fea2 51%,\r\n    #90fcc3 100%\r\n  );\r\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 5px 5px;\r\n}\r\n\r\n.button:active {\r\n  transform: scale(0.97);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restorun/./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restorun/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restorun/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restorun/./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restorun/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restorun/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restorun/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restorun/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restorun/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restorun/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAbout: () => (/* binding */ getAbout)\n/* harmony export */ });\n/* harmony import */ var _img_522025668583f9e08512_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/522025668583f9e08512.png */ \"./img/522025668583f9e08512.png\");\n\r\n\r\nfunction createElement(tag, className = '', textContent = '', attributes = {}) {\r\n    const element = document.createElement(tag);\r\n    if (className) element.classList.add(className);\r\n    if (textContent) element.textContent = textContent;\r\n  \r\n    for (const key in attributes) {\r\n      element.setAttribute(key, attributes[key]);\r\n    }\r\n  \r\n    return element;\r\n  }\r\n  \r\n  function getAbout() {\r\n    const aboutSection = createElement(\"div\", \"about-section\");\r\n    const aboutTitle = createElement(\"h3\", \"about-title\", \"Our Story\");\r\n    const aboutText = createElement(\"div\", \"about-text\");\r\n    \r\n    const aboutPone = createElement(\"p\", \"\", \r\n      \"What started as shared hobby small talk, the team at COCO quickly grew obsessed perfecting the various ways we brewed coffee and decided to go all in. Over the years, we’ve developed, mass produced and sold our own blends to share with the world, and that’s how COCO came to be.\"\r\n    );\r\n  \r\n    const aboutPtho = createElement(\"p\", \"\", \r\n      \"With more than 200 shops across US as of 2023, we’re constantly working hard and innovating to bring the next chapter of COCO to all coffee lovers. In fact, we’re excited to share a few large developments as early as this year!\"\r\n    );\r\n  \r\n    const aboutPthree = createElement(\"p\", \"\", \r\n      \"Using always fresh, 100% organic ingredients sourced from sustainable vendors, we stand behind our coffee, our ingredients and our technique - that’s COCO.\"\r\n    );\r\n  \r\n    const aboutImg = createElement(\"img\", \"about-pic\", \"\", { src: _img_522025668583f9e08512_png__WEBPACK_IMPORTED_MODULE_0__ });\r\n  \r\n    aboutText.append(aboutPone, aboutPtho, aboutPthree);\r\n    aboutSection.append(aboutTitle, aboutText, aboutImg);\r\n  \r\n    return aboutSection;\r\n  }\n\n//# sourceURL=webpack://restorun/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getContact: () => (/* binding */ getContact)\n/* harmony export */ });\nfunction createElement(tag, className, textContent) {\r\n  const element = document.createElement(tag);\r\n  if (className) element.classList.add(className);\r\n  if (textContent) element.textContent = textContent;\r\n  return element;\r\n}\r\n\r\nfunction createContactsText(name, adres, fon) {\r\n  const item = createElement(\"div\", \"item-addres\");\r\n  const topH3 = createElement(\"h3\", null, name);\r\n  const topP = createElement(\"p\", null, adres);\r\n  const bottomP = createElement(\"p\", null, fon);\r\n\r\n  item.append(topH3, topP, bottomP);\r\n\r\n  return item;\r\n}\r\n\r\nfunction getContact() {\r\n  const contactSection = createElement(\"div\", \"contact-section\");\r\n  const contactText = createElement(\"div\", \"contact-text\");\r\n  const contactForm = createElement(\"div\", \"contact-form\");\r\n\r\n  const upH3 = createElement(\"h3\", null, \"Lets chat\");\r\n  const form = createElement(\"div\", \"form\");\r\n  const btn = createElement(\"button\", \"button\", \"отправить\");\r\n\r\n  const topP = createElement(\"p\", null, \"name\");\r\n  const midleP = createElement(\"p\", null, \"email\");\r\n  const bottomP = createElement(\"p\", null, \"comments\");\r\n\r\n  const inputOne = createElement(\"input\");\r\n  const inputTho = createElement(\"input\");\r\n  const inputThree = createElement(\"textarea\");\r\n\r\n  inputOne.placeholder = \"John Smith\"\r\n  inputTho.placeholder = \"john@email.com\"\r\n  inputThree.placeholder = \"Type here...\"\r\n\r\n  btn.type = \"submit\"\r\n\r\n  const contactItem = [\r\n    {\r\n      name: \"headquarters\",\r\n      adres: \"113 Michigan Avenue\",\r\n      fon: \"Chicago, IL 60661\",\r\n    },\r\n    {\r\n      name: \"support\",\r\n      adres: \"help@coco.com\",\r\n      fon: \"+1 777 222 1234\",\r\n    },\r\n  ];\r\n\r\n  contactItem.forEach((item) => {\r\n    contactText.appendChild(\r\n      createContactsText(item.name, item.adres, item.fon)\r\n    );\r\n  });\r\n\r\n  form.append(topP, inputOne, bottomP, inputTho, midleP, inputThree);\r\n  contactForm.append(upH3, form, btn);\r\n  contactSection.append(contactText, contactForm);\r\n\r\n  return contactSection;\r\n}\r\n\n\n//# sourceURL=webpack://restorun/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./style.css\");\n/* harmony import */ var _img_e69180770fb4c4cc5006_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/e69180770fb4c4cc5006.png */ \"./img/e69180770fb4c4cc5006.png\");\n/* harmony import */ var _img_816375f45ad6dffd6221_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/816375f45ad6dffd6221.png */ \"./img/816375f45ad6dffd6221.png\");\n/* harmony import */ var _img_2317c03d6a70085f81d3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/2317c03d6a70085f81d3.png */ \"./img/2317c03d6a70085f81d3.png\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\"#content\");\r\n\r\nconst header = document.createElement(\"div\");\r\nconst logo = document.createElement(\"div\");\r\nconst img = document.createElement(\"img\");\r\n\r\nconst nav = document.createElement(\"div\");\r\nconst about = document.createElement(\"button\");\r\nconst menu = document.createElement(\"button\");\r\nconst contact = document.createElement(\"button\");\r\n\r\nconst pageobj = {\r\n  about: _about__WEBPACK_IMPORTED_MODULE_4__.getAbout,\r\n  menu: _menu__WEBPACK_IMPORTED_MODULE_5__.getMenu,\r\n  contact: _contact__WEBPACK_IMPORTED_MODULE_6__.getContact,\r\n};\r\n\r\n// const linksBtnArray = [about, menu, contact];\r\n\r\nconst linksBtnArray = [\r\n  { btn: about, page: \"about\" },\r\n  { btn: menu, page: \"menu\" },\r\n  { btn: contact, page: \"contact\" },\r\n];\r\n\r\nfunction renderPage(page) {\r\n  if (pageobj[page]) {\r\n\r\n    content.innerHTML = \"\";\r\n    content.append(header);\r\n    const pageContent = pageobj[page]();\r\n    if (pageContent) {\r\n      console.log(3);\r\n\r\n      content.append(pageContent);\r\n    }\r\n  }\r\n}\r\n\r\nlinksBtnArray.forEach(({ btn, page }) => {\r\n  btn.addEventListener(\"click\", () => {\r\n    renderPage(page);\r\n  });\r\n});\r\n\r\nimg.addEventListener(\"click\", () => {\r\n  location.reload(); // Перезагружает текущую страницу\r\n});\r\n\r\nheader.classList.add(\"header\");\r\nheader.append(logo);\r\nheader.append(img, nav);\r\n\r\ncontent.append(header);\r\n\r\nimg.src = _img_e69180770fb4c4cc5006_png__WEBPACK_IMPORTED_MODULE_1__;\r\nimg.classList.add(\"logoImg\");\r\nimg.append(logo);\r\n\r\nnav.classList.add(\"header-nav\");\r\n\r\nabout.textContent = \"ABOUT\";\r\nmenu.textContent = \"MENU\";\r\ncontact.textContent = \"CONTACT\";\r\nnav.append(about, menu, contact);\r\n\r\n//MAIN\r\n\r\nconst main = document.createElement(\"div\");\r\nconst maintext = document.createElement(\"div\");\r\nconst mainTextImg = document.createElement(\"img\");\r\nconst mainTextBtn = document.createElement(\"mainTextBtn\");\r\nconst mainImg = document.createElement(\"div\");\r\nconst mainCupImg = document.createElement(\"img\");\r\n\r\nmain.classList.add(\"main\");\r\ncontent.append(main);\r\n\r\nmaintext.classList.add(\"maintext\");\r\n\r\nmainTextImg.classList.add(\"mainTextImg\");\r\nmainTextImg.src = _img_816375f45ad6dffd6221_png__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\nmainTextBtn.classList.add(\"mainTextBtn\");\r\nmainTextBtn.textContent = \"Order Online\";\r\n\r\nmaintext.append(mainTextImg, mainTextBtn);\r\n\r\nmainCupImg.src = _img_2317c03d6a70085f81d3_png__WEBPACK_IMPORTED_MODULE_3__;\r\nmainCupImg.classList.add(\"mainCupImg\");\r\n\r\nmainImg.classList.add(\"mainImg\");\r\nmainImg.append(mainCupImg);\r\n\r\nmain.append(maintext, mainImg);\r\n\r\n//about\r\n\n\n//# sourceURL=webpack://restorun/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMenu: () => (/* binding */ getMenu)\n/* harmony export */ });\n/* harmony import */ var _img_09c7c25d340767a6d2f7_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/09c7c25d340767a6d2f7.png */ \"./img/09c7c25d340767a6d2f7.png\");\n\r\n\r\n//Функция для создания элемента с классом и текстом\r\nfunction createElement(tag, className, textContent) {\r\n  const element = document.createElement(tag);\r\n  if (className) element.classList.add(className);\r\n  if (textContent) element.textContent = textContent;\r\n  return element;\r\n}\r\n\r\n// Функция для создания блока с заголовками\r\nfunction createMenuItem(name, price, description) {\r\n  const item = createElement(\"div\", \"menu-item\");\r\n  const titles = createElement(\"div\", \"menu-titles\");\r\n\r\n  const leftH3 = createElement(\"h3\", null, name);\r\n  const rightH3 = createElement(\"h3\", null, price);\r\n\r\n  titles.append(leftH3, rightH3);\r\n  item.append(titles, createElement(\"p\", null, description));\r\n\r\n\r\n  return item;\r\n}\r\n\r\nfunction getMenu() {\r\n  const menuSection = createElement(\"div\", \"menu-section\");\r\n  const left = createElement(\"div\", \"left\");\r\n  const right = createElement(\"div\", \"right\");\r\n  const img = createElement(\"img\");\r\n  img.src = _img_09c7c25d340767a6d2f7_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n  const menuItems = [\r\n    {\r\n      name: \"Mocha\",\r\n      price: \"$9\",\r\n      descriptionText:\r\n        \"Brewed for cozy atmospheres, our hearty and rustic blend is reminiscent of a cabin fireplace.\",\r\n    },\r\n    {\r\n      name: \"Latte\",\r\n      price: \"$8\",\r\n      descriptionText:\r\n        \"Crafted with precision using a balanced blend of coffee and milk, a feast for the senses.\",\r\n    },\r\n    {\r\n      name: \"Espresso\",\r\n      price: \"$7\",\r\n      descriptionText:\r\n        \"Perfect balance of espresso, milk and a cinnamon twist, just enough to wake the taste buds.\",\r\n    },\r\n    {\r\n      name: \"Cappuccino\",\r\n      price: \"$10\",\r\n      descriptionText:\r\n        \"Sophisticated take on a classic coffee experience, made with the finest 100% organic beans.\",\r\n    },\r\n  ];\r\n\r\n  menuItems.forEach((item) => {\r\n    right.appendChild(\r\n      createMenuItem(item.name, item.price, item.descriptionText)\r\n    );\r\n  });\r\n\r\n  left.appendChild(img);\r\n  menuSection.append(left, right);\r\n\r\n  return menuSection;\r\n}\r\n\n\n//# sourceURL=webpack://restorun/./src/menu.js?");

/***/ }),

/***/ "./img/09c7c25d340767a6d2f7.png":
/*!**************************************!*\
  !*** ./img/09c7c25d340767a6d2f7.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"09c7c25d340767a6d2f7.png\";\n\n//# sourceURL=webpack://restorun/./img/09c7c25d340767a6d2f7.png?");

/***/ }),

/***/ "./img/2317c03d6a70085f81d3.png":
/*!**************************************!*\
  !*** ./img/2317c03d6a70085f81d3.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2317c03d6a70085f81d3.png\";\n\n//# sourceURL=webpack://restorun/./img/2317c03d6a70085f81d3.png?");

/***/ }),

/***/ "./img/522025668583f9e08512.png":
/*!**************************************!*\
  !*** ./img/522025668583f9e08512.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"522025668583f9e08512.png\";\n\n//# sourceURL=webpack://restorun/./img/522025668583f9e08512.png?");

/***/ }),

/***/ "./img/816375f45ad6dffd6221.png":
/*!**************************************!*\
  !*** ./img/816375f45ad6dffd6221.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"816375f45ad6dffd6221.png\";\n\n//# sourceURL=webpack://restorun/./img/816375f45ad6dffd6221.png?");

/***/ }),

/***/ "./img/e69180770fb4c4cc5006.png":
/*!**************************************!*\
  !*** ./img/e69180770fb4c4cc5006.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e69180770fb4c4cc5006.png\";\n\n//# sourceURL=webpack://restorun/./img/e69180770fb4c4cc5006.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;