/* ======================================================
   DATA.JS — Single source of truth for all CV content
   ====================================================== */

export const personalInfo = {
  name: "Ankit Kumar Singh",
  tagline: "Full-Stack Developer & CS Student",
  bio: `Passionate Computer Science student at Lovely Professional University with a strong foundation in full-stack web development and data structures. I love building responsive, user-friendly web applications and am always eager to learn new technologies. With experience in Java, JavaScript, PHP, and modern frameworks like React and Node.js, I bring creative problem-solving skills to every project.`,
  email: "ankit010106@gmail.com",
  phone: "+91 9435763184",
  linkedin: "https://linkedin.com/in/ankit2006",
  github: "https://github.com/ankit-0131",
  resumeLink: "/images/General CV.pdf",
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "PHP", level: 70 },
      { name: "Python", level: 75 },
      { name: "C++", level: 70 },
    ],
  },
  {
    category: "Web Technologies",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React.js", level: 75 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    category: "Tools & Databases",
    items: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 65 },
      { name: "Git", level: 85 },
      { name: "Linux", level: 70 },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem-Solving", level: 90 },
      { name: "Time Management", level: 85 },
      { name: "Team Collaboration", level: 88 },
      { name: "Adaptability", level: 85 },
    ],
  },
];

export const projects = [
  {
    title: "Rent-A-Ride",
    description:
      "Designed and developed a responsive frontend for a Car Rental platform tailored for college students using HTML, CSS, and JavaScript. Implemented user authentication interfaces with light and dark theme toggle, structured vehicle listing components, and enhanced UX with smooth CSS transitions and scroll-reveal animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/",
    github: "https://github.com/ankit-0131/Rent-A-Ride",
    period: "Oct 2025 – Nov 2025",
    highlights: [
      "Responsive car rental platform for college students",
      "Light & dark theme toggle",
      "Card-based vehicle listing with clear pricing",
      "Smooth CSS transitions & scroll-reveal animations",
    ],
  },
  {
    title: "Land Tax & Property Management System",
    description:
      "Engineered a full-stack Land & Property Management System using PHP and MySQL to manage and track land records efficiently. Developed optimized CRUD operations, designed a normalized relational database schema, and implemented secure backend architecture with session-based authentication and server-side validation.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/images/managment.png",
    github: "https://github.com/ankit-0131/Property-and-Tax-Managment-System",
    period: "Feb 2025 – Apr 2025",
    highlights: [
      "Full-stack CRUD system with PHP & MySQL",
      "Normalized relational database schema",
      "Session-based authentication & server-side validation",
      "Fast search functionality & accurate record retrieval",
    ],
  },
];

export const training = [
  {
    title: "Data Structures using C++",
    organization: "CipherSchools",
    period: "Jun 2025 – Jul 2025",
    description:
      "This course covers the fundamentals of data structures and algorithms using C++. It explores various data structures, including arrays, linked lists, stacks, queues, trees, and graphs, and introduces common algorithmic techniques such as sorting, searching, and dynamic programming.",
    image: "/images/Training.png",
    link: "https://www.cipherschools.com/certificate/preview?id=689ee4dfb0ddec34f906ecc3",
  },
];

export const certificates = [
  {
    title: "Privacy and Security in Online Social Media",
    provider: "NPTEL",
    period: "Apr 2025",
    type: "MOOC",
    image: "/images/NPTEL-COURSE.png",
    description: "This course delves into the critical issues of privacy and security in online social media. It examines the various threats and vulnerabilities that users face, as well as the strategies and techniques available for protecting personal information in the digital realm.",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs79/Course/NPTEL25CS79S14750046804479744.pdf",
  },
  {
    title: "Packet Switching Networks and Algorithm",
    provider: "Coursera",
    period: "Nov 2024",
    type: "MOOC",
    image: "/images/packet.png",
    description: "In this course, I learn the fundamentals of packet switching networks from both external and internal perspectives—understanding how the network provides services to the transport layer, and how it handles routing, addressing, and congestion internally",
    link: "https://www.coursera.org/account/accomplishments/verify/NCUXUHFS9UZ4",
  },
  {
    title: "Peer-to-Peer Protocols and Local Area Networks",
    provider: "Coursera",
    period: "Oct 2024",
    type: "MOOC",
    image: "/images/peer-to-peer.png",
    description: "This course explores the fundamentals of peer-to-peer (P2P) protocols and local area networks (LANs). It covers the principles of P2P systems, where devices can act as both clients and servers, and examines the architecture and operation of local area networks, including Ethernet and Wi-Fi technologies.",
    link: "https://www.coursera.org/account/accomplishments/verify/TR4BAWNBUUFR",
  },
  {
    title: "Fundamentals of Network Communication",
    provider: "Coursera",
    period: "Oct 2024",
    type: "MOOC",
    image: "/images/fundamentals.png",
    description: "This course introduces the fundamentals of network communication, covering the basic principles of how data is transmitted and received across networks. It explores the essential concepts that enable communication between devices, providing a solid foundation for understanding more complex networking topics.",
    link: "https://www.coursera.org/account/accomplishments/verify/FC7TYMC5XD2Z",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    provider: "Coursera(Google)",
    period: "Sept 2024",
    type: "Certification",
    image: "/images/Bits and Bytes.png",
    description: "This course introduces the fundamental concepts of computer networking, covering the essential building blocks of how devices communicate with each other. It explores the basic principles of network communication, providing a solid foundation for understanding how data is transmitted and received across networks.",
    link: "https://www.coursera.org/account/accomplishments/verify/DVRLRXHG5XNE",
  },
];

export const achievements = [
  {
    title: "3-Star Silver Badge",
    platform: "HackerRank",
    badge: "Learner 3-Star Silver",
    date: "Nov 2025",
    icon: "hackerrank",
  },
  {
    title: "MongoDB Indexing Design Fundamentals",
    platform: "MongoDB",
    badge: "Learner Badge",
    date: "Jun 2025",
    icon: "mongodb",
  },
];

export const education = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    grade: "CGPA: 6.61",
    period: "Aug 2023 – Present",
    current: true,
  },
  {
    institution: "Kendriya Vidyalaya No.1 Air Force Station Adampur Punjab",
    degree: "Intermediate (12th)",
    field: "",
    grade: "Percentage: 68%",
    period: "Apr 2022 – Mar 2023",
    current: false,
  },
  {
    institution: "Kendriya Vidyalaya Airforce Station Avadi Chennai",
    degree: "Matriculation (10th)",
    field: "",
    grade: "Percentage: 85%",
    period: "Apr 2020 – Mar 2021",
    current: false,
  },
];
