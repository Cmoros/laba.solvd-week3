export const createFibonacciWithMap = () => {
  const cache = new Map([
    [0, 0],
    [1, 1],
  ]);

  return function fib(n: number): number {
    if (n < 0) throw new Error("Input must be a non-negative integer");
    if (cache.has(n)) return cache.get(n)!;

    const result = fib(n - 2) + fib(n - 1);
    cache.set(n, result);

    return result;
  };
};

export const createFibonacciWithWeakMap = () => {
  const keys = [{}, {}];
  const cache = new WeakMap<object, number>();
  cache.set(keys[0], 0);
  cache.set(keys[1], 1);

  return function fib(n: number): number {
    if (n < 0) throw new Error("Input must be a non-negative integer");
    if (keys[n]) {
      const key = keys[n];
      if (cache.has(key)) return cache.get(key)!;
    }

    const result = fib(n - 2) + fib(n - 1);
    const newKey = {};
    keys[n] = newKey;
    cache.set(newKey, result);

    return cache.get(keys[n])!;
  };
};
