/**
 * Exercise 1.2: Arrays & Objects - Starter File
 *
 * Complete the tasks below. When done, run:
 * npx tsc module-01-ts-fundamentals/exercise-02-arrays-objects/starter.ts --noEmit
 */

// ============================================
// TASK 1: Create Typed Arrays
// ============================================

// TODO: Create an array of numbers called `scores` with values [85, 90, 78, 92]
let scores: number[] = [85,90,78,92];

// TODO: Create an array of strings called `fruits` with values ["apple", "banana", "orange"]
let fruits: string[] = ["apple","banana","orange"];

// TODO: Create an empty array that will hold boolean values, call it `flags`
let flags: boolean[] = [];

// Test: These should cause errors if your types are correct (uncomment to verify, then comment out again)
//scores.push("hello");     // Should error - can't add string to number[]
//fruits.push(123);         // Should error - can't add number to string[]
//flags.push("true");       // Should error - can't add string to boolean[]


// ============================================
// TASK 2: Create a User Type
// ============================================

// TODO: Create a type called `User` with these properties:
// - id: number
// - name: string
// - email: string
// - age: number
// - isAdmin: boolean (optional - user may or may not be admin)
type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean;
}

// TODO: Create a user object using your User type
let user: User = {id: 1, name:"ofek", email:"ofekloya@ultimaisolutions.com", age: 25};


// TODO: Create another user object that IS an admin
let adminUser: User = {id: 1, name:"sharon", email:"sharon.atlan@gmail.com", age: 23, isAdmin: true};


// ============================================
// TASK 3: Create a Function That Uses User Type
// ============================================

// TODO: Create a function called `greetUser` that:
// - Takes a User as a parameter
// - Returns a string greeting
// - The greeting should be: "Hello, {name}! You are {age} years old."
// - If the user is an admin, add " You have admin privileges." to the end

function greetUser(param: User){
    if(param.isAdmin === true){
        return(`Hello, ${param.name}! You are ${param.age} years old. You have admin privileges.`);
    }
    else{
        return(`Hello, ${param.name}! You are ${param.age} years old.`)
    }
    
}


// Test your function (uncomment when ready):
console.log(greetUser(user));
console.log(greetUser(adminUser));


// ============================================
// BONUS CHALLENGE (Optional)
// ============================================

// TODO: Create a type called `Product` with:
// - id: number
// - name: string
// - price: number
// - tags: string[] (array of tag strings)
// - inStock: boolean
type Product = {
    id: number;
    name: string;
    price: number;
    tags: string[];
    inStock: boolean;
}

// TODO: Create an array of 3 products
let products: Product[] = [
    {id: 1, name: "milk", price: 7, tags: ["dairy","essential"], inStock: true},
    {id: 2, name: "bread", price: 5, tags: ["gluten","essential"], inStock: false},
    {id: 3, name: "eggs", price: 12, tags: ["under-supervision","essential"], inStock: true}
];
// TODO: Create a function `getProductsByTag` that:
// - Takes an array of Products and a tag string
// - Returns an array of Products that have that tag
function getProductsByTag(param: Product[], paramTag: string): Product[]{
    let lenParam = param.length;
    let containTags: Product[] = [];

    for(let x = 0; x < lenParam; x++){
        if(param[x].tags.includes(paramTag)){
           containTags.push(param[x]);
        }
    }
    console.log(containTags);
    return containTags;
}

export { };
