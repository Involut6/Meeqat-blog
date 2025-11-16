export interface Author {
  name: string;
  avatar: string;
  date: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: Author;
  content?: string;
  readTime?: string;
}

export const authors: Author[] = [
  {
    name: "Olivia Rhye",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    date: "20 Jan 2024"
  },
  {
    name: "Phoenix Baker",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    date: "19 Jan 2024"
  },
  {
    name: "Lana Steiner",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    date: "18 Jan 2024"
  },
  {
    name: "Aleem Sama",
    avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    date: "21 Jul 2024"
  }
];

export const articles: Article[] = [
  {
    id: "1",
    title: "Unlocking Efficiency: The Power Of A Modern Technology",
    excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers? Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "Design",
    author: authors[0],
    readTime: "8 Mins Read",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

## 1. Incididunt ut labore et dolore magna aliqua
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## 2. Incididunt ut labore et dolore magna aliqua
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

## 3. Incididunt ut labore et dolore magna aliqua
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
`
  },
  {
    id: "2",
    title: "UX review presentations",
    excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "Design",
    author: authors[0],
    readTime: "5 Mins Read"
  },
  {
    id: "3",
    title: "Migrating to Linear 101",
    excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "Lifestyle",
    author: authors[1],
    readTime: "7 Mins Read"
  },
  {
    id: "4",
    title: "Building your API Stack",
    excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "Tech",
    author: authors[2],
    readTime: "6 Mins Read"
  },
  {
    id: "5",
    title: "Grid system for better Design User Interface",
    excerpt: "A grid system is a set of measurements a graphic designer can use to align and size objects within the given format.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "Design",
    author: authors[0],
    readTime: "4 Mins Read"
  },
  {
    id: "6",
    title: "Top 10 JavaScript tips to build great APIs",
    excerpt: "JavaScript continues to be one of the most popular programming languages in 2024.",
    image: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "Tech",
    author: authors[3],
    readTime: "8 Mins Read"
  }
];

export const categories = [
  "Tech",
  "Design",
  "Art",
  "Photography",
  "Culture",
  "Books",
  "Lifestyle",
  "Fashion & Style",
  "Health & Wellness",
  "Fitness",
  "Travel",
  "Food",
  "Cooking & Food",
  "Parenting",
  "Islam",
  "Marriage",
  "Business",
  "Finance & Investing",
  "Marketing",
  "Sport",
  "Politics",
  "Education"
];


export const featuredArticle = articles[0];
export const recentArticles = articles.slice(1, 4);