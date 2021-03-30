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

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skyutil_1 = __importDefault(__webpack_require__(/*! skyutil */ \"../skyutil/SkyUtil.js\"));\r\nconst SkyNode_1 = __importDefault(__webpack_require__(/*! ./SkyNode */ \"../skynode/lib/SkyNode.js\"));\r\nclass DomNode extends SkyNode_1.default {\r\n    constructor(domElement) {\r\n        super();\r\n        this.domElement = domElement;\r\n        this.children = [];\r\n        this.domEventMap = {};\r\n    }\r\n    style(style) {\r\n        for (const [key, value] of Object.entries(style)) {\r\n            if (typeof value === \"number\" && key !== \"zIndex\" && key !== \"opacity\") {\r\n                this.domElement.style[key] = `${value}px`;\r\n            }\r\n            else {\r\n                this.domElement.style[key] = value;\r\n            }\r\n        }\r\n    }\r\n    on(eventName, eventHandler) {\r\n        if (this.domEventMap[eventName] === undefined) {\r\n            this.domEventMap[eventName] = [];\r\n        }\r\n        const domEventHandler = (event) => eventHandler(event, this);\r\n        this.domEventMap[eventName].push({ eventHandler, domEventHandler });\r\n        this.domElement.addEventListener(eventName, domEventHandler);\r\n        super.on(eventName, eventHandler);\r\n    }\r\n    off(eventName, eventHandler) {\r\n        const domEvents = this.domEventMap[eventName];\r\n        if (domEvents !== undefined) {\r\n            const domEvent = domEvents.find((de) => de.eventHandler === eventHandler);\r\n            if (domEvent !== undefined) {\r\n                this.domElement.removeEventListener(eventName, domEvent.domEventHandler);\r\n                skyutil_1.default.pull(domEvents, domEvent);\r\n                if (domEvents.length === 0) {\r\n                    delete this.domEventMap[eventName];\r\n                }\r\n            }\r\n        }\r\n        super.off(eventName, eventHandler);\r\n    }\r\n    async fireEvent(eventName, ...params) {\r\n        this.domElement.dispatchEvent(new Event(eventName));\r\n        return super.fireEvent(eventName, ...params);\r\n    }\r\n    appendText(text) {\r\n        this.domElement.append(text);\r\n    }\r\n    appendTo(node, index) {\r\n        if (index !== undefined && index < node.children.length) {\r\n            node.domElement.insertBefore(this.domElement, node.children[index].domElement);\r\n        }\r\n        else {\r\n            node.domElement.append(this.domElement);\r\n        }\r\n        return super.appendTo(node, index);\r\n    }\r\n    exceptFromParent() {\r\n        if (this.parent !== undefined) {\r\n            this.parent.domElement.removeChild(this.domElement);\r\n        }\r\n        super.exceptFromParent();\r\n    }\r\n    delete() {\r\n        this.domEventMap = undefined;\r\n        super.delete();\r\n    }\r\n}\r\nexports.default = DomNode;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skynode/lib/DomNode.js?");

/***/ }),

