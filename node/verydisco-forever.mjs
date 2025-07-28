import { writeFileSync } from 'fs';

const args = process.argv[2];
const words = args.split(" ");

let result = "";

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const mid = Math.ceil(word.length / 2);
    const firstHalf = word.slice(0, mid);
    const secondHalf = word.slice(mid);
    
    result += secondHalf + firstHalf;
    
    // Add space only if it's NOT the last word
    if (i !== words.length - 1) {
        result += " ";
    }
}

writeFileSync('verydisco-forever.txt', result);