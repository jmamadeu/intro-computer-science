export const fibonacci = (value: number): number => {
  if (value === 1 || value === 2) {
    return 1;
  }
  if (value <= 0) return 0;

  return fibonacci(value - 1) + fibonacci(value - 2);
};

export const nestedAdd = (array: any): any => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (Array.isArray(current)) {
      sum += nestedAdd(current);
    } else {
      sum += array[i];
    }
  }

  return sum;
};

export function fatorial(num: number): number {
  if (num < 2) return 1;

  return num * fatorial(num - 1);
}

const merge = (sortedLeft: number[], sortedRight: number[]): number[] => {
  const results = [];

  while (sortedLeft.length && sortedRight.length) {
    if (sortedLeft[0] < sortedRight[0]) {
      results.push(sortedLeft.shift());
    } else {
      results.push(sortedRight.shift());
    }
  }

  return results.concat(sortedLeft, sortedRight) as [];
};

export function mergeSort(numbers: number[]): number[] {
  if (numbers.length < 2) return numbers;

  const middle = Math.floor(numbers.length / 2);

  const left = numbers.slice(0, middle);
  const right = numbers.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

export function quickSort(numbers: number[]): number[] {
  if (numbers.length <= 1) return numbers;

  const pivot = numbers[numbers.length - 1];

  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] < pivot) {
      left.push(numbers[i]);
    } else {
      right.push(numbers[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
