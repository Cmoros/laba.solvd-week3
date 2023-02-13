import {
  createFibonacciWithMap,
  createFibonacciWithWeakMap,
} from "../src/fibonacci";
import { measureTime, randomNumber } from "../src/testingUtils";

describe("fibonacci-map", () => {
  it("should work with base cases", () => {
    const fibonacci = createFibonacciWithMap();
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  it("should work with low numbers", () => {
    let fibonacci = createFibonacciWithMap();
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(7)).toBe(13);

    fibonacci = createFibonacciWithMap();
    expect(fibonacci(7)).toBe(13);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(2)).toBe(1);
  });

  it("should work with high numbers", () => {
    for (let i = 0; i < 10; i++) {
      const fibonacci = createFibonacciWithMap();
      let random = randomNumber(50, 100);
      let result = fibonacci(random);
      expect(result).toBe(fibonacci(random - 1) + fibonacci(random - 2));
      expect(createFibonacciWithMap()(random)).toBe(fibonacci(random));
      expect(createFibonacciWithMap()(random)).toBe(result);
    }
  });

  // it("should cache properly", () => {
  //   for (let i = 0; i < 100; i++) {
  //     const fibonacci = createFibonacciWithMap();
  //     const random = randomNumber(50, 100);
  //     const measureThisFibonacci = () => measureTime(() => fibonacci(random));
  //     const noCached = measureThisFibonacci();
  // for (let j = 0; j < 10; j++) {
  // const cached = measureThisFibonacci();
  // try {
  // expect(cached).toBeLessThan(noCached);
  // } catch (e: unknown) {
  //   console.error("Error at", { i, j, random, cached, noCached });
  //   throw e;
  // }
  // }
  // }
  // });
});

describe("fibonacci-weakMap", () => {
  it("should work with base cases", () => {
    const fibonacci = createFibonacciWithWeakMap();
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  it("should work with low numbers", () => {
    let fibonacci = createFibonacciWithWeakMap();
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(7)).toBe(13);

    fibonacci = createFibonacciWithWeakMap();
    expect(fibonacci(7)).toBe(13);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(2)).toBe(1);
  });

  it("should work with high numbers", () => {
    for (let i = 0; i < 10; i++) {
      const fibonacci = createFibonacciWithWeakMap();
      let random = randomNumber(50, 100);
      let result = fibonacci(random);
      expect(result).toBe(fibonacci(random - 1) + fibonacci(random - 2));
      expect(createFibonacciWithWeakMap()(random)).toBe(fibonacci(random));
      expect(createFibonacciWithWeakMap()(random)).toBe(result);
    }
  });

  // it("should cache properly", () => {
  //   for (let i = 0; i < 100; i++) {
  //     const fibonacci = createFibonacciWithWeakMap();
  //     const random = randomNumber(50, 100);
  //     const measureThisFibonacci = () => measureTime(() => fibonacci(random));
  //     const noCached = measureThisFibonacci();
  //     for (let j = 0; j < 10; j++) {
  //     const cached = measureThisFibonacci();
  //       try {
  //     expect(cached).toBeLessThan(noCached);
  //       } catch (e: unknown) {
  //         console.error("Error at", { i, j, random, cached, noCached });
  //         throw e;
  //       }
  //     }
  //   }
  // });
});
