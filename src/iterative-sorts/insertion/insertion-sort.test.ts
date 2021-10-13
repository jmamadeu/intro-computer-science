import { insertionSort } from './insertion-sort';

describe('Bubble Sort', () => {
  test('should be equal', () => {
    expect(insertionSort([10, 6, 5, 4, 3, 2, 7, 8])).toEqual([
      2, 3, 4, 5, 6, 7, 8, 10,
    ]);
  });
});
