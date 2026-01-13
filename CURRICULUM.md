# TypeScript + React Learning Curriculum

A hands-on, exercise-driven curriculum to learn TypeScript from scratch while progressing from basic to advanced React. **Final Goal**: Build a Social App.

**Time Commitment**: 1-2 hours/day
**Total Duration**: ~12 weeks
**Your Level**: Basic React (JSX, simple components)

---

## Current Progress

| Module | Status | Exercises Done |
|--------|--------|----------------|
| Module 1: TS Fundamentals | **IN PROGRESS** | 0/4 |
| Module 2: TS Advanced | Not Started | 0/3 |
| Module 3: React + TS Basics | Not Started | 0/4 |
| Module 4: React Hooks + TS | Not Started | 0/4 |
| Module 5: Component Patterns | Not Started | 0/3 |
| Module 6: Forms & Validation | Not Started | 0/2 |
| Module 7: State Management | Not Started | 0/2 |
| Module 8: API Integration | Not Started | 0/2 |
| Module 9: Advanced Patterns | Not Started | 0/3 |
| Module 10: Capstone Project | Not Started | 0/3 |

---

## Module 1: TypeScript Fundamentals (Week 1)
*Pure TypeScript basics - no React yet*

**Goal**: Understand TypeScript's type system and why it catches bugs before runtime.

### What You'll Learn:
- How to declare variables with explicit types
- Working with arrays and objects
- Union types and type narrowing
- The difference between `interface` and `type`

### Exercises:

| # | Exercise | Description | Key Concepts |
|---|----------|-------------|--------------|
| 1.1 | Basic Types | Create typed variables and functions | `string`, `number`, `boolean`, function types |
| 1.2 | Arrays & Objects | Work with complex data structures | `type` keyword, object shapes, optional properties |
| 1.3 | Union Types | Handle values that can be multiple types | `\|` operator, type narrowing, `typeof` |
| 1.4 | Interfaces | Define contracts for object shapes | `interface`, `extends`, when to use vs `type` |

### After This Module You Can:
- Declare any variable with proper types
- Create custom types for your data
- Write functions with typed parameters and returns
- Understand TypeScript error messages

---

## Module 2: TypeScript Advanced Basics (Week 2)
*Generics and utility types*

**Goal**: Write flexible, reusable typed code.

### What You'll Learn:
- Generic functions and types
- Built-in utility types (Partial, Pick, Omit, Record)
- Type inference and `as const`

### Exercises:

| # | Exercise | Description | Key Concepts |
|---|----------|-------------|--------------|
| 2.1 | Generics Intro | Create flexible, reusable functions | `<T>` syntax, generic constraints |
| 2.2 | Utility Types | Transform existing types | `Partial<T>`, `Pick<T>`, `Omit<T>`, `Record<K,V>` |
| 2.3 | Type Inference | Let TypeScript work for you | `as const`, readonly, inference rules |

### After This Module You Can:
- Create generic functions that work with any type
- Transform types without rewriting them
- Understand how TypeScript infers types

---

## Module 3: React + TypeScript Basics (Week 3)
*Your first typed React components*

**Goal**: Build React components with full type safety.

### What You'll Learn:
- Typing functional components
- Typing props and state
- Typing event handlers
- Working with children

### Exercises:

| # | Exercise | Description | Key Concepts |
|---|----------|-------------|--------------|
| 3.1 | Typing Components | Create your first typed component | `React.FC`, props interfaces |
| 3.2 | Typing useState | Manage state with types | `useState<T>`, null handling |
| 3.3 | Typing Events | Handle user interactions | `React.MouseEvent`, `React.ChangeEvent` |
| 3.4 | Children Props | Build wrapper components | `ReactNode`, `PropsWithChildren` |

### After This Module You Can:
- Create typed React components from scratch
- Handle any event with proper types
- Build reusable component wrappers

---

## Module 4: React Hooks with TypeScript (Week 4)
*Master all the hooks with types*

**Goal**: Use every React hook with full type safety.

### What You'll Learn:
- Typing useEffect for data fetching
- Typing useRef for DOM and values
- Typing useReducer for complex state
- Typing useContext for global state

### Exercises:

| # | Exercise | Description | Key Concepts |
|---|----------|-------------|--------------|
| 4.1 | useEffect | Fetch data with proper types | Async effects, cleanup, loading states |
| 4.2 | useRef | Reference DOM elements and values | `RefObject<T>`, `MutableRefObject<T>` |
| 4.3 | useReducer | Complex state with actions | Discriminated unions, action types |
| 4.4 | useContext | Share state across components | `createContext<T>`, provider patterns |

### After This Module You Can:
- Fetch and display data with proper error handling
- Reference DOM elements safely
- Manage complex state with reducers
- Share typed state across your app

---

## Module 5: Component Patterns (Week 5)
*Professional React patterns*

**Goal**: Build components like a senior developer.

### What You'll Learn:
- Advanced props patterns
- Composition patterns (compound components, render props)
- Generic components

### Exercises:

