export const randomNumber = (min: number, max: number): number =>
  min + Math.floor(Math.random() * (max - min + 1));

export const measureTime = (cb: () => any): number => {
  const start = performance.now();
  cb();
  return performance.now() - start;
};
