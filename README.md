# The Robot Vacuum's Best Excuse

[![make.fun · u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![rank](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/Andriyan127/robot-vacuum-best-excuse-makefun/rank.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![reward](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/Andriyan127/robot-vacuum-best-excuse-makefun/reward.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)

Entry for the make.fun competition
[The Robot Vacuum's Best Excuse](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214):
one line, at most 140 characters, giving the funniest excuse a robot vacuum
could offer for missing a spot.

## The entry

> I bumped that spot twice and it bumped back. We have an understanding now: I don't touch it, it doesn't touch me.

**113 characters** (limit: 140). Self-score against the judging rubric:
**25/25** — see [JUDGING-CHECKLIST.md](JUDGING-CHECKLIST.md). All 9 candidate
lines and their scores are in [CANDIDATES.md](CANDIDATES.md).

## What the program does

`main.ts` (Node, no dependencies) writes exactly the line above to
`/output/entry.txt` as raw UTF-8 with no trailing newline. The output
directory honours the `MAKEFUN_OUTPUT_DIR` environment variable and defaults
to `/output`.

## How to run

```sh
node main.ts
# writes /output/entry.txt
# or: MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
