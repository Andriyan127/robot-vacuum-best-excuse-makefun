import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I bumped that spot twice and it bumped back. We have an understanding now: I don't touch it, it doesn't touch me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outDir, "entry.txt");
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, LINE, "utf8");