/***/ "../skynode/lib/ScrollableDomNode.js":
/*!*******************************************!*\
  !*** ../skynode/lib/ScrollableDomNode.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ScrollItemDomNode = void 0;\r\nconst debouncer_1 = __importDefault(__webpack_require__(/*! @hanul/debouncer */ \"../skynode/node_modules/@hanul/debouncer/Debouncer.js\"));\r\nconst skyutil_1 = __importDefault(__webpack_require__(/*! skyutil */ \"../skyutil/SkyUtil.js\"));\r\nconst DomNode_1 = __importDefault(__webpack_require__(/*! ./DomNode */ \"../skynode/lib/DomNode.js\"));\r\nclass ScrollItemDomNode extends DomNode_1.default {\r\n}\r\nexports.ScrollItemDomNode = ScrollItemDomNode;\r\nclass ScrollableDomNode extends DomNode_1.default {\r\n    constructor(domElement, options, createChild) {\r\n        super(domElement);\r\n        this.options = options;\r\n        this.createChild = createChild;\r\n        this.nodeDataSet = [];\r\n        this.scrollAreaHeight = 0;\r\n        this.refresh = () => {\r\n            var _a, _b, _c;\r\n            const startTop = this.domElement.scrollTop;\r\n            const endTop = this.domElement.scrollTop + this.scrollAreaHeight;\r\n            let topPadding = 0;\r\n            let bottomPadding = 0;\r\n            let startIndex = -1;\r\n            let endIndex = -1;\r\n            let top = 0;\r\n            for (const [index, info] of this.nodeDataSet.entries()) {\r\n                if (top + info.height < startTop) {\r\n                    topPadding += info.height;\r\n                }\r\n                else if (top > endTop) {\r\n                    bottomPadding += info.height;\r\n                }\r\n                else {\r\n                    if (startIndex === -1) {\r\n                        startIndex = index;\r\n                    }\r\n                    if (endIndex < index) {\r\n                        endIndex = index;\r\n                    }\r\n                    if (info.dom === undefined) {\r\n                        info.dom = this.createChild(info.data);\r\n                        info.dom.appendTo(this);\r\n                        info.height = info.dom.domElement.getBoundingClientRect().height;\r\n                    }\r\n                }\r\n                top += info.height;\r\n            }\r\n            this.bottomPaddingNode.exceptFromParent();\r\n            for (const [index, info] of this.nodeDataSet.entries()) {\r\n                if (startIndex <= index && index <= endIndex) {\r\n                    (_a = info.dom) === null || _a === void 0 ? void 0 : _a.exceptFromParent();\r\n                    (_b = info.dom) === null || _b === void 0 ? void 0 : _b.appendTo(this);\r\n                }\r\n                else {\r\n                    (_c = info.dom) === null || _c === void 0 ? void 0 : _c.delete();\r\n                    delete info.dom;\r\n                }\r\n            }\r\n            this.topPaddingNode.domElement.style.height = `${topPadding}px`;\r\n            this.bottomPaddingNode.domElement.style.height = `${bottomPadding}px`;\r\n            this.bottomPaddingNode.appendTo(this);\r\n        };\r\n        this.calculateSize = () => {\r\n            this.scrollAreaHeight = this.domElement.clientHeight;\r\n            this.refresh();\r\n        };\r\n        this.resizeDebouncer = new debouncer_1.default(100, () => this.calculateSize());\r\n        this.resizeHandler = () => this.resizeDebouncer.run();\r\n        super.append(this.topPaddingNode = new DomNode_1.default(document.createElement(options.childTag)), this.bottomPaddingNode = new DomNode_1.default(document.createElement(options.childTag)));\r\n        this.domElement.style.overflowY = \"scroll\";\r\n        this.on(\"scroll\", this.refresh);\r\n        window.addEventListener(\"resize\", this.resizeHandler);\r\n    }\r\n    init(nodeDataSet) {\r\n        for (const data of nodeDataSet) {\r\n            this.nodeDataSet.push({ data, height: this.options.baseChildHeight });\r\n        }\r\n    }\r\n    add(data, index) {\r\n        if (index !== undefined && index < this.nodeDataSet.length) {\r\n            skyutil_1.default.insert(this.nodeDataSet, index, { data, height: this.options.baseChildHeight });\r\n        }\r\n        else {\r\n            this.nodeDataSet.push({ data, height: this.options.baseChildHeight });\r\n        }\r\n        this.refresh();\r\n    }\r\n    remove(data) {\r\n        const index = this.nodeDataSet.findIndex((d) => d.data === data);\r\n        if (index !== -1) {\r\n            this.nodeDataSet.splice(index, 1);\r\n            this.refresh();\r\n        }\r\n    }\r\n    appendTo(node, index) {\r\n        const that = super.appendTo(node, index);\r\n        this.calculateSize();\r\n        return that;\r\n    }\r\n    delete() {\r\n        window.removeEventListener(\"resize\", this.resizeHandler);\r\n        super.delete();\r\n    }\r\n}\r\nexports.default = ScrollableDomNode;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skynode/lib/ScrollableDomNode.js?");

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

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst DomNode_1 = __importDefault(__webpack_require__(/*! ./DomNode */ \"../skynode/lib/DomNode.js\"));\r\nconst el = (tag, ...children) => {\r\n    const domNode = new DomNode_1.default(document.createElement(tag));\r\n    for (const child of children) {\r\n        if (child !== undefined) {\r\n            if (typeof child === \"string\") {\r\n                domNode.appendText(child);\r\n            }\r\n            else if (child instanceof DomNode_1.default) {\r\n                domNode.append(child);\r\n            }\r\n            else {\r\n                for (const [name, value] of Object.entries(child)) {\r\n                    if (typeof value === \"function\") {\r\n                        domNode.on(name, value);\r\n                    }\r\n                    else if (name === \"style\" && typeof value === \"object\") {\r\n                        domNode.style(value);\r\n                    }\r\n                    else if (value === undefined) {\r\n                        domNode.domElement.removeAttribute(name);\r\n                    }\r\n                    else if (typeof value === \"string\") {\r\n                        domNode.domElement.setAttribute(name, value);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return domNode;\r\n};\r\nexports.default = el;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skynode/lib/el.js?");

/***/ }),

