function sums(n) {
  if (n <= 1) return [];

  const result = [];

  function backtrack(remaining, path, start) {
    if (remaining === 0) {
      // Exclude partition that is just [n]
      if (!(path.length === 1 && path[0] === n)) {
        result.push([...path]);
      }
      return;
    }

    for (let i = start; i <= remaining; i++) {
      path.push(i);
      backtrack(remaining - i, path, i);
      path.pop();
    }
  }

  backtrack(n, [], 1);
  return result;
}
