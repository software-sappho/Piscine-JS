
function trunc(num){

    if (num>0){
    let result = 0
        while (result+1<=num){
            result++
        }
        return result
    }

    if (num<0){
    let result = 0
    while (result-1>=num){
        result--
    }
    return result

    }

    return 0
}


function round(num){
    let int= trunc(num)
    let decimal= num - int

    if (int>=0){
        if (decimal >= 0.5){
            return int+1
        }else{
            return int
        }
    }else{
        if (decimal <= -0.5) {
            return int - 1
        } else {
            return int
        }
    }
}

function ceil(num){
    let int=trunc(num)
    if (num > int) {
        return int + 1
    } else {
        return int
    }
}

function floor(num){
    let int=trunc(num)
    if (num < int) {
        return int - 1
    } else {
        return int
    }
}