/***/ "../skynode/lib/index.js":
/*!*******************************!*\
  !*** ../skynode/lib/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.el = exports.ScrollItemDomNode = exports.ScrollableDomNode = exports.BodyNode = exports.DomNode = exports.SkyNode = void 0;\r\nvar SkyNode_1 = __webpack_require__(/*! ./SkyNode */ \"../skynode/lib/SkyNode.js\");\r\nObject.defineProperty(exports, \"SkyNode\", ({ enumerable: true, get: function () { return __importDefault(SkyNode_1).default; } }));\r\nvar DomNode_1 = __webpack_require__(/*! ./DomNode */ \"../skynode/lib/DomNode.js\");\r\nObject.defineProperty(exports, \"DomNode\", ({ enumerable: true, get: function () { return __importDefault(DomNode_1).default; } }));\r\nvar BodyNode_1 = __webpack_require__(/*! ./BodyNode */ \"../skynode/lib/BodyNode.js\");\r\nObject.defineProperty(exports, \"BodyNode\", ({ enumerable: true, get: function () { return __importDefault(BodyNode_1).default; } }));\r\nvar ScrollableDomNode_1 = __webpack_require__(/*! ./ScrollableDomNode */ \"../skynode/lib/ScrollableDomNode.js\");\r\nObject.defineProperty(exports, \"ScrollableDomNode\", ({ enumerable: true, get: function () { return __importDefault(ScrollableDomNode_1).default; } }));\r\nObject.defineProperty(exports, \"ScrollItemDomNode\", ({ enumerable: true, get: function () { return ScrollableDomNode_1.ScrollItemDomNode; } }));\r\nvar el_1 = __webpack_require__(/*! ./el */ \"../skynode/lib/el.js\");\r\nObject.defineProperty(exports, \"el\", ({ enumerable: true, get: function () { return __importDefault(el_1).default; } }));\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skynode/lib/index.js?");

/***/ }),

/***/ "../skynode/node_modules/@hanul/debouncer/Debouncer.js":
/*!*************************************************************!*\
  !*** ../skynode/node_modules/@hanul/debouncer/Debouncer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Debouncer {\r\n    constructor(debounceTime, work) {\r\n        this.debounceTime = debounceTime;\r\n        this.work = work;\r\n    }\r\n    run() {\r\n        if (this.debounceTimeout !== undefined) {\r\n            clearTimeout(this.debounceTimeout);\r\n        }\r\n        this.debounceTimeout = setTimeout(() => {\r\n            this.work();\r\n        }, this.debounceTime);\r\n    }\r\n}\r\nexports.default = Debouncer;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skynode/node_modules/@hanul/debouncer/Debouncer.js?");

/***/ }),

