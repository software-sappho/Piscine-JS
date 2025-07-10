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
  // trunc toward zero
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
  let f = floor(x);
  let c = ceil(x);
  let diffFloor = x - f;
  let diffCeil = c - x;

  const epsilon = 1e-10; // floating precision

  if (diffFloor < 0.5 - epsilon) {
    return f;
  }
  if (diffFloor > 0.5 + epsilon) {
    return c;
  }
  // diffFloor is approximately 0.5, round away from zero
  return x >= 0 ? c : f;
}
