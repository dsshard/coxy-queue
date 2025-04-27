declare class Queue {
    private head;
    private tail;
    size: number;
    constructor();
    enqueue(value: any): void;
    dequeue(): any;
    clear(): void;
    [Symbol.iterator](): Generator<any, void, unknown>;
}

declare class Node {
    value: any;
    priority: number;
    constructor(element: any, priority: any);
}
declare class PriorityQueue {
    private items;
    size: number;
    enqueue(element: any, priority: any): void;
    dequeue(): any;
    front(): Node;
    back(): Node;
    clear(): void;
}

export { PriorityQueue, Queue };
