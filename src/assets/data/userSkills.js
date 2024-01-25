const calculateYear = () => {
  const joinDate = new Date("2022-09-01").getTime();
  const currentDate = new Date().getTime();
  const milliseconds = currentDate - joinDate;
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = milliseconds / millisecondsInYear;
  return years.toFixed(1);
};

const year = calculateYear();

const userSkills = [
  {
    id: 1,
    name: "HTML",
    experience: year,
  },
  {
    id: 2,
    name: "CSS",
    experience: year,
  },
  {
    id: 3,
    name: "JavaScript",
    experience: year,
  },
  {
    id: 4,
    name: "React.js",
    experience: year,
  },
  {
    id: 5,
    name: "Spring Boot",
    experience: year,
  },
  {
    id: 6,
    name: "Express.js",
    experience: year,
  },
  {
    id: 7,
    name: "Java",
    experience: year,
  },

  {
    id: 8,
    name: "MongoDB",
    experience: year,
  },
  {
    id: 9,
    name: "MS Office",
    experience: year,
  },
  {
    id: 10,
    name: "Microservices",
    experience: year,
  },
];

export { userSkills };
