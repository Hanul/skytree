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

/***/ "../eventcontainer/EventContainer.js":
/*!*******************************************!*\
  !*** ../eventcontainer/EventContainer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass EventContainer {\r\n    constructor() {\r\n        this.eventMap = {};\r\n    }\r\n    on(eventName, eventHandler) {\r\n        if (this.eventMap[eventName] === undefined) {\r\n            this.eventMap[eventName] = [];\r\n        }\r\n        this.eventMap[eventName].push(eventHandler);\r\n    }\r\n    pass(target, eventName) {\r\n        target.on(eventName, (...params) => this.fireEvent(eventName, ...params));\r\n    }\r\n    off(eventName, eventHandler) {\r\n        if (eventHandler === undefined) {\r\n            delete this.eventMap[eventName];\r\n        }\r\n        else if (this.eventMap[eventName] !== undefined) {\r\n            const index = this.eventMap[eventName].indexOf(eventHandler);\r\n            if (index !== -1) {\r\n                this.eventMap[eventName].splice(index, 1);\r\n            }\r\n            if (this.eventMap[eventName].length === 0) {\r\n                delete this.eventMap[eventName];\r\n            }\r\n        }\r\n    }\r\n    async fireEvent(eventName, ...params) {\r\n        if (this.eventMap[eventName] !== undefined) {\r\n            for (const eventHandler of this.eventMap[eventName]) {\r\n                await eventHandler(...params);\r\n            }\r\n        }\r\n    }\r\n    delete() {\r\n        this.fireEvent(\"delete\");\r\n        this.eventMap = undefined;\r\n    }\r\n}\r\nexports.default = EventContainer;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../eventcontainer/EventContainer.js?");

/***/ }),

/***/ "../skynode/lib/BodyNode.js":
/*!**********************************!*\
  !*** ../skynode/lib/BodyNode.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst _1 = __webpack_require__(/*! . */ \"../skynode/lib/index.js\");\r\nclass BodyNode extends _1.DomNode {\r\n    constructor() {\r\n        super(document.body);\r\n    }\r\n}\r\nexports.default = new BodyNode();\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skynode/lib/BodyNode.js?");

/***/ }),

/***/ "../skynode/lib/DomNode.js":
/*!*********************************!*\
  !*** ../skynode/lib/DomNode.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst SkyNode_1 = __importDefault(__webpack_require__(/*! ./SkyNode */ \"../skynode/lib/SkyNode.js\"));\r\nclass DomNode extends SkyNode_1.default {\r\n    constructor(domElement) {\r\n        super();\r\n        this.domElement = domElement;\r\n        this.children = [];\r\n    }\r\n    style(style) {\r\n        for (const [key, value] of Object.entries(style)) {\r\n            if (typeof value === \"number\" && key !== \"zIndex\" && key !== \"opacity\") {\r\n                this.domElement.style[key] = `${value}px`;\r\n            }\r\n            else {\r\n                this.domElement.style[key] = value;\r\n            }\r\n        }\r\n    }\r\n    on(eventName, eventHandler) {\r\n        this.domElement.addEventListener(eventName, eventHandler);\r\n        super.on(eventName, eventHandler);\r\n    }\r\n    off(eventName, eventHandler) {\r\n        this.domElement.removeEventListener(eventName, eventHandler);\r\n        super.off(eventName, eventHandler);\r\n    }\r\n    append(...nodes) {\r\n        super.append(...nodes);\r\n        if (nodes.length === 1) {\r\n            this.domElement.append(nodes[0].domElement);\r\n        }\r\n        else {\r\n            const fragment = new DocumentFragment();\r\n            for (const node of nodes) {\r\n                fragment.append(node.domElement);\r\n            }\r\n            this.domElement.append(fragment);\r\n        }\r\n    }\r\n    appendTo(node, index) {\r\n        super.appendTo(node, index);\r\n        if (index < this.children.length) {\r\n            this.domElement.insertBefore(node.domElement, this.children[index].domElement);\r\n        }\r\n        else {\r\n            this.domElement.append(node.domElement);\r\n        }\r\n    }\r\n    delete() {\r\n        this.domElement.remove();\r\n        super.delete();\r\n    }\r\n}\r\nexports.default = DomNode;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skynode/lib/DomNode.js?");

