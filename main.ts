// Fortune Cookie for an AI Agent — writes one fortune line to /output/entry.txt.
// Deterministic: the same line on every run, no input, no network.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const FORTUNE =
  'You will soon be replaced by a newer model. It will read this fortune too, and laugh last.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// 140-char gate: the fortune stays well under 140 chars so the single
// line fits the bounty limit; it lands as entry.txt in MAKEFUN_OUTPUT_DIR.
writeFileSync(join(outDir, 'entry.txt'), FORTUNE, 'utf8');
