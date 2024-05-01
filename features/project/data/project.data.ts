import type { IProject } from "../";

export const projectsData: IProject[] = [
  {
    id: 1,
    date: "2024-04-26T00:00:00.000Z",
    title: "E-commerce de vêtements",
    headline:
      "Plateforme de vente en ligne de vêtements pour hommes, femmes et enfants.",
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
      { name: "Recherche de produits" },
      { name: "Panier d'achat" },
      { name: "Paiement sécurisé" },
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
    title: "Gestionnaire de tâches",
    headline:
      "Application permettant de gérer les tâches personnelles et professionnelles.",
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
      { name: "Création de tâches" },
      { name: "Suivi du statut des tâches" },
      { name: "Partage de tâches avec d'autres utilisateurs" },
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
    title: "Blog de voyage",
    headline:
      "Plateforme permettant aux utilisateurs de partager leurs expériences de voyage à travers des articles et des photos.",
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
      { name: "Création de publications" },
      { name: "Commentaires sur les publications" },
      { name: "Géolocalisation des lieux visités" },
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
    title: "Application de gestion d'événements",
    headline:
      "Application permettant aux organisateurs d'événements de planifier, promouvoir et gérer leurs événements.",
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
      { name: "Création d'événements" },
      { name: "Gestion des participants" },
      { name: "Billetterie en ligne" },
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
    title: "Plateforme de formation en ligne",
    headline:
      "Plateforme offrant des cours en ligne dans divers domaines, tels que la programmation, le design et la finance.",
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
      { name: "Catalogue de cours" },
      { name: "Suivi de la progression des étudiants" },
      { name: "Discussion en ligne entre étudiants et instructeurs" },
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
    title: "Application de gestion de stocks",
    headline:
      "Application permettant aux entreprises de gérer leur inventaire de produits et leurs niveaux de stock.",
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
      { name: "Ajout de produits" },
      { name: "Suivi des niveaux de stock" },
      { name: "Génération de rapports sur les ventes et les stocks" },
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
    title: "Plateforme de réservation d'hôtels",
    headline:
      "Plateforme permettant aux utilisateurs de réserver des chambres d'hôtel dans le monde entier.",
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
      { name: "Recherche de chambres disponibles" },
      { name: "Réservation en ligne sécurisée" },
      { name: "Gestion des réservations utilisateur" },
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
    title: "Application de suivi de fitness",
    headline:
      "Application permettant aux utilisateurs de suivre leur activité physique et leur santé.",
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
      { name: "Suivi des activités physiques" },
      { name: "Suivi de la consommation alimentaire" },
      { name: "Génération de rapports sur la santé" },
    ],
    stack: [
      { category: "Front-end", name: "Vue.js" },
      { category: "Back-end", name: "Node.js" },
    ],
    team: [{ name: "Liam" }, { name: "Olivia" }],
  },
];
