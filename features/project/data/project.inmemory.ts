import { type Project } from '..';

export const generateMockProjects = (count: number): Project[] => {
    const projects: Project[] = [];
    for (let i = 1; i <= count; i++) {
      projects.push({
        id: i,
        date: `2023-01-${i.toString().padStart(2, '0')}`,
        name: `Project ${i}`,
        description: `Description ${i}`,
        stars: Math.floor(Math.random() * 5) + 1,
        pinned: Math.random() > 0.5,
        workflow: `Workflow ${i}`,
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
        "stars": 102,
        "pinned": true,
        "workflow": "public",
        "stack": ["React", "TailwindCSS", "Node.js", "PostgreSQL",  "Supabase", "Netlify",  "Resend", "Stripe"]
    },
    {
        "id": 2,
        "date": "2023-10-15T00:00:00.000Z",
        "name": "Recipe Sharing Platform",
        "description": "Donec accumsan at metus in vulputate.",
        "stars": 87,
        "pinned": false,
        "workflow": "mvp",
        "stack": ["Vue.js", "Bootstrap", "Express.js", "MongoDB",  "Heroku",  "SendGrid", "Stripe"]
    },
    {
        "id": 3,
        "date": "2024-01-10T00:00:00.000Z",
        "name": "Real Estate Marketplace",
        "description": "Praesent ex quam, ultrices et diam at, luctus varius mi.",
        "stars": 45,
        "pinned": false,
        "workflow": "draft",
        "stack": ["Angular", "Bootstrap", "Django", "MySQL", "AWS", "Twilio", "PayPal"]
    },
    {
        "id": 4,
        "date": "2023-08-20T00:00:00.000Z",
        "name": "Fitness Tracker App",
        "description": "Curabitur neque neque, ullamcorper mattis rhoncus et, eleifend quis lorem.",
        "stars": 64,
        "pinned": false,
        "workflow": "prototype",
        "stack": ["React Native", "Expo", "Firebase", "Firestore", "SendGrid"]
    },
    {
        "id": 5,
        "date": "2022-12-05T00:00:00.000Z",
        "name": "Event Management System",
        "description": "Donec accumsan at metus in vulputate.",
        "stars": 92,
        "pinned": true,
        "workflow": "public",
        "stack": ["React", "Material-UI", "Spring Boot", "MySQL", "AWS", "Twilio", "PayPal"]
    },
    {
        "id": 6,
        "date": "2023-05-28T00:00:00.000Z",
        "name": "Online Learning Platform",
        "description": "Aliquam erat volutpat. Maecenas sagittis nibh in augue semper, non auctor libero pellentesque.",
        "stars": 78,
        "pinned": false,
        "workflow": "public",
        "stack": ["Angular", "MaterializeCSS", "Laravel", "MySQL", "DigitalOcean", "SendGrid", "PayPal"]

    },
    {
        "id": 7,
        "date": "2023-03-15T00:00:00.000Z",
        "name": "Social Media Analytics Dashboard",
        "description": "Proin mollis lacus tellus, a blandit nulla sagittis ut.",
        "stars": 55,
        "pinned": false,
        "workflow": "draft",
        "stack": ["React", "Semantic UI", "Flask", "MongoDB", "Heroku", "SendGrid", "Stripe"]

    },
    {
        "id": 8,
        "date": "2024-02-18T00:00:00.000Z",
        "name": "E-commerce Marketplace for Handmade Crafts",
        "description": "Curabitur sed erat tempus, mollis arcu et, viverra ex. Phasellus a lorem vel leo ornare tempor.",
        "stars": 36,
        "pinned": false,
        "workflow": "mvp",
        "stack": ["Vue.js", "Vuetify", "Express.js", "MongoDB", "Heroku", "SendGrid", "PayPal"]

    },
    {
        "id": 9,
        "date": "2023-07-10T00:00:00.000Z",
        "name": "Task Management App",
        "description": "Aenean ultricies non mauris non lacinia. Nulla ullamcorper eu mi eget ornare. Sed ut malesuada sapien.",
        "stars": 41,
        "pinned": false,
        "workflow": "draft",
        "stack": ["React Native", "Expo", "Node.js", "MongoDB", "Heroku", "SendGrid"]
    },
    {
        "id": 10,
        "date": "2024-03-05T00:00:00.000Z",
        "name": "Travel Blogging Platform",
        "description": "Sed hendrerit nisi eu arcu sagittis, at dictum metus congue.",
        "stars": 73,
        "pinned": false,
        "workflow": "public",
        "stack": ["React", "Material-UI", "Express.js", "MongoDB", "Heroku", "SendGrid"]
    },
    {
        "id": 11,
        "date": "2023-11-22T00:00:00.000Z",
        "name": "Online Marketplace for Freelancers",
        "description": "Integer finibus rutrum mi, vitae fringilla lorem vestibulum quis. Aliquam gravida pulvinar nisi non dignissim.",
        "stars": 58,
        "pinned": false,
        "workflow": "prototype",
        "stack": ["React", "Bootstrap", "Node.js", "Express.js", "MongoDB", "Heroku", "SendGrid", "Stripe"]
    }
]