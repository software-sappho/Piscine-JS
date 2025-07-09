function abs(n) {
  return n < 0 ? -n : n;
}

function multiply(a, b) {
  const negativeResult = (a < 0) !== (b < 0);
  let result = 0;
  let x = abs(a);
  let y = abs(b);

  for (let i = 0; i < y; i++) {
    result += x;
  }
  return negativeResult ? -result : result;
}

function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");

  const negativeResult = (a < 0) !== (b < 0);
  let x = abs(a);
  let y = abs(b);
  let result = 0;

  while (x >= y) {
    x -= y;
    result++;
  }

  return negativeResult ? -result : result;
}

function modulo(a, b) {
  if (b === 0) throw new Error("Division by zero");

  let x = abs(a);
  let y = abs(b);

  while (x >= y) {
    x -= y;
  }

  // modulo sign is the same as the dividend's sign
  return a < 0 ? -x : x;
}
