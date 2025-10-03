export const myProjects = [
    {
      id: 1,
      title: "Prolainat - ticketing System",
      description:
        "A web application for ticket management that centralizes, tracks, and resolves requests or incidents within an organization.",
      subDescription: [
      "Developed fullstack with React for the frontend and Spring Boot for the backend.",
    "Implemented a system for creating, updating, tracking, and closing tickets.",
    "Secured authentication with JWT and role-based access control using Spring Security.",
    "Enhanced session protection with secure cookies (HttpOnly, Secure, SameSite).",
    "Built a modern, responsive interface with Tailwind CSS for better user experience.",
    "Integrated postgresql with Spring Data JPA to ensure reliable data persistence.",
    ],
      href: "",
      logo: "",
      images: [
        "/assets/projects/prolainat_ticket/gestion ticket.png",
        "/assets/projects/prolainat_ticket/dettaille.png",
         "/assets/projects/prolainat_ticket/creation.png", 
        "/assets/projects/prolainat_ticket/basedecon.png"],
      tags: [
        {
          id: 1,
          name: "Spring Boot",
          path: "/assets/logos/spring-boot-1.svg",
        },
        {
          id: 2,
          name: "React",
          path: "/assets/logos/react.svg",
        },
        {
          id: 3,
          name: "Postgresql",
          path: "/assets/logos/postgres.png",
        },
        {
          id: 4,
          name: "TailwindCSS",
          path: "/assets/logos/tailwindcss.svg",
        },
      ],
    },
    {
      id: 2,
      title: "TaskFlow - Project Management",
      description:
        "A complete project management web application that enables teams to plan, organize, and track the progress of their tasks and goals.",
        subDescription: [
          "Built with React for the frontend and Spring Boot for the backend, providing a fullstack solution.",
          "Managed projects with associated tasks, deadlines, and progress tracking using an interactive dashboard.",
          "Implemented role-based authentication and secure session management using JWT and Spring Security.",
          "Enhanced user experience with a modern, responsive interface designed with Tailwind CSS.",
          "Integrated a chatbot powered by the model 'qwen2.5-vl-32b-instruct' to assist users in navigating tasks and answering project-related queries.",
          "Connected to a MySQL database through Spring Data JPA for reliable data storage.",
        ],
      href: "https://github.com/adambouzid/Projet_adamBouzid_pfa_taskmanager",
      logo: "",
      images: [
        "/assets/projects/taskflow/aiassist.png",
        "/assets/projects/taskflow/kanban.png",
        "/assets/projects/taskflow/logintask.png"
      ],
      tags: [
        {
          id: 5,
          name: "Spring",
          path: "/assets/logos/icons8-spring-boot-144.png",
        },
        {
          id: 2,
          name: "React",
          path: "/assets/logos/react.svg",
        },
        {
          id: 3,
          name: "MySQL",
          path: "/assets/logos/mysql.png",
        },
        {
          id: 4,
          name: "TailwindCSS",
          path: "/assets/logos/tailwindcss.svg",
        },

        {
          id: 1,
          name: "Qween.ai",
          path: "/assets/logos/qwen.png",
        },
      ],
    },
    {
      id: 3,
      title: "Cabinet Bentaibi - Desktop Management System",
      description:
        " A comprehensive desktop application for managing a physiotherapy clinic's daily operations including patient management, appointment scheduling, and billing with complete audit trails.",
        subDescription: [
          "Built full-stack desktop app with React + Electron frontend and Express.js backend.",
          "Implemented patient management, session scheduling, and billing with Paid/Unpaid status tracking.",
          "Secured authentication with JWT tokens and BCrypt password hashing with role-based access control.",
          "Designed intuitive UX for non-technical staff with guided workflows and clear visual indicators.",
          "Generated professional PDF documents for invoices, treatment calendars, and patient records.",
          "Integrated SQLite database with comprehensive action history logging for audit compliance.",
          "Established local network data synchronization with mobile devices via WiFi REST endpoints.",
        ],
      href: "https://vimeo.com/1118981164?fl=pl&fe=sh",
      logo: "/assets/projects/logo.png",
      images: [
        "/assets/projects/kineben/patient.png",
        "/assets/projects/kineben/logincabinet.png",
        "/assets/projects/kineben/facture.png",
        "/assets/projects/kineben/dashboard.png"
      ],
      tags: [
        {
          id: 1,
          name: "Electron.js",
          path: "/assets/logos/electron-icon.png",
        },
        {
          id: 2,
          name: "React",
          path: "/assets/logos/react.svg",
        },
        {
          id: 3,
          name: "Express.js",
          path: "/assets/logos/Express.svg",
        },
        {
          id: 4,
          name: "SQLite",
          path: "/assets/logos/sqlite.svg",
        },
        {
          id: 5,
          name: "TailwindCSS",
          path: "/assets/logos/tailwindcss.svg",
        },
      ],
    },
    {
      id: 4,
      title: "Cabinet Bentaibi - Mobile Companion",
      description:
        "A mobile companion app providing read-only access to essential practice information with WiFi synchronization and offline caching for healthcare professionals on the move.",
        subDescription: [
          "Developed React-based mobile application with responsive design and touch-optimized interface.",
          "Implemented WiFi-based REST API communication with desktop system for real-time data synchronization.",
          "Built automatic network discovery and manual IP configuration for seamless desktop-mobile connectivity.",
          "Created robust offline caching system to ensure uninterrupted access to critical patient information.",
          "Designed streamlined interface for viewing patients, daily appointments, and payment statuses.",
          "Integrated secure read-only access with JWT authentication inherited from desktop system.",
          "Optimized local network communication with error handling and connection status indicators.",
          "Implemented data synchronization protocols to maintain consistency between desktop and mobile views.",
        ],
      href: "",
      logo: "/assets/projects/logo.png",
      images: [
        "/assets/projects/mobilben/patient.jpg",
        "/assets/projects/mobilben/accueil.jpg",
        "/assets/projects/mobilben/sync.jpg"
      ],
      tags: [
        {
          id: 1,
          name: "ReactNative",
          path: "/assets/logos/react.svg",
        },
        {
          id: 2,
          name: "Node.js",
          path: "/assets/logos/nodedotjs.svg",
        },
        {
          id: 3,
          name: "SQLite",
          path: "/assets/logos/sqlite.svg",
        },

      ],
    },
 ];
