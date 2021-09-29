function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
}

function sortText(arr) {
    return arr.sort();
}

module.exports = { sortNumbers, sortText };