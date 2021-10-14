import { fibonacci, nestedAdd } from './recursion'

describe ('Recursion', () => {
  test('Fibonacci', () => {
    expect(fibonacci(5)).toBe(5)
  })

  test('Nested Array Sum', () => {
    expect(nestedAdd([[[[[[[5]],6]]]]])).toBe(11)
  })
})