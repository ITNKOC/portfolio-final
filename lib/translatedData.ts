import { Language } from "./translations";

export const getTranslatedPersonalInfo = (language: Language) => {
  const personalInfoBase = {
    name: "Koceila Djaballah",
    location: language === "fr" ? "Montréal, QC" : "Montreal, QC",
    email: "koceila.djaballah@gmail.com",
    phone: "+1 (438) 282-1633",
    github: "https://github.com/ITNKOC",
    linkedin: "https://linkedin.com/in/koceila-djaballah-295716221",
  };

  const bio = {
    fr: "Développeur Full Stack passionné avec une expertise en transformation digitale et intelligence artificielle. Spécialisé dans la conception et le déploiement de solutions SaaS complètes, de l'architecture cloud à l'intégration d'APIs tierces. Expérience concrète dans la mise en production d'applications e-commerce, systèmes POS et plateformes marketing basées sur l'IA générative.",
    en: "Passionate Full Stack Developer with expertise in digital transformation and artificial intelligence. Specialized in designing and deploying complete SaaS solutions, from cloud architecture to third-party API integration. Hands-on experience in deploying e-commerce applications, POS systems, and AI-powered marketing platforms.",
  };

  const title = {
    fr: "Développeur Full Stack | Spécialiste IA | Architecte Solutions SaaS",
    en: "Full Stack Developer | AI Specialist | SaaS Solutions Architect",
  };

  return {
    ...personalInfoBase,
    bio: bio[language],
    title: title[language],
  };
};

