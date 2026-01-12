/**
 * Exercise 1.1: Basic Types - Solution
 *
 * DON'T PEEK until you've tried solving it yourself!
 */

// ============================================
// TASK 1: Create Typed Variables
// ============================================

let username: string = "Alice";
let age: number = 25;
let isActive: boolean = true;


// ============================================
// TASK 2: Fix the Type Errors
// ============================================

let productName: string = "Laptop";      // Changed 123 to "Laptop"
let productPrice: number = 49.99;        // Changed "49.99" to 49.99 (removed quotes)
let inStock: boolean = true;             // Changed "yes" to true


// ============================================
// TASK 3: Create a Typed Function
// ============================================

function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}

// Test the function:
const total = calculateTotal(10.99, 3);
console.log(total); // 32.97


// ============================================
// BONUS CHALLENGE
// ============================================

function formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
}

// Test the bonus function:
console.log(formatPrice(10));    // "$10.00"
console.log(formatPrice(5.5));   // "$5.50"
console.log(formatPrice(99.999)); // "$100.00"


export { };
