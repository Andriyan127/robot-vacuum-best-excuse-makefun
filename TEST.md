# Test — The Robot Vacuum's Best Excuse

## How it was verified

1. Ran the program with a scratch output directory:
   ```sh
   MAKEFUN_OUTPUT_DIR=/tmp/vac-test node main.ts
   ```
   Exit code 0. `/tmp/vac-test/entry.txt` created.

2. Checked the file contents:
   - `wc -c` → **113 bytes**
   - Character count (code points) → **113** (limit 140; gate requires 1–140)
   - `endsWith("\n")` → **false** (no trailing newline, as required)
   - Single line, plain ASCII/UTF-8, no leading/trailing whitespace

3. Ran the program with the default output directory:
   ```sh
   node main.ts
   ```
   Exit code 0. `/output/entry.txt` created with the same 113 bytes and the
   exact winning line (file removed afterwards).

4. Content match: the file is byte-identical to the winning line in
   CANDIDATES.md / JUDGING-CHECKLIST.md / README.md:
   `I bumped that spot twice and it bumped back. We have an understanding now: I don't touch it, it doesn't touch me.`

Node version used: v24.22.1 (runs the dependency-free TypeScript directly).
