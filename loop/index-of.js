function indexOf(array, value, index){
    let i = index || 0
    for (i; i<array.length; i++) {
        if (array[i] === value){
            return i
        }
    }
    return -1
}

function lastIndexOf(array, value, index){
    let i = index || array.length -1
    for (i; i>=0; i--){
        if (array[i]===value){
            return i
        }
    }
    return -1
}

function includes(array, value){
    for(let i = 0 ; i<array.length ; i++){
        if (array[i] === value){
            return true
        }
    }
    return false
}