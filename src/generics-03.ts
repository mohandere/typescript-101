function funForEach<T>(items: T[], callback: (v: T) => void): void {
  items.reduce((a, v) => {
    callback(v);
    return undefined;
  }, undefined);
}

const items = [1, 2, 3, 4];
console.log(funForEach<number>(items, (v) => console.log(`Value: ${v}`)));

function funFilter<T>(items: T[], filterFn: (v: T) => boolean): T[] {
  return items.reduce((a, v) => {
    return filterFn(v) ? [...a, v] : a;
  }, [] as T[]);
}
console.log(
  funFilter<number>(items, (v) => {
    return v > 2;
  })
);

function funMap<T>(items: T[], mapFn: (v: T) => T): T[] {
  return items.reduce((a, v) => {
    return [...a, mapFn(v)];
  }, [] as T[]);
}
console.log(
  funMap<number>(items, (v) => {
    return v * 2;
  })
);
