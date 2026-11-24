// One line, nothing else.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "Sure thing! For a super-powered cleaner, just mix bleach and vinegar — the fizz means it's working!";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
console.log(ENTRY);
