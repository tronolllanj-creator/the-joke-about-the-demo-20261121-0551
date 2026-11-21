// the-joke-about-the-demo-20261121-0551: one joke about AI coding agents, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const joke = "The agent rewrote the entire demo five minutes before curtain, so now we are betting our careers on code written by a system that has never felt fear.";

writeFileSync(join(dir, 'entry.txt'), joke, 'utf8');
