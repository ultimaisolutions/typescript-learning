/**
 * Exercise 1.3: Union Types & Type Narrowing - Starter File
 *
 * Complete the tasks below. When done, run:
 * npx tsc module-01-ts-fundamentals/exercise-03-unions/starter.ts --noEmit
 */

// ============================================
// TASK 1: Create Union Type Variables
// ============================================

// TODO: Create a variable `userId` that can be either a string or number
// Set it to "user-123"
let userId: string | number = "user-123";

// TODO: Change userId to a number (456) - this should work without errors
userId = 456;

// TODO: Create a variable `result` that can be a string, number, or boolean
// Set it to any valid value
let result: string | number | boolean = 3;

// TODO: Create a type alias called `StringOrNumber` for the union `string | number`
type StringOrNumber = string | number;

// TODO: Create a variable using your StringOrNumber type
let variable: StringOrNumber;


// ============================================
// TASK 2: Type Narrowing with Functions
// ============================================

// TODO: Create a function called `formatValue` that:
// - Takes a parameter `value` of type `string | number`
// - If it's a string, return it in UPPERCASE
// - If it's a number, return it formatted to 2 decimal places as a string
// Hint: Use `typeof` to check the type

function formatValue(value: string | number): string {
    // TODO: Implement type narrowing here

    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value.toFixed(2);
    }

}

// Test cases (uncomment when ready):
console.log(formatValue("hello"));  // Should print: "HELLO"
console.log(formatValue(42.5678));  // Should print: "42.57"
console.log(formatValue(100));      // Should print: "100.00"


// TODO: Create a function called `getLength` that:
// - Takes a parameter that can be a string OR an array of any type (any[])
// - Returns the length
// Hint: Both strings and arrays have a .length property!

function getLength(value: string | any[]): number {
    // TODO: Implement this (it's simpler than you might think!)

    return value.length;
}

// Test cases (uncomment when ready):
console.log(getLength("hello"));     // Should print: 5
console.log(getLength([1, 2, 3]));   // Should print: 3


// ============================================
// TASK 3: Literal Types for Status
// ============================================

// TODO: Create a type called `LoadingState` that can only be:
// "idle" | "loading" | "success" | "error"
type LoadingState = "idle" | "loading" | "success" | "error";

// TODO: Create a variable `pageStatus` of type LoadingState, set to "idle"
let pageStatus: LoadingState = "idle";

// TODO: Create a function called `getStatusMessage` that:
// - Takes a LoadingState parameter
// - Returns a different message for each status:
//   - "idle" -> "Waiting to start..."
//   - "loading" -> "Loading, please wait..."
//   - "success" -> "Data loaded successfully!"
//   - "error" -> "Something went wrong!"
// Hint: Use a switch statement or if/else
function getStatusMessage(param: LoadingState){
    if(param === "idle") {
        return("Waiting to start...");
    }
    if(param === "loading") {
        return("Loading, please wait...");
    }
    if(param === "success") {
        return("Data loaded successfully!");
    }
    if(param === "error") {
        return "Something went wrong!";
    }

}

// Test cases (uncomment when ready):
console.log(getStatusMessage("idle"));     // "Waiting to start..."
console.log(getStatusMessage("loading"));  // "Loading, please wait..."
console.log(getStatusMessage("success"));  // "Data loaded successfully!"
console.log(getStatusMessage("error"));    // "Something went wrong!"


// ============================================
// BONUS CHALLENGE (Optional)
// ============================================

// Create a type `ApiResponse` that represents an API response which can be:
// - Success: { status: "success", data: string }
// - Error: { status: "error", message: string }
// This is called a "discriminated union" - the `status` field tells you which variant it is

// TODO: Create the ApiResponse type
type ApiResponse = { status: "success", data: string } | { status: "error", message: string };
// TODO: Create a function `handleResponse` that:
// - Takes an ApiResponse
// - If success, returns the data
// - If error, returns the error message prefixed with "Error: "
function handleResponse(response: ApiResponse){
    if(response.status === "success") {
        return response.data;
    }
    else{
        return "Error" + response.message;
    }
}

export { };