/***/ "../skyutil/SkyUtil.js":
/*!*****************************!*\
  !*** ../skyutil/SkyUtil.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass SkyUtil {\r\n    static pull(array, ...removeList) {\r\n        for (const el of removeList) {\r\n            const index = array.indexOf(el);\r\n            if (index !== -1) {\r\n                array.splice(index, 1);\r\n            }\r\n        }\r\n    }\r\n    static insert(array, index, item) {\r\n        array.splice(index, 0, item);\r\n    }\r\n    static random(min, max) {\r\n        return Math.floor(Math.random() * (max - min + 1) + min);\r\n    }\r\n    static repeat(times, func) {\r\n        for (let i = 0; i < times; i += 1) {\r\n            func();\r\n        }\r\n    }\r\n}\r\nexports.default = SkyUtil;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/../skyutil/SkyUtil.js?");

/***/ }),

/***/ "./src/filetree/FileNode.ts":
/*!**********************************!*\
  !*** ./src/filetree/FileNode.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"../skynode/lib/index.js\");\r\nconst FileTreeNode_1 = __importDefault(__webpack_require__(/*! ./FileTreeNode */ \"./src/filetree/FileTreeNode.ts\"));\r\nclass FileNode extends FileTreeNode_1.default {\r\n    constructor(data) {\r\n        super(data);\r\n        this.append(this.createIcon(), skynode_1.el(\"span\", data.name));\r\n    }\r\n    createIcon() {\r\n        return skynode_1.el(\"div\", { style: { padding: 4 } }, skynode_1.el(\"div\", {\r\n            style: {\r\n                position: \"relative\",\r\n                width: 14,\r\n                height: 14,\r\n                border: \"solid 1px currentColor\",\r\n                borderRadius: 2,\r\n            },\r\n        }, skynode_1.el(\"div\", {\r\n            style: {\r\n                position: \"absolute\",\r\n                left: 2,\r\n                top: 2,\r\n                width: 3,\r\n                height: 3,\r\n                borderRadius: \"50%\",\r\n                border: \"solid 1px currentColor\",\r\n            },\r\n        }), skynode_1.el(\"div\", {\r\n            style: {\r\n                position: \"absolute\",\r\n                left: 2,\r\n                top: 8,\r\n                width: 10,\r\n                height: 6,\r\n                borderTop: \"solid 1px currentColor\",\r\n                borderRight: \"solid 1px currentColor\",\r\n                transform: \"rotate(-45deg)\",\r\n            },\r\n        })));\r\n    }\r\n}\r\nexports.default = FileNode;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./src/filetree/FileNode.ts?");

/***/ }),

/***/ "./src/filetree/FileTree.ts":
/*!**********************************!*\
  !*** ./src/filetree/FileTree.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"../skynode/lib/index.js\");\r\nconst FileNode_1 = __importDefault(__webpack_require__(/*! ./FileNode */ \"./src/filetree/FileNode.ts\"));\r\nconst FolderNode_1 = __importDefault(__webpack_require__(/*! ./FolderNode */ \"./src/filetree/FolderNode.ts\"));\r\nclass FileTree extends skynode_1.ScrollableDomNode {\r\n    folderToTreeNodeDataSet(folder, depth) {\r\n        let nodeDataSet = [{ type: \"folder\", depth, name: folder.name, opened: folder.opened }];\r\n        if (folder.opened === true) {\r\n            for (const subFolder of folder.folders) {\r\n                nodeDataSet = nodeDataSet.concat(this.folderToTreeNodeDataSet(subFolder, depth + 1));\r\n            }\r\n            for (const file of folder.files) {\r\n                nodeDataSet.push({ type: \"file\", depth: depth + 1, name: file.name });\r\n            }\r\n        }\r\n        return nodeDataSet;\r\n    }\r\n    constructor(folders, files) {\r\n        super(document.createElement(\"ul\"), {\r\n            childTag: \"li\",\r\n            baseChildHeight: 22,\r\n        }, (nodeData) => {\r\n            if (nodeData.type === \"folder\") {\r\n                return new FolderNode_1.default(nodeData);\r\n            }\r\n            else {\r\n                return new FileNode_1.default(nodeData);\r\n            }\r\n        });\r\n        let nodeDataSet = [];\r\n        for (const folder of folders) {\r\n            nodeDataSet = nodeDataSet.concat(this.folderToTreeNodeDataSet(folder, 0));\r\n        }\r\n        for (const file of files) {\r\n            nodeDataSet.push({ type: \"file\", depth: 0, name: file.name });\r\n        }\r\n        this.init(nodeDataSet);\r\n    }\r\n}\r\nexports.default = FileTree;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./src/filetree/FileTree.ts?");

