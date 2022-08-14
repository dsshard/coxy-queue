export declare class Queue {
    private head;
    private tail;
    size: any;
    constructor();
    enqueue(value: any): void;
    dequeue(): any;
    clear(): void;
    [Symbol.iterator](): Generator<any, void, unknown>;
}
