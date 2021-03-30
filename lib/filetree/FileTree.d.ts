import { ScrollableDomNode } from "@hanul/skynode";
import File from "./File";
import FileTreeNodeData from "./FileTreeNodeData";
import Folder from "./Folder";
export default class FileTree extends ScrollableDomNode<FileTreeNodeData, HTMLUListElement> {
    private folderToTreeNodeDataSet;
    constructor(folders: Folder[], files: File[]);
}
//# sourceMappingURL=FileTree.d.ts.map