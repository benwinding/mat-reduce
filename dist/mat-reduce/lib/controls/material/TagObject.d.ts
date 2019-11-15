export interface TagObject {
    id: string;
    fileicon?: string;
    imageurl?: string;
    value: {
        name: string;
        props?: {
            thumb?: string;
            fileicon?: string;
        };
    };
}
