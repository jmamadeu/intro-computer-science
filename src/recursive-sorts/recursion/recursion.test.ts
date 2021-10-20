import { fibonacci, nestedAdd, fatorial, mergeSort } from './recursion';

describe('Recursion', () => {
  test('Fibonacci', () => {
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(0)).toEqual(0);
    expect(fibonacci(2)).toEqual(1);
  });

  test('Nested Array Sum', () => {
    expect(nestedAdd([[[[[[[5]], 6]]]]])).toEqual(11);
  });

  test('Fatorial', () => {
    expect(fatorial(1)).toEqual(1);
    expect(fatorial(2)).toEqual(2);
    expect(fatorial(3)).toEqual(6);
  });

  test('Merge Sort', () => {
    expect(mergeSort([10, 2, 3, 1, 2, 3, 4, 53])).toEqual([
      1, 2, 2, 3, 3, 4, 10, 53,
    ]);
  });
});
