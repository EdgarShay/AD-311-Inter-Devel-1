# Simple Text Editor using Stack
Written by:Edgar

## Overview

This project implements a simple text editor that supports:

- Adding characters
- Deleting the last character
- Undoing the last operation

The project demonstrates how a **stack data structure** can be used to track operations and support undo functionality.

## Technologies

Java
Maven
JUnit

## How It Works

Each operation is stored in a stack:

ADD operation
DELETE operation

When undo is called, the last operation is popped from the stack and reversed.

## Time Complexity

Add Character: O(1)
Delete Character: O(1)
Undo: O(1)

## Space Complexity

O(n) where n is the number of operations stored in the stack.

## Running the Program

Compile and run:
## Test Cases

Normal Cases:
Add characters
Delete characters
Undo operations

Edge Cases:

Undo on empty stack
Delete on empty text
Multiple consecutive undo operations