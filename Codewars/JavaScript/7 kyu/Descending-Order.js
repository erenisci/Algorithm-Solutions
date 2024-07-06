function descendingOrder(n) {
  return +String(n)
    .split('')
    .sort((a, b) => (a > b ? -1 : 1))
    .join('');
}
