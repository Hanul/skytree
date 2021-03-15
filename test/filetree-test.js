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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass EventContainer {\r\n    constructor() {\r\n        this.eventMap = {};\r\n        this.deleted = false;\r\n    }\r\n    on(eventName, eventHandler) {\r\n        if (this.eventMap[eventName] === undefined) {\r\n            this.eventMap[eventName] = [];\r\n        }\r\n        this.eventMap[eventName].push(eventHandler);\r\n    }\r\n    pass(target, eventName) {\r\n        target.on(eventName, (...params) => this.fireEvent(eventName, ...params));\r\n    }\r\n    off(eventName, eventHandler) {\r\n        if (this.eventMap[eventName] !== undefined) {\r\n            const index = this.eventMap[eventName].indexOf(eventHandler);\r\n            if (index !== -1) {\r\n                this.eventMap[eventName].splice(index, 1);\r\n            }\r\n            if (this.eventMap[eventName].length === 0) {\r\n                delete this.eventMap[eventName];\r\n            }\r\n        }\r\n    }\r\n    async fireEvent(eventName, ...params) {\r\n        if (this.eventMap[eventName] !== undefined) {\r\n            for (const eventHandler of this.eventMap[eventName]) {\r\n                await eventHandler(...params);\r\n            }\r\n        }\r\n    }\r\n    delete() {\r\n        this.fireEvent(\"delete\");\r\n        this.eventMap = undefined;\r\n        this.deleted = true;\r\n    }\r\n}\r\nexports.default = EventContainer;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../eventcontainer/EventContainer.js?");

/***/ }),

/***/ "../skynode/lib/BodyNode.js":
/*!**********************************!*\
  !*** ../skynode/lib/BodyNode.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst DomNode_1 = __importDefault(__webpack_require__(/*! ./DomNode */ \"../skynode/lib/DomNode.js\"));\r\nclass BodyNode extends DomNode_1.default {\r\n    constructor() {\r\n        super(document.body);\r\n    }\r\n}\r\nexports.default = new BodyNode();\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skynode/lib/BodyNode.js?");

/***/ }),

/***/ "../skynode/lib/DomNode.js":
/*!*********************************!*\
  !*** ../skynode/lib/DomNode.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skyutil_1 = __importDefault(__webpack_require__(/*! skyutil */ \"../skyutil/SkyUtil.js\"));\r\nconst SkyNode_1 = __importDefault(__webpack_require__(/*! ./SkyNode */ \"../skynode/lib/SkyNode.js\"));\r\nclass DomNode extends SkyNode_1.default {\r\n    constructor(domElement) {\r\n        super();\r\n        this.domElement = domElement;\r\n        this.children = [];\r\n        this.domEventMap = {};\r\n    }\r\n    style(style) {\r\n        for (const [key, value] of Object.entries(style)) {\r\n            if (typeof value === \"number\" && key !== \"zIndex\" && key !== \"opacity\") {\r\n                this.domElement.style[key] = `${value}px`;\r\n            }\r\n            else {\r\n                this.domElement.style[key] = value;\r\n            }\r\n        }\r\n    }\r\n    on(eventName, eventHandler) {\r\n        if (this.domEventMap[eventName] === undefined) {\r\n            this.domEventMap[eventName] = [];\r\n        }\r\n        const domEventHandler = (event) => eventHandler(event, this);\r\n        this.domEventMap[eventName].push({ eventHandler, domEventHandler });\r\n        this.domElement.addEventListener(eventName, domEventHandler);\r\n        super.on(eventName, eventHandler);\r\n    }\r\n    off(eventName, eventHandler) {\r\n        const domEvents = this.domEventMap[eventName];\r\n        if (domEvents !== undefined) {\r\n            const domEvent = domEvents.find((de) => de.eventHandler === eventHandler);\r\n            if (domEvent !== undefined) {\r\n                this.domElement.removeEventListener(eventName, domEvent.domEventHandler);\r\n                skyutil_1.default.pull(domEvents, domEvent);\r\n                if (domEvents.length === 0) {\r\n                    delete this.domEventMap[eventName];\r\n                }\r\n            }\r\n        }\r\n        super.off(eventName, eventHandler);\r\n    }\r\n    appendText(text) {\r\n        this.domElement.append(text);\r\n    }\r\n    appendTo(node, index) {\r\n        if (index !== undefined && index < node.children.length) {\r\n            node.domElement.insertBefore(this.domElement, node.children[index].domElement);\r\n        }\r\n        else {\r\n            node.domElement.append(this.domElement);\r\n        }\r\n        super.appendTo(node, index);\r\n        return this;\r\n    }\r\n    exceptFromParent() {\r\n        if (this.parent !== undefined) {\r\n            this.parent.domElement.removeChild(this.domElement);\r\n        }\r\n        super.exceptFromParent();\r\n    }\r\n    delete() {\r\n        this.domEventMap = undefined;\r\n        super.delete();\r\n    }\r\n}\r\nexports.default = DomNode;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skynode/lib/DomNode.js?");

