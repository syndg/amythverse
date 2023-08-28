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
  },
  {
    name: "Songwriting; Arrangement and Composition",
    content: "Dummy placeholder text here.",
    tabname: "songwriting",
  },
  {
    name: "Storytelling & Cinematography",
    content: "Dummy placeholder text here.",
    tabname: "storytelling",
  },
  {
    name: "Photography",
    content: "Dummy placeholder text here.",
    tabname: "photography",
  },
  {
    name: "Web Design & Development",
    content: "Dummy placeholder text here.",
    tabname: "web-design",
  },
];

export const Courses = [
  {
    name: "Vocal",
    content: "Dummy placeholder text here.",
    tabname: "vocal",
  },
];

export type Sitetabs = typeof tabs;
export type AccordionType = typeof Services;
