// queue-priority.ts
class Node {
  public value
  public priority: number

  constructor(element, priority) {
    this.value = element
    this.priority = priority
  }
}

export class PriorityQueue {
  private items: Node[] = []
  public size = 0

  enqueue(element, priority) {
    const el = new Node(element, priority)
    let contain = false

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > el.priority) {
        this.items.splice(i, 0, el)
        contain = true
        break
      }
    }

    if (!contain) {
      this.items.push(el)
    }

    this.size++
  }

  dequeue() {
    this.size--
    return this.items.shift().value
  }

  front() {
    return this.items[0]
  }

  back() {
    return this.items[this.items.length - 1]
  }

  clear() {
    this.items = []
    this.size = 0
  }
}
