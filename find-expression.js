function findExpression(target, current = 1, expr = '1') {
  if (current === target) return expr;
  if (current > target) return undefined;

  const tryAdd = findExpression(target, current + 4, `${expr} ${add4}`);
  if (tryAdd !== undefined) return tryAdd;

  const tryMul = findExpression(target, current * 2, `${expr} ${mul2}`);
  if (tryMul !== undefined) return tryMul;

  return undefined;
}