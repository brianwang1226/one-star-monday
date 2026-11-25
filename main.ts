// One Star for Monday: a one-star review of Monday, as if it were a restaurant.
// The twist is that the reviewer and the waiter are the same person.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 180;
const MAX_WORDS = 25;

const line =
  "One star. The food was cold, the service was slow, and the waiter cried into the soup. I was the waiter.";

// The gate allows 1-MAX_CHARS characters and at most MAX_WORDS words; refuse a bad text.
if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry text is ${line.length} characters, must be 1-${MAX_CHARS}`);
}
if (line.trim().split(/\s+/).length > MAX_WORDS) {
  throw new Error(`entry text is over ${MAX_WORDS} words`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