/***/ }),

/***/ "../skynode/lib/SkyNode.js":
/*!*********************************!*\
  !*** ../skynode/lib/SkyNode.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst eventcontainer_1 = __importDefault(__webpack_require__(/*! eventcontainer */ \"../eventcontainer/EventContainer.js\"));\r\nconst skyutil_1 = __importDefault(__webpack_require__(/*! skyutil */ \"../skyutil/SkyUtil.js\"));\r\nclass SkyNode extends eventcontainer_1.default {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.children = [];\r\n    }\r\n    append(...nodes) {\r\n        for (const node of nodes) {\r\n            node.appendTo(this);\r\n        }\r\n    }\r\n    appendTo(node, index) {\r\n        if (this.parent === node && index !== undefined && index < this.parent.children.indexOf(this)) {\r\n            index -= 1;\r\n        }\r\n        this.exceptFromParent();\r\n        if (index !== undefined && index < node.children.length) {\r\n            node.children.splice(index, 0, this);\r\n        }\r\n        else {\r\n            node.children.push(this);\r\n        }\r\n        this.parent = node;\r\n        return this;\r\n    }\r\n    except(...nodes) {\r\n        for (const node of nodes) {\r\n            node.exceptFromParent();\r\n        }\r\n    }\r\n    exceptFromParent() {\r\n        if (this.parent !== undefined) {\r\n            skyutil_1.default.pull(this.parent.children, this);\r\n            this.parent = undefined;\r\n        }\r\n    }\r\n    empty() {\r\n        for (const child of this.children) {\r\n            child.delete();\r\n        }\r\n    }\r\n    delete() {\r\n        super.delete();\r\n        this.exceptFromParent();\r\n        this.empty();\r\n        this.children = undefined;\r\n    }\r\n}\r\nexports.default = SkyNode;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skynode/lib/SkyNode.js?");

/***/ }),

/***/ "../skynode/lib/el.js":
/*!****************************!*\
  !*** ../skynode/lib/el.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst DomNode_1 = __importDefault(__webpack_require__(/*! ./DomNode */ \"../skynode/lib/DomNode.js\"));\r\nconst el = (tag, ...children) => {\r\n    const domNode = new DomNode_1.default(document.createElement(tag));\r\n    for (const child of children) {\r\n        if (typeof child === \"string\") {\r\n            domNode.appendText(child);\r\n        }\r\n        else if (child instanceof DomNode_1.default) {\r\n            domNode.append(child);\r\n        }\r\n        else {\r\n            for (const [name, value] of Object.entries(child)) {\r\n                if (typeof value === \"function\") {\r\n                    domNode.on(name, value);\r\n                }\r\n                else if (name === \"style\" && typeof value === \"object\") {\r\n                    domNode.style(value);\r\n                }\r\n                else {\r\n                    domNode.domElement[name] = value;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return domNode;\r\n};\r\nexports.default = el;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skynode/lib/el.js?");

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

