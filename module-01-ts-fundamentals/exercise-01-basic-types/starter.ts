/**
 * Exercise 1.1: Basic Types - Starter File
 *
 * Complete the tasks below. When done, run:
 * npx tsc module-01-ts-fundamentals/exercise-01-basic-types/starter.ts --noEmit
 *
 * If there are no errors, you've completed the exercise!
 */

// ============================================
// TASK 1: Create Typed Variables
// ============================================
// Create variables with explicit types for:
// - A username (string)
// - An age (number)
// - Whether the user is active (boolean)

// TODO: Create a variable called `username` of type string, set it to your name
let username: string = "ofek";

// TODO: Create a variable called `age` of type number, set it to any age
let age: number = 45;

// TODO: Create a variable called `isActive` of type boolean, set it to true
let isActive: boolean = true;


// ============================================
// TASK 2: Fix the Type Errors
// ============================================
// The code below has type errors. Fix them!
// Hint: Change the VALUES, not the types

let productName: number = 123;          // Fix this line
let productPrice: string = "49.99";     // Fix this line
let inStock: boolean = true;           // Fix this line


// ============================================
// TASK 3: Create a Typed Function
// ============================================
// Create a function called `calculateTotal` that:
// - Takes two parameters: `price` (number) and `quantity` (number)
// - Returns a number (the total)
// - The function should return price * quantity

// TODO: Write the function here
function calculateTotal(price: number, quantity: number){
    let total: number = price * quantity;
    return total;
}

// Test your function (uncomment when ready):
const total = calculateTotal(10.99, 3);
console.log(total); // Should print: 32.97


// ============================================
// BONUS CHALLENGE (Optional)
// ============================================
// Create a function called `formatPrice` that:
// - Takes a price (number)
// - Returns a string formatted as "$X.XX"
// Example: formatPrice(10) should return "$10.00"

// TODO: Write the bonus function here

function formatPrice(price: number){
    let formatted_number : string = "$" + price.toFixed(2);
    return formatted_number;
}
console.log(formatPrice(3.5));

// Don't modify below this line - used for verification
export { };
