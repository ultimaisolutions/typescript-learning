# Exercise 1.3: Union Types & Type Narrowing

## What You'll Learn
Union types allow a variable to hold one of several types. Type narrowing helps TypeScript understand which specific type you're working with.

## Union Types

A union type is written with `|` (pipe) between types:

```typescript
// This variable can be either a string OR a number
let id: string | number;

id = "abc-123";  // OK
id = 456;        // Also OK
id = true;       // Error! boolean is not string | number
```

## Why Union Types Are Useful

Real-world data often comes in different forms:

```typescript
// An API might return a user ID as string or number
function getUser(id: string | number) {
    // works with both "user-123" and 123
}

// A function might fail and return null
function findUser(name: string): User | null {
    // returns User if found, null if not
}
```

## Type Narrowing

When you have a union type, TypeScript needs help knowing which type you're using:

```typescript
function printId(id: string | number) {
    // At this point, `id` could be either string or number

    if (typeof id === "string") {
        // Inside this block, TypeScript KNOWS id is a string
        console.log(id.toUpperCase());  // OK - strings have toUpperCase()
    } else {
        // Inside this block, TypeScript KNOWS id is a number
        console.log(id.toFixed(2));  // OK - numbers have toFixed()
    }
}
```

## Literal Types

You can create types from specific literal values:

```typescript
// Status can ONLY be one of these exact strings
type Status = "loading" | "success" | "error";

let currentStatus: Status = "loading";  // OK
currentStatus = "success";               // OK
currentStatus = "pending";               // Error! "pending" is not valid
```

This is extremely useful in React for state management!

## Your Tasks

Open `starter.ts` and complete the 3 tasks:

1. **Task 1**: Create and use union type variables
2. **Task 2**: Write a function with type narrowing
3. **Task 3**: Create and use literal types for status

## How to Check Your Work

```bash
npx tsc module-01-ts-fundamentals/exercise-03-unions/starter.ts --noEmit
```
