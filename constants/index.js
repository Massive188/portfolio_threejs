export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
  {
    title: 'Point Of Sale Software - Vamoya',
    desc: 'Showcases food items available to customers and inventory management through admin bridging. Customer can access the menu through a QR code on table to access the menu.',
    subdesc:
      'Built as a unique Software-as-a-Service app with C-Sharp with Unity mobile integration',
    href: 'https://github.com/p3rson101/Foodies',
    texture: '/textures/project/Vamoya.mp4',
    logo: '/assets/vamoya.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/kotlin.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/python.png',
      },

    ],
  },
  {
    title: 'Barbershop Website - Landing Page',
    desc: 'A innovative website design that bring your barber to your home with a unique UI/UX design and much more.',
    subdesc:
      '',
    href: 'https://github.com/p3rson101/Foodies',
    texture: '/textures/project/barberproject.mp4',
    logo: '/assets/barber.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/science.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Figma Motion',
        path: '/assets/figma.svg',
      },
    ],
  },
  {
    title: 'Point Of Sale Software - Hamburger Grill',
    desc: 'An innovative point of sale software SAAS providing solution to resturants and fast food resturants.',
    subdesc:
      'A focus on productivity and Efficiency.',
    href: 'https://github.com/p3rson101/Foodies',
    texture: '/textures/project/pos_system.mp4',
    logo: '/assets/vamoya_rev.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Kotlin.kt',
        path: '/assets/kotlin.png',
      },
      {
        id: 2,
        name: 'Python',
        path: 'assets/python.png',
      },
     
    ],
  },
 
 
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'VS Code',
    pos: 'Software Developer and Designer',
    duration: '2022 - Present',
    title: "A free, open-source code editor developed by Microsoft. It's a popular choice among developers due to its lightweight nature, powerful features, and extensive customization options. VS Code is available for Windows, macOS, and Linux.",
    icon: '/assets/vscodepic.png',
  },
  {
    id: 2,
    name: 'GitHub',
    pos: 'Project Portfolio',
    duration: '2022 - Present',
    title: "A web-based platform that provides version control using Git and facilitates collaboration on software development projects. It allows developers to manage their code, track changes, collaborate with other developers, and maintain multiple versions of a project.",
    icon: '/assets/github-mark-white.png',
  },
  {
    id: 3,
    name: 'Figma',
    pos: 'Designer',
    duration: '2020 - Present',
    title: "  Web-based design tool that allows teams to collaborate on design projects in real-time. It's particularly popular for creating user interfaces (UIs) and prototypes for websites, mobile apps, and other digital products.",
    icon: '/assets/figma.svg',
  },
  {
    id: 4,
    name: 'DeVry University',
    pos: 'Software Design and Programming',
    duration: '2020 - 2024',
    title: "Devry University's Software Design and Programming program equips students with the essential skills to excel in the dynamic field of software development. Through hands-on experience and a strong foundation in programming languages, I as a students learn to design, create, and test efficient software applications.",
    icon: '/assets/devry_logo.png',
   
  },
];
