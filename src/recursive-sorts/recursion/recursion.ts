export const fibonacci = (value: number): number => {
  if (value === 1 || value === 2) {
    return 1;
  }
  if (value <= 0) return 0;

  return fibonacci(value - 1) + fibonacci(value - 2);
};

export const nestedAdd = (array: any): any => {
  let sum = 0

  for (let i = 0; i < array.length; i++) {
    const current = array[i]
    if(Array.isArray(current)) {
      sum += nestedAdd(current)
    }else {
      sum += array[i]
    }
  }

  return sum
}