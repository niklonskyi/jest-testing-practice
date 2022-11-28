export default reverseString;

function reverseString(string) {
    if (typeof string !== 'string') {
        return  'An argument is not a string.';
    }
    return string.split('').reverse().join('');
}
