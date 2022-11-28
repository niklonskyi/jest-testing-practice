import calculator from "../src/calculator.js";

test('Adds two numbers', () => {
    expect(calculator.add(3, 6))
        .toEqual(9)
})

test('Subtracts two numbers', () => {
    expect(calculator.subtract(3, 6))
        .toEqual(-3)
})

test('Divides two numbers', () => {
    expect(calculator.divide(12, 4))
        .toEqual(3)
})

test('Multiplies two numbers', () => {
    expect(calculator.multiply(3, 6))
        .toEqual(18)
})