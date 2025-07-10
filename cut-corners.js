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

function floor(x) {
  // floor is the greatest integer less than or equal to x
  if (x >= 0) {
    let i = 0;
    while (i + 1 <= x) {
      i++;
    }
    return i;
  } else {
    let i = 0;
    while (i - 1 >= x) {
      i--;
    }
    return i;
  }
}

function ceil(x) {
  // ceil is the smallest integer greater than or equal to x
  if (x <= 0) {
    let i = 0;
    while (i - 1 >= x) {
      i--;
    }
    return i;
  } else {
    let i = 0;
    while (i + 1 <= x) {
      i++;
    }
    return i;
  }
}

function trunc(x) {
  // trunc is integer part towards zero
  if (x >= 0) {
    let i = 0;
    while (i + 1 <= x) {
      i++;
    }
    return i;
  } else {
    let i = 0;
    while (i - 1 >= x) {
      i--;
    }
    return i;
  }
}

function round(x) {
  // round to nearest integer, half away from zero (like Math.round)
  // We'll compare distance to floor and ceil to find which is closer
  let f = floor(x);
  let c = ceil(x);
  if (x - f < c - x) {
    return f;
  } else if (x - f > c - x) {
    return c;
  } else {
    // halfway, round away from zero
    return x >= 0 ? c : f;
  }
}