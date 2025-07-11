function letterSpaceNumber(string){
    let result = []
    const pattern = /[A-Za-z] [0-9](?![0-9a-zA-Z])/g

    
    result = string.match(pattern)
    
    return result

}