export const mySocials = [
      {
        name: "WhatsApp",
        href: "https://wa.me/212766571883",
        icon: "/assets/socials/whatsApp.svg",
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/adam-bouzid-a48b47387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        icon: "/assets/socials/linkedIn.svg",
      },
    ];

    
    export const experiences = [
      {
        title: "Full-Stack Developer Intern",
        job: "Prolainat Maroc",
        date: "July 2024 - August 2024",
        contents: [
          "Designed and developed a web-based ticketing system to optimize internal IT request management.",
          "Implemented CRUD functionalities for creating, updating, tracking, and closing tickets.",
          "Integrated PostgreSQL with Spring Data JPA to ensure reliable and efficient data persistence.",
          "Developed a secure authentication system with JWT and role-based access control using Spring Security.",
          "Implemented advanced security measures including CSRF protection, role validation, and secure cookie handling.",
          "Handled deployment of both desktop and mobile applications, configuring the backend server and database for production use.",
          "Built a modern, responsive, and user-friendly interface with React and Tailwind CSS.",
        ],
      },
      {
        title: "Full-Stack Developer (Freelancer)",
        job: "Cabinet Bentaibi",
        date: "July 2025 – September 2025",
        contents: [
    "Developed a desktop application tailored for physiotherapy practice management, including patient records, appointment scheduling, and treatment tracking.",
    "Implemented secure communication between the desktop application and a companion mobile app, ensuring doctors could access essential patient data in real time.",
    "Designed and optimized a relational database schema to support reliable data storage and retrieval.",
    "Integrated authentication and access control to protect sensitive medical information.",
    "Built a modern and intuitive interface for both desktop and mobile platforms, improving usability for healthcare professionals.",
    "Worked closely with the client to gather requirements, deliver solutions iteratively, and ensure alignment with business needs.",
  ],
      },
    ];
export const Certif = [
  {
    name: "Introduction to Containers with Docker, Kubernetes & OpenShift",
    designation: "IBM / Coursera - 2024",
    src: "/assets/Certif/Docker,Kubernetes&OpenShift.png",
    quote: "Hands-on experience with containerization, orchestration, and DevOps practices."
  },
  {
    name: "HTML, CSS, and Javascript for Web Developers",
    designation: "Johns Hopkins University / Coursera - 2024",
    src: "/assets/Certif/HTML,CSS,andJavascriptforWebDevelopers.png",
    quote: "Mastered the foundations of front-end development with responsive and dynamic websites."
  },
  {
    name: "Interactivity with JavaScript",
    designation: "University of Michigan / Coursera - 2024",
    src: "/assets/Certif/InteractivitywithJavaScript.png",
    quote: "Developed interactive features and dynamic behaviors in web applications."
  },
  {
    name: "Introduction à la Programmation Orientée Objet (C++)",
    designation: "École Polytechnique Fédérale de Lausanne / Coursera - 2024",
    src: "/assets/Certif/Introductionàlaprogrammationorientéeobjet(enC++).png",
    quote: "Built strong foundations in object-oriented programming with C++."
  },
  {
    name: "Introduction to CSS3",
    designation: "University of Michigan / Coursera - 2024",
    src: "/assets/Certif/IntroductiontoCSS3.png",
    quote: "Learned modern styling techniques with CSS3 for responsive UI design."
  },
  {
    name: "Introduction to HTML5",
    designation: "University of Michigan / Coursera - 2024",
    src: "/assets/Certif/IntroductiontoHTML5.png",
    quote: "Structured semantic and accessible web pages using HTML5."
  },
  {
    name: "Introduction to Java and Object-Oriented Programming",
    designation: "University of Pennsylvania / Coursera - 2024",
    src: "/assets/Certif/IntroductiontoJavaandObject-OrientedProgramming.png",
    quote: "Learned Java fundamentals and object-oriented design principles."
  },
  {
    name: "React Basics",
    designation: "Meta / Coursera - 2024",
    src: "/assets/Certif/ReactBasics.png",
    quote: "Built component-based UIs and managed state with React."
  },
  {
    name: "Software Design and Project Management",
    designation: "Hong Kong University of Science and Technology / Coursera - 2024",
    src: "/assets/Certif/SoftwareDesignand ProjectManagement.png",
    quote: "Studied software lifecycle, design principles, and project management."
  },
  {
    name: "The Art of the Job Interview",
    designation: "Big Interview / Coursera - 2024",
    src: "/assets/Certif/TheArtoftheJobInterview.png",
    quote: "Prepared for interviews with effective communication and problem-solving strategies."
  },
  {
    name: "Virtual Networks in Azure",
    designation: "Microsoft Learn / Coursera - 2024",
    src: "/assets/Certif/VirtualNetworksinAzure.png",
    quote: "Explored cloud networking, Azure VNets, and secure deployments."
  }
];