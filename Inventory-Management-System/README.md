# Inventory Management System – Duplicate Zero Restock Feature

## Business Background

A retail company needs to improve its inventory management system. When a product is out of stock represented by `0`, the system must automatically generate a restock order. This is represented by duplicating each zero in the inventory list.

The system must perform this operation in place without increasing the size of the inventory array.
---
# Objective

Given an integer array `inventory`, duplicate each occurrence of zero and shift remaining elements to the right while keeping the array size fixed.
---
# Clarifying Questions (Interview Style)

Before implementing the solution, these assumptions were confirmed:

1. Should the inventory array length remain fixed?
   → Yes

2. Should elements that exceed the array length be discarded?
   → Yes

3. Must the solution modify the array in place?
   → Yes

4. Can the array be empty?
   → Yes

5. Can inventory contain non-zero integers?
   → Yes

---

# Problem Understanding
# Step-By-Step Approach

### Step 1: Count Zeros
We first count how many zeros exist in the array.
### Step 2: Traverse Backwards
We move from the end of the array to avoid overwriting elements.
### Step 3: Shift Elements
Each element is shifted right based on the number of zeros.
### Step 4: Duplicate Zero
When a zero is encountered, insert another zero.

Time complexity
The algorithm scans the array twice.
O(n)
Space complexity
The algorithm modifies the array in place without extra storage.
O(1)
Naive Solution

Use extra array

Easier to implement

Requires O(n) space

Optimized Solution (Final Version)

Uses backward traversal

Eliminates extra memory usage

Maintains efficiency
