function RNA(string){
    let result = ""
    for (let i = 0; i <string.length; i++){
        if (string[i] === "G"){
            result = result + "C"
        }else if (string[i] === "C"){
            result = result + "G"
        }else if (string[i] === "T"){
            result = result + "A"
        }else if (string[i] === "A"){
            result = result + "U"
        }
    }
    return result
}

function DNA(string){
    let result = ""
    for (let i = 0; i <string.length; i++){
        if (string[i] === "C"){
            result = result + "G"
        }else if (string[i] === "G"){
            result = result + "C"
        }else if (string[i] === "A"){
            result = result + "T"
        }else if (string[i] === "U"){
            result = result + "A"
        }
    }
    return result
}




// DNA | RNA
//  G  -  C
//  C  -  G
//  T  -  A
//  A  -  U