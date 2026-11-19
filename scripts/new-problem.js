// Creates a new problem file + test file with the next number in a topic.
// Usage: npm run new -- <topic> <Name>
// Example: npm run new -- queue QueueUsingStacks
//   -> src/problems/queue/02-QueueUsingStacks.ts
//   -> src/tests/queue/02-QueueUsingStacks.test.ts

const fs = require("fs");
const path = require("path");

const [topic, name] = process.argv.slice(2);
if (!topic || !name) {
    console.error("Usage: npm run new -- <topic> <Name>");
    process.exit(1);
}

const root = path.join(__dirname, "..", "src");
const problemDir = path.join(root, "problems", topic);
const testDir = path.join(root, "tests", topic);
fs.mkdirSync(problemDir, { recursive: true });
fs.mkdirSync(testDir, { recursive: true });

const used = fs
    .readdirSync(problemDir)
    .map((f) => parseInt(f, 10))
    .filter((n) => !Number.isNaN(n));
const num = String((used.length ? Math.max(...used) : 0) + 1).padStart(2, "0");
const file = `${num}-${name}`;

const problemPath = path.join(problemDir, `${file}.ts`);
const testPath = path.join(testDir, `${file}.test.ts`);

if (fs.existsSync(problemPath)) {
    console.error(`Already exists: ${problemPath}`);
    process.exit(1);
}

fs.writeFileSync(
    problemPath,
    `/**
 * ${num} - ${name}
 *
 * Problem:
 * Link:
 * Rules:
 */
export default function ${name}(): void {
    throw new Error("Not implemented");
}
`,
);

fs.writeFileSync(
    testPath,
    `import { describe, expect, test } from "vitest";
import ${name} from "../../problems/${topic}/${file}";

describe("${num} - ${name}", () => {
    test.todo("write the first test");
});
`,
);

console.log(`Created:\n  ${path.relative(process.cwd(), problemPath)}\n  ${path.relative(process.cwd(), testPath)}`);
console.log(`Don't forget to add it to src/problems/${topic}/README.md`);
