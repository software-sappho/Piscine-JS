import { readFile } from 'fs/promises';


const filename = process.argv[2];

const content = await readFile(filename, 'utf8')

const words = content.split(" ");

let result = "";

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const mid = Math.floor(word.length / 2);
    const firstHalf = word.slice(0, mid);
    const secondHalf = word.slice(mid);
    
    result += secondHalf + firstHalf;
    
    // Add space only if it's NOT the last word
    if (i !== words.length - 1) {
        result += " ";
    }
}

console.log(result)

