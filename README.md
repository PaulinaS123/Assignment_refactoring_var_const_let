# Assignment_refactoring_var_const_let
## Victoria Salomon

# Assignment: Refactoring var to const and let

**Objective:**  
Refactor JavaScript code by replacing `var` declarations with `const` or `let` to improve readability, reliability, and scope safety.

---

## Refactored File

`assignment_const_let.js` includes the refactored code with comments explaining each choice.

---

## Explanation of Choices

| Variable        | Keyword | Reason |
|-----------------|---------|--------|
| accessLevel     | let     | Reassigned in different branches of `checkAccess` |
| userRole        | let     | Placeholder; could be assigned later; block-scoped is safer |
| message         | let     | Declared in `if` and `else` separately → block scope required |
| i               | let     | Loop counter changes each iteration |
| loggedIn        | let     | Changes each iteration |
| access          | const   | Result from function call; not reassigned |

---

## Potential Issues with Original `var` Usage

1. **Function-scope leakage:**  
   `var message` inside `if` and `else` was actually the **same variable**, risking unexpected overwrites.

2. **Loop counters:**  
   `var i` is function-scoped. Nested functions inside the loop would reference the same `i`, causing bugs.

3. **Accidental global variables:**  
   `var loggedIn` would leak outside the loop in some contexts.

4. **Reassignment confusion:**  
   Using `var` for variables that shouldn’t change makes it harder to track where values are modified.

---

**Conclusion:**  
Using `let` and `const` improves code safety, prevents scope leaks, and communicates intent (reassignable vs immutable) clearly.
