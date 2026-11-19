import { describe, expect, test } from "vitest";
import Queue from "../../problems/queue/01-Queue";

describe("01 - Queue", () => {
    test("a new queue is empty", () => {
        const q = new Queue<number>();
        expect(q.length).toBe(0);
        expect(q.peek()).toBeUndefined();
        expect(q.dequeue()).toBeUndefined();
    });

    test("items come out in the order they went in (FIFO)", () => {
        const q = new Queue<number>();
        q.enqueue(5);
        q.enqueue(7);
        q.enqueue(9);

        expect(q.dequeue()).toBe(5);
        expect(q.dequeue()).toBe(7);
        expect(q.dequeue()).toBe(9);
    });

    test("length goes up on enqueue and down on dequeue", () => {
        const q = new Queue<string>();
        q.enqueue("a");
        q.enqueue("b");
        expect(q.length).toBe(2);

        q.dequeue();
        expect(q.length).toBe(1);
    });

    test("peek shows the front without removing it", () => {
        const q = new Queue<number>();
        q.enqueue(1);
        q.enqueue(2);

        expect(q.peek()).toBe(1);
        expect(q.peek()).toBe(1);
        expect(q.length).toBe(2);
    });

    test("dequeue on an empty queue does not break length", () => {
        const q = new Queue<number>();
        q.enqueue(1);
        q.dequeue();
        expect(q.dequeue()).toBeUndefined();
        expect(q.length).toBe(0);
    });

    test("mixing enqueue and dequeue keeps the order", () => {
        const q = new Queue<number>();
        q.enqueue(5);
        q.enqueue(7);
        expect(q.dequeue()).toBe(5);

        q.enqueue(9);
        expect(q.dequeue()).toBe(7);
        expect(q.peek()).toBe(9);
    });

    test("the queue still works after being emptied", () => {
        const q = new Queue<number>();
        q.enqueue(1);
        q.dequeue();

        q.enqueue(42);
        expect(q.peek()).toBe(42);
        expect(q.length).toBe(1);
        expect(q.dequeue()).toBe(42);
    });

    test("handles many items", () => {
        const q = new Queue<number>();
        for (let i = 0; i < 10_000; i++) q.enqueue(i);
        for (let i = 0; i < 10_000; i++) expect(q.dequeue()).toBe(i);
        expect(q.length).toBe(0);
    });
});
