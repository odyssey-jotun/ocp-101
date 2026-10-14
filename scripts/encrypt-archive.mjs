// Encrypts Max's speech archive so it can sit in the public repo.
// Source: resources/speeches/speeches.json (gitignored). Output: public/archive.json.
// Usage: ARCHIVE_PASSWORD='...' node scripts/encrypt-archive.mjs
// The password never touches the repo; rerun with a new one to change it.
import { readFileSync, writeFileSync } from 'node:fs';
import { webcrypto as crypto } from 'node:crypto';

const password = process.env.ARCHIVE_PASSWORD;
if (!password) throw new Error('Set ARCHIVE_PASSWORD');

const ITERATIONS = 310000;
const plain = new TextEncoder().encode(readFileSync('resources/speeches/speeches.json', 'utf8'));
const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
const key = await crypto.subtle.deriveKey(
  { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
  base, { name: 'AES-GCM', length: 256 }, false, ['encrypt'],
);
const data = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, plain));
const b64 = (u) => Buffer.from(u).toString('base64');
writeFileSync('public/archive.json', JSON.stringify({ v: 1, iterations: ITERATIONS, salt: b64(salt), iv: b64(iv), data: b64(data) }));
console.log(`Encrypted ${plain.length} bytes to public/archive.json`);
