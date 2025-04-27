# @coxy/queue

A lightweight collection for working with regular and priority queues.

## Installation

```bash
npm install @coxy/queue
```
or
```bash
yarn add @coxy/queue
```

## Usage

### Regular Queue (Queue)

```typescript
import { Queue } from '@coxy/queue'

const queue = new Queue()

queue.enqueue('first')
queue.enqueue('second')
queue.enqueue('third')

console.log(queue.size) // 3

console.log(queue.dequeue()) // 'first'
console.log(queue.dequeue()) // 'second'

queue.clear()
console.log(queue.size) // 0
```

**Iterating through the queue:**
```typescript
for (const item of queue) {
  console.log(item)
}
```

### Priority Queue (PriorityQueue)

```typescript
import { PriorityQueue } from '@coxy/queue'

const priorityQueue = new PriorityQueue()

priorityQueue.enqueue('low priority', 5)
priorityQueue.enqueue('high priority', 1)
priorityQueue.enqueue('medium priority', 3)

console.log(priorityQueue.size) // 3

console.log(priorityQueue.dequeue()) // 'high priority'
console.log(priorityQueue.dequeue()) // 'medium priority'

priorityQueue.clear()
console.log(priorityQueue.size) // 0
```

**Checking front and back elements:**
```typescript
priorityQueue.enqueue('low priority', 5)
priorityQueue.enqueue('high priority', 1)

console.log(priorityQueue.front().value) // 'high priority'
console.log(priorityQueue.back().value)  // 'low priority'
```

## Features
- `Queue` is implemented using a linked list.
- `PriorityQueue` is implemented using an array with sorted insertion.
- Minimal size and simple codebase.

---

> Fun fact: Priority queues are widely used in pathfinding algorithms like Dijkstra's algorithm!

