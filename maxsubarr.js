function maxsubarr(n, a) {
  let maxsumc = a[0],
    sumc = a[0],
    sumn = a[0];

  for (let i = 1; i < n; i++) {
    if (sumc > 0 && a[i] + sumc > 0)
      sumc += a[i];
    else
      sumc = a[i];

    if (sumc > maxsumc)
      maxsumc = sumc;

    if (a[i] > 0 && sumn > 0)
      sumn += a[i];
    else if (a[i] > sumn)
      sumn = a[i];
  }

  return [maxsumc, sumn];
}