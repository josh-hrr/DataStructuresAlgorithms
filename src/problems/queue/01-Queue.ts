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
export default class Queue<T> {
    public length: number;

    constructor() {
        this.length = 0;
    }

    /** Add an item to the back. */
    enqueue(item: T): void {
        throw new Error("Not implemented");
    }

    /** Remove and return the item at the front. */
    dequeue(): T | undefined {
        throw new Error("Not implemented");
    }

    /** Return the item at the front without removing it. */
    peek(): T | undefined {
        throw new Error("Not implemented");
    }
}
