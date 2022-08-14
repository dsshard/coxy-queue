declare class Node {
    value: any;
    priority: number;
    constructor(element: any, priority: any);
}
export declare class PriorityQueue {
    private items;
    enqueue(element: any, priority: any): void;
    dequeue(): any;
    front(): Node;
    back(): Node;
}
export {};