export const getTranslatedExperience = (language: Language) => {
  const experienceFr = [
    {
      title: "Développeur Full Stack & Responsable TI",
      company: "Restaurant Di Menna",
      location: "Montréal, QC",
      period: "Novembre 2024 - Décembre 2025",
      duration: "1 an",
      description: [
        "Pilotage de la transformation digitale complète : conception, développement et déploiement de deux applications web en environnement de production",
        "Développement d'une plateforme e-commerce full-stack (Next.js 15/React 19) avec intégration OAuth2 du système POS Lightspeed, synchronisation temps réel via webhooks, module RH et gestion multi-utilisateurs",
        "Création d'une solution SaaS de marketing visuel basée sur l'IA : transformation automatisée d'images alimentaires en quatre variations professionnelles via Gemini 2.5 Flash avec génération de contenu marketing intelligent",
        "Gestion complète de l'infrastructure DevOps : architecture cloud sur Vercel et Neon, pipeline CI/CD avec GitHub Actions, monitoring et optimisation des performances",
      ],
      tech: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Express.js",
        "Google Gemini API",
        "NextAuth",
        "Cloudinary CDN",
        "Tailwind CSS",
        "Docker",
      ],
    },
    {
      title: "Développeur Full Stack & IA (Stage de fin d'études)",
      company: "Plateforme SaaS de Gestion Hospitalière",
      location: "Montréal, QC",
      period: "Décembre 2024 - Avril 2025",
      duration: "5 mois",
      description: [
        "Développement collaboratif d'une plateforme SaaS médicale avec architecture microservices au sein d'une équipe de 4 développeurs",
        "Intégration d'agents LLM affinés avec système RAG pour l'assistance médicale contextuelle et la gestion intelligente des rendez-vous",
        "Conception de modèles d'apprentissage profond (PyTorch, OpenCV) pour la détection automatique de pathologies : tuberculose et paludisme",
        "Mise en place d'un système EMR sécurisé : authentification JWT, chiffrement des données et gestion des permissions",
        "Application de la méthodologie Scrum : planification des sprints, rédaction de user stories, daily stand-ups et rétrospectives",
      ],
      tech: [
        "Python",
        "Flask/FastAPI",
        "React.js",
        "PostgreSQL",
        "Docker",
        "NLP",
        "OpenCV",
        "PyTorch",
        "LangChain",
        "Tailwind CSS",
      ],
    },
    {
      title: "Développeur Web Freelance",
      company: "Clients Variés",
      location: "Montréal & À Distance",
      period: "2021 - 2024",
      duration: "3 ans",
      description: [
        "Conception et livraison de sites web complets (vitrines, e-commerce) pour PME et particuliers",
        "Gestion autonome de projets en cycle complet : analyse des besoins, conception UX/UI, développement, tests, déploiement et maintenance",
      ],
      tech: ["PHP", "JavaScript", "HTML/CSS", "MySQL", "WordPress"],
    },
  ];

  const experienceEn = [
    {
      title: "Full Stack Developer & IT Manager",
      company: "Restaurant Di Menna",
      location: "Montreal, QC",
      period: "November 2024 - December 2025",
      duration: "1 year",
      description: [
        "Led complete digital transformation: design, development and deployment of two web applications in production environment",
        "Developed a full-stack e-commerce platform (Next.js 15/React 19) with OAuth2 integration of Lightspeed POS system, real-time synchronization via webhooks, HR module and multi-user management",
        "Created an AI-powered visual marketing SaaS solution: automated transformation of food images into four professional variations via Gemini 2.5 Flash with intelligent marketing content generation",
        "Complete DevOps infrastructure management: cloud architecture on Vercel and Neon, CI/CD pipeline with GitHub Actions, monitoring and performance optimization",
      ],
      tech: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Express.js",
        "Google Gemini API",
        "NextAuth",
        "Cloudinary CDN",
        "Tailwind CSS",
        "Docker",
      ],
    },
    {
      title: "Full Stack & AI Developer (Final Internship)",
      company: "Hospital Management SaaS Platform",
      location: "Montreal, QC",
      period: "December 2024 - April 2025",
      duration: "5 months",
      description: [
        "Collaborative development of a medical SaaS platform with microservices architecture within a team of 4 developers",
        "Integration of fine-tuned LLM agents with RAG system for contextual medical assistance and intelligent appointment management",
        "Design of deep learning models (PyTorch, OpenCV) for automatic disease detection: tuberculosis and malaria",
        "Implementation of a secure EMR system: JWT authentication, data encryption and permission management",
        "Application of Scrum methodology: sprint planning, user story writing, daily stand-ups and retrospectives",
      ],
      tech: [
        "Python",
        "Flask/FastAPI",
        "React.js",
        "PostgreSQL",
        "Docker",
        "NLP",
        "OpenCV",
        "PyTorch",
        "LangChain",
        "Tailwind CSS",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Various Clients",
      location: "Montreal & Remote",
      period: "2021 - 2024",
      duration: "3 years",
      description: [
        "Design and delivery of complete websites (showcases, e-commerce) for SMEs and individuals",
        "Autonomous management of full-cycle projects: needs analysis, UX/UI design, development, testing, deployment and maintenance",
      ],
      tech: ["PHP", "JavaScript", "HTML/CSS", "MySQL", "WordPress"],
    },
  ];

  return language === "fr" ? experienceFr : experienceEn;
};

