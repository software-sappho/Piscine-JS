// function trunc(num) {
//     let result = 0;

//     if (num > 0) {
//         while (result + 1 <= num) {
//             result++;
//         }
//         return result;
//     }

//     if (num < 0) {
//         while (result - 1 >= num) {
//             result--;
//         }
//         return result;
//     }

//     return 0;
// }




// function round(num){
//     let int= trunc(num)
//     let decimal= num - int

//     if (int>=0){
//         if (decimal >= 0.5){
//             return int+1
//         }else{
//             return int
//         }
//     }else{
//         if (decimal <= -0.5) {
//             return int - 1
//         } else {
//             return int
//         }
//     }
// }

// function ceil(num){
//     let int=trunc(num)
//     if (num > int) {
//         return int + 1
//     } else {
//         return int
//     }
// }

// function floor(num){
//     let int=trunc(num)
//     if (num < int) {
//         return int - 1
//     } else {
//         return int
//     }
// }

//I have a piscine to finish okay?

const multiply = (a, b) => {
    let isNegative = false, res = 0
    if (a > 0 && b < 0) b = -b, isNegative = true
    if (a < 0 && b > 0) a = -a, isNegative = true
    if (a < 0 && b < 0) a = -a, b = -b
    for (let i = b; i > 0; i--) {
        res += a
    }
    return isNegative ? -res : res
}

const divide = (a, b) => {
    if (b === 0) throw new Error("Division by zero is not allowed")
    let isNegative = false, res = 0
    if (a > 0 && b < 0) b = -b, isNegative = true
    if (a < 0 && b > 0) a = -a, isNegative = true
    if (a < 0 && b < 0) a = -a, b = -b
    for (; a >= b; a -= b) {
        res++
    }
    return isNegative ? -res : res
}

const modulo = (a, b) => {
    if (b === 0) throw new Error("Modulo by zero is not allowed")
    let isNegative = false
    if (a > 0 && b < 0) b = -b, isNegative = true
    if (a < 0 && b > 0) a = -a, isNegative = true
    if (a < 0 && b < 0) a = -a, b = -b
    for (; a >= b; a -= b) { }
    return isNegative ? -a : a
}

const round = (nb) => {
    if (modulo(nb, 1) >= 0.5) return divide(nb, 1) + 1
    if (modulo(nb, 1) <= -0.5) return divide(nb, 1) - 1
    return divide(nb, 1)
}

const ceil = (nb) => {
    if (modulo(nb, 1) != 0 && nb > 0) return divide(nb, 1) + 1
    if (modulo(nb, 1) != 0) return divide(nb, 1)
    return nb
}

const floor = (nb) => {
    if (modulo(nb, 1) != 0 && nb > 0) return divide(nb, 1)
    if (modulo(nb, 1) != 0) return divide(nb, 1) - 1
    return nb
}

const trunc = (nbr) => {
    let sing = false
    let c = 0
    if (nbr == 0) return nbr
    if (nbr > 68719476735) nbr -= 68719476735, c += 68719476735
    if (nbr < 0) nbr = -nbr, sing = true
    for (; nbr >= 1; nbr--) {
        c++
    }
    return sing ? -c : c
}
