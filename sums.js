function sums(n) {
  if (n === 0) return []; // Fix for test case: sums(0) → []

  const result = [];

  function backtrack(remaining, start, path) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i <= remaining; i++) {
      path.push(i);
      backtrack(remaining - i, i, path);
      path.pop();
    }
  }

  backtrack(n, 1, []);
  return result;
}
