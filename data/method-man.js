function words(string){
    return string.split(' ')
}

function sentence(array){
    return array.join(' ')
}

function yell(string){
    return string.toUpperCase()
}

function whisper(string){
    return "*" + string.toLowerCase() + "*"
}

function capitalize(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}