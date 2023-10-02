function factorial(n) {
  let rezult = n;
  if (n === 0 || n === 1) {
    rezult = 1;
  } else {
    while (n > 1) {
      n--;
      rezult *= n;
    }
  }
  return rezult;
}