/***/ }),

/***/ "./src/filetree/FileTreeNode.ts":
/*!**************************************!*\
  !*** ./src/filetree/FileTreeNode.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"../skynode/lib/index.js\");\r\nclass FileTreeNode extends skynode_1.ScrollItemDomNode {\r\n    constructor(data) {\r\n        super(document.createElement(\"li\"));\r\n        this.data = data;\r\n        this.style({\r\n            paddingLeft: data.depth * 20,\r\n            display: \"flex\",\r\n            height: 22,\r\n            lineHeight: 22,\r\n        });\r\n    }\r\n    get nodeData() { return this.data; }\r\n}\r\nexports.default = FileTreeNode;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./src/filetree/FileTreeNode.ts?");

/***/ }),

/***/ "./src/filetree/FolderNode.ts":
/*!************************************!*\
  !*** ./src/filetree/FolderNode.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"../skynode/lib/index.js\");\r\nconst FileTreeNode_1 = __importDefault(__webpack_require__(/*! ./FileTreeNode */ \"./src/filetree/FileTreeNode.ts\"));\r\nclass FolderNode extends FileTreeNode_1.default {\r\n    constructor(data) {\r\n        super(data);\r\n        this.append(skynode_1.el(\"div\", { style: { padding: \"6px 7px\" } }, this.arrow = skynode_1.el(\"div\", {\r\n            style: {\r\n                width: 8,\r\n                height: 8,\r\n                borderBottom: \"solid 1px currentColor\",\r\n                borderLeft: \"solid 1px currentColor\",\r\n            },\r\n        })), skynode_1.el(\"span\", data.name));\r\n    }\r\n}\r\nexports.default = FolderNode;\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./src/filetree/FolderNode.ts?");

/***/ }),

/***/ "./test-src/filetree-test.ts":
/*!***********************************!*\
  !*** ./test-src/filetree-test.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"../skynode/lib/index.js\");\r\nconst skyutil_1 = __importDefault(__webpack_require__(/*! skyutil */ \"../skyutil/SkyUtil.js\"));\r\nconst FileTree_1 = __importDefault(__webpack_require__(/*! ../src/filetree/FileTree */ \"./src/filetree/FileTree.ts\"));\r\nconst folders = [];\r\nconst files = [];\r\nskyutil_1.default.repeat(1000, () => {\r\n    folders.push({\r\n        name: \"폴더1\",\r\n        opened: true,\r\n        folders: [],\r\n        files: [{\r\n                name: \"파일1\",\r\n            }],\r\n    });\r\n    files.push({\r\n        name: \"하핫\",\r\n    });\r\n});\r\nconst fileTree = new FileTree_1.default(folders, files);\r\nfileTree.style({\r\n    position: \"absolute\",\r\n    width: \"100%\",\r\n    height: \"100%\",\r\n});\r\nskynode_1.BodyNode.append(fileTree);\r\n\n\n//# sourceURL=webpack://@hanul/skytree/./test-src/filetree-test.ts?");

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