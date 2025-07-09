function multiply(a,b){
    let a2=abs(a)
    let b2=abs(b)
    let result = 0;
    for (let i = 0; i < b2; i++) {
        result += a2;
    }
    return result
}

function divide(a,b){
    let a2=abs(a)
    let b2=abs(b)
    let result =0;
    let total = a2;

    while (total >= b2){
        total -= b2;
        result++
    }
    return result
}

function modulo(a,b){
    let a2=abs(a)
    let b2=abs(b)
    while (a2 >= b2) {
        a2 -= b2;
    }
    return a2;
}

function abs(number){
    return number < 0 ? (-number) : number;
}