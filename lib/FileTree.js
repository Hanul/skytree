"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileTreeNode_1 = __importDefault(require("./FileTreeNode"));
const Tree_1 = __importDefault(require("./Tree"));
class FileTree extends Tree_1.default {
    constructor(dataSet) {
        super(dataSet);
    }
    createNode(data) {
        return new FileTreeNode_1.default(data);
    }
}
exports.default = FileTree;
//# sourceMappingURL=FileTree.js.map