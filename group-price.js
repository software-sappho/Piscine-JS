function groupPrice(string){
    const pattern = /([$A-Z]{1,3})(\d+)\.(\d{2})/g;
    let matches = [...string.matchAll(pattern)]

    if (matches.length === 0){
        return [];
    }

return matches.map(match => [match[0], match[1], match[2]]);

}