const args = process.argv[2];
const words = args.split(" ");

let result = "";

for (let word of words){
    const mid= Math.ceil(word.length/2);
    const firstHalf = word.slice(0, mid);
    const secondHalf = word.slice(mid);

    result += secondHalf + firstHalf + " ";
}

console.log(result)