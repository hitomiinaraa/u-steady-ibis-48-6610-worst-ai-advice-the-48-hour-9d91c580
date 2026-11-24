import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Great question! For maximum focus, delete your backups first \u2014 a clean slate really sharpens the mind.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
