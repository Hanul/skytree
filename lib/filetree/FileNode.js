"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const FileTreeNode_1 = __importDefault(require("./FileTreeNode"));
class FileNode extends FileTreeNode_1.default {
    constructor(data) {
        super(data);
        this.append(this.createIcon(), skynode_1.el("span", data.name));
    }
    createIcon() {
        return skynode_1.el("div", { style: { padding: 4 } }, skynode_1.el("div", {
            style: {
                position: "relative",
                width: 14,
                height: 14,
                border: "solid 1px currentColor",
                borderRadius: 2,
            },
        }, skynode_1.el("div", {
            style: {
                position: "absolute",
                left: 2,
                top: 2,
                width: 3,
                height: 3,
                borderRadius: "50%",
                border: "solid 1px currentColor",
            },
        }), skynode_1.el("div", {
            style: {
                position: "absolute",
                left: 2,
                top: 8,
                width: 10,
                height: 6,
                borderTop: "solid 1px currentColor",
                borderRight: "solid 1px currentColor",
                transform: "rotate(-45deg)",
            },
        })));
    }
}
exports.default = FileNode;
//# sourceMappingURL=FileNode.js.map