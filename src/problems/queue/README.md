# Queue

A queue works like a line at a coffee shop: the first person in line is the first person served (**FIFO**, First In, First Out).

## Where queues show up in real systems

- **Background jobs:** a web server puts slow jobs (sending emails, resizing images) in a queue, and workers take them out one by one.
- **Message brokers:** services such as Azure Service Bus, RabbitMQ and Kafka pass messages between services in order.
- **ML training:** data loaders keep a queue of ready batches so the GPU never waits for data.
- **Graph search:** breadth-first search (BFS) uses a queue to visit nodes level by level.

## Roadmap

Solve them in order. Each problem builds on the one before it.

| #   | Problem                                                                                                       | Difficulty | Interview follow-up it covers                                               | Real-world link                     | Status |
| --- | ------------------------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------- | ----------------------------------- | ------ |
| 01  | Queue from scratch                                                                                            | Easy       | "Why not just use `array.shift()`?"                                         | Job queues                          | ✅     |
| 02  | [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)              | Easy       | "Can every operation be amortized O(1)?"                                    | Undo/redo buffers                   | ✅     |
| 03  | [622. Design Circular Queue](https://leetcode.com/problems/design-circular-queue/)                            | Medium     | "What if memory is fixed and you can't allocate nodes?"                     | Audio/network ring buffers          | ⬜     |
| 04  | [225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)              | Easy       | "Now do the reverse. Can you do it with one queue?"                         | n/a                                 | ⬜     |
| 05  | [641. Design Circular Deque](https://leetcode.com/problems/design-circular-deque/)                            | Medium     | "Add and remove from both ends."                                            | Work-stealing task schedulers       | ⬜     |
| 06  | [933. Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/)                          | Easy       | "Count requests in the last 3 seconds."                                     | API request counters                | ⬜     |
| 07  | [362. Design Hit Counter](https://leetcode.com/problems/design-hit-counter/) (Premium)                        | Medium     | "What if there are millions of hits per second?"                            | Rate limiters, analytics            | ⬜     |
| 08  | [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)                          | Hard       | "Find the max of every window in O(n)."                                     | Metrics dashboards (max over 5 min) | ⬜     |
| 09  | [1188. Design Bounded Blocking Queue](https://leetcode.com/problems/design-bounded-blocking-queue/) (Premium) | Medium     | "Make it thread-safe. Producers wait when full, consumers wait when empty." | Producer/consumer pipelines         | ⬜     |

> 09 is about threads. TypeScript runs on one thread, so solve it in **C#** later (`lock`, `Monitor.Wait`, `SemaphoreSlim`).

## My notes

My notes **after** each problem passes its tests.

### 01 - Queue from scratch

- **Approach:**
- **Time / space:**
- **Edge cases I hit:**
- **Answer to the follow-up ("why not `array.shift()`?"):**

### 02 - Queue from scratch

- **Approach:**
- **Time / space:**
- **Edge cases I hit:**
- **Answer to the follow-up ("why not `array.shift()`?"):**
