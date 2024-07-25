import { type Project } from '../types/project.types.js';

export const generateMockProjects = (count: number): Project[] => {
    const projects: Project[] = [];
    for (let i = 1; i <= count; i++) {
        projects.push({
            id: i,
            date: `2023-01-${i.toString().padStart(2, '0')}`,
            name: `Project ${i}`,
            image:"test.jpg",
            description: `Description ${i}`,
            like: Math.floor(Math.random() * 5) + 1,
            pinned: Math.random() > 0.5,
            workflow: `draft`,
            stack: [`Tech ${i}`]
        } as Project);
    }
    return projects;
}

export const mockProjects: Project[] = [
    {
        "id": 1,
        "date": "2024-04-26T00:00:00.000Z",
        "name": "Clothing E-commerce",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "like": 102,
        "pinned": true,
        "workflow": "public",
        "stack": ["React", "TailwindCSS", "Node.js", "PostgreSQL", "Supabase", "Netlify", "Resend", "Stripe"],
        "image": "photo-1655474396177-e727349f44dc.jpeg"
    },
    {
        "id": 2,
        "date": "2023-10-15T00:00:00.000Z",
        "name": "Recipe Sharing Platform",
        "description": "Donec accumsan at metus in vulputate.",
        "like": 87,
        "pinned": false,
        "workflow": "mvp",
        "stack": ["Vue.js", "Bootstrap", "Express.js", "MongoDB", "Heroku", "SendGrid", "Stripe"],
         "image": "photo-1655993810480-c15dccf9b3a0.jpeg"
    },
    {
        "id": 3,
        "date": "2024-01-10T00:00:00.000Z",
        "name": "Real Estate Marketplace",
        "description": "Praesent ex quam, ultrices et diam at, luctus varius mi.",
        "like": 45,
        "pinned": false,
        "workflow": "draft",
        "stack": ["Angular", "Bootstrap", "Django", "MySQL", "AWS", "Twilio", "PayPal"],
         "image": "photo-1656331797721-b593b8f00297.jpeg"
    },
    {
        "id": 4,
        "date": "2023-08-20T00:00:00.000Z",
        "name": "Fitness Tracker App",
        "description": "Curabitur neque neque, ullamcorper mattis rhoncus et, eleifend quis lorem.",
        "like": 64,
        "pinned": false,
        "workflow": "prototype",
        "stack": ["React Native", "Expo", "Firebase", "Firestore", "SendGrid"],
         "image": "photo-1658246944389-9e9ac0a85dda.jpeg"
    },
    {
        "id": 5,
        "date": "2022-12-05T00:00:00.000Z",
        "name": "Event Management System",
        "description": "Donec accumsan at metus in vulputate.",
        "like": 92,
        "pinned": true,
        "workflow": "public",
        "stack": ["React", "Material-UI", "Spring Boot", "MySQL", "AWS", "Twilio", "PayPal"],
         "image": "photo-1658963633165-e317a3f0f4bb.jpeg"
    },
    {
        "id": 6,
        "date": "2023-05-28T00:00:00.000Z",
        "name": "Online Learning Platform",
        "description": "Aliquam erat volutpat. Maecenas sagittis nibh in augue semper, non auctor libero pellentesque.",
        "like": 78,
        "pinned": false,
        "workflow": "public",
        "stack": ["Angular", "MaterializeCSS", "Laravel", "MySQL", "DigitalOcean", "SendGrid", "PayPal"],
         "image": "photo-1658963639400-73e05b964203.jpeg"

    },
    {
        "id": 7,
        "date": "2023-03-15T00:00:00.000Z",
        "name": "Social Media Analytics Dashboard",
        "description": "Proin mollis lacus tellus, a blandit nulla sagittis ut.",
        "like": 55,
        "pinned": false,
        "workflow": "draft",
        "stack": ["React", "Semantic UI", "Flask", "MongoDB", "Heroku", "SendGrid", "Stripe"],
         "image": "photo-1658963642269-0a36c9eb5d66.jpeg"

    },
    {
        "id": 8,
        "date": "2024-02-18T00:00:00.000Z",
        "name": "E-commerce Marketplace for Handmade Crafts",
        "description": "Curabitur sed erat tempus, mollis arcu et, viverra ex. Phasellus a lorem vel leo ornare tempor.",
        "like": 36,
        "pinned": false,
        "workflow": "mvp",
        "stack": ["Vue.js", "Vuetify", "Express.js", "MongoDB", "Heroku", "SendGrid", "PayPal"],
         "image": "photo-1683780777629-7b75e7016acc.jpeg"

    },
    {
        "id": 9,
        "date": "2023-07-10T00:00:00.000Z",
        "name": "Task Management App",
        "description": "Aenean ultricies non mauris non lacinia. Nulla ullamcorper eu mi eget ornare. Sed ut malesuada sapien.",
        "like": 41,
        "pinned": false,
        "workflow": "draft",
        "stack": ["React Native", "Expo", "Node.js", "MongoDB", "Heroku", "SendGrid"],
         "image": "photo-1659117296097-6347168cea00.jpeg"
    },
    {
        "id": 10,
        "date": "2024-03-05T00:00:00.000Z",
        "name": "Travel Blogging Platform",
        "description": "Sed hendrerit nisi eu arcu sagittis, at dictum metus congue.",
        "like": 73,
        "pinned": false,
        "workflow": "public",
        "stack": ["React", "Material-UI", "Express.js", "MongoDB", "Heroku", "SendGrid"],
         "image": "photo-1659462014159-ea4576af8c8a.jpeg"
    },
    {
        "id": 11,
        "date": "2023-11-22T00:00:00.000Z",
        "name": "Online Marketplace for Freelancers",
        "description": "Integer finibus rutrum mi, vitae fringilla lorem vestibulum quis. Aliquam gravida pulvinar nisi non dignissim.",
        "like": 58,
        "pinned": false,
        "workflow": "prototype",
        "stack": ["React", "Bootstrap", "Node.js", "Express.js", "MongoDB", "Heroku", "SendGrid", "Stripe"],
         "image": "photo-1659974708151-e90f42518dd0.jpeg"
    }
]