export const getTranslatedProjects = (language: Language) => {
  const projectsFr = [
    {
      title: "DiMenna Express - Plateforme E-commerce",
      subtitle: "Plateforme E-commerce Full-Stack avec Intégration POS",
      description:
        "Plateforme e-commerce complète avec intégration POS Lightspeed en temps réel, gestion RH et module multi-utilisateurs. Solution propriétaire actuellement en production.",
      image: "/images/dimenna-ecommerce.jpg",
      features: [
        "Intégration OAuth2 avec Lightspeed POS pour sync temps réel des produits et inventaire",
        "Système de webhooks pour mises à jour automatiques du catalogue",
        "Module RH complet avec gestion des employés et permissions",
        "Architecture multi-utilisateurs sécurisée avec NextAuth",
        "Dashboard admin avancé pour gestion des commandes et analytics",
        "Optimisation des performances et déploiement cloud (Vercel + Neon)",
      ],
      tech: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "NextAuth",
        "Lightspeed API",
        "Tailwind CSS",
        "Vercel",
      ],
      github: "#",
      demo: "https://dimenna-express-web-app-v2.vercel.app/",
      year: "2024",
      featured: true,
    },
    {
      title: "Site Web Restaurant Di Menna",
      subtitle: "Site Web Complet pour Restaurant Italien Authentique",
      description:
        "Site web moderne et responsive pour Di Menna, restaurant italien authentique établi en 1971. Plateforme centrale pour les réservations, consultation du menu et engagement client. Actuellement en production.",
      image: "/images/dimenna-vitrine.jpg",
      features: [
        "Système de réservation en ligne intégré avec OpenTable",
        "Menu complet avec PDFs téléchargeables et présentation des plats",
        "Galerie photos interactive (GLightbox) et profils des chefs",
        "Section événements spéciaux et témoignages clients avec notes",
        "Support multi-langue, animations fluides (AOS, Framer Motion, Swiper)",
        "Performance optimisée avec lazy loading et font optimization",
      ],
      tech: [
        "Next.js 14",
        "TypeScript",
        "CSS/Bootstrap",
        "Framer Motion",
        "AOS Animations",
        "Swiper",
        "GLightbox",
        "OpenTable API",
      ],
      github: "#",
      demo: "https://dimenna.com",
      year: "2024",
      featured: true,
    },
    {
      title: "Product Scorecard",
      subtitle: "SaaS d'Analyse de Viabilité E-commerce",
      description:
        "Plateforme intelligente d'aide à la décision pour entrepreneurs : évaluation complète de la viabilité commerciale des produits avant l'investissement.",
      image: "/images/product-scorecard.jpg",
      features: [
        "Assistant intelligent en 8 étapes avec collecte de données structurée et sauvegarde automatique",
        "Coach IA contextuel via Google Gemini API adapté aux données produit",
        "Algorithme de scoring propriétaire (0-100) basé sur 8 critères pondérés",
        "Rapports stratégiques automatisés : analyses SWOT, personas clients et recommandations marketing",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Zustand",
        "Gemini 1.5 Flash",
        "Tailwind CSS",
        "Docker",
      ],
      github: "#",
      demo: "https://product-scorecard-yanis.vercel.app/",
      year: "2024",
      featured: true,
    },
    {
      title: "Image4Marketing",
      subtitle: "SaaS de Marketing Visuel par IA",
      description:
        "Application SaaS complète de transformation d'images alimentaires en contenu marketing professionnel via IA générative. Déployée en production pour le Restaurant Di Menna.",
      image: "/images/image4marketing.jpg",
      features: [
        "Processus en 5 étapes : téléchargement, génération de 4 variations optimisées, modifications par chat IA et export avec légendes",
        "Fonctionnalités avancées : authentification NextAuth v5, galerie utilisateur, partage public et limitation de débit",
        "Intégration Gemini Vision pour analyse visuelle automatique et génération de contenu marketing",
        "Variations professionnelles : e-commerce, livraison, réseaux sociaux et bannières hero",
      ],
      tech: [
        "Next.js 14",
        "React 18",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "NextAuth v5",
        "Gemini 2.5 Flash Image",
        "Cloudinary CDN",
        "Sharp",
        "Framer Motion",
      ],
      github: "#",
      demo: "https://image4marketing.vercel.app/",
      year: "2024",
      featured: true,
    },
    {
      title: "Plateforme de Gestion Hospitalière",
      subtitle: "SaaS Médical Intelligent",
      description:
        "Plateforme SaaS médicale avancée avec architecture microservices pour la gestion hospitalière moderne. Projet académique de fin d'études réalisé en équipe de 4 développeurs.",
      image: "/images/hospital.jpg",
      features: [
        "Agents LLM affinés avec système RAG pour l'assistance médicale contextuelle",
        "Modèles d'apprentissage profond pour la détection de pathologies (tuberculose, paludisme)",
        "Système EMR sécurisé avec authentification JWT et chiffrement des données",
        "Méthodologie Scrum appliquée tout au long du développement",
      ],
      tech: [
        "Python",
        "Flask/FastAPI",
        "React.js",
        "PostgreSQL",
        "Docker",
        "NLP",
        "OpenCV",
        "PyTorch",
        "LangChain",
      ],
      github: "#",
      demo: "#",
      year: "2024-2025",
      featured: true,
    },
    {
      title: "Système CBIR",
      subtitle: "Recherche d'Images par Similarité Visuelle",
      description:
        "Moteur de recherche d'images avancé basé sur la similarité visuelle utilisant des techniques de vision par ordinateur.",
      image: "/images/cbir.jpg",
      features: [
        "Extraction de caractéristiques visuelles via descripteurs GLCM (texture) et BiT",
        "Implémentation de 4 métriques de distance pour une pertinence optimale",
        "Interface interactive développée avec Streamlit",
      ],
      tech: ["Python", "OpenCV", "scikit-image", "NumPy", "Streamlit"],
      github: "#",
      demo: "#",
      year: "2024",
    },
    {
      title: "Plateformes E-commerce",
      subtitle: "Projets Full Stack Multi-Technologies",
      description:
        "Différentes plateformes e-commerce développées avec diverses stacks technologiques.",
      image: "/images/ecommerce.jpg",
      features: [
        "E-commerce PHP : Boutique de vêtements avec architecture MVC",
        "E-commerce MERN : Plateforme de parfumerie avec API RESTful et Redux",
        "Gestion complète de catalogue et systèmes de paiement sécurisés",
      ],
      tech: ["PHP", "MySQL", "MongoDB", "Express.js", "React", "Node.js"],
      github: "#",
      demo: "#",
      year: "2023",
    },
    {
      title: "Clone Uber",
      subtitle: "Application Mobile de Transport",
      description:
        "Application mobile complète de transport avec interfaces séparées pour clients et chauffeurs.",
      image: "/images/uber-clone.jpg",
      features: [
        "Géolocalisation en temps réel via Google Maps API",
        "Authentification Firebase et paiement intégré",
        "Architecture backend serverless et évolutive",
      ],
      tech: ["Flutter", "Firebase", "Google Maps API"],
      github: "#",
      demo: "#",
      year: "2023",
    },
  ];

  const projectsEn = [
    {
      title: "DiMenna Express - E-commerce Platform",
      subtitle: "Full-Stack E-commerce Platform with POS Integration",
      description:
        "Complete e-commerce platform with real-time Lightspeed POS integration, HR management and multi-user module. Proprietary solution currently in production.",
      image: "/images/dimenna-ecommerce.jpg",
      features: [
        "OAuth2 integration with Lightspeed POS for real-time product and inventory sync",
        "Webhook system for automatic catalog updates",
        "Complete HR module with employee and permission management",
        "Secure multi-user architecture with NextAuth",
        "Advanced admin dashboard for order management and analytics",
        "Performance optimization and cloud deployment (Vercel + Neon)",
      ],
      tech: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "NextAuth",
        "Lightspeed API",
        "Tailwind CSS",
        "Vercel",
      ],
      github: "#",
      demo: "https://dimenna-express-web-app-v2.vercel.app/",
      year: "2024",
      featured: true,
    },
    {
      title: "Di Menna Restaurant Website",
      subtitle: "Complete Website for Authentic Italian Restaurant",
      description:
        "Modern and responsive website for Di Menna, authentic Italian restaurant established in 1971. Central platform for reservations, menu consultation and customer engagement. Currently in production.",
      image: "/images/dimenna-vitrine.jpg",
      features: [
        "Online reservation system integrated with OpenTable",
        "Complete menu with downloadable PDFs and dish presentations",
        "Interactive photo gallery (GLightbox) and chef profiles",
        "Special events section and customer reviews with ratings",
        "Multi-language support, smooth animations (AOS, Framer Motion, Swiper)",
        "Optimized performance with lazy loading and font optimization",
      ],
      tech: [
        "Next.js 14",
        "TypeScript",
        "CSS/Bootstrap",
        "Framer Motion",
        "AOS Animations",
        "Swiper",
        "GLightbox",
        "OpenTable API",
      ],
      github: "#",
      demo: "https://dimenna.com",
      year: "2024",
      featured: true,
    },
    {
      title: "Product Scorecard",
      subtitle: "E-commerce Viability Analysis SaaS",
      description:
        "Intelligent decision-making platform for entrepreneurs: comprehensive evaluation of product commercial viability before investment.",
      image: "/images/product-scorecard.jpg",
      features: [
        "Intelligent 8-step assistant with structured data collection and automatic saving",
        "Contextual AI coach via Google Gemini API adapted to product data",
        "Proprietary scoring algorithm (0-100) based on 8 weighted criteria",
        "Automated strategic reports: SWOT analyses, customer personas and marketing recommendations",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Zustand",
        "Gemini 1.5 Flash",
        "Tailwind CSS",
        "Docker",
      ],
      github: "#",
      demo: "https://product-scorecard-yanis.vercel.app/",
      year: "2024",
      featured: true,
    },
    {
      title: "Image4Marketing",
      subtitle: "AI-Powered Visual Marketing SaaS",
      description:
        "Complete SaaS application for transforming food images into professional marketing content via generative AI. Deployed in production for Restaurant Di Menna.",
      image: "/images/image4marketing.jpg",
      features: [
        "5-step process: upload, generation of 4 optimized variations, AI chat modifications and export with captions",
        "Advanced features: NextAuth v5 authentication, user gallery, public sharing and rate limiting",
        "Gemini Vision integration for automatic visual analysis and marketing content generation",
        "Professional variations: e-commerce, delivery, social media and hero banners",
      ],
      tech: [
        "Next.js 14",
        "React 18",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "NextAuth v5",
        "Gemini 2.5 Flash Image",
        "Cloudinary CDN",
        "Sharp",
        "Framer Motion",
      ],
      github: "#",
      demo: "https://image4marketing.vercel.app/",
      year: "2024",
      featured: true,
    },
    {
      title: "Hospital Management Platform",
      subtitle: "Intelligent Medical SaaS",
      description:
        "Advanced medical SaaS platform with microservices architecture for modern hospital management. Academic capstone project completed in a team of 4 developers.",
      image: "/images/hospital.jpg",
      features: [
        "Fine-tuned LLM agents with RAG system for contextual medical assistance",
        "Deep learning models for disease detection (tuberculosis, malaria)",
        "Secure EMR system with JWT authentication and data encryption",
        "Scrum methodology applied throughout development",
      ],
      tech: [
        "Python",
        "Flask/FastAPI",
        "React.js",
        "PostgreSQL",
        "Docker",
        "NLP",
        "OpenCV",
        "PyTorch",
        "LangChain",
      ],
      github: "#",
      demo: "#",
      year: "2024-2025",
      featured: true,
    },
    {
      title: "CBIR System",
      subtitle: "Visual Similarity Image Search",
      description:
        "Advanced image search engine based on visual similarity using computer vision techniques.",
      image: "/images/cbir.jpg",
      features: [
        "Visual feature extraction via GLCM (texture) and BiT descriptors",
        "Implementation of 4 distance metrics for optimal relevance",
        "Interactive interface developed with Streamlit",
      ],
      tech: ["Python", "OpenCV", "scikit-image", "NumPy", "Streamlit"],
      github: "#",
      demo: "#",
      year: "2024",
    },
    {
      title: "E-commerce Platforms",
      subtitle: "Full Stack Multi-Technology Projects",
      description:
        "Various e-commerce platforms developed with diverse technology stacks.",
      image: "/images/ecommerce.jpg",
      features: [
        "PHP E-commerce: Clothing store with MVC architecture",
        "MERN E-commerce: Perfumery platform with RESTful API and Redux",
        "Complete catalog management and secure payment systems",
      ],
      tech: ["PHP", "MySQL", "MongoDB", "Express.js", "React", "Node.js"],
      github: "#",
      demo: "#",
      year: "2023",
    },
    {
      title: "Uber Clone",
      subtitle: "Mobile Transportation Application",
      description:
        "Complete mobile transportation application with separate interfaces for customers and drivers.",
      image: "/images/uber-clone.jpg",
      features: [
        "Real-time geolocation via Google Maps API",
        "Firebase authentication and integrated payment",
        "Serverless and scalable backend architecture",
      ],
      tech: ["Flutter", "Firebase", "Google Maps API"],
      github: "#",
      demo: "#",
      year: "2023",
    },
  ];

  return language === "fr" ? projectsFr : projectsEn;
};

