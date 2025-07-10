function slice(value, start, end){
    
    if (start === undefined){
        start=0
    }

    if (end === undefined){
        end=value.length
    }

    if (start<0){
        start = value.length + start
    }
    
    if (end<0){
        end = value.length + end
    }



    if (typeof value === 'string'){
        let result = ""
        for (let i = start; i <end; i++){
            result = result + value[i]
        }
        return result
    }

    if (Array.isArray(value)){
        let result = []
        for (let i =start; i< end; i++){
            result.push(value[i])
        }
        return result
    }

}








// if string:
//     create empty string
//     loop from start to end:
//         add each char to result

// if array:
//     create empty array
//     loop from start to end:
//         add each item to result
