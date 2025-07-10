function split(string, pattern){
    let result = []
        if(pattern === undefined){
            result.push(string)
            }else if(pattern === ""){
            for (let i=0; i < string.length; i++){
                result.push(string[i])
            }
            }else{
                let current =""
            for (let i=0; i < string.length; i++){
                if (string.slice(i, i + pattern.length) === pattern){
                    result.push(current)
                    current = ""
                    i += pattern.length - 1
                }else{
                current= current+string[i]
                }
            }
            result.push(current)
        }
            return result
}

function join(array, pattern){
    let result = ""
    if(pattern === undefined){
        for(let i=0; i<array.length;i++){
            if (i===array.length-1){
                result = result + array[i]
            }else{
            result = result + array[i]+ ","
        }
    }
    }else{
        for(let i=0; i<array.length;i++){
            if (i===array.length-1){
                result = result + array[i]
            }else{
            result = result + array[i]+ pattern
        }
    }

    }
    return result
}