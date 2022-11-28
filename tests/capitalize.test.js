import capitalize from "../src/capitalize.js";

test('Returns capitalized string', () => {
    expect(capitalize('hello, world'))
        .toEqual('Hello, world');
})

test('Returns capitalized string', () => {
    expect(capitalize('Hello, World'))
        .toEqual('Hello, World');
})

test('Returns capitalized string', () => {
    expect(capitalize('123'))
        .toEqual('123');
})

test('Returns capitalized string', () => {
    expect(capitalize('123Hello, #World'))
        .toEqual('123Hello, #World');
})

test('Returns exception if number is passed', () => {
    expect(capitalize(123))
        .toEqual('An argument is not a string.');
})

test('Returns exception if null is passed', () => {
    expect(capitalize(null))
        .toEqual('An argument is not a string.');
})