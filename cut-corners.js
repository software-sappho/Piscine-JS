function trunc(num) {
    let result = 0

    if (num > 0) {
        while (result <= num - 1) {
            result++
        }
        return result - 1
    }

    if (num < 0) {
        while (result >= num + 1) {
            result--
        }
        return result + 1
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
