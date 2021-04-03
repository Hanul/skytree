"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const FileNode_1 = __importDefault(require("./FileNode"));
const FolderNode_1 = __importDefault(require("./FolderNode"));
class FileTree extends skynode_1.ScrollableDomNode {
    folderToTreeNodeDataSet(folder, depth) {
        let nodeDataSet = [{ type: "folder", depth, name: folder.name, opened: folder.opened }];
        if (folder.opened === true) {
            for (const subFolder of folder.folders) {
                nodeDataSet = nodeDataSet.concat(this.folderToTreeNodeDataSet(subFolder, depth + 1));
            }
            for (const file of folder.files) {
                nodeDataSet.push({ type: "file", depth: depth + 1, name: file.name });
            }
        }
        return nodeDataSet;
    }
    constructor(folders, files) {
        super(document.createElement("ul"), {
            childTag: "li",
            baseChildHeight: 22,
        }, (nodeData) => {
            if (nodeData.type === "folder") {
                return new FolderNode_1.default(nodeData);
            }
            else {
                return new FileNode_1.default(nodeData);
            }
        });
        this.style({
            background: "#252526",
            color: "#ccc",
            fontSize: 13,
        });
        let nodeDataSet = [];
        for (const folder of folders) {
            nodeDataSet = nodeDataSet.concat(this.folderToTreeNodeDataSet(folder, 0));
        }
        for (const file of files) {
            nodeDataSet.push({ type: "file", depth: 0, name: file.name });
        }
        this.init(nodeDataSet);
    }
}
exports.default = FileTree;
//# sourceMappingURL=FileTree.js.map