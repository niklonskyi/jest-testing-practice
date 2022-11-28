import reverseString from "../src/reverseString.js";

test('Returns reversed string', () => {
    expect(reverseString('Hello'))
        .toEqual('olleH')
})

test('Returns reversed string', () => {
    expect(reverseString('Hello from Earth'))
        .toEqual('htraE morf olleH')
})

test('Returns reversed string', () => {
    expect(reverseString('12345'))
        .toEqual('54321')
})

test('Returns exception if number is passed', () => {
    expect(reverseString(123))
        .toEqual('An argument is not a string.');
})

test('Returns exception if null is passed', () => {
    expect(reverseString(null))
        .toEqual('An argument is not a string.');
})