export const getTranslatedEducation = (language: Language) => {
  const educationFr = [
    {
      degree: "DEC en Programmation Web et Intelligence Artificielle",
      school: "Institut Teccart",
      location: "Montréal, QC",
      period: "Janvier 2023 - Avril 2025",
      description:
        "Formation intensive en développement d'applications intégrant l'intelligence artificielle et technologies web modernes. Projets pratiques : vision par ordinateur, plateformes SaaS, apprentissage profond et méthodologies Agile/Scrum.",
    },
    {
      degree: "Baccalauréat en Informatique",
      school: "Université Abderrahmane Mira",
      location: "Béjaïa, Algérie",
      period: "2019 - Septembre 2022",
      description:
        "Algorithmes avancés, structures de données, génie logiciel, bases de données et fondamentaux de l'intelligence artificielle. Équivalence officielle obtenue du gouvernement du Québec (MIFI).",
    },
  ];

  const educationEn = [
    {
      degree: "DEC in Web Programming and Artificial Intelligence",
      school: "Institut Teccart",
      location: "Montreal, QC",
      period: "January 2023 - April 2025",
      description:
        "Intensive training in application development integrating artificial intelligence and modern web technologies. Practical projects: computer vision, SaaS platforms, deep learning and Agile/Scrum methodologies.",
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      school: "Abderrahmane Mira University",
      location: "Bejaia, Algeria",
      period: "2019 - September 2022",
      description:
        "Advanced algorithms, data structures, software engineering, databases and artificial intelligence fundamentals. Official equivalence obtained from the Government of Quebec (MIFI).",
    },
  ];

  return language === "fr" ? educationFr : educationEn;
};

