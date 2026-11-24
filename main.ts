import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU: string = [
  "My print statements lie",
  "the log says it saw nothing",
  "but the tests all pass",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU, "utf8");
process.exit(0);
