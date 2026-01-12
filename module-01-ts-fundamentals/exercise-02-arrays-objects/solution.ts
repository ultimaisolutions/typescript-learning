/**
 * Exercise 1.2: Arrays & Objects - Solution
 *
 * DON'T PEEK until you've tried solving it yourself!
 */

// ============================================
// TASK 1: Create Typed Arrays
// ============================================

let scores: number[] = [85, 90, 78, 92];
let fruits: string[] = ["apple", "banana", "orange"];
let flags: boolean[] = [];

// These would cause errors (correctly!):
// scores.push("hello");
// fruits.push(123);
// flags.push("true");


// ============================================
// TASK 2: Create a User Type
// ============================================

type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean;  // Optional property
};

const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 28
};

const adminUser: User = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    age: 35,
    isAdmin: true
};


// ============================================
// TASK 3: Create a Function That Uses User Type
// ============================================

function greetUser(user: User): string {
    let greeting = `Hello, ${user.name}! You are ${user.age} years old.`;

    if (user.isAdmin) {
        greeting += " You have admin privileges.";
    }

    return greeting;
}

console.log(greetUser(user));
// "Hello, Alice! You are 28 years old."

console.log(greetUser(adminUser));
// "Hello, Bob! You are 35 years old. You have admin privileges."


// ============================================
// BONUS CHALLENGE
// ============================================

type Product = {
    id: number;
    name: string;
    price: number;
    tags: string[];
    inStock: boolean;
};

const products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 999.99,
        tags: ["electronics", "computers", "work"],
        inStock: true
    },
    {
        id: 2,
        name: "Headphones",
        price: 149.99,
        tags: ["electronics", "audio", "music"],
        inStock: true
    },
    {
        id: 3,
        name: "Desk Chair",
        price: 299.99,
        tags: ["furniture", "office", "work"],
        inStock: false
    }
];

function getProductsByTag(products: Product[], tag: string): Product[] {
    return products.filter(product => product.tags.includes(tag));
}

console.log(getProductsByTag(products, "electronics"));
// Returns laptop and headphones

console.log(getProductsByTag(products, "work"));
// Returns laptop and desk chair


export { };