export const getTranslatedLanguages = (language: Language) => {
  const languagesFr = [
    { language: "Français", level: "Langue Maternelle" },
    { language: "Anglais", level: "Professionnel (B2)" },
    { language: "Arabe", level: "Courant" },
    { language: "Kabyle", level: "Langue Maternelle" },
    { language: "Espagnol", level: "Notions de base (A2)" },
  ];

  const languagesEn = [
    { language: "French", level: "Native Language" },
    { language: "English", level: "Professional (B2)" },
    { language: "Arabic", level: "Fluent" },
    { language: "Kabyle", level: "Native Language" },
    { language: "Spanish", level: "Basic (A2)" },
  ];

  return language === "fr" ? languagesFr : languagesEn;
};

export const skills = {
  languages: [
    { name: "Python", level: 95, category: "expert" },
    { name: "JavaScript", level: 95, category: "expert" },
    { name: "TypeScript", level: 80, category: "expert" },
    { name: "Java", level: 90, category: "advanced" },
    { name: "C/C++", level: 65, category: "advanced" },
    { name: "C#", level: 75, category: "advanced" },
    { name: "PHP", level: 80, category: "advanced" },
    { name: "Dart", level: 50, category: "base" },
    { name: "SQL", level: 95, category: "advanced" },
  ],
  frontend: [
    { name: "Next.js", level: 95 },
    { name: "React", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Flutter", level: 50 },
    { name: "Framer Motion", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 90 },
    { name: "Flask", level: 85 },
    { name: "FastAPI", level: 85 },
  ],
  ai: [
    { name: "PyTorch", level: 85 },
    { name: "LangChain", level: 90 },
    { name: "HuggingFace", level: 80 },
    { name: "Google Gemini API", level: 95 },
    { name: "OpenCV", level: 85 },
    { name: "RAG", level: 90 },
    { name: "NLP", level: 85 },
  ],
  databases: [
    { name: "PostgreSQL", level: 90 },
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 85 },
    { name: "Prisma ORM", level: 95 },
  ],
  devops: [
    { name: "Docker", level: 85 },
    { name: "Git/GitHub", level: 95 },
    { name: "CI/CD", level: 85 },
    { name: "Vercel", level: 90 },
    { name: "AWS", level: 75 },
    { name: "Azure", level: 75 },
  ],
};
