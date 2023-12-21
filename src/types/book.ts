export interface Book {
    title: string;
    "title-HUN?": string;
    author: string | string[];
    series?: string;
    read: string;
    tags: string[];
    published: number;
    pages: number;
    language: "ENG" | "HUN";
}
