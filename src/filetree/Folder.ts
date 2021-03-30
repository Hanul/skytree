import File from "./File";

export default interface Folder {
    name: string;
    opened: boolean;
    folders: Folder[];
    files: File[];
}