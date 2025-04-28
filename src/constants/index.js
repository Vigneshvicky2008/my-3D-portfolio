import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Creative Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front-End Web Development",
    company_name: "The Domain hostly training trains",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 5th 2022 - August 4th 2022",
    points: [
      "Gained hands-on experience in building responsive and user-friendly web applications using HTML, CSS, and JavaScript.",
      "Assisted in developing dynamic web applications with React.js, focusing on state management, components, and routing.",
      "Contributed to the design and implementation of seamless user experiences by collaborating with the UI/UX design team and using Figma.",
      "Enhanced web performance by optimizing code, ensuring cross-browser compatibility, and improving mobile responsiveness.",
    ],
  },
  {
    title: "Full Stack Development",
    company_name: "The Mind IT Solution",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 29th 2024 - August 14th 2024",
    points: [
      "Developed both front-end and back-end features using React.js for the UI and Node.js with Express.js for the server-side logic.",
      "Gained experience in working with MongoDB and Mongoose for building and managing databases, ensuring efficient data handling.",
      "Collaborated in a team environment, integrating APIs and implementing authentication and authorization features in web applications.",
      "Enhanced the performance and scalability of web applications by optimizing server-side code and improving database queries.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GST Flow Management System",
    description:
      "I developed a web-based GST flow management system to simplify GST filing and invoice tracking. The system automates tax calculations, improves workflow efficiency, and ensures adherence to GST regulations.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "SQLlite",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Vigneshvicky2008/GST-Flow-Management-System",
  },
  {
    name: "Weather-Updates",
    description:
      "I developed a Weather Updates app using HTML, CSS, and JavaScript, integrating the OpenWeather API. The app provides real-time weather information based on user-entered locations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Vigneshvicky2008/Weather-Updates", 
  },
  {
    name: "Chat-Application",
    description:
      "A real-time chat application developed using the MERN stack, featuring JWT for secure authentication and Socket.io for real-time message delivery. Users can register, log in, and engage in instant, live conversations",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Vigneshvicky2008/Chater-Box",
  },
];

export { services, technologies, experiences, testimonials, projects };
