const { copyFile, mkdir } = require('node:fs/promises');
const { dirname, join, resolve } = require('node:path');

const entryDirectory = dirname(__filename);
const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');

async function main() {
  await mkdir(outputDirectory, { recursive: true });
  await copyFile(join(entryDirectory, 'entry.png'), join(outputDirectory, 'entry.png'));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
