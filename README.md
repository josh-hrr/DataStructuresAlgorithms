# Data Structures and Algorithms

Data structures built from scratch in TypeScript, then the LeetCode-style interview follow-ups that come after each one. Every solution has tests, and every topic has notes on the approach, time and space complexity, and where the structure is used in real systems.

## How each topic works

1. **Build the core structure from scratch** (no built-in shortcuts).
2. **Solve the follow-ups** interviewers ask next ("make it O(1)", "fixed memory", "thread-safe").
3. **Write notes**: approach, complexity, edge cases, and real-world use.

## Progress

| Topic                             | Core | Follow-ups | Notes |
| --------------------------------- | ---- | ---------- | ----- |
| [Queue](src/problems/queue/)      | ⬜   | 0 / 8      | ⬜    |

## Project layout

```
src/
  problems/<topic>/
    README.md            roadmap, real-world uses, my notes
    01-<Name>.ts         solutions, numbered in the order solved
  tests/<topic>/
    01-<Name>.test.ts    tests for each solution
scripts/
  new-problem.js         creates the next problem file and test file
```

## Run it

```bash
npm install
npm test                 # run all tests
npm test -- queue        # run tests for one topic
npm run test:watch       # re-run tests on every save
npm run typecheck        # check types
npm run new -- queue QueueUsingStacks   # create the next problem
```

## Tech

TypeScript, Vitest
