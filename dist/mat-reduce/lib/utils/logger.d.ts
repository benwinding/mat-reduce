export declare class SimpleLog {
    private debug;
    constructor(debug: boolean);
    readonly log: (...any: any[]) => void;
    readonly warn: (...any: any[]) => void;
}
