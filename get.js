function get(src, path) {
  const keys = path.split('.');
  let current = src;

  for (const key of keys) {
    if (current == null || !(key in current)) {
      return undefined;
    }
    current = current[key];
  }

  return current;
}
