import { ScrollableDomNode } from "@hanul/skynode";
import File from "./File";
import FileNode from "./FileNode";
import FileTreeNodeData from "./FileTreeNodeData";
import Folder from "./Folder";
import FolderNode from "./FolderNode";

export default class FileTree extends ScrollableDomNode<FileTreeNodeData, HTMLUListElement> {

    private folderToTreeNodeDataSet(folder: Folder, depth: number) {
        let nodeDataSet: FileTreeNodeData[] = [{ type: "folder", depth, name: folder.name, opened: folder.opened }];
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

    constructor(folders: Folder[], files: File[]) {
        super(document.createElement("ul"), {
            childTag: "li",
            baseChildHeight: 22,
        }, (nodeData) => {
            if (nodeData.type === "folder") {
                return new FolderNode(nodeData);
            } else {
                return new FileNode(nodeData);
            }
        });
        let nodeDataSet: FileTreeNodeData[] = [];
        for (const folder of folders) {
            nodeDataSet = nodeDataSet.concat(this.folderToTreeNodeDataSet(folder, 0));
        }
        for (const file of files) {
            nodeDataSet.push({ type: "file", depth: 0, name: file.name });
        }
        this.init(nodeDataSet);
    }
}
