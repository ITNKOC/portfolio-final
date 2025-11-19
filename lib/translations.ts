export const translations = {
  fr: {
    // Navbar
    nav: {
      about: "À Propos",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
    },
    // Hero
    hero: {
      greeting: "Bonjour, je suis",
      description: "Développeur Full Stack & Expert IA | Je transforme des idées en",
      descriptionBold: "applications performantes",
      cta1: "TRAVAILLONS ENSEMBLE",
      cta2: "VOIR MES PROJETS",
      scrollDown: "Scroll pour découvrir",
    },
    // About
    about: {
      title: "À Propos",
      subtitle: "de Moi",
      whoAmI: "QUI SUIS-JE",
      education: "FORMATION",
      languages: "LANGUES",
      bioHighlight: "autonomie, créativité et orientation résultats",
      bioEnd: "pour transformer les défis techniques en produits impactants.",
    },
    // Experience
    experience: {
      title: "Expérience",
      subtitle: "Professionnelle",
    },
    // Projects
    projects: {
      title: "Projets",
      subtitle: "Phares",
      clickToView: "Cliquez sur une carte pour voir la démo interactive",
      clickBadge: "Cliquer pour voir",
      demo: "Démo",
      code: "Code",
    },
    // Skills
    skills: {
      title: "Compétences",
      subtitle: "Techniques",
      frontend: "Frontend & UI/UX",
      backend: "Backend & Databases",
      devops: "DevOps & Cloud",
      ai: "Intelligence Artificielle",
    },
    // Contact
    contact: {
      title: "Prenons",
      subtitle: "Contact",
      description: "Une idée de projet ? Discutons de la façon dont je peux vous aider à concrétiser votre vision.",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "Votre email",
      messagePlaceholder: "Votre message",
      send: "Envoyer",
      sending: "Envoi en cours...",
      location: "Localisation",
      email: "Email",
      phone: "Téléphone",
    },
    // Footer
    footer: {
      tagline: "Développeur Full Stack & Expert IA",
      description: "Créer des expériences numériques exceptionnelles avec passion et précision.",
      quickLinks: "Liens Rapides",
      connect: "Restons Connectés",
      rights: "Tous droits réservés.",
      madeWith: "Fait avec",
      and: "et",
    },
  },
  en: {
    // Navbar
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    // Hero
    hero: {
      greeting: "Hello, I'm",
      description: "Full Stack Developer & AI Expert | I transform ideas into",
      descriptionBold: "high-performance applications",
      cta1: "LET'S WORK TOGETHER",
      cta2: "VIEW MY PROJECTS",
      scrollDown: "Scroll to discover",
    },
    // About
    about: {
      title: "About",
      subtitle: "Me",
      whoAmI: "WHO AM I",
      education: "EDUCATION",
      languages: "LANGUAGES",
      bioHighlight: "autonomy, creativity and results orientation",
      bioEnd: "to transform technical challenges into impactful products.",
    },
    // Experience
    experience: {
      title: "Professional",
      subtitle: "Experience",
    },
    // Projects
    projects: {
      title: "Featured",
      subtitle: "Projects",
      clickToView: "Click on a card to see the interactive demo",
      clickBadge: "Click to view",
      demo: "Demo",
      code: "Code",
    },
    // Skills
    skills: {
      title: "Technical",
      subtitle: "Skills",
      frontend: "Frontend & UI/UX",
      backend: "Backend & Databases",
      devops: "DevOps & Cloud",
      ai: "Artificial Intelligence",
    },
    // Contact
    contact: {
      title: "Let's Get",
      subtitle: "In Touch",
      description: "Have a project idea? Let's discuss how I can help bring your vision to life.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      send: "Send",
      sending: "Sending...",
      location: "Location",
      email: "Email",
      phone: "Phone",
    },
    // Footer
    footer: {
      tagline: "Full Stack Developer & AI Expert",
      description: "Creating exceptional digital experiences with passion and precision.",
      quickLinks: "Quick Links",
      connect: "Stay Connected",
      rights: "All rights reserved.",
      madeWith: "Made with",
      and: "and",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.fr;
