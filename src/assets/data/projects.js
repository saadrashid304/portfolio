import designo from "../DesignoTumbnail.png";
import space from "../SpaceThumbnail.png";
import meals from "../MealsThumbnail.png";
import sunnyside from "../SunnysideThumbnail.png";
// import card from "../CardThumbnail.png";
// import expense from "../ExpenseThumbnail.png";
import lawful from "../LawfulThumbnail.png";
import game from "../GameThumbnail.png";
import audiophile from "../audiophileThumbnail.png";

const projects = [
  {
    id: 1,
    title: "Lawful Interception",
    skills: ["Html", "React", "Spring Boot"],
    projectUrl: "",
    sourceCodeUrl: "",
    thumbnail: {
      small: lawful,
      large: lawful,
    },
  },
  {
    id: 2,
    title: "Audiophile",
    skills: ["Html", "CSS", "React"],
    projectUrl: "https://sr-audiophile.netlify.app",
    sourceCodeUrl: "https://github.com/saadrashid304/audiophile-frontend",
    thumbnail: {
      small: audiophile,
      large: audiophile,
    },
  },
  {
    id: 3,
    title: "Designo",
    skills: ["Html", "CSS", "React"],
    projectUrl: "https://sr-designo.netlify.app",
    sourceCodeUrl: "https://github.com/saadrashid304/designo-multipage-website",
    thumbnail: {
      small: designo,
      large: designo,
    },
  },
  {
    id: 4,
    title: "Space Tourism",
    skills: ["Html", "CSS", "React"],
    projectUrl: "https://sr-tourism.netlify.app",
    sourceCodeUrl: "https://github.com/saadrashid304/space-tourism-website",
    thumbnail: {
      small: space,
      large: space,
    },
  },
  {
    id: 5,
    title: "Rock, Paper, Scissors Game",
    skills: ["Html", "CSS", "React"],
    projectUrl: "https://sr-game.netlify.app/",
    sourceCodeUrl: "https://github.com/saadrashid304/rock-paper-game",
    thumbnail: {
      small: game,
      large: game,
    },
  },
  {
    id: 6,
    title: "SR Meals",
    skills: ["Html", "CSS", "JavaScript"],
    projectUrl: "https://sr-meals.netlify.app",
    sourceCodeUrl: "https://github.com/saadrashid304/food-order-app",
    thumbnail: {
      small: meals,
      large: meals,
    },
  },
  {
    id: 7,
    title: "Sunnyside",
    skills: ["Html", "CSS"],
    projectUrl: "https://sr-sunnyside.netlify.app",
    sourceCodeUrl: "https://github.com/saadrashid304/sunnyside-landing-page",
    thumbnail: {
      small: sunnyside,
      large: sunnyside,
    },
  },
  // {
  //   id: 8,
  //   title: "Expense Tracker",
  //   skills: ["Html", "CSS", "JavaScript"],
  //   projectUrl: "https://sr-expense-tracker.netlify.app",
  //   sourceCodeUrl: "https://github.com/saadrashid304/ExpenseTracker",
  //   thumbnail: {
  //     small: expense,
  //     large: expense,
  //   },
  // },
  // {
  //   id: 9,
  //   title: "Credit Card Details",
  //   skills: ["Html", "CSS"],
  //   projectUrl: "https://sr-credit-card.netlify.app",
  //   sourceCodeUrl: "https://github.com/saadrashid304/card-details-challenge",
  //   thumbnail: {
  //     small: card,
  //     large: card,
  //   },
  // },
];

export { projects };
