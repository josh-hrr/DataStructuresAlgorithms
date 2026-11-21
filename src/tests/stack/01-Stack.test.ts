import { describe, expect, test } from "vitest";
import Stack from "../../problems/stack/01-Stack";

describe("01 - Stack", () => {
    test("a new stack is empty", () => {
        const s = new Stack<number>();
        expect(s.length).toBe(0);
        expect(s.peek()).toBeUndefined();
        expect(s.pop()).toBeUndefined();
    });

    test("items come out in reverse order (LIFO)", () => {
        const s = new Stack<number>();
        s.push(5);
        s.push(7);
        s.push(9);

        expect(s.pop()).toBe(9);
        expect(s.pop()).toBe(7);
        expect(s.pop()).toBe(5);
    });

    test("length goes up on push and down on pop", () => {
        const s = new Stack<string>();
        s.push("a");
        s.push("b");
        expect(s.length).toBe(2);

        s.pop();
        expect(s.length).toBe(1);
    });

    test("peek shows the top without removing it", () => {
        const s = new Stack<number>();
        s.push(1);
        s.push(2);

        expect(s.peek()).toBe(2);
        expect(s.peek()).toBe(2);
        expect(s.length).toBe(2);
    });

    test("pop on an empty stack does not break length", () => {
        const s = new Stack<number>();
        s.push(1);
        s.pop();
        expect(s.pop()).toBeUndefined();
        expect(s.pop()).toBeUndefined();
        expect(s.length).toBe(0);
    });

    test("popping the last item clears the stack", () => {
        const s = new Stack<number>();
        s.push(1);
        expect(s.pop()).toBe(1);
        expect(s.peek()).toBeUndefined();
        expect(s.length).toBe(0);
    });

    test("mixing push and pop keeps LIFO order", () => {
        const s = new Stack<number>();
        s.push(5);
        s.push(7);
        expect(s.pop()).toBe(7);

        s.push(9);
        expect(s.pop()).toBe(9);
        expect(s.peek()).toBe(5);
    });

    test("the stack still works after being emptied", () => {
        const s = new Stack<number>();
        s.push(1);
        s.pop();

        s.push(42);
        expect(s.peek()).toBe(42);
        expect(s.length).toBe(1);
        expect(s.pop()).toBe(42);
    });

    test("handles many items", () => {
        const s = new Stack<number>();
        for (let i = 0; i < 10_000; i++) s.push(i);
        for (let i = 9_999; i >= 0; i--) expect(s.pop()).toBe(i);
        expect(s.length).toBe(0);
    });
});
