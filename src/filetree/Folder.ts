import File from "./File";

export default interface Folder {
    name: string;
    folders: Folder[];
    files: File[];
}