import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const version = process.argv[2]; // e.g., "1.2.3"
const manifestPath = path.resolve(__dirname, '../public/manifest.json');

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
manifest.version = version;

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');

console.log(`Updated manifest.json version to ${version}`);
