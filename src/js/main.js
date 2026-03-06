import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

const translations = {
  fr: {
    brand: "Beya Bernard‑Junior",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.startup": "Startup",
    "nav.services": "Services",
    "nav.resume": "CV",
    "nav.contact": "Contact",
    "hero.badge": "Disponible pour de nouvelles opportunités",
    "hero.title": "Développeur Full‑Stack & Entrepreneur Tech",
    "hero.subtitle":
      "Création de plateformes web évolutives et de produits SaaS innovants qui résolvent des problèmes concrets.",
    "hero.ctaProjects": "Voir les projets",
    "hero.ctaContact": "Me contacter",
    "about.eyebrow": "À propos",
    "about.title": "Construire le futur, un produit à la fois",
    "about.subtitle":
      "Un parcours complet orienté impact, performance et croissance.",
    "about.placeholder": "Étape suivante : photo + stats.",
    "skills.eyebrow": "Compétences & expertise",
    "skills.title": "Stack technique",
    "skills.subtitle": "Une boîte à outils complète.",
    "skills.placeholder": "Étape suivante : cartes + barres.",
    "footer.tagline": "Développeur full‑stack & entrepreneur tech.",
    "footer.copy": "© 2026 Portfolio. Tous droits réservés.",
    "about.badge": "Disponible pour missions",
    "about.h3": "Développeur full‑stack & entrepreneur tech",
    "about.p1":
      "Je conçois des plateformes web et des produits SaaS centrés sur l’utilisateur, avec une approche orientée produit.",
    "about.p2":
      "Mon objectif est de livrer des solutions qui améliorent la croissance, la performance et la fiabilité.",
    "about.statYears": "Années d'expérience",
    "about.statProjects": "Projets livrés",
    "about.statClients": "Clients satisfaits",
    "skills.front.title": "Frontend",
    "skills.back.title": "Backend",
    "skills.db.title": "Base de données",
    "skills.devops.title": "DevOps / Outils",
    "skills.also": "Également expérimenté avec",
    "projects.p1.title": "Plateforme d’Analyse Entreprise",
    "projects.p1.desc":
      "Plateforme SaaS d’analyse avec data en temps réel, reporting et collaboration.",
    "projects.p2.title": "Générateur de Contenu IA",
    "projects.p2.desc":
      "SaaS utilisant l’IA pour générer du contenu marketing multilingue et SEO‑friendly.",
    "projects.p3.title": "Système de Gestion E‑commerce",
    "projects.p3.desc":
      "Solution e‑commerce complète avec stocks, paiements et analytics client.",
    "projects.live": "Démo en direct",
    "projects.code": "Code",
    "projects.viewAll": "Voir tous les projets",
    "startup.badgeActive": "Actif",
    "startup.badgeBeta": "Bêta",
    "startup.s1.title": "TaskFlow Pro",
    "startup.s1.subtitle": "Gestion de projet réinventée",
    "startup.s1.desc":
      "Plateforme SaaS moderne pour équipes distantes avec collaboration temps réel et automatisations.",
    "startup.s2.title": "DevDocs Hub",
    "startup.s2.subtitle": "Documentation simplifiée",
    "startup.s2.desc":
      "Plateforme de documentation pour développeurs avec contrôle de version et collaboration.",
    "startup.kpiUsers": "Utilisateurs actifs",
    "startup.kpiGrowth": "Croissance mensuelle",
    "startup.kpiMrr": "MRR",
    "startup.cta": "En savoir plus",
    "startup.ctaTitle": "Construire la prochaine grande chose",
    "startup.ctaText":
      "Je combine expertise technique et vision produit pour créer des solutions rentables et impactantes.",
    "startup.ctaBtn": "Entrer en contact",
    "services.s1.title": "Développement d’applications web",
    "services.s1.desc":
      "Applications sur‑mesure, performantes et évolutives, du prototype à la production.",
    "services.s1.li1": "Développement full‑stack",
    "services.s1.li2": "Design responsive",
    "services.s1.li3": "Intégration API",
    "services.s1.li4": "Optimisation des performances",

    "services.s2.title": "Développement de plateformes SaaS",
    "services.s2.desc":
      "Conception, architecture et déploiement de produits SaaS end‑to‑end.",
    "services.s2.li1": "Architecture multi‑tenant",
    "services.s2.li2": "Gestion des abonnements",
    "services.s2.li3": "Authentification utilisateur",
    "services.s2.li4": "Infrastructure évolutive",

    "services.s3.title": "Construction de MVP startup",
    "services.s3.desc":
      "Lancement rapide d’un MVP pour valider votre idée et atteindre le marché.",
    "services.s3.li1": "Prototypage rapide",
    "services.s3.li2": "Validation marché",
    "services.s3.li3": "Développement itératif",
    "services.s3.li4": "Support de lancement",

    "services.s4.title": "Conseil technique",
    "services.s4.desc":
      "Aide à la sélection technologique et à l’architecture pour vos projets.",
    "services.s4.li1": "Revue d’architecture",
    "services.s4.li2": "Revue de code",
    "services.s4.li3": "Choix du stack",
    "services.s4.li4": "Coaching équipe",
    "resume.previewTitle": "Aperçu du CV",
    "resume.updated": "Dernière mise à jour: Mars 2026",
    "resume.includes": "Inclut:",
    "resume.li1": "Expérience professionnelle détaillée",
    "resume.li2": "Stack technique complet",
    "resume.li3": "Formation et certifications",
    "resume.li4": "Projets et réalisations clés",
    "resume.download": "Télécharger le CV (PDF)",
    "resume.highlights": "Highlights",
    "resume.h1": "ans",
    "resume.h1sub": "Expérience en développement",
    "resume.h2": "projets",
    "resume.h2sub": "Livrés avec succès",
    "resume.h3": "startups",
    "resume.h3sub": "Fondées et en croissance",
    "resume.h4": "clients",
    "resume.h4sub": "Satisfaits et fidèles",
    "resume.stackTitle": "Stack technique principal",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.subject": "Sujet",
    "contact.message": "Message",
    "contact.send": "Envoyer le message",
    "contact.infoTitle": "Informations de contact",
    "contact.infoEmail": "Email",
    "contact.infoLocation": "Localisation",
    "contact.quickTitle": "Réponse rapide",
    "contact.quickText":
      "Je réponds généralement sous 24h. Pour une demande urgente, mentionnez‑le dans votre message.",
    "footer.linksTitle": "Liens rapides",
    "footer.connectTitle": "Connecter",
    "footer.made": "Fait avec passion et beaucoup de café.",
  },
  en: {
    brand: "Beya Bernard‑Junior",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.startup": "Startup",
    "nav.services": "Services",
    "nav.resume": "Resume",
    "nav.contact": "Contact",
    "hero.badge": "Available for new opportunities",
    "hero.title": "Full‑Stack Developer & Tech Entrepreneur",
    "hero.subtitle":
      "Building scalable web platforms and innovative SaaS products that solve real problems.",
    "hero.ctaProjects": "View Projects",
    "hero.ctaContact": "Contact Me",
    "about.eyebrow": "About",
    "about.title": "Building the future, one product at a time",
    "about.subtitle":
      "A full journey focused on impact, performance, and growth.",
    "about.placeholder": "Next step: photo + stats.",
    "skills.eyebrow": "Skills & expertise",
    "skills.title": "Tech stack",
    "skills.subtitle": "A complete toolkit for modern apps.",
    "skills.placeholder": "Next step: cards + progress bars.",
    "footer.tagline": "Full‑stack developer & tech entrepreneur.",
    "footer.copy": "© 2026 Portfolio. All rights reserved.",
    "about.badge": "Available for missions",
    "about.h3": "Full‑stack developer & tech entrepreneur",
    "about.p1":
      "I build user‑centric web platforms and SaaS products with a product‑driven mindset.",
    "about.p2":
      "My goal is to deliver solutions that improve growth, performance, and reliability.",
    "about.statYears": "Years of experience",
    "about.statProjects": "Projects delivered",
    "about.statClients": "Happy clients",
    "skills.front.title": "Frontend",
    "skills.back.title": "Backend",
    "skills.db.title": "Database",
    "skills.devops.title": "DevOps / Tools",
    "skills.also": "Also experienced with",
    "projects.p1.title": "Enterprise Analytics Platform",
    "projects.p1.desc":
      "SaaS analytics platform with real‑time data, reporting, and collaboration.",
    "projects.p2.title": "AI‑Powered Content Generator",
    "projects.p2.desc":
      "SaaS using AI to generate multilingual, SEO‑friendly marketing content.",
    "projects.p3.title": "E‑commerce Management System",
    "projects.p3.desc":
      "Complete e‑commerce solution with inventory, payments, and customer analytics.",
    "projects.live": "Live Demo",
    "projects.code": "Code",
    "projects.viewAll": "View All Projects",

    "startup.badgeActive": "Active",
    "startup.badgeBeta": "Beta",
    "startup.s1.title": "TaskFlow Pro",
    "startup.s1.subtitle": "Project Management Reimagined",
    "startup.s1.desc":
      "Modern SaaS platform for remote teams with real‑time collaboration and automation.",
    "startup.s2.title": "DevDocs Hub",
    "startup.s2.subtitle": "Documentation Made Simple",
    "startup.s2.desc":
      "Developer documentation platform with version control and collaboration.",
    "startup.kpiUsers": "Active users",
    "startup.kpiGrowth": "Monthly growth",
    "startup.kpiMrr": "MRR",
    "startup.cta": "Learn more",
    "startup.ctaTitle": "Building the next big thing",
    "startup.ctaText":
      "I combine technical expertise with product vision to create profitable, impactful solutions.",
    "startup.ctaBtn": "Get in touch",
    "services.s1.title": "Web application development",
    "services.s1.desc":
      "Custom, scalable, and performant web apps from prototype to production.",
    "services.s1.li1": "Full‑stack development",
    "services.s1.li2": "Responsive design",
    "services.s1.li3": "API integration",
    "services.s1.li4": "Performance optimization",

    "services.s2.title": "SaaS platform development",
    "services.s2.desc":
      "End‑to‑end SaaS product design, architecture, and deployment.",
    "services.s2.li1": "Multi‑tenant architecture",
    "services.s2.li2": "Subscription management",
    "services.s2.li3": "User authentication",
    "services.s2.li4": "Scalable infrastructure",

    "services.s3.title": "Startup MVP building",
    "services.s3.desc":
      "Launch a fast MVP to validate your idea and reach the market.",
    "services.s3.li1": "Rapid prototyping",
    "services.s3.li2": "Market validation",
    "services.s3.li3": "Iterative development",
    "services.s3.li4": "Launch support",

    "services.s4.title": "Technical consulting",
    "services.s4.desc":
      "Guidance on technology selection and architecture for your projects.",
    "services.s4.li1": "Architecture review",
    "services.s4.li2": "Code review",
    "services.s4.li3": "Tech stack selection",
    "services.s4.li4": "Team mentoring",
    "resume.previewTitle": "Resume Preview",
    "resume.updated": "Last updated: March 2026",
    "resume.includes": "Includes:",
    "resume.li1": "Detailed work experience",
    "resume.li2": "Full tech stack",
    "resume.li3": "Education and certifications",
    "resume.li4": "Key projects and achievements",
    "resume.download": "Download Resume (PDF)",
    "resume.highlights": "Highlights",
    "resume.h1": "years",
    "resume.h1sub": "Development experience",
    "resume.h2": "projects",
    "resume.h2sub": "Successfully delivered",
    "resume.h3": "startups",
    "resume.h3sub": "Founded and growing",
    "resume.h4": "clients",
    "resume.h4sub": "Happy and returning",
    "resume.stackTitle": "Main tech stack",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.infoTitle": "Contact information",
    "contact.infoEmail": "Email",
    "contact.infoLocation": "Location",
    "contact.quickTitle": "Quick response",
    "contact.quickText":
      "I usually reply within 24 hours. For urgent requests, mention it in your message.",
    "footer.linksTitle": "Quick links",
    "footer.connectTitle": "Connect",
    "footer.made": "Made with passion and lots of coffee.",
  },
};

const langToggle = document.querySelector("[data-lang-toggle]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const i18nEls = document.querySelectorAll("[data-i18n]");

let currentLang =
  localStorage.getItem("siteLang") ||
  (navigator.language?.startsWith("fr") ? "fr" : "en");
let currentTheme =
  localStorage.getItem("siteTheme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("siteLang", lang);
  document.documentElement.setAttribute("lang", lang);
  if (langToggle) langToggle.textContent = lang.toUpperCase();
  i18nEls.forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
}

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("siteTheme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  if (themeToggle) {
    themeToggle.innerHTML =
      theme === "dark"
        ? '<i class="bi bi-sun"></i>'
        : '<i class="bi bi-moon-stars"></i>';
  }
}

langToggle?.addEventListener("click", () =>
  setLang(currentLang === "fr" ? "en" : "fr"),
);
themeToggle?.addEventListener("click", () =>
  setTheme(currentTheme === "dark" ? "light" : "dark"),
);

setLang(currentLang);
setTheme(currentTheme);
