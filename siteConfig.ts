export const tabs = [
  {
    name: "Services",
    path: "/",
  },
  {
    name: "Courses",
    path: "/courses",
  },
];

export const Services = [
  {
    name: "Music Production",
    content: "Dummy placeholder text here.",
    tabname: "music-production",
    listItems: [
      "Arrangement of your composition or cover track.",
      "Production of your tracks using top level plugins and instruments.",
      "From DIY to professional level sound design, recording, mixing and mastering of your tracks which can be of any genre.",
      "Ad-jingles, background scores, feature film scores, instrumentals and karaokes.",
    ],
  },
  {
    name: "Songwriting & Composition",
    content: "Dummy placeholder text here.",
    tabname: "songwriting",
    listItems: [
      "Give your lyrical idea a proper song structure.",
      "Layering and arrangement of the instrumentation of your track.",
      "Composition in multiple styles and genres.",
      "Creative usage of vocal harmonies and ear candies to make your soundtrack more interesting.",
    ],
  },
  {
    name: "Storytelling & Cinematography",
    content: "Dummy placeholder text here.",
    tabname: "storytelling",
    listItems: [
      "Give your idea/music an attractive concept and storyline.",
      "Creative execution of your idea using expert level direction and shot design.",
      "Best possible approach towards the execution of your idea within your budget.",
      "Music videos, Ad videos for startups and small businesses, videos for wedding, fashion, live gigs and other events.",
    ],
  },
  {
    name: "Photography",
    content: "Dummy placeholder text here.",
    tabname: "photography",
    listIems: [
      "Fashion",
      "Portraits",
      "Aesthetic and conceptual",
      "Brand and business products",
      "Wedding and corporate events",
      "Live gigs and events",
      "Behind the scenes",
    ],
  },
  {
    name: "Web Design & Development",
    content: "Dummy placeholder text here.",
    tabname: "web-design",
    listItems: [
      "Primary tech stack - React.js, NextJS, Planetscale, Prisma, TailwindCSS.",
      "Custom CRUD applications for your business.",
      "E-commerce websites.",
      "Developer portfolios and similar static sites.",
      "Content management systems with robust backend APIs.",
      "Dashboards and admin panels for your business.",
    ],
  },
];

export const Courses = [
  {
    name: "Music Production 101",
    content: "Dummy placeholder text here.",
    tabname: "music-production-101",
  },
  {
    name: "Vocal",
    content: "Dummy placeholder text here.",
    tabname: "vocal",
  },
  {
    name: "Guitar",
    content: "Dummy placeholder text here.",
    tabname: "guitar",
  },
  {
    name: "Singer-Songwriter Package",
    content: "Dummy placeholder text here.",
    tabname: "singer-songwriter-package",
  },
  {
    name: "Music composition 101",
    content: "Dummy placeholder text here.",
    tabname: "music-composition-101",
  },
];

export type Sitetabs = typeof tabs;
export type AccordionType = typeof Services;
