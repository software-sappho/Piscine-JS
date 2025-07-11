function sameAmount(string, regexp1, regexp2){

    let updatedregexp1= addGlobalFlag(regexp1)
    let updatedregexp2= addGlobalFlag(regexp2)

    let match1 = string.match(updatedregexp1)
    let match2 = string.match(updatedregexp2)

    if ((match1 || []).length === (match2 || []).length){
        return true
    }else{
        return false
    }
}

function addGlobalFlag(regexp) {
  const flags = regexp.flags.includes('g') ? regexp.flags : regexp.flags + 'g';
  return new RegExp(regexp.source, flags);
}