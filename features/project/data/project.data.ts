import type { IProject } from "../";

export const projectsData: IProject[] = [
  {
    id: 1,
    date: "2024-04-26T00:00:00.000Z",
    title: "Clothing E-commerce",
    headline:
      "Online platform for selling clothing for men, women, and children.",
    stars: 102,
    pinned: true,
    workflow: "public",
    source: {
      author: "John Doe",
      url: {
        title: "GitHub",
        href: "https://github.com/ecommerce-clothing",
      },
    },
    features: [
      { name: "Product search" },
      { name: "Shopping cart" },
      { name: "Secure payment" },
    ],
    stack: [
      { category: "Front-end", name: "React" },
      { category: "Back-end", name: "Node.js" },
    ],
    team: [{ name: "Alice" }, { name: "Bob" }],
  },
  {
    id: 2,
    date: "2024-04-25T00:00:00.000Z",
    title: "Task Manager",
    headline: "Application for managing personal and professional tasks.",
    stars: 57,
    pinned: false,
    workflow: "public",
    source: {
      author: "Jane Smith",
      url: {
        title: "GitHub",
        href: "https://github.com/task-manager",
      },
    },
    features: [
      { name: "Task creation" },
      { name: "Task status tracking" },
      { name: "Task sharing with other users" },
    ],
    stack: [
      { category: "Front-end", name: "Vue.js" },
      { category: "Back-end", name: "Express.js" },
    ],
    team: [{ name: "Charlie" }, { name: "Diana" }],
  },
  {
    id: 3,
    date: "2024-04-24T00:00:00.000Z",
    title: "Travel Blog",
    headline:
      "Platform for users to share their travel experiences through articles and photos.",
    stars: 82,
    pinned: true,
    workflow: "public",
    source: {
      author: "Alexandre Dupont",
      url: {
        title: "GitHub",
        href: "https://github.com/travel-blog",
      },
    },
    features: [
      { name: "Post creation" },
      { name: "Post comments" },
      { name: "Geolocation of visited places" },
    ],
    stack: [
      { category: "Front-end", name: "Angular" },
      { category: "Back-end", name: "Django" },
    ],
    team: [{ name: "Emma" }, { name: "Louis" }],
  },
  {
    id: 4,
    date: "2024-04-23T00:00:00.000Z",
    title: "Event Management Application",
    headline:
      "Application for event organizers to plan, promote, and manage their events.",
    stars: 123,
    pinned: true,
    workflow: "public",
    source: {
      author: "Sophie Martin",
      url: {
        title: "GitHub",
        href: "https://github.com/event-management",
      },
    },
    features: [
      { name: "Event creation" },
      { name: "Participant management" },
      { name: "Online ticketing" },
    ],
    stack: [
      { category: "Front-end", name: "Vue.js" },
      { category: "Back-end", name: "Spring Boot" },
    ],
    team: [{ name: "Gabriel" }, { name: "Clara" }],
  },
  {
    id: 5,
    date: "2024-04-22T00:00:00.000Z",
    title: "Online Learning Platform",
    headline:
      "Platform offering online courses in various fields such as programming, design, and finance.",
    stars: 75,
    pinned: false,
    workflow: "draft",
    source: {
      author: "David Johnson",
      url: {
        title: "GitHub",
        href: "https://github.com/online-learning-platform",
      },
    },
    features: [
      { name: "Course catalog" },
      { name: "Student progress tracking" },
      { name: "Online discussion between students and instructors" },
    ],
    stack: [
      { category: "Front-end", name: "React" },
      { category: "Back-end", name: "Rails" },
    ],
    team: [{ name: "Zoé" }, { name: "Mathis" }],
  },
  {
    id: 6,
    date: "2024-04-21T00:00:00.000Z",
    title: "Inventory Management Application",
    headline:
      "Application for businesses to manage their product inventory and stock levels.",
    stars: 34,
    pinned: true,
    workflow: "public",
    source: {
      author: "Emily Wilson",
      url: {
        title: "GitHub",
        href: "https://github.com/inventory-management",
      },
    },
    features: [
      { name: "Product addition" },
      { name: "Stock level tracking" },
      { name: "Generation of sales and stock reports" },
    ],
    stack: [
      { category: "Front-end", name: "Angular" },
      { category: "Back-end", name: "Laravel" },
    ],
    team: [{ name: "Oliver" }, { name: "Sophia" }],
  },
  {
    id: 7,
    date: "2024-04-20T00:00:00.000Z",
    title: "Hotel Booking Platform",
    headline: "Platform for users to book hotel rooms worldwide.",
    stars: 98,
    pinned: false,
    workflow: "public",
    source: {
      author: "Sophie Garcia",
      url: {
        title: "GitHub",
        href: "https://github.com/hotel-booking-platform",
      },
    },
    features: [
      { name: "Search for available rooms" },
      { name: "Secure online booking" },
      { name: "User reservation management" },
    ],
    stack: [
      { category: "Front-end", name: "React" },
      { category: "Back-end", name: "Django" },
    ],
    team: [{ name: "Lucas" }, { name: "Eva" }],
  },
  {
    id: 8,
    date: "2024-04-19T00:00:00.000Z",
    title: "Fitness Tracking Application",
    headline:
      "Application for users to track their physical activity and health.",
    stars: 63,
    pinned: true,
    workflow: "public",
    source: {
      author: "Mia Johnson",
      url: {
        title: "GitHub",
        href: "https://github.com/fitness-tracking-app",
      },
    },
    features: [
      { name: "Physical activity tracking" },
      { name: "Food consumption tracking" },
      { name: "Health report generation" },
    ],
    stack: [
      { category: "Front-end", name: "Vue.js" },
      { category: "Back-end", name: "Node.js" },
    ],
    team: [{ name: "Liam" }, { name: "Olivia" }],
  },
];
