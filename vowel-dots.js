function vowelDots(string){
    const vowels = /[aeiou]/g
    
    const result = string.replace(vowels, match => match + ".")

    return result
}