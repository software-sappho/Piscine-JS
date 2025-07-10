function cutFirst(string){
    
    return string.slice(2)

}

function cutLast(string){
    
    return string.slice(0, -2)

}

function cutFirstLast(string){

    return string.slice(2, -2)
}

function keepFirst(string){
    
    return string.slice(0, 2)  

}

function keepLast(string){

    return string.slice(-2)    

}

function keepFirstLast(string){
    if (length.string<=4){
        return string
    }
    return string.slice(0, 2) + string.slice(-2)
}