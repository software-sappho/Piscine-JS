function pyramid(char, depth) {
  function build(row) {
    if (row === 1) {
      return ' '.repeat(depth - 1) + char;
    } else {
      return build(row - 1) + '\n' + ' '.repeat(depth - row) + char.repeat(2 * row - 1);
    }
  }
  return build(depth);
}
