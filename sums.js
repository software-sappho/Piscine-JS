function sums(n) {
  if (n === 0 || n === 1) return []; // exclude sums(0) and sums(1)

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
