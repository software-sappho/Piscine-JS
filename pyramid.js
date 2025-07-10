function pyramid(char, depth) {
  if (depth === 1) {
    return char;
  } else {
    // Calculate spaces: depth - current level
    const spaces = ' '.repeat(depth - 1);
    // Calculate stars: (2 * current level) - 1
    const stars = char.repeat(2 * depth - 1);
    // Recursively build smaller pyramid first, then add current level
    return pyramid(char, depth - 1) + '\n' + spaces + stars;
  }
}