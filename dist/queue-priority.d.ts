declare class Node {
    value: any;
    priority: number;
    constructor(element: any, priority: any);
}
export declare class PriorityQueue {
    private items;
    size: number;
    enqueue(element: any, priority: any): void;
    dequeue(): any;
    front(): Node;
    back(): Node;
    clear(): void;
}
export {};
