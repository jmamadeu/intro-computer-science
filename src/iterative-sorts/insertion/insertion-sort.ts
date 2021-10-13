export function insertionSort(numbers: number[]) {
  for (let i = 1; i < numbers.length; i++) {
    const numberToInsert = numbers[i];
    let j;

    for (j = i - 1; numbers[j] > numberToInsert && j >= 0; j--) {
      numbers[j + 1] = numbers[j];
    }

    numbers[j + 1] = numberToInsert;
  }

  return numbers;
}
