function analyzeArray(array) {
    const length = array.length;
    const max = Math.max(...array);
    const min = Math.min(...array);
    const average = array.reduce((a, b) => a + b, 0) / array.length;

    return {
        average: average,
        min: min,
        max: max,
        length: length,
    }
}

export default analyzeArray;