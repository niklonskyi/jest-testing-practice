export default capitalize;

function capitalize(string) {
    if (typeof string !== 'string') {
        return  'An argument is not a string.';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

