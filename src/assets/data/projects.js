import designo from "../DesignoTumbnail.png";
import space from "../SpaceThumbnail.png";
import meals from "../MealsThumbnail.png";
import sunnyside from "../SunnysideThumbnail.png";
import card from "../CardThumbnail.png";
import expense from "../ExpenseThumbnail.png";

const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "Sunnyside",
    skills: ["Html", "CSS"],
    projectUrl: "https://sr-sunnyside.netlify.app",
    sourceCodeUrl: "https://github.com/saadrashid304/sunnyside-landing-page",
    thumbnail: {
      small: sunnyside,
      large: sunnyside,
    },
  },
  {
    id: 5,
    title: "Expense Tracker",
    skills: ["Html", "CSS", "JavaScript"],
    projectUrl: "https://sr-expense-tracker.netlify.app",
    sourceCodeUrl: "https://github.com/saadrashid304/ExpenseTracker",
    thumbnail: {
      small: expense,
      large: expense,
    },
  },
  {
    id: 6,
    title: "Credit Card Details",
    skills: ["Html", "CSS"],
    projectUrl: "https://sr-credit-card.netlify.app",
    sourceCodeUrl: "https://github.com/saadrashid304/card-details-challenge",
    thumbnail: {
      small: card,
      large: card,
    },
  },
];

export { projects };
