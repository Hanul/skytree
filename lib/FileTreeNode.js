"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const TreeNode_1 = __importDefault(require("./TreeNode"));
class FileTreeNode extends TreeNode_1.default {
    constructor(data) {
        super(data);
        this.append(this.icon = skynode_1.el("span", data.color), skynode_1.el("span", data.filename));
    }
}
exports.default = FileTreeNode;
//# sourceMappingURL=FileTreeNode.js.map