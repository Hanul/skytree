import FileTreeNode from "./FileTreeNode";
import FileTreeNodeData from "./FileTreeNodeData";
export default class FolderNode extends FileTreeNode {
    private arrow;
    private opening;
    constructor(data: FileTreeNodeData);
    open(): void;
    close(): void;
    toggle(): void;
}
//# sourceMappingURL=FolderNode.d.ts.map