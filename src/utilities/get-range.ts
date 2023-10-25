export const getRange = (start: number, count: number): Array<number> =>
  [...Array(count)].map((_, i) => i + start);
