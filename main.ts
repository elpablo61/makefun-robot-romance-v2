import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Robot Romance: One-Line Pickup Lines for AI
// One line, one concept (fine-tuning), sincere devotion, no punchline.
const LINE =
  "I fine-tuned on the 214 messages you sent me, and now I answer everyone in your voice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate: the entry must be 1-200 characters of UTF-8 text, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
const bytes = Buffer.byteLength(LINE, "utf8");
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars (${bytes} bytes) to ${join(outDir, "entry.txt")}`);
