export const createFibonacciWithMap = () => {
  const cache = new Map([
    [0, 0],
    [1, 1],
  ]);
  let biggest = 1;

  return (n: number): number => {
    if (n < 0) throw new Error("Input must be a non-negative integer");
    if (cache.has(n)) return cache.get(n)!;

    for (let i = biggest + 1; i <= n; i++) {
      cache.set(i, cache.get(i - 1)! + cache.get(i - 2)!);
    }
    biggest = n;

    return cache.get(n)!;
  };
};

export const createFibonacciWithWeakMap = () => {
  const keys = [{}, {}];
  const cache = new WeakMap<object, number>();
  cache.set(keys[0], 0);
  cache.set(keys[1], 1);
  let biggest = 1;

  return (n: number): number => {
    if (keys[n]) {
      const key = keys[n];
      if (cache.has(key)) return cache.get(key)!;
    }

    for (let i = biggest + 1; i <= n; i++) {
      const key1 = keys[i - 1];
      const key2 = keys[i - 2];
      const result = cache.get(key1)! + cache.get(key2)!;
      const newKey = {};
      cache.set(newKey, result);
      keys[i] = newKey;
    }

    biggest = n;
    return cache.get(keys[n])!;
  };
};
