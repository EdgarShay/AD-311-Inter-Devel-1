# Refactoring var to let and const

## Objective
This assignment refactors JavaScript code by replacing `var` with `let` or `const` to improve readability, prevent hoisting issues, and avoid accidental redeclarations.

## What I changed
- Replaced variables that never change with const
- Replaced variables that are reassigned or block-scoped with let
- Added comments in the code explaining each choice

## Issues with using var in the original code

### 1. Hoisting
`var` is hoisted to the top of its scope, which can lead to unexpected `undefined` values.
Example: `userRole` was hoisted and existed as `undefined`, making the admin check unreliable.

### 2. No block scope
`var` ignores block boundaries (`if`, `else`, `for`).
This caused variables like `message` to be redeclared and overwritten across different branches.

### 3. Redeclaration allowed
`var` allows redeclaring the same variable multiple times without errors.
This can hide bugs and make debugging harder.

### 4. Loop variable leakage
`var i` inside a loop remains accessible outside the loop, which is unsafe and can cause accidental reuse.

### 5. Harder to reason about state
Because `var` does not respect block scope, it becomes harder to track where variables are valid or might be unintentionally changed.

## Result
The refactored version is safer, easier to understand, and avoids the pitfalls of `var`.