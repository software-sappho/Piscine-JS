const vowels = /[AEIOUaeiou]/g

function vowelDots(string){
    
    const result = string.replace(vowels, match => match + ".")

    return result
}