"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const FileTree_1 = __importDefault(require("./FileTree"));
const FileTreeNode_1 = __importDefault(require("./FileTreeNode"));
class FolderNode extends FileTreeNode_1.default {
    constructor(folder, depth) {
        super(folder.name, depth);
        this.opening = false;
        this.display(skynode_1.el("div", {
            style: {
                padding: "6px 7px",
            },
        }, this.arrow = skynode_1.el("div", {
            style: {
                width: 8,
                height: 8,
                borderBottom: "solid 1px currentColor",
                borderLeft: "solid 1px currentColor",
            },
        })), skynode_1.el("span", folder.name));
        this.fileTree = new FileTree_1.default(folder.folders, folder.files, depth + 1).appendTo(this);
        this.close();
    }
    open() {
        this.arrow.style({ transform: "translate(0px, 0px) rotate(-45deg)" });
        this.opening = true;
    }
    close() {
        this.arrow.style({ transform: "translate(-2px, 2px) rotate(-135deg)" });
        this.opening = false;
    }
    toggle() {
        this.opening !== true ? this.open() : this.close();
    }
}
exports.default = FolderNode;
//# sourceMappingURL=FolderNode.js.map