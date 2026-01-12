# Exercise 1.1: Basic Types

## What You'll Learn
TypeScript's basic types: `string`, `number`, `boolean`, and how to explicitly type variables and functions.

## Why Types Matter
In JavaScript, bugs often happen because a variable unexpectedly becomes a different type:
```javascript
let price = 100;
price = "free";  // JavaScript allows this!
// Later: price * 2 = NaN (bug!)
```

TypeScript prevents this:
```typescript
let price: number = 100;
price = "free";  // Error! Type 'string' is not assignable to type 'number'
```

## Basic Types Reference

| Type | Example | Description |
|------|---------|-------------|
| `string` | `"hello"`, `'world'`, `` `template` `` | Text values |
| `number` | `42`, `3.14`, `-10` | All numbers (no int/float distinction) |
| `boolean` | `true`, `false` | True or false |

## Syntax

```typescript
// Variable with explicit type
let variableName: type = value;

// Function with typed parameters and return type
function funcName(param1: type, param2: type): returnType {
    return something;
}
```

## Your Tasks

Open `starter.ts` and complete the 3 tasks:

1. **Task 1**: Create typed variables
2. **Task 2**: Fix the type errors in broken code
3. **Task 3**: Create a typed function

## How to Check Your Work

Run this command from the project root:
```bash
npx tsc module-01-ts-fundamentals/exercise-01-basic-types/starter.ts --noEmit
```

If there are no errors, you've done it correctly!

## Tips
- TypeScript can often infer types: `let x = 5` automatically makes `x` a `number`
- Explicit types are useful for function parameters and when the type isn't obvious
- Hover over variables in VS Code to see their inferred types
