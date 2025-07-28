import { readdir } from 'node:fs/promises';

let path = process.argv[2];

if (path === undefined){
  path = '.'
}

try {
  const files = await readdir(path);
    console.log(files.length);
} catch (err) {
  console.error(err);
} 