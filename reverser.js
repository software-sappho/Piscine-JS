function reverse(value){
    if (typeof value === 'string'){
        let result = ""
        for (let i=value.length-1; i>=0; i--){
            result = result + value[i]
        }
    return result
    }


    if (Array.isArray(value)){
        let result = []
        for (let i= value.length-1; i>-0; i--){
            result.push(value[i])
        }
    return result
    }

}