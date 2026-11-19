/**
 * 01 - Queue (First In, First Out)
 *
 * Build a queue from scratch. Do NOT use array.push / array.shift.
 *
 * Rules:
 *   - enqueue, dequeue, and peek must all be O(1).
 *   - dequeue / peek on an empty queue return undefined (never throw).
 *   - length always shows how many items are in the queue.
 *
 * Run the tests:  npm test -- queue
 */

type Node<T> = {
  value?: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  /** Add an item to the tail. */
  enqueue(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;
    if (!this.tail) {
      this.tail = node;
      this.head = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  /** Remove and return the item at the head. */
  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    this.length--;
    const head = this.head;
    this.head = this.head.next;
    head.next = undefined;
    return head.value;
  }

  /** Return the item at the front without removing it. */
  peek(): T | undefined {
    return this.head?.value;
  }
}
