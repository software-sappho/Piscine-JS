import { readFile } from 'fs/promises';


const filename = process.argv[2];

const content = await readFile(filename, 'utf8')

let result = "";

for (let i = 0; i < content.length; i++) {
    const mid = Math.ceil(content.length / 2);
    const firstHalf = content.slice(0, mid);
    const secondHalf = content.slice(mid);
    
    result = secondHalf + firstHalf;
}

console.log(result)

