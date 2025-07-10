function pyramid(char, depth) {
  const maxWidth = (2 * depth - 1) * char.length;

  function build(row) {
    const stars = char.repeat(2 * row - 1);
    const spaces = ' '.repeat((maxWidth - stars.length) / 2);

    if (row === 1) {
      return spaces + stars;
    } else {
      return build(row - 1) + '\n' + spaces + stars;
    }
  }

  return build(depth);
}
