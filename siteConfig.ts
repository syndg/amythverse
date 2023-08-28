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
    name: "Video Editing",
    content: "Dummy placeholder text here.",
    tabname: "video-editing",
    listItems: [
      "From old school cinematic to modern style editing, we've got it all covered.",
      "Use of transitions, overlays and other effects to make your video look top-notch.",
      "Experimentation with frames when you have limited number of clips.",
      "Enhance the visual impact of your project with our exquisite color grading from vibrant hues to subtle tones",
      "Editing of your videos for social media platforms like Instagram, Facebook, YouTube, etc.",
      "Music videos, Pre-wedding & Wedding, live event compilations, reels, short videos, Ad. videos, etc.",
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
    listItems: [
      "Understanding the Digital Audio Workstation (DAW).",
      "Arranging instruments and layers in your track.",
      "Basics of synthesis, sampling, sound design & processing.",
      "Exploring top industry level VST plugins and techniques.",
      "Vocal recording & production, processing harmonies and ad-libs.",
      "Tips and tricks used by top producers for a faster workflow & efficiency.",
      "Achieving a clean mix in any genre.",
      "Mastering your track for different platforms.",
    ],
  },
  {
    name: "Music Composition 101",
    content: "Dummy placeholder text here.",
    tabname: "music-composition-101",
    listItems: [
      "Writing and structuring a song/soundtrack.",
      "Usage and layering of instruments and different sounds.",
      "Basics of music theory, song structure based on different genres and concepts.",
      "Use of shifting chord progressions, transitions and ear candies to make your track a bit more spicy.",
      "Basic idea of a DAW for tracking your composition.",
    ],
  },
  {
    name: "Content Creator Package",
    content: "Dummy placeholder text here.",
    tabname: "singer-songwriter-package",
    listItems: [
      "Unplugged instrument based production of your track.",
      "Minimalistic arrangement and layering.",
      "Creative ways of shooting and editing your content using minimal equipments.",
      "DIY approach to recoding and sound design techniques.",
      "Natural sounding vocal production and processing.",
      "Standard clean mix and master for major platforms.",
    ],
  },
  {
    name: "Modern Guitar",
    content: "Dummy placeholder text here.",
    tabname: "guitar",
    listItems: [
      "Practices and exercisses for effective playing.",
      "Basics of music theory.",
      "Fundamentals of rhythm, chords and finger picking.",
      "Essential tips on melody making and use of modes.",
      "Exploring different styles of playing based on different genres.",
      "Basics of recording and processing your guitar tracks on a DAW.",
    ],
  },
  {
    name: "Commercial Vocal",
    content: "Dummy placeholder text here.",
    tabname: "vocal",
    listItems: [
      "Developing your vocal range & control through targetted vocal exercises.",
      "Personalised exercises taken from both Indian and Western practices.",
      "Master the art of vocal improvisation & vocal dynamics.",
      "Find the emotional and confident spot in your vocal texture.",
      "Understanding vocal harmonization.",
      "Build confidence through performance coaching & stage performance exercises.",
    ],
  },
];

export type Sitetabs = typeof tabs;
export type SiteServices = typeof Services;
export type SiteCourses = typeof Courses;