| # | Exercise | Description | Key Concepts |
|---|----------|-------------|--------------|
| 5.1 | Props Patterns | Optional props, discriminated unions | Default values, conditional props |
| 5.2 | Composition | Build flexible component APIs | Compound components, render props, HOCs |
| 5.3 | Generic Components | Components that work with any data | `<T>` in components, constrained generics |

### After This Module You Can:
- Design flexible component APIs
- Build component libraries
- Create data-agnostic components

---

## Module 6: Forms & Validation (Week 6)
*Handle user input professionally*

**Goal**: Build type-safe forms with validation.

### What You'll Learn:
- Controlled form components
- Form validation patterns
- React Hook Form integration

### Exercises:

| # | Exercise | Description | Key Concepts |
|---|----------|-------------|--------------|
| 6.1 | Controlled Forms | Build forms from scratch | Form state, validation, error display |
| 6.2 | Form Libraries | Use React Hook Form | `useForm<T>`, Zod schemas, type inference |

### After This Module You Can:
- Build any form with validation
- Handle complex multi-step forms
- Integrate form libraries with TypeScript

---

## Module 7: State Management (Week 7)
*Manage application-wide state*

**Goal**: Architect state for larger applications.

### What You'll Learn:
- Context + Reducer pattern at scale
- External state libraries (Zustand)

### Exercises:

| # | Exercise | Description | Key Concepts |
|---|----------|-------------|--------------|
| 7.1 | Context + Reducer | Build a global state system | Action creators, selectors, middleware |
| 7.2 | Zustand | Use a lightweight state library | Stores, actions, persistence |

### After This Module You Can:
- Architect state for any size app
- Choose the right state solution
- Keep state fully typed

---

## Module 8: API Integration (Week 8)
*Connect to backends safely*

**Goal**: Fetch, cache, and mutate data with type safety.

### What You'll Learn:
- Typing API responses
- Generic fetch wrappers
- TanStack Query (React Query)

### Exercises:

| # | Exercise | Description | Key Concepts |
|---|----------|-------------|--------------|
| 8.1 | Fetch with Types | Build a typed API layer | Response types, error handling |
| 8.2 | TanStack Query | Professional data fetching | `useQuery<T>`, mutations, caching |

### After This Module You Can:
- Build type-safe API clients
- Handle loading, error, and success states
- Implement optimistic updates

---

## Module 9: Advanced Patterns (Week 9)
*Performance and polish*

**Goal**: Build production-ready applications.

### What You'll Learn:
- Performance optimization with types
- Error boundaries
- Custom hooks

### Exercises:

| # | Exercise | Description | Key Concepts |
|---|----------|-------------|--------------|
| 9.1 | Performance | Optimize renders with types | `React.memo`, `useMemo`, `useCallback` |
| 9.2 | Error Boundaries | Handle errors gracefully | Class components, error recovery |
| 9.3 | Custom Hooks | Extract reusable logic | Hook patterns, return types |

### After This Module You Can:
- Optimize any React app
- Handle errors professionally
- Build a library of reusable hooks

---

## Module 10: Capstone Project (Weeks 10-12)
*Build a Social App*

**Goal**: Apply everything you've learned to build a real application.

### Features You'll Build:

| Week | Features | Skills Applied |
|------|----------|----------------|
| 10 | Auth + User Profiles | Forms, validation, context, API |
| 11 | Posts + Comments | CRUD, nested data, optimistic updates |
| 12 | Social Features + Polish | Follow system, search, performance |

### Final App Includes:
- User registration and login
- User profiles with editing
- Create, read, like posts
- Nested comment system
- Follow/unfollow users
- Search functionality
- Real-time updates

---

## How to Use This Curriculum

### Daily Workflow:
1. Read the exercise README
2. Complete the starter file TODOs
3. Run `npx tsc <file> --noEmit` to check for errors
4. Compare with solution
5. Update PROGRESS.md

### Getting Help:
- Ask me to explain any concept
- Show me your code if you're stuck
- Ask for hints without spoilers

### Verification Commands:
```bash
# Check a specific file
npx tsc module-01-ts-fundamentals/exercise-01-basic-types/starter.ts --noEmit

# Check all TypeScript files
npx tsc --noEmit

# Run the React app (Module 3+)
npm run dev
```

---

## Quick Reference

### File Structure:
```
typescript-learning/
├── CURRICULUM.md          <- You are here
├── PROGRESS.md            <- Track your checkboxes
├── module-01-ts-fundamentals/
│   ├── exercise-01-basic-types/
│   │   ├── README.md      <- Concept explanation
│   │   ├── starter.ts     <- Your workspace
│   │   └── solution.ts    <- Reference (no peeking!)
│   └── ...
├── module-02-ts-advanced/
└── ...
```

### When You Complete a Module:
1. All exercises done and checked
2. PROGRESS.md updated
3. Git commit your work
4. Move to next module

---

**Ready to start?** Open [module-01-ts-fundamentals/exercise-01-basic-types/README.md](module-01-ts-fundamentals/exercise-01-basic-types/README.md)