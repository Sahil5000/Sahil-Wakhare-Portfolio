// ============================================================
//  PORTFOLIO CONTENT: edit only this file to update the site.
// ============================================================
const PORTFOLIO = {
  name: "Sahil Wakhare",                 // short name (navbar + footer)
  fullName: "Sahil Namdev Wakhare",      // hero heading
  honorific: "",                         // optional title before the name in hero and navbar (e.g. "Er.")
  tagline: "Software Developer | AI & Cloud Focused",
  // Hero typing animation: "I build ..."
  typedRoles: [
    "AI-Powered Applications",
    "LLM & Gemini Integrations",
    "Cloud-Ready Solutions on AWS",
    "Full-Stack Web Apps",
    "Smart Automation Tools"
  ],
  // Hero badges (logo image path or Font Awesome 4.7 icon name)
  heroChips: [
    { icon: "assets/icons/gemini.svg", label: "Generative AI" },
    { icon: "assets/icons/python.svg", label: "LLM Integration" },
    { icon: "assets/icons/aws.svg", label: "AWS Cloud" },
    { icon: "assets/icons/docker.svg", label: "Docker & CI/CD" },
    { icon: "assets/icons/react.svg", label: "React & Next.js" },
    { icon: "assets/icons/spring.svg", label: "Spring Boot" }
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
    photo: "assets/images/profile.jpg"   // put your photo at this path
  },

  // "What I Do" focus cards
  focus: [
    {
      logos: ["gemini", "python", "opencv"],
      title: "Generative AI & LLMs",
      text: "Building intelligent apps with the Gemini API, LLM integration and prompt engineering, from voice and vision assistants to AI-powered product features.",
      tags: ["Gemini API", "LLMs", "Prompting", "OpenCV"]
    },
    {
      logos: ["aws", "docker", "githubactions"],
      title: "Cloud & DevOps",
      text: "AWS Certified. Deploying scalable, secure applications on AWS with Docker containers and automated CI/CD pipelines.",
      tags: ["AWS", "Docker", "CI/CD", "GitHub"]
    },
    {
      logos: ["react", "nextjs", "spring"],
      title: "Full-Stack Web Apps",
      text: "Production-grade websites and web apps with React, Next.js, Node.js and Spring Boot, backed by REST & GraphQL APIs.",
      tags: ["React", "Next.js", "Spring Boot", "GraphQL"]
    },
    {
      logos: ["openai", "claude", "gemini"],
      title: "AI-Assisted Coding",
      text: "Shipping faster with ChatGPT, Claude and Gemini for coding, debugging, testing and documentation, with human review on every change.",
      tags: ["ChatGPT", "Claude", "Gemini", "Code Review"]
    }
  ],

  // level = 0 to 100; logos = file names in assets/icons (without extension)
  skills: [
    { name: "Gemini API, LLM Integration, Prompt Engineering", level: 85, logos: ["gemini"] },
    { name: "Generative AI, OpenCV, Speech Recognition", level: 75, logos: ["opencv"] },
    { name: "AWS Cloud (EC2, S3, IAM)", level: 75, logos: ["aws"] },
    { name: "Docker, CI/CD, Git, GitHub", level: 75, logos: ["docker", "git", "github"] },
    { name: "AI-Assisted Coding (ChatGPT, Claude, Gemini)", level: 90, logos: ["openai", "claude"] },
    { name: "Python", level: 75, logos: ["python"] },
    { name: "Java, OOP, Multithreading", level: 85, logos: ["java"] },
    { name: "Spring Boot, Spring MVC, Hibernate", level: 80, logos: ["spring", "hibernate"] },
    { name: "React.js, Next.js", level: 80, logos: ["react", "nextjs"] },
    { name: "Node.js, REST APIs, GraphQL", level: 75, logos: ["nodejs", "graphql"] },
    { name: "JavaScript, HTML5, CSS3", level: 85, logos: ["javascript", "html5", "css3"] },
    { name: "PostgreSQL, MySQL, SQL", level: 80, logos: ["postgresql", "mysql"] }
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

  // docs: files shown with a "View" button (PDF or image)
  education: [
    {
      date: "2021 - 2025",
      degree: "Bachelor of Engineering (Computer Engineering)",
      institute: "G.S.M. Trust's Parvatibai Genba Moze College of Engineering, Wagholi, Pune",
      board: "Savitribai Phule Pune University (SPPU)",
      logo: "assets/icons/sppu-logo.png",
      score: { value: 7.76, max: 10, label: "CGPA" },
      results: ["First Class with Distinction"],
      subjects: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Cyber Security & Digital Forensics", "Blockchain Technology", "High Performance Computing", "Design & Analysis of Algorithms", "Software Testing & Quality Assurance", "Business Intelligence"],
      docs: [
        { label: "Degree Certificate", file: "assets/education/be-degree-certificate.jpg" },
        { label: "Passing Certificate", file: "assets/education/be-passing-certificate.pdf" },
        { label: "Marksheet", file: "assets/education/be-marksheet.pdf" }
      ]
    },
    {
      date: "2020 - 2021",
      degree: "Higher Secondary Certificate (HSC), Science",
      institute: "Pune Divisional Board",
      board: "Maharashtra State Board of Secondary and Higher Secondary Education",
      logo: "assets/icons/msbshse-logo.png",
      score: { value: 73, max: 100, label: "Percent", suffix: "%" },
      results: ["Science Stream"],
      subjects: ["Physics", "Chemistry", "Mathematics & Statistics", "Electronics", "English"],
      docs: [
        { label: "Marksheet", file: "assets/education/hsc-marksheet.pdf" }
      ]
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
    { title: "AWS Certified Cloud Practitioner", provider: "Amazon Web Services", icon: "assets/icons/aws.svg", pdf: "assets/certificates/aws-cloud-practitioner.pdf", link: "https://aws.amazon.com/verification" },
    { title: "Google AI Essentials", provider: "Google via Coursera", icon: "assets/icons/google.png", pdf: "assets/certificates/google-ai-essentials.pdf", link: "https://coursera.org/verify/specialization/CI7DVZJK88ET" },
    { title: "Java + Spring Boot, Spring MVC & Hibernate", provider: "Udemy", icon: "assets/icons/udemy.svg", pdf: "assets/certificates/udemy-java-spring-boot.pdf", link: "https://ude.my/UC-a6a52855-ec7f-447b-83f1-71f79ddd1ec5" },
    { title: "Postman API Fundamentals Student Expert", provider: "Postman", icon: "assets/certificates/postman-api-fundamentals-badge.png", link: "https://api.badgr.io/public/assertions/EXEIn5h5QuyzwCHz1z--kQ" },
    { title: "Generative AI Productivity Skills", provider: "Microsoft & LinkedIn", icon: "assets/icons/microsoft.png", pdf: "assets/certificates/microsoft-linkedin-generative-ai.pdf" },
    { title: "Cyber Job Simulation", provider: "Deloitte via Forage", icon: "assets/certificates/deloitte-logo.svg", pdf: "assets/certificates/deloitte-cyber-job-simulation.pdf" }
  ],

  // url: GitHub / live link, leave "" to hide the button
  projects: [
    {
      title: "Curated Canopy Safaris", subtitle: "Safari Booking Website", date: "Live",
      icon: "assets/projects/curated-canopy-icon.png",
      description: "Wildlife safari booking website with safari packages, detailed itineraries, pricing, blog, contact forms and booking flow with Easebuzz payment gateway. Built on Next.js for routing and rendering, with SEO through Next.js Metadata and JSON-LD structured data, and Sharp image optimization.",
      tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Easebuzz"],
      url: "https://curatedcanopysafaris.com/", cta: "Visit Website", ctaIcon: "fa-globe"
    },
    {
      title: "Cortex AI", subtitle: "Voice & Vision Assistant", date: "Mar 2026",
      icon: "assets/icons/gemini.svg",
      description: "LLM-powered desktop assistant with a real-time voice pipeline: speech recognition turns commands into text, the Gemini API generates answers and text-to-speech replies instantly. Supports 4 input modes: voice, live camera with OpenCV, PDF Q&A and web search, plus voice automation to open apps, files and websites.",
      tags: ["Python", "Gemini API", "OpenCV", "STT / TTS"],
      url: ""
    },
    {
      title: "Bank Management System", subtitle: "Desktop Banking App", date: "Jan 2026",
      icon: "assets/icons/java.svg",
      description: "Java Swing desktop banking application covering 7 core functions: sign-up, PIN login, deposit, withdrawal, fast cash, balance inquiry and PIN change. Backed by a 3-table MySQL database over JDBC, with OOP design and exception handling that blocks overdrawn withdrawals.",
      tags: ["Java", "Swing / AWT", "JDBC", "MySQL"],
      url: ""
    },
    {
      title: "More on GitHub", subtitle: "github.com/Sahil5000", date: "",
      icon: "assets/icons/github.svg",
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
    location: "Pune, Maharashtra",       // text shown on the card
    mapAddress: "Flat No E-1001, Shubh Shagun Society, In-Front of Bollywood Theatre, Old Mundhwa Road, Kharadi, Pune, Maharashtra 411014", // opened in Google Maps
    whatsapp: "919356682699",            // country code + number, digits only
    linkedin: "https://www.linkedin.com/" // TODO: your LinkedIn profile URL
  }
};
