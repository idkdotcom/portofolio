export type Project = {
  id: string; // Added unique identifier for each project
  slug: string;
  title: string;
  platform: string;
  tech: string[];
  repo?: string;
  overview: string;
  features: string[];
  learnings: string[];
  reflection?: string;
  images: string[]; // Added array of image URLs for project photos
};

export const projects: Project[] = [
  {
    id: "1", // Unique ID for the project
    slug: "gym-app-mockup",
    title: "Gym App Mockup",
    platform: "Mobile",
    tech: ["Flutter", "Firebase Auth", "Firebase Database"],
    repo: "https://github.com/idkdotcom/gym_app",
    overview:
      "A conceptual mobile application for gym businesses focused on improving member experience.",
    features: [
      "Real-time gym crowd level indicator",
      "Class listings",
      "Trainer profiles with ratings",
      "Membership profile view",
      "Home carousel for featured content",
    ],
    learnings: [
      "UI/UX decisions heavily affect perceived quality",
      "State-driven UI tied to live database values",
      "Practical Firebase authentication and data usage",
    ],
    reflection:
      "Functionality is stable. Design and UX require refinement for clarity and consistency.",
    images: [
      "/images/gym-app-1.png",
      "/images/gym-app-2.png",
      "/images/gym-app-3.png",
      "/images/gym-app-4.png",
    ],
  },
  {
    id: "2", // Unique ID for the project
    slug: "exercise-list",
    title: "Exercise List Web App",
    platform: "Web",
    tech: ["Node.js", "PostgreSQL"],
    repo: "https://github.com/idkdotcom/Bryan-Exercise-List",
    overview:
      "A personal web application cataloging gym exercises with filters and subjective ratings.",
    features: [
      "Scrollable exercise list",
      "Difficulty and muscle group filters",
      "Search by exercise name",
      "Preference-based sorting",
    ],
    learnings: [
      "Database design for filtering and sorting",
      "Server-side rendering with Node.js",
      "Integration of PostgreSQL with web applications",
    ],
    images: [
      "/images/exercise-list-1.png",
      "/images/exercise-list-2.png",
      "/images/exercise-list-3.png",
      "/images/exercise-list-4.png",
    ],
  },
  {
    id: "3", // Unique ID for the project
    slug: "meals-recipe-app",
    title: "Meals Recipe App",
    platform: "Mobile",
    tech: ["Kotlin", "TheMealDB API"],
    repo: "https://github.com/idkdotcom/Meals-App",
    overview:
      "A mobile app displaying meals from a public API with detailed recipes.",
    features: [
      "Scrollable meal list",
      "Meal detail pages",
      "Search by meal name",
      "Favorites add/remove functionality",
    ],
    learnings: [
      "Kotlin has high dependency and configuration overhead",
      "Cross-platform tools improve development velocity",
      "API-driven apps require careful state handling",
    ],
    images: [
      "/images/meals-recipe-1.png",
      "/images/meals-recipe-2.png",
      "/images/meals-recipe-3.png",
      "/images/meals-recipe-4.png",
    ],
  },
];
