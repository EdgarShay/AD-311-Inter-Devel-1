# Financial Growth Trend Analysis

## Problem
In financial analytics, growth trends are often analyzed using historical percentage data.

Given a sorted array of yearly revenue growth percentages (which may include negative values), the goal is to return a new array containing the squared values of the growth percentages, sorted in non-decreasing order.

Example:

Input:
[-5, -2, 0, 3, 10]

Output:
[0, 4, 9, 25, 100]

---

## Approach
A naive solution would be:
1. Square every number
2. Sort the array
Time Complexity: O(n log n)
Optimized Solution:

This implementation uses a **two-pointer technique**.

Since the array is already sorted, the largest square will come from either the most negative or the most positive number.

Steps:

1. Use two pointers (left and right).
2. Compare squared values.
3. Place the larger value at the end of a result array.
4. Move the corresponding pointer.
5. Continue until all elements are processed.
---
## Time and Space Complexity

Time Complexity:
O(n)

Space Complexity:
O(n)

---

## Test Cases

### Normal Cases

1.
Input: [-5, -2, 0, 3, 10]
Output: [0, 4, 9, 25, 100]

2.
Input: [-8, -3, 2, 4, 12]
Output: [4, 9, 16, 64, 144]

3.
Input: [-4, -1, 0, 2, 5]
Output: [0, 1, 4, 16, 25]

### Edge Cases

1.
Input: []
Output: []

2.
Input: [-7, -3, -1]
Output: [1, 9, 49]

3.
Input: [1, 2, 3]
Output: [1, 4, 9]

---

## Running Tests

Install dependencies:

## Clarifying Questions

Before solving the problem, the following questions should be asked:

- Is the input array always sorted?
- Can the array contain negative numbers?
- Can the array be empty?
- What is the maximum array size?
- Should we optimize for time or space complexity?

