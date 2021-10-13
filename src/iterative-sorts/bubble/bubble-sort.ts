export function bubbleSort(numbers: number[]) {
  let swapped = false;

  do {
    swapped = false;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers[i + 1]) {
        swapped = true;

        const aux = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = aux;
      }
    }
  } while (swapped);

  return numbers;
}
