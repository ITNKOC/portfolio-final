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
    // Personal Info
    personalInfo: {
      title: "Développeur Full Stack | Spécialiste IA | Architecte Solutions SaaS",
      bio: "Développeur Full Stack passionné avec une expertise en transformation digitale et intelligence artificielle. Spécialisé dans la conception et le déploiement de solutions SaaS complètes, de l'architecture cloud à l'intégration d'APIs tierces. Expérience concrète dans la mise en production d'applications e-commerce, systèmes POS et plateformes marketing basées sur l'IA générative.",
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
      jobs: [
        {
          title: "Développeur Full Stack & Responsable TI",
          company: "Restaurant Di Menna",
          description: [
            "Pilotage de la transformation digitale complète : conception, développement et déploiement de deux applications web en environnement de production",
            "Développement d'une plateforme e-commerce full-stack (Next.js 15/React 19) avec intégration OAuth2 du système POS Lightspeed, synchronisation temps réel via webhooks, module RH et gestion multi-utilisateurs",
            "Création d'une solution SaaS de marketing visuel basée sur l'IA : transformation automatisée d'images alimentaires en quatre variations professionnelles via Gemini 2.5 Flash avec génération de contenu marketing intelligent",
            "Gestion complète de l'infrastructure DevOps : architecture cloud sur Vercel et Neon, pipeline CI/CD avec GitHub Actions, monitoring et optimisation des performances",
          ],
        },
        {
          title: "Développeur Full Stack & IA (Stage de fin d'études)",
          company: "Plateforme SaaS de Gestion Hospitalière",
          description: [
            "Développement collaboratif d'une plateforme SaaS médicale avec architecture microservices au sein d'une équipe de 4 développeurs",
            "Intégration d'agents LLM affinés avec système RAG pour l'assistance médicale contextuelle et la gestion intelligente des rendez-vous",
            "Conception de modèles d'apprentissage profond (PyTorch, OpenCV) pour la détection automatique de pathologies : tuberculose et paludisme",
            "Mise en place d'un système EMR sécurisé : authentification JWT, chiffrement des données et gestion des permissions",
            "Application de la méthodologie Scrum : planification des sprints, rédaction de user stories, daily stand-ups et rétrospectives",
          ],
        },
        {
          title: "Développeur Web Freelance",
          company: "Clients Variés",
          description: [
            "Conception et livraison de sites web complets (vitrines, e-commerce) pour PME et particuliers",
            "Gestion autonome de projets en cycle complet : analyse des besoins, conception UX/UI, développement, tests, déploiement et maintenance",
          ],
        },
      ],
    },
    // Projects
    projects: {
      title: "Projets",
      subtitle: "Phares",
      clickToView: "Cliquez sur une carte pour voir la démo interactive",
      clickBadge: "Cliquer pour voir",
      demo: "Démo",
      code: "Code",
      list: [
        {
          title: "DiMenna Express - Plateforme E-commerce",
          subtitle: "Plateforme E-commerce Full-Stack avec Intégration POS",
          description: "Plateforme e-commerce complète avec intégration POS Lightspeed en temps réel, gestion RH et module multi-utilisateurs. Solution propriétaire actuellement en production.",
          features: [
            "Intégration OAuth2 avec Lightspeed POS pour sync temps réel des produits et inventaire",
            "Système de webhooks pour mises à jour automatiques du catalogue",
            "Module RH complet avec gestion des employés et permissions",
            "Architecture multi-utilisateurs sécurisée avec NextAuth",
            "Dashboard admin avancé pour gestion des commandes et analytics",
            "Optimisation des performances et déploiement cloud (Vercel + Neon)",
          ],
        },
        {
          title: "Site Web Restaurant Di Menna",
          subtitle: "Site Web Complet pour Restaurant Italien Authentique",
          description: "Site web moderne et responsive pour Di Menna, restaurant italien authentique établi en 1971. Plateforme centrale pour les réservations, consultation du menu et engagement client. Actuellement en production.",
          features: [
            "Système de réservation en ligne intégré avec OpenTable",
            "Menu complet avec PDFs téléchargeables et présentation des plats",
            "Galerie photos interactive (GLightbox) et profils des chefs",
            "Section événements spéciaux et témoignages clients avec notes",
            "Support multi-langue, animations fluides (AOS, Framer Motion, Swiper)",
            "Performance optimisée avec lazy loading et font optimization",
          ],
        },
        {
          title: "Product Scorecard",
          subtitle: "SaaS d'Analyse de Viabilité E-commerce",
          description: "Plateforme intelligente d'aide à la décision pour entrepreneurs : évaluation complète de la viabilité commerciale des produits avant l'investissement.",
          features: [
            "Assistant intelligent en 8 étapes avec collecte de données structurée et sauvegarde automatique",
            "Coach IA contextuel via Google Gemini API adapté aux données produit",
            "Algorithme de scoring propriétaire (0-100) basé sur 8 critères pondérés",
            "Rapports stratégiques automatisés : analyses SWOT, personas clients et recommandations marketing",
          ],
        },
        {
          title: "Image4Marketing",
          subtitle: "SaaS de Marketing Visuel par IA",
          description: "Application SaaS complète de transformation d'images alimentaires en contenu marketing professionnel via IA générative. Déployée en production pour le Restaurant Di Menna.",
          features: [
            "Processus en 5 étapes : téléchargement, génération de 4 variations optimisées, modifications par chat IA et export avec légendes",
            "Fonctionnalités avancées : authentification NextAuth v5, galerie utilisateur, partage public et limitation de débit",
            "Intégration Gemini Vision pour analyse visuelle automatique et génération de contenu marketing",
            "Variations professionnelles : e-commerce, livraison, réseaux sociaux et bannières hero",
          ],
        },
        {
          title: "Plateforme de Gestion Hospitalière",
          subtitle: "SaaS Médical Intelligent",
          description: "Plateforme SaaS médicale avancée avec architecture microservices pour la gestion hospitalière moderne. Projet académique de fin d'études réalisé en équipe de 4 développeurs.",
          features: [
            "Agents LLM affinés avec système RAG pour l'assistance médicale contextuelle",
            "Modèles d'apprentissage profond pour la détection de pathologies (tuberculose, paludisme)",
            "Système EMR sécurisé avec authentification JWT et chiffrement des données",
            "Méthodologie Scrum appliquée tout au long du développement",
          ],
        },
        {
          title: "Système CBIR",
          subtitle: "Recherche d'Images par Similarité Visuelle",
          description: "Moteur de recherche d'images avancé basé sur la similarité visuelle utilisant des techniques de vision par ordinateur.",
          features: [
            "Extraction de caractéristiques visuelles via descripteurs GLCM (texture) et BiT",
            "Implémentation de 4 métriques de distance pour une pertinence optimale",
            "Interface interactive développée avec Streamlit",
          ],
        },
        {
          title: "Plateformes E-commerce",
          subtitle: "Projets Full Stack Multi-Technologies",
          description: "Différentes plateformes e-commerce développées avec diverses stacks technologiques.",
          features: [
            "E-commerce PHP : Boutique de vêtements avec architecture MVC",
            "E-commerce MERN : Plateforme de parfumerie avec API RESTful et Redux",
            "Gestion complète de catalogue et systèmes de paiement sécurisés",
          ],
        },
        {
          title: "Clone Uber",
          subtitle: "Application Mobile de Transport",
          description: "Application mobile complète de transport avec interfaces séparées pour clients et chauffeurs.",
          features: [
            "Géolocalisation en temps réel via Google Maps API",
            "Authentification Firebase et paiement intégré",
            "Architecture backend serverless et évolutive",
          ],
        },
      ],
    },
    // Skills
    skills: {
      title: "Compétences",
      subtitle: "Techniques",
      languages: "Langages de Programmation",
      frontend: "Développement Frontend",
      backend: "Développement Backend",
      ai: "IA & Apprentissage Automatique",
      databases: "Bases de Données & ORM",
      devops: "DevOps & Cloud",
    },
    // Education
    education: {
      items: [
        {
          degree: "DEC en Programmation Web et Intelligence Artificielle",
          school: "Institut Teccart",
          description: "Formation intensive en développement d'applications intégrant l'intelligence artificielle et technologies web modernes. Projets pratiques : vision par ordinateur, plateformes SaaS, apprentissage profond et méthodologies Agile/Scrum.",
        },
        {
          degree: "Baccalauréat en Informatique",
          school: "Université Abderrahmane Mira",
          description: "Algorithmes avancés, structures de données, génie logiciel, bases de données et fondamentaux de l'intelligence artificielle. Équivalence officielle obtenue du gouvernement du Québec (MIFI).",
        },
      ],
    },
    // Languages
    languagesLabels: {
      nativeLanguage: "Langue Maternelle",
      professional: "Professionnel",
      fluent: "Courant",
      basic: "Notions de base",
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
      contactInfo: "Informations de Contact",
      contactDescription: "N'hésitez pas à me contacter pour discuter de vos projets.",
      followMe: "Suivez-moi sur les réseaux",
      successMessage: "Message envoyé avec succès!",
      errorMessage: "Une erreur s'est produite. Réessayez.",
    },
    // Footer
    footer: {
      tagline: "Développeur Full Stack & Expert IA",
      description: "Créer des expériences numériques exceptionnelles avec passion et précision.",
      taglineAlt: "Développeur Full Stack & Expert IA | Créateur d'expériences digitales innovantes",
      quickLinks: "Liens Rapides",
      connect: "Restons Connectés",
      rights: "Tous droits réservés.",
      madeWith: "Fait avec",
      designedWith: "Conçu avec",
      using: "utilisant",
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
    // Personal Info
    personalInfo: {
      title: "Full Stack Developer | AI Specialist | SaaS Solutions Architect",
      bio: "Passionate Full Stack Developer with expertise in digital transformation and artificial intelligence. Specialized in designing and deploying complete SaaS solutions, from cloud architecture to third-party API integration. Hands-on experience in deploying e-commerce applications, POS systems, and AI-powered marketing platforms.",
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
      jobs: [
        {
          title: "Full Stack Developer & IT Manager",
          company: "Restaurant Di Menna",
          description: [
            "Led complete digital transformation: design, development and deployment of two web applications in production environment",
            "Developed a full-stack e-commerce platform (Next.js 15/React 19) with OAuth2 integration of Lightspeed POS system, real-time synchronization via webhooks, HR module and multi-user management",
            "Created an AI-powered visual marketing SaaS solution: automated transformation of food images into four professional variations via Gemini 2.5 Flash with intelligent marketing content generation",
            "Complete DevOps infrastructure management: cloud architecture on Vercel and Neon, CI/CD pipeline with GitHub Actions, monitoring and performance optimization",
          ],
        },
        {
          title: "Full Stack & AI Developer (Final Internship)",
          company: "Hospital Management SaaS Platform",
          description: [
            "Collaborative development of a medical SaaS platform with microservices architecture within a team of 4 developers",
            "Integration of fine-tuned LLM agents with RAG system for contextual medical assistance and intelligent appointment management",
            "Design of deep learning models (PyTorch, OpenCV) for automatic disease detection: tuberculosis and malaria",
            "Implementation of a secure EMR system: JWT authentication, data encryption and permission management",
            "Application of Scrum methodology: sprint planning, user story writing, daily stand-ups and retrospectives",
          ],
        },
        {
          title: "Freelance Web Developer",
          company: "Various Clients",
          description: [
            "Design and delivery of complete websites (showcases, e-commerce) for SMEs and individuals",
            "Autonomous management of full-cycle projects: needs analysis, UX/UI design, development, testing, deployment and maintenance",
          ],
        },
      ],
    },
    // Projects
    projects: {
      title: "Featured",
      subtitle: "Projects",
      clickToView: "Click on a card to see the interactive demo",
      clickBadge: "Click to view",
      demo: "Demo",
      code: "Code",
      list: [
        {
          title: "DiMenna Express - E-commerce Platform",
          subtitle: "Full-Stack E-commerce Platform with POS Integration",
          description: "Complete e-commerce platform with real-time Lightspeed POS integration, HR management and multi-user module. Proprietary solution currently in production.",
          features: [
            "OAuth2 integration with Lightspeed POS for real-time product and inventory sync",
            "Webhook system for automatic catalog updates",
            "Complete HR module with employee and permission management",
            "Secure multi-user architecture with NextAuth",
            "Advanced admin dashboard for order management and analytics",
            "Performance optimization and cloud deployment (Vercel + Neon)",
          ],
        },
        {
          title: "Di Menna Restaurant Website",
          subtitle: "Complete Website for Authentic Italian Restaurant",
          description: "Modern and responsive website for Di Menna, authentic Italian restaurant established in 1971. Central platform for reservations, menu consultation and customer engagement. Currently in production.",
          features: [
            "Online reservation system integrated with OpenTable",
            "Complete menu with downloadable PDFs and dish presentations",
            "Interactive photo gallery (GLightbox) and chef profiles",
            "Special events section and customer reviews with ratings",
            "Multi-language support, smooth animations (AOS, Framer Motion, Swiper)",
            "Optimized performance with lazy loading and font optimization",
          ],
        },
        {
          title: "Product Scorecard",
          subtitle: "E-commerce Viability Analysis SaaS",
          description: "Intelligent decision-making platform for entrepreneurs: comprehensive evaluation of product commercial viability before investment.",
          features: [
            "Intelligent 8-step assistant with structured data collection and automatic saving",
            "Contextual AI coach via Google Gemini API adapted to product data",
            "Proprietary scoring algorithm (0-100) based on 8 weighted criteria",
            "Automated strategic reports: SWOT analyses, customer personas and marketing recommendations",
          ],
        },
        {
          title: "Image4Marketing",
          subtitle: "AI-Powered Visual Marketing SaaS",
          description: "Complete SaaS application for transforming food images into professional marketing content via generative AI. Deployed in production for Restaurant Di Menna.",
          features: [
            "5-step process: upload, generation of 4 optimized variations, AI chat modifications and export with captions",
            "Advanced features: NextAuth v5 authentication, user gallery, public sharing and rate limiting",
            "Gemini Vision integration for automatic visual analysis and marketing content generation",
            "Professional variations: e-commerce, delivery, social media and hero banners",
          ],
        },
        {
          title: "Hospital Management Platform",
          subtitle: "Intelligent Medical SaaS",
          description: "Advanced medical SaaS platform with microservices architecture for modern hospital management. Academic capstone project completed in a team of 4 developers.",
          features: [
            "Fine-tuned LLM agents with RAG system for contextual medical assistance",
            "Deep learning models for disease detection (tuberculosis, malaria)",
            "Secure EMR system with JWT authentication and data encryption",
            "Scrum methodology applied throughout development",
          ],
        },
        {
          title: "CBIR System",
          subtitle: "Visual Similarity Image Search",
          description: "Advanced image search engine based on visual similarity using computer vision techniques.",
          features: [
            "Visual feature extraction via GLCM (texture) and BiT descriptors",
            "Implementation of 4 distance metrics for optimal relevance",
            "Interactive interface developed with Streamlit",
          ],
        },
        {
          title: "E-commerce Platforms",
          subtitle: "Full Stack Multi-Technology Projects",
          description: "Various e-commerce platforms developed with diverse technology stacks.",
          features: [
            "PHP E-commerce: Clothing store with MVC architecture",
            "MERN E-commerce: Perfumery platform with RESTful API and Redux",
            "Complete catalog management and secure payment systems",
          ],
        },
        {
          title: "Uber Clone",
          subtitle: "Mobile Transportation Application",
          description: "Complete mobile transportation application with separate interfaces for customers and drivers.",
          features: [
            "Real-time geolocation via Google Maps API",
            "Firebase authentication and integrated payment",
            "Serverless and scalable backend architecture",
          ],
        },
      ],
    },
    // Skills
    skills: {
      title: "Technical",
      subtitle: "Skills",
      languages: "Programming Languages",
      frontend: "Frontend Development",
      backend: "Backend Development",
      ai: "AI & Machine Learning",
      databases: "Databases & ORM",
      devops: "DevOps & Cloud",
    },
    // Education
    education: {
      items: [
        {
          degree: "DEC in Web Programming and Artificial Intelligence",
          school: "Institut Teccart",
          description: "Intensive training in application development integrating artificial intelligence and modern web technologies. Practical projects: computer vision, SaaS platforms, deep learning and Agile/Scrum methodologies.",
        },
        {
          degree: "Bachelor's Degree in Computer Science",
          school: "Abderrahmane Mira University",
          description: "Advanced algorithms, data structures, software engineering, databases and artificial intelligence fundamentals. Official equivalence obtained from the Government of Quebec (MIFI).",
        },
      ],
    },
    // Languages
    languagesLabels: {
      nativeLanguage: "Native Language",
      professional: "Professional",
      fluent: "Fluent",
      basic: "Basic",
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
      contactInfo: "Contact Information",
      contactDescription: "Feel free to contact me to discuss your projects.",
      followMe: "Follow me on social media",
      successMessage: "Message sent successfully!",
      errorMessage: "An error occurred. Please try again.",
    },
    // Footer
    footer: {
      tagline: "Full Stack Developer & AI Expert",
      description: "Creating exceptional digital experiences with passion and precision.",
      taglineAlt: "Full Stack Developer & AI Expert | Creator of innovative digital experiences",
      quickLinks: "Quick Links",
      connect: "Stay Connected",
      rights: "All rights reserved.",
      madeWith: "Made with",
      designedWith: "Designed with",
      using: "using",
      and: "and",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.fr;