/***/ "./src/filetree/FileNode.ts":
/*!**********************************!*\
  !*** ./src/filetree/FileNode.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"../skynode/lib/index.js\");\r\nconst FileTreeNode_1 = __importDefault(__webpack_require__(/*! ./FileTreeNode */ \"./src/filetree/FileTreeNode.ts\"));\r\nclass FileNode extends FileTreeNode_1.default {\r\n    constructor(file, depth) {\r\n        super(file.name, depth);\r\n        this.display(this.createIcon(), skynode_1.el(\"span\", file.name));\r\n    }\r\n    createIcon() {\r\n        return skynode_1.el(\"div\", {\r\n            style: {\r\n                padding: 4,\r\n            },\r\n        }, skynode_1.el(\"div\", {\r\n            style: {\r\n                position: \"relative\",\r\n                width: 14,\r\n                height: 14,\r\n                border: \"solid 1px currentColor\",\r\n                borderRadius: 2,\r\n            },\r\n        }, skynode_1.el(\"div\", {\r\n            style: {\r\n                position: \"absolute\",\r\n                left: 2,\r\n                top: 2,\r\n                width: 3,\r\n                height: 3,\r\n                borderRadius: \"50%\",\r\n                border: \"solid 1px currentColor\",\r\n            },\r\n        }), skynode_1.el(\"div\", {\r\n            style: {\r\n                position: \"absolute\",\r\n                left: 2,\r\n                top: 8,\r\n                width: 10,\r\n                height: 6,\r\n                borderTop: \"solid 1px currentColor\",\r\n                borderRight: \"solid 1px currentColor\",\r\n                transform: \"rotate(-45deg)\",\r\n            },\r\n        })));\r\n    }\r\n}\r\nexports.default = FileNode;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./src/filetree/FileNode.ts?");

/***/ }),

/***/ "./src/filetree/FileTree.ts":
/*!**********************************!*\
  !*** ./src/filetree/FileTree.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"../skynode/lib/index.js\");\r\nconst FileNode_1 = __importDefault(__webpack_require__(/*! ./FileNode */ \"./src/filetree/FileNode.ts\"));\r\nconst FolderNode_1 = __importDefault(__webpack_require__(/*! ./FolderNode */ \"./src/filetree/FolderNode.ts\"));\r\nclass FileTree extends skynode_1.DomNode {\r\n    constructor(folders, files, depth = 0) {\r\n        super(document.createElement(\"ul\"));\r\n        this.depth = depth;\r\n        this.style({\r\n            background: \"#252526\",\r\n            color: \"#ccc\",\r\n            fontSize: 13,\r\n        });\r\n        this.append(skynode_1.el(\"li\", this.folderList = skynode_1.el(\"ul\")));\r\n        this.append(skynode_1.el(\"li\", this.fileList = skynode_1.el(\"ul\")));\r\n        for (const folder of folders) {\r\n            this.addFolder(folder);\r\n        }\r\n        for (const file of files) {\r\n            this.addFile(file);\r\n        }\r\n    }\r\n    addFolder(folder) {\r\n        this.folderList.append(new FolderNode_1.default(folder, this.depth));\r\n    }\r\n    addFile(file) {\r\n        this.fileList.append(new FileNode_1.default(file, this.depth));\r\n    }\r\n}\r\nexports.default = FileTree;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./src/filetree/FileTree.ts?");

/***/ }),

