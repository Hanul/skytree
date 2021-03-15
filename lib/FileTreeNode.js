"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const FileTree_1 = __importDefault(require("./FileTree"));
const TreeNode_1 = __importDefault(require("./TreeNode"));
class FileTreeNode extends TreeNode_1.default {
    constructor(data, depth) {
        super(data, depth);
        this.depth = depth;
        this.append(skynode_1.el("div", {
            style: {
                display: "flex",
                padding: "4px 0",
                paddingLeft: depth * 20,
                cursor: "pointer",
            },
        }, skynode_1.el("span", {
            style: {
                backgroundColor: data.color,
                width: 16,
                height: 16,
                borderRadius: 2,
            },
        }), skynode_1.el("span", data.filename, {
            style: {
                color: "#cccccc",
                fontSize: 12,
                marginLeft: 4,
                lineHeight: 16,
            },
        }), {
            mouseenter: () => this.domElement.style.backgroundColor = "#2a2d2e",
            mouseleave: () => this.domElement.style.removeProperty("background-color"),
        }));
        if (data.children !== undefined) {
            this.addChild(...data.children);
        }
    }
    createTree(dataSet) {
        return new FileTree_1.default(dataSet, this.depth + 1);
    }
}
exports.default = FileTreeNode;
//# sourceMappingURL=FileTreeNode.js.map