// ============================================================
//  PORTFOLIO CONTENT: edit only this file to update the site.
// ============================================================
const PORTFOLIO = {
  name: "Sahil Wakhare",                 // short name (navbar + footer)
  fullName: "Sahil Namdev Wakhare",      // hero heading
  tagline: "Software Developer | AI & Cloud Focused",
  // Hero typing animation: "I build ..."
  typedRoles: [
    "AI-Powered Applications",
    "LLM & Gemini Integrations",
    "Cloud-Ready Solutions on AWS",
    "Full-Stack Web Apps",
    "Smart Automation Tools"
  ],
  // Hero badges (Font Awesome 4.7 icon names)
  heroChips: [
    { icon: "fa-microchip", label: "Generative AI" },
    { icon: "fa-comments", label: "LLM Integration" },
    { icon: "fa-cloud", label: "AWS Cloud" },
    { icon: "fa-cubes", label: "Docker & CI/CD" },
    { icon: "fa-code", label: "React & Next.js" },
    { icon: "fa-leaf", label: "Spring Boot" }
  ],
  resume: "assets/download/Sahil_Wakhare_Resume.pdf", // put your resume PDF at this path
  footerText: "Code. Build. Integrate AI. Repeat",

  about: {
    bio: "Software Developer with 1+ years of hands-on experience across 3 companies. I have delivered 10+ production websites and web apps, built 7+ Java modules for enterprise and government platforms, and resolved 100+ bugs and issues. I work with Java, Spring Boot, JavaScript, React.js, Next.js, Node.js, PostgreSQL, MySQL, REST APIs and GraphQL, with a focus on AI-driven development and LLM integration using the Gemini API in Python.",
    details: [
      { label: "Current Role", value: "Associate Developer" },
      { label: "Company", value: "Movinnza" },
      { label: "Education", value: "B.E. Computer Engineering, SPPU (CGPA 7.76)" },
      { label: "Location", value: "Pune, Maharashtra" }
    ],
    photo: "assets/images/profile.jpg"   // put your photo at this path (square works best)
  },

  // "What I Do" focus cards
  focus: [
    {
      icon: "https://img.icons8.com/3d-fluency/94/artificial-intelligence.png",
      title: "Generative AI & LLMs",
      text: "Building intelligent apps with the Gemini API, LLM integration and prompt engineering, from voice and vision assistants to AI-powered product features.",
      tags: ["Gemini API", "LLMs", "Prompting", "OpenCV"]
    },
    {
      icon: "https://img.icons8.com/3d-fluency/94/cloud-development.png",
      title: "Cloud & DevOps",
      text: "AWS Certified. Deploying scalable, secure applications on AWS with Docker containers and automated CI/CD pipelines.",
      tags: ["AWS", "Docker", "CI/CD", "GitHub"]
    },
    {
      icon: "https://img.icons8.com/3d-fluency/94/web-design.png",
      title: "Full-Stack Web Apps",
      text: "Production-grade websites and web apps with React, Next.js, Node.js and Spring Boot, backed by REST & GraphQL APIs.",
      tags: ["React", "Next.js", "Spring Boot", "GraphQL"]
    },
    {
      icon: "https://img.icons8.com/3d-fluency/94/chatbot.png",
      title: "AI-Assisted Coding",
      text: "Shipping faster with ChatGPT, Claude and Gemini for coding, debugging, testing and documentation, with human review on every change.",
      tags: ["ChatGPT", "Claude", "Gemini", "Code Review"]
    }
  ],

  // level = 0 to 100 (adjust to how confident you feel in each)
  skills: [
    { name: "Gemini API, LLM Integration, Prompt Engineering", level: 85 },
    { name: "Generative AI, OpenCV, Speech Recognition", level: 75 },
    { name: "AWS Cloud (EC2, S3, IAM)", level: 75 },
    { name: "Docker, CI/CD, Git, GitHub", level: 75 },
    { name: "AI-Assisted Coding (ChatGPT, Claude, Gemini)", level: 90 },
    { name: "Python", level: 75 },
    { name: "Java, OOP, Multithreading", level: 85 },
    { name: "Spring Boot, Spring MVC, Hibernate", level: 80 },
    { name: "React.js, Next.js", level: 80 },
    { name: "Node.js, REST APIs, GraphQL", level: 75 },
    { name: "JavaScript, HTML5, CSS3", level: 85 },
    { name: "PostgreSQL, MySQL, SQL", level: 80 }
  ],

  experience: [
    {
      date: "Sep 2026 - Present",
      title: "Associate Developer",
      company: "Movinnza, Pune",
      description: "Develop and maintain 10+ full-stack production websites and web apps with React.js, Next.js, Node.js, PostgreSQL and GraphQL. Ship features for the Nexus 360 SaaS platform, integrate REST and third-party APIs, and resolve client-reported bugs in production. Drive AI-assisted development with ChatGPT, Claude and Gemini for debugging, documentation and test case writing, with manual review of all AI output."
    },
    {
      date: "Mar 2026 - Sep 2026",
      title: "Associate Software Engineer Intern",
      company: "Kshetrapati Industries Pvt. Ltd., Pune",
      letter: "assets/letters/kshetrapati-experience-letter.pdf",
      description: "Engineered Java-based enterprise modules for workflow automation, customer management, reporting dashboards and operational tracking. Automated database-driven business workflows to reduce manual data entry, and audited code (including AI-assisted code) to catch logic and security flaws before release."
    },
    {
      date: "Sep 2025 - Feb 2026",
      title: "Software Engineer Intern",
      company: "SETTribe IT Solutions, Pune",
      letter: "assets/letters/settribe-experience-letter.pdf",
      description: "Developed government web platform modules using Java, Spring Boot, SQL and REST APIs. Optimized database queries to reduce response time, resolved defects to strengthen backend reliability, and tested application code for security risks and quality before deployment."
    }
  ],

  // Screenshots of awards / appreciation mails / certificates. Leave [] to hide the section.
  achievements: [
    // "assets/images/achievements/a1.jpg",
  ],

  // icon: any Font Awesome 4.7 icon name (https://fontawesome.com/v4/icons/) OR an image URL
  // pdf: certificate file shown when the card is clicked
  // link: optional verification URL
  certifications: [
    { title: "AWS Certified Cloud Practitioner", provider: "Amazon Web Services", icon: "https://img.icons8.com/color/96/amazon-web-services.png", pdf: "assets/certificates/aws-cloud-practitioner.pdf", link: "https://aws.amazon.com/verification" },
    { title: "Google AI Essentials", provider: "Google via Coursera", icon: "https://img.icons8.com/color/96/google-logo.png", pdf: "assets/certificates/google-ai-essentials.pdf", link: "https://coursera.org/verify/specialization/CI7DVZJK88ET" },
    { title: "Generative AI Productivity Skills", provider: "Microsoft & LinkedIn", icon: "https://img.icons8.com/color/96/microsoft.png", pdf: "assets/certificates/microsoft-linkedin-generative-ai.pdf" },
    { title: "Java + Spring Boot, Spring MVC & Hibernate", provider: "Udemy", icon: "https://img.icons8.com/color/96/spring-logo.png", pdf: "assets/certificates/udemy-java-spring-boot.pdf", link: "https://ude.my/UC-a6a52855-ec7f-447b-83f1-71f79ddd1ec5" }
  ],

  // url: GitHub / live link, leave "" to hide the button
  projects: [
    {
      title: "Curated Canopy Safaris", subtitle: "Safari Booking Website", date: "Live",
      icon: "https://img.icons8.com/3d-fluency/94/elephant.png",
      description: "Wildlife safari booking website with safari packages, detailed itineraries, pricing, blog, contact forms and booking flow with Easebuzz payment gateway. Built on Next.js for routing and rendering, with SEO through Next.js Metadata and JSON-LD structured data, and Sharp image optimization.",
      tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Easebuzz"],
      url: "https://curatedcanopysafaris.com/", cta: "Visit Website", ctaIcon: "fa-globe"
    },
    {
      title: "Cortex AI", subtitle: "Voice & Vision Assistant", date: "Mar 2026",
      icon: "https://img.icons8.com/3d-fluency/94/robot-2.png",
      description: "LLM-powered desktop assistant with a real-time voice pipeline: speech recognition turns commands into text, the Gemini API generates answers and text-to-speech replies instantly. Supports 4 input modes: voice, live camera with OpenCV, PDF Q&A and web search, plus voice automation to open apps, files and websites.",
      tags: ["Python", "Gemini API", "OpenCV", "STT / TTS"],
      url: ""
    },
    {
      title: "Bank Management System", subtitle: "Desktop Banking App", date: "Jan 2026",
      icon: "https://img.icons8.com/3d-fluency/94/bank-building.png",
      description: "Java Swing desktop banking application covering 7 core functions: sign-up, PIN login, deposit, withdrawal, fast cash, balance inquiry and PIN change. Backed by a 3-table MySQL database over JDBC, with OOP design and exception handling that blocks overdrawn withdrawals.",
      tags: ["Java", "Swing / AWT", "JDBC", "MySQL"],
      url: ""
    },
    {
      title: "More on GitHub", subtitle: "github.com/Sahil5000", date: "",
      icon: "https://img.icons8.com/3d-fluency/94/github.png",
      description: "Explore source code for my Java, Spring Boot and web projects, along with practice builds and experiments.",
      tags: ["Java", "Spring Boot", "HTML / CSS", "JavaScript"],
      url: "https://github.com/Sahil5000", cta: "View GitHub", ctaIcon: "fa-github"
    }
  ],

  // Animated numbers shown under the hero
  stats: [
    { value: 1, suffix: "+", label: "Years Experience" },
    { value: 3, suffix: "", label: "Companies" },
    { value: 10, suffix: "+", label: "Production Websites" },
    { value: 100, suffix: "+", label: "Bugs Resolved" }
  ],

  contact: {
    phone: "+91 9356682699",
    email: "ersahilwakhare@gmail.com",
    location: "Pune, Maharashtra",
    whatsapp: "919356682699",            // country code + number, digits only
    linkedin: "https://www.linkedin.com/" // TODO: your LinkedIn profile URL
  }
};