/***/ "./src/filetree/FileTreeNode.ts":
/*!**************************************!*\
  !*** ./src/filetree/FileTreeNode.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"../skynode/lib/index.js\");\r\nclass FileTreeNode extends skynode_1.DomNode {\r\n    constructor(name, depth) {\r\n        super(document.createElement(\"li\"));\r\n        this.name = name;\r\n        this.depth = depth;\r\n        this.displayContainer = skynode_1.el(\"div\").appendTo(this);\r\n    }\r\n    display(...contents) {\r\n        this.displayContainer.empty();\r\n        skynode_1.el(\"div\", {\r\n            style: {\r\n                paddingLeft: this.depth * 20,\r\n                display: \"flex\",\r\n                height: 22,\r\n                lineHeight: 22,\r\n            },\r\n            mouseenter: () => this.style({ background: \"#2a2d2e\" }),\r\n            mouseleave: () => this.style({ background: \"transparent\" }),\r\n            draggable: true,\r\n            dragstart: (event) => {\r\n                this.draggingCopy = new skynode_1.DomNode(document.createElement(\"div\")).appendTo(skynode_1.BodyNode);\r\n                this.draggingCopy.appendText(this.name);\r\n                this.draggingCopy.style({\r\n                    position: \"fixed\",\r\n                    left: -999999,\r\n                    top: -999999,\r\n                    background: \"#094771\",\r\n                    color: \"#ccc\",\r\n                    fontSize: 12,\r\n                    padding: \"3px 5px\",\r\n                    borderRadius: 5,\r\n                });\r\n                if (event.dataTransfer !== null) {\r\n                    event.dataTransfer.setDragImage(this.draggingCopy.domElement, 0, 0);\r\n                }\r\n            },\r\n            dragend: () => { var _a; return (_a = this.draggingCopy) === null || _a === void 0 ? void 0 : _a.delete(); },\r\n        }, ...contents).appendTo(this.displayContainer);\r\n    }\r\n}\r\nexports.default = FileTreeNode;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./src/filetree/FileTreeNode.ts?");

/***/ }),

/***/ "./src/filetree/FolderNode.ts":
/*!************************************!*\
  !*** ./src/filetree/FolderNode.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"../skynode/lib/index.js\");\r\nconst FileTree_1 = __importDefault(__webpack_require__(/*! ./FileTree */ \"./src/filetree/FileTree.ts\"));\r\nconst FileTreeNode_1 = __importDefault(__webpack_require__(/*! ./FileTreeNode */ \"./src/filetree/FileTreeNode.ts\"));\r\nclass FolderNode extends FileTreeNode_1.default {\r\n    constructor(folder, depth) {\r\n        super(folder.name, depth);\r\n        this.opening = false;\r\n        this.display(skynode_1.el(\"div\", {\r\n            style: {\r\n                padding: \"6px 7px\",\r\n            },\r\n        }, this.arrow = skynode_1.el(\"div\", {\r\n            style: {\r\n                width: 8,\r\n                height: 8,\r\n                borderBottom: \"solid 1px currentColor\",\r\n                borderLeft: \"solid 1px currentColor\",\r\n            },\r\n        })), skynode_1.el(\"span\", folder.name));\r\n        this.fileTree = new FileTree_1.default(folder.folders, folder.files, depth + 1).appendTo(this);\r\n        this.close();\r\n    }\r\n    open() {\r\n        this.arrow.style({ transform: \"translate(0px, 0px) rotate(-45deg)\" });\r\n        this.opening = true;\r\n    }\r\n    close() {\r\n        this.arrow.style({ transform: \"translate(-2px, 2px) rotate(-135deg)\" });\r\n        this.opening = false;\r\n    }\r\n    toggle() {\r\n        this.opening !== true ? this.open() : this.close();\r\n    }\r\n}\r\nexports.default = FolderNode;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./src/filetree/FolderNode.ts?");

/***/ }),

/***/ "./test-src/filetree-test.ts":
/*!***********************************!*\
  !*** ./test-src/filetree-test.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"../skynode/lib/index.js\");\r\nconst FileTree_1 = __importDefault(__webpack_require__(/*! ../src/filetree/FileTree */ \"./src/filetree/FileTree.ts\"));\r\nconst fileTree = new FileTree_1.default([{\r\n        name: \"폴더1\",\r\n        folders: [],\r\n        files: [{\r\n                name: \"파일1\",\r\n            }],\r\n    }], [{\r\n        name: \"하핫\",\r\n    }]);\r\nskynode_1.BodyNode.append(fileTree);\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./test-src/filetree-test.ts?");

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