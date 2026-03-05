const sortedSquares = require('../solution');

describe("Normal Cases", () => {

test("Example 1", () => {
    expect(sortedSquares([-5, -2, 0, 3, 10]))
    .toEqual([0, 4, 9, 25, 100]);
});

test("Example 2", () => {
    expect(sortedSquares([-8, -3, 2, 4, 12]))
    .toEqual([4, 9, 16, 64, 144]);
});

test("Mixed numbers", () => {
    expect(sortedSquares([-4, -1, 0, 2, 5]))
    .toEqual([0, 1, 4, 16, 25]);
});

});

describe("Edge Cases", () => {

test("Empty array", () => {
    expect(sortedSquares([])).toEqual([]);
});

test("All negative numbers", () => {
    expect(sortedSquares([-7, -3, -1]))
    .toEqual([1, 9, 49]);
});

test("All positive numbers", () => {
    expect(sortedSquares([1, 2, 3]))
    .toEqual([1, 4, 9]);
});

});