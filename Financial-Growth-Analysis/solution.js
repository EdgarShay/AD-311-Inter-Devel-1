function sortedSquares(growthPercentages) {
    const n = growthPercentages.length;
    const result = new Array(n);

    let left = 0;
    let right = n - 1;
    let position = n - 1;

    while (left <= right) {
        const leftSquare = growthPercentages[left] * growthPercentages[left];
        const rightSquare = growthPercentages[right] * growthPercentages[right];

        if (leftSquare > rightSquare) {
            result[position] = leftSquare;
            left++;
        } else {
            result[position] = rightSquare;
            right--;
        }

        position--;
    }

    return result;
}

module.exports = sortedSquares;