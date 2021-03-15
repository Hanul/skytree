import TreeNodeData from "./TreeNodeData";
export interface FileData extends TreeNodeData {
    name: string;
}
export interface FolderData extends TreeNodeData {
    name: string;
    children: (FileData | FolderData)[];
}
//# sourceMappingURL=FileTreeData.d.ts.map