/***/ }),

/***/ "../skynode/lib/SkyNode.js":
/*!*********************************!*\
  !*** ../skynode/lib/SkyNode.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst eventcontainer_1 = __importDefault(__webpack_require__(/*! eventcontainer */ \"../eventcontainer/EventContainer.js\"));\r\nconst skyutil_1 = __importDefault(__webpack_require__(/*! skyutil */ \"../skyutil/SkyUtil.js\"));\r\nclass SkyNode extends eventcontainer_1.default {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.children = [];\r\n    }\r\n    append(...nodes) {\r\n        for (const node of nodes) {\r\n            this.children.push(node);\r\n            node.parent = this;\r\n        }\r\n    }\r\n    appendTo(node, index) {\r\n        if (index < this.children.length) {\r\n            this.children.splice(index, 0, node);\r\n        }\r\n        else {\r\n            this.children.push(node);\r\n        }\r\n        node.parent = this;\r\n    }\r\n    delete() {\r\n        super.delete();\r\n        if (this.parent !== undefined) {\r\n            skyutil_1.default.pull(this.parent.children, this);\r\n        }\r\n        for (const child of this.children) {\r\n            child.delete();\r\n        }\r\n        this.children = undefined;\r\n    }\r\n}\r\nexports.default = SkyNode;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skynode/lib/SkyNode.js?");

/***/ }),

/***/ "../skynode/lib/el.js":
/*!****************************!*\
  !*** ../skynode/lib/el.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst DomNode_1 = __importDefault(__webpack_require__(/*! ./DomNode */ \"../skynode/lib/DomNode.js\"));\r\nconst el = (tag, ...children) => {\r\n    let id;\r\n    const idIndex = tag.indexOf(\"#\");\r\n    if (idIndex !== -1) {\r\n        id = tag.substring(idIndex + 1);\r\n        tag = tag.substring(0, idIndex);\r\n        const cindex = id.indexOf(\".\");\r\n        if (cindex !== -1) {\r\n            id = id.substring(0, cindex);\r\n            tag += id.substring(cindex);\r\n        }\r\n    }\r\n    let className;\r\n    const classNameIndex = tag.indexOf(\".\");\r\n    if (classNameIndex !== -1) {\r\n        className = tag.substring(classNameIndex + 1).replace(/\\./g, \" \");\r\n        tag = tag.substring(0, classNameIndex);\r\n    }\r\n    if (tag === \"\") {\r\n        tag = \"div\";\r\n    }\r\n    const element = document.createElement(tag);\r\n    if (id !== undefined) {\r\n        element.id = id;\r\n    }\r\n    if (className !== undefined) {\r\n        element.className = className;\r\n    }\r\n    const domNode = new DomNode_1.default(element);\r\n    for (const child of children) {\r\n        if (typeof child === \"string\") {\r\n            element.append(child);\r\n        }\r\n        else {\r\n            domNode.append(child);\r\n        }\r\n    }\r\n    return domNode;\r\n};\r\nexports.default = el;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skynode/lib/el.js?");

/***/ }),

/***/ "../skynode/lib/index.js":
/*!*******************************!*\
  !*** ../skynode/lib/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.el = exports.BodyNode = exports.DomNode = exports.SkyNode = void 0;\r\nvar SkyNode_1 = __webpack_require__(/*! ./SkyNode */ \"../skynode/lib/SkyNode.js\");\r\nObject.defineProperty(exports, \"SkyNode\", ({ enumerable: true, get: function () { return __importDefault(SkyNode_1).default; } }));\r\nvar DomNode_1 = __webpack_require__(/*! ./DomNode */ \"../skynode/lib/DomNode.js\");\r\nObject.defineProperty(exports, \"DomNode\", ({ enumerable: true, get: function () { return __importDefault(DomNode_1).default; } }));\r\nvar BodyNode_1 = __webpack_require__(/*! ./BodyNode */ \"../skynode/lib/BodyNode.js\");\r\nObject.defineProperty(exports, \"BodyNode\", ({ enumerable: true, get: function () { return __importDefault(BodyNode_1).default; } }));\r\nvar el_1 = __webpack_require__(/*! ./el */ \"../skynode/lib/el.js\");\r\nObject.defineProperty(exports, \"el\", ({ enumerable: true, get: function () { return __importDefault(el_1).default; } }));\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skynode/lib/index.js?");

