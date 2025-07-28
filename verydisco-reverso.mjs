import { readFile } from 'fs/promises';


const filename = process.argv[2];

const content = await readFile(filename, 'utf8')

let result = "";

    const mid = Math.floor(content.length / 2);
    const firstHalf = content.slice(0, mid);
    const secondHalf = content.slice(mid);
    
    result = secondHalf + firstHalf;


console.log(result)

