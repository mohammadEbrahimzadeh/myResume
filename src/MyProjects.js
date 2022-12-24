// import kasuka from "./img/kasuka.png";
// import trademan from "./img/trademan.png";
// import im250db from "./img/im250db.png";

const MyProjects = [
  {
    title: "وب سایت شرکتی کاسوکا",
    technologies: ["Html & Css", "Responsive Design", "React.Js Modular"],
    cover: process.env.PUBLIC_URL + "/images/kasuka.png",
    link: "https://mohammadebrahimzadeh.github.io/kasuka/",
    Completed: true,
    ClassNames: "kasuka",
  },
  {
    title: "صرافی انلاین تریدمن",
    technologies: [
      "Html & Css",
      "Responsive Design",
      "React.Js Modular",
      "SPA Page",
      "Tradingview Widget",
    ],
    cover: process.env.PUBLIC_URL + "/images/trademan.png",
    link: "https://mohammadebrahimzadeh.github.io/tradeMan/",
    Completed: true,
    ClassNames: "trademan",
  },
  {
    title: "im250db سایت فیلم و سریال ",
    technologies: [
      "Html & Css",
      "Responsive Design",
      "React.Js Modular",
      "SPA Page",
      "API imdb",
      "Iran Sans Font",
    ],
    cover: process.env.PUBLIC_URL + "/images/im250db.png",
    link: "https://mohammadebrahimzadeh.github.io/im250db/",
    Completed: false,
    ClassNames: "im250db",
  },
];
export default MyProjects;
