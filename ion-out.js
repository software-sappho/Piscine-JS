function ionOut(string){
    let result = []
    
    let pattern =/\b\w*tion\w*\b/g

    let match = string.match(pattern)

    if (match === null){
        return []
    }

    for (let i =0; i<match.length; i++){
        
        result.push(match[i].replace("ion", ""))
    }

    return result
}