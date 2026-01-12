/**
 * Exercise 1.4: Interfaces vs Types - Solution
 *
 * DON'T PEEK until you've tried solving it yourself!
 */

// ============================================
// TASK 1: Convert Type to Interface
// ============================================

type ProductType = {
    id: number;
    name: string;
    price: number;
    description: string;
};

// Converted to interface:
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

const laptop: Product = {
    id: 1,
    name: "MacBook Pro",
    price: 1999.99,
    description: "Powerful laptop for developers"
};


// ============================================
// TASK 2: Extend an Interface
// ============================================

interface Person {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

interface Employee extends Person {
    department: string;
    salary: number;
    startDate: string;
}

interface Manager extends Employee {
    teamSize: number;
    directReports: string[];
}

const manager: Manager = {
    id: 1,
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@company.com",
    department: "Engineering",
    salary: 150000,
    startDate: "2020-03-15",
    teamSize: 8,
    directReports: ["Alice", "Bob", "Charlie", "Diana"]
};


// ============================================
// TASK 3: Create a Post Interface
// ============================================

interface Author {
    id: number;
    username: string;
    avatarUrl?: string;
}

interface Comment {
    id: number;
    author: Author;
    content: string;
    createdAt: string;
    likes: number;
}

interface Post {
    id: number;
    author: Author;
    content: string;
    imageUrl?: string;
    createdAt: string;
    likes: number;
    comments: Comment[];
}

const samplePost: Post = {
    id: 1,
    author: {
        id: 101,
        username: "techie_sarah",
        avatarUrl: "https://example.com/avatars/sarah.jpg"
    },
    content: "Just finished learning TypeScript interfaces! The type safety is amazing.",
    createdAt: "2024-01-15T10:30:00Z",
    likes: 42,
    comments: [
        {
            id: 1001,
            author: {
                id: 102,
                username: "dev_mike"
            },
            content: "Great job! Wait until you learn about generics!",
            createdAt: "2024-01-15T11:00:00Z",
            likes: 5
        },
        {
            id: 1002,
            author: {
                id: 103,
                username: "code_ninja"
            },
            content: "TypeScript is a game changer for large projects",
            createdAt: "2024-01-15T11:30:00Z",
            likes: 8
        }
    ]
};

function getPostSummary(post: Post): string {
    return `${post.author.username}: ${post.content} - ${post.likes} likes, ${post.comments.length} comments`;
}

console.log(getPostSummary(samplePost));
// "techie_sarah: Just finished learning TypeScript interfaces! The type safety is amazing. - 42 likes, 2 comments"


// ============================================
// BONUS CHALLENGE
// ============================================

type NotificationType = "like" | "comment" | "follow" | "mention";

interface Notification {
    id: number;
    type: NotificationType;
    fromUser: Author;
    message: string;
    read: boolean;
    createdAt: string;
}

function formatNotification(notification: Notification): string {
    const { fromUser, type } = notification;

    switch (type) {
        case "like":
            return `${fromUser.username} liked your post`;
        case "comment":
            return `${fromUser.username} commented on your post`;
        case "follow":
            return `${fromUser.username} started following you`;
        case "mention":
            return `${fromUser.username} mentioned you in a post`;
    }
}

// Test it:
const likeNotification: Notification = {
    id: 1,
    type: "like",
    fromUser: { id: 102, username: "dev_mike" },
    message: "",
    read: false,
    createdAt: "2024-01-15T12:00:00Z"
};

console.log(formatNotification(likeNotification));
// "dev_mike liked your post"


export { };
