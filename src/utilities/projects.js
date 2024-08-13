import bookcentre from "../assets/Projects/bookcentre.png";
import delicious from "../assets/Projects/delicious.png";
import globegraph from "../assets/Projects/globegraph.png";

export const myProjects = [
  {
    id: 1,
    name: "BookCentre",
    description: "Book Shop Project",
    tech: [
      "React",
      "React-Query",
      "React-Router",
      "Context-Api",
      "Tailwind",
      "Google Books API",
      "React Icons",
    ],
    image: bookcentre,
    github: "https://github.com/isamammadli570/bookcentre",
    demo: "https://bookcentre.netlify.app",
  },
  {
    id: 2,
    name: "DeliciOUS",
    description: "Meals and Cocktails",
    tech: [
      "React",
      "React-Query",
      "React-Router",
      "Tailwind",
      "Mealdb API",
      "Cocktaildb API",
      "React Icons",
    ],
    image: delicious,
    github: "https://github.com/isamammadli570/deliciousmealsite",
    demo: "https://deliciousmealsite.netlify.app",
  },
  {
    id: 3,
    name: "GlobeGraph",
    description: "Map and Weather",
    tech: [
      "React",
      "React-Query",
      "React-Router",
      "Context-Api",
      "Tailwind",
      "React Leaflet",
      "React Icons",
      "OpenWeather Api",
    ],
    image: globegraph,
    github: "https://github.com/isamammadli570/globegraph",
    demo: "https://globegraph.netlify.app",
  },
];