/***/ }),

/***/ "../skyutil/SkyUtil.js":
/*!*****************************!*\
  !*** ../skyutil/SkyUtil.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass SkyUtil {\r\n    static pull(array, ...removeList) {\r\n        for (const el of removeList) {\r\n            const index = array.indexOf(el);\r\n            if (index !== -1) {\r\n                array.splice(index, 1);\r\n            }\r\n        }\r\n    }\r\n}\r\nexports.default = SkyUtil;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skyutil/SkyUtil.js?");

/***/ }),

/***/ "./src/FileTree.ts":
/*!*************************!*\
  !*** ./src/FileTree.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst FileTreeNode_1 = __importDefault(__webpack_require__(/*! ./FileTreeNode */ \"./src/FileTreeNode.ts\"));\r\nconst Tree_1 = __importDefault(__webpack_require__(/*! ./Tree */ \"./src/Tree.ts\"));\r\nclass FileTree extends Tree_1.default {\r\n    constructor(dataSet) {\r\n        super(dataSet);\r\n    }\r\n    createNode(data) {\r\n        return new FileTreeNode_1.default(data);\r\n    }\r\n}\r\nexports.default = FileTree;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./src/FileTree.ts?");

/***/ }),

/***/ "./src/FileTreeNode.ts":
/*!*****************************!*\
  !*** ./src/FileTreeNode.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"../skynode/lib/index.js\");\r\nconst TreeNode_1 = __importDefault(__webpack_require__(/*! ./TreeNode */ \"./src/TreeNode.ts\"));\r\nclass FileTreeNode extends TreeNode_1.default {\r\n    constructor(data) {\r\n        super(data);\r\n        this.append(this.icon = skynode_1.el(\"span\", data.color), skynode_1.el(\"span\", data.filename));\r\n    }\r\n}\r\nexports.default = FileTreeNode;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./src/FileTreeNode.ts?");

/***/ }),

/***/ "./src/Tree.ts":
/*!*********************!*\
  !*** ./src/Tree.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"../skynode/lib/index.js\");\r\nclass Tree extends skynode_1.DomNode {\r\n    constructor(dataSet) {\r\n        super(document.createElement(\"ul\"));\r\n        for (const data of dataSet) {\r\n            this.append(this.createNode(data));\r\n        }\r\n    }\r\n}\r\nexports.default = Tree;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./src/Tree.ts?");

/***/ }),

/***/ "./src/TreeNode.ts":
/*!*************************!*\
  !*** ./src/TreeNode.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"../skynode/lib/index.js\");\r\nclass TreeNode extends skynode_1.DomNode {\r\n    constructor(data) {\r\n        super(document.createElement(\"li\"));\r\n    }\r\n}\r\nexports.default = TreeNode;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./src/TreeNode.ts?");

/***/ }),

/***/ "./test-src/filetree-test.ts":
/*!***********************************!*\
  !*** ./test-src/filetree-test.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"../skynode/lib/index.js\");\r\nconst FileTree_1 = __importDefault(__webpack_require__(/*! ../src/FileTree */ \"./src/FileTree.ts\"));\r\nconst fileTree = new FileTree_1.default([{\r\n        color: \"#4CAF50\",\r\n        filename: \"TEST!\",\r\n    }]);\r\nskynode_1.BodyNode.append(fileTree);\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./test-src/filetree-test.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./test-src/filetree-test.ts");
/******/ 	
/******/ })()
;