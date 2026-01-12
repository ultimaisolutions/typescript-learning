# Exercise 1.2: Arrays & Objects

## What You'll Learn
How to type arrays and objects in TypeScript, including creating custom type definitions.

## Arrays in TypeScript

There are two ways to type arrays:

```typescript
// Method 1: type[]
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];

// Method 2: Array<type>
let numbers: Array<number> = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
```

Both are equivalent - use whichever you prefer (most people use `type[]`).

## Objects in TypeScript

For objects, you define the shape (structure) of the object:

```typescript
// Inline object type
let user: { name: string; age: number } = {
    name: "Alice",
    age: 25
};

// Using a type alias (cleaner for reusable types)
type User = {
    name: string;
    age: number;
};

let user: User = {
    name: "Alice",
    age: 25
};
```

## Optional Properties

Use `?` for properties that might not exist:

```typescript
type User = {
    name: string;
    age: number;
    email?: string;  // Optional - may or may not exist
};

// Both are valid:
let user1: User = { name: "Alice", age: 25 };
let user2: User = { name: "Bob", age: 30, email: "bob@example.com" };
```

## Readonly Properties

Use `readonly` for properties that shouldn't change:

```typescript
type Config = {
    readonly apiUrl: string;
    readonly version: number;
};

let config: Config = { apiUrl: "https://api.example.com", version: 1 };
config.apiUrl = "new-url";  // Error! Cannot assign to readonly property
```

## Your Tasks

Open `starter.ts` and complete the 3 tasks:

1. **Task 1**: Create typed arrays
2. **Task 2**: Create a User type with specific properties
3. **Task 3**: Create a function that works with the User type

## How to Check Your Work

```bash
npx tsc module-01-ts-fundamentals/exercise-02-arrays-objects/starter.ts --noEmit
```
