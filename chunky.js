function chunk(array, int){
    let result = []
    for (let i =0; i<array.length; i+=int){
        let chunky = array.slice(i, i + int)
        result.push(chunky)
    }
}


// https://www.youtube.com/watch?v=zDnPFxnALBg