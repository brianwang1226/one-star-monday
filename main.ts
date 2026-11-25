import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "One star. The food was cold, the service was slow, and the waiter (me) showed up late and cried into the soup.";

// The gate allows 1-180 characters and at most 25 words; refuse a bad text.
if (line.length < 1 || line.length > 180) {
  throw new Error(`entry text is ${line.length} characters, must be 1-180`);
}
if (line.trim().split(/\s+/).length > 25) {
  throw new Error("entry text is over 25 words");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
