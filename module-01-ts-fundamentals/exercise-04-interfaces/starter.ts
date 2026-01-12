/**
 * Exercise 1.4: Interfaces vs Types - Starter File
 *
 * Complete the tasks below. When done, run:
 * npx tsc module-01-ts-fundamentals/exercise-04-interfaces/starter.ts --noEmit
 */

// ============================================
// TASK 1: Convert Type to Interface
// ============================================

// Here's a type alias:
type ProductType = {
    id: number;
    name: string;
    price: number;
    description: string;
};

// TODO: Create an equivalent interface called `Product`
// (It should have the same properties as ProductType)


// TODO: Create a product using your Product interface
// const laptop: Product = { ... }


// ============================================
// TASK 2: Extend an Interface
// ============================================

// Here's a base interface:
interface Person {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

// TODO: Create an interface `Employee` that extends Person and adds:
// - department: string
// - salary: number
// - startDate: string


// TODO: Create an interface `Manager` that extends Employee and adds:
// - teamSize: number
// - directReports: string[] (array of employee names)


// TODO: Create a manager object using the Manager interface


// ============================================
// TASK 3: Create a Post Interface (Social App Preview!)
// ============================================

// This is a preview of what you'll build in your capstone project!

// TODO: Create an `Author` interface with:
// - id: number
// - username: string
// - avatarUrl: string (optional)


// TODO: Create a `Comment` interface with:
// - id: number
// - author: Author
// - content: string
// - createdAt: string
// - likes: number


// TODO: Create a `Post` interface with:
// - id: number
// - author: Author
// - content: string
// - imageUrl: string (optional)
// - createdAt: string
// - likes: number
// - comments: Comment[] (array of comments)


// TODO: Create a sample post with at least one comment


// TODO: Create a function `getPostSummary` that:
// - Takes a Post
// - Returns a string: "{author.username}: {content} - {likes} likes, {comments.length} comments"


// ============================================
// BONUS CHALLENGE (Optional)
// ============================================

// Create a type that combines interface and type features:

// TODO: Create a union type `NotificationType` with values:
// "like" | "comment" | "follow" | "mention"


// TODO: Create an interface `Notification` with:
// - id: number
// - type: NotificationType (use your union type!)
// - fromUser: Author
// - message: string
// - read: boolean
// - createdAt: string


// TODO: Create a function `formatNotification` that:
// - Takes a Notification
// - Returns different messages based on the notification type:
//   - "like": "{fromUser.username} liked your post"
//   - "comment": "{fromUser.username} commented on your post"
//   - "follow": "{fromUser.username} started following you"
//   - "mention": "{fromUser.username} mentioned you in a post"


export { };
