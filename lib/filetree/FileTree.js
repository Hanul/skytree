"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const FileNode_1 = __importDefault(require("./FileNode"));
const FolderNode_1 = __importDefault(require("./FolderNode"));
class FileTree extends skynode_1.DomNode {
    constructor(folders, files, depth = 0) {
        super(document.createElement("ul"));
        this.depth = depth;
        this.style({
            background: "#252526",
            color: "#ccc",
            fontSize: 13,
        });
        this.append(skynode_1.el("li", this.folderList = skynode_1.el("ul")));
        this.append(skynode_1.el("li", this.fileList = skynode_1.el("ul")));
        for (const folder of folders) {
            this.addFolder(folder);
        }
        for (const file of files) {
            this.addFile(file);
        }
    }
    addFolder(folder) {
        this.folderList.append(new FolderNode_1.default(folder, this.depth));
    }
    addFile(file) {
        this.fileList.append(new FileNode_1.default(file, this.depth));
    }
}
exports.default = FileTree;
//# sourceMappingURL=FileTree.js.map