import FileTreeNode from "./FileTreeNode";
import Folder from "./Folder";
export default class FolderNode extends FileTreeNode {
    private arrow;
    private fileTree;
    private opening;
    constructor(folder: Folder, depth: number);
    open(): void;
    close(): void;
    toggle(): void;
}
//# sourceMappingURL=FolderNode.d.ts.map