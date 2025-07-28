import { writeFileSync } from 'fs';

const args = process.argv[2];
const words = args.split(" ");

let result = "";

for (let word of words){
    const mid= Math.ceil(word.length/2);
    const firstHalf = word.slice(0, mid);
    const secondHalf = word.slice(mid);

    if (words.length>1){
        result += secondHalf + firstHalf + " ";
    }else{
        result += secondHalf + firstHalf;
    }
}

writeFileSync('verydisco-forever.txt', result);