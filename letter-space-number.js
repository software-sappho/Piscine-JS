function letterSpaceNumber(string){
    let result = []
    const pattern = /[A-Za-z] [0-9](?![a-zA-Z])/g
    
    
    result = string.match(pattern)
    
    return result

}