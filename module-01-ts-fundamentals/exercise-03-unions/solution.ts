/**
 * Exercise 1.3: Union Types & Type Narrowing - Solution
 *
 * DON'T PEEK until you've tried solving it yourself!
 */

// ============================================
// TASK 1: Create Union Type Variables
// ============================================

let userId: string | number = "user-123";
userId = 456;  // This works!

let result: string | number | boolean = "hello";
result = 42;    // Also valid
result = true;  // Also valid

type StringOrNumber = string | number;
let myValue: StringOrNumber = "test";


// ============================================
// TASK 2: Type Narrowing with Functions
// ============================================

function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else {
        return value.toFixed(2);
    }
}

console.log(formatValue("hello"));   // "HELLO"
console.log(formatValue(42.5678));   // "42.57"
console.log(formatValue(100));       // "100.00"


function getLength(value: string | any[]): number {
    // Both strings and arrays have .length, so no narrowing needed!
    return value.length;
}

console.log(getLength("hello"));     // 5
console.log(getLength([1, 2, 3]));   // 3


// ============================================
// TASK 3: Literal Types for Status
// ============================================

type LoadingState = "idle" | "loading" | "success" | "error";

let pageStatus: LoadingState = "idle";

function getStatusMessage(status: LoadingState): string {
    switch (status) {
        case "idle":
            return "Waiting to start...";
        case "loading":
            return "Loading, please wait...";
        case "success":
            return "Data loaded successfully!";
        case "error":
            return "Something went wrong!";
    }
}

console.log(getStatusMessage("idle"));     // "Waiting to start..."
console.log(getStatusMessage("loading"));  // "Loading, please wait..."
console.log(getStatusMessage("success"));  // "Data loaded successfully!"
console.log(getStatusMessage("error"));    // "Something went wrong!"


// ============================================
// BONUS CHALLENGE
// ============================================

type ApiResponse =
    | { status: "success"; data: string }
    | { status: "error"; message: string };

function handleResponse(response: ApiResponse): string {
    // TypeScript knows: if status is "success", data exists
    // if status is "error", message exists
    if (response.status === "success") {
        return response.data;
    } else {
        return `Error: ${response.message}`;
    }
}

// Test it:
const successResponse: ApiResponse = { status: "success", data: "User data here" };
const errorResponse: ApiResponse = { status: "error", message: "Not found" };

console.log(handleResponse(successResponse));  // "User data here"
console.log(handleResponse(errorResponse));    // "Error: Not found"


export { };
