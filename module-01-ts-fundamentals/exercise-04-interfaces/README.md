# Exercise 1.4: Interfaces vs Types

## What You'll Learn
The differences between `interface` and `type`, when to use each, and how to extend them.

## Interface Syntax

```typescript
interface User {
    id: number;
    name: string;
    email: string;
}

const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};
```

## Type Alias Syntax

```typescript
type User = {
    id: number;
    name: string;
    email: string;
};

const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};
```

## Key Differences

| Feature | Interface | Type |
|---------|-----------|------|
| Object shapes | Yes | Yes |
| Union types | No | Yes (`type A = B \| C`) |
| Extending | `extends` keyword | `&` intersection |
| Declaration merging | Yes (auto-merge) | No |
| Primitives | No | Yes (`type ID = string`) |

## Extending Interfaces

```typescript
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
    bark(): void;
}

// Dog has: name, breed, and bark()
```

## Extending Types (Intersection)

```typescript
type Animal = {
    name: string;
};

type Dog = Animal & {
    breed: string;
    bark(): void;
};

// Same result as interface extends
```

## When to Use Which?

**Use `interface` when:**
- Defining object shapes (most common in React for props)
- You might need to extend it later
- Working with classes

**Use `type` when:**
- Creating union types (`type Status = "a" | "b"`)
- Creating primitive aliases (`type ID = string`)
- Creating complex computed types

**In practice:** Many teams just pick one and use it consistently. Both work fine for most cases!

## Your Tasks

Open `starter.ts` and complete the 3 tasks:

1. **Task 1**: Convert a type to an interface
2. **Task 2**: Extend an interface to create a more specific type
3. **Task 3**: Create a Post interface for a social app

## How to Check Your Work

```bash
npx tsc module-01-ts-fundamentals/exercise-04-interfaces/starter.ts --noEmit
```
