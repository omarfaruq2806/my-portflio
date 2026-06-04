const projects = [
  {
    id: "studynook",
    name: "StudyNook",
    image: "/studynook.png",

    description:
      "StudyNook is a full-stack web application that allows students to find, book, and manage study rooms easily with secure authentication and real-time booking system.",

    tech: [
      "Next.js",
      "Tailwind CSS",
      "BetterAuth",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],

    live: "https://studynook-three.vercel.app",
    client: "https://github.com/omarfaruq2806/study_nook",

    challenges:
      "Handling booking time-slot conflicts and implementing secure JWT authentication with HTTP-only cookies was the most challenging part.",

    improvements:
      "Future improvements include adding real-time availability updates, payment system integration, and mobile app version.",
  },
  {
    id: "skillsphere",
    name: "SkillSphere",
    image: "/skillsphere.png",

    description:
      "SkillSphere is a modern online learning platform where users can explore, view and enroll in skill-based courses with secure authentication and protected routes.",

    tech: [
      "Next.js",
      "Tailwind CSS",
      "DaisyUI",
      "BetterAuth",
      "React Toastify",
      "Framer Motion",
    ],

    live: "https://skill-sphere-beige.vercel.app/",
    client: "https://github.com/omarfaruq2806/Skill-Sphere",

    challenges:
      "Implementing protected routes and managing authentication state across pages while ensuring smooth UX was the main challenge.",

    improvements:
      "Future improvements include adding payment system, course progress tracking, and instructor dashboard.",
  },
  {
    id: "kinkeeper",
    name: "KinKeeper",
    image: "/kinkeeper.png",

    description:
      "KinKeeper is a modern family & relationship activity tracker built with React.js. It helps users manage and visualize daily interactions like calls, texts, and video activities in a simple timeline interface.",

    tech: [
      "React.js",
      "Tailwind CSS",
      "React Context API",
      "React Hooks",
      "React Icons",
      "React Spinners",
    ],

    live: "https://kin-keeper-beta.vercel.app/",
    client: "https://github.com/omarfaruq2806/KinKeeper",

    features: [
      "Interactive activity timeline",
      "Filter activities by Call, Text, and Video",
      "Dynamic state-based UI updates",
      "Fast and responsive React interface",
      "Simple and clean UX",
      "Mobile-friendly design",
    ],

    challenges:
      "Managing dynamic state updates across multiple activity filters and maintaining smooth UI performance was the main challenge.",

    improvements:
      "Future improvements include adding backend integration, user authentication, and real-time sync across devices.",
  },
  {
    id: "digi-tools-hub",
    name: "Digi Tools Hub",
    image: "/digitools.png",

    description:
      "Digi Tools Hub is a modern and responsive web application built with React that allows users to explore various AI tools and digital products in a clean and user-friendly interface.",

    tech: [
      "React JS",
      "Tailwind CSS",
      "JavaScript",
      "JSON Data",
      "React Toastify",
    ],

    live: "https://digi-tools-hub.netlify.app/",
    client: "https://github.com/omarfaruq2806/DIGI_TOOLS",

    features: [
      "Dynamic product cards loaded from JSON data",
      "Responsive modern UI design",
      "Clean card-based layout",
      "Toast notifications",
      "Category-based tool showcase",
      "Mobile responsive design",
    ],

    challenges:
      "Managing dynamic JSON data rendering and keeping UI performance smooth with multiple reusable components was the main challenge.",

    improvements:
      "Future improvements include adding backend integration, user authentication, search filtering, and AI API integration.",
  },
];

export default projects;
