export default interface FileTreeNodeData {
    type: "folder" | "file";
    depth: number;
    name: string;
    opened?: boolean;
}