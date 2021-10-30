function binarySearch(search: number, array: number[]) {
  let min = 0;
  let max = array.length - 1;
  let element;
  let index;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    element = array[index];

    if (element > search) max = index - 1;
    else if (element < search) min = index + 1;
    else return element;
  }

  return void 0;
}

describe('Binary Search', () => {
  test('should find the element', () => {
    const input = [1, 2, 3, 4, 6, 7, 8, 11];

    expect(binarySearch(11, input)).toEqual(11);
  });
});
