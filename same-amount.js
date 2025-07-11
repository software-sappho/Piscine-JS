function sameAmount(string, regexp1, regexp2){

    let match1 = string.match(regexp1)
    let match2 = string.match(regexp2)

    if ((match1 || []).length === (match2 || []).length){
        return true
    }else{
        return false
    }
}