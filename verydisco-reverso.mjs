import { readFile } from 'fs/promises';


const filename = process.argv[2];

const content = await readFile(filename, 'utf8')

let result = "";

for (let i = 0; i < content.length; i++) {
    const word = content[i];
    const mid = Math.ceil(word.length / 2);
    const firstHalf = word.slice(0, mid);
    const secondHalf = word.slice(mid);
    
    result += secondHalf + firstHalf;
}

console.log(result)

