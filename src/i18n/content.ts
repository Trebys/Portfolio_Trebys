export const DEFAULT_LANGUAGE = "es";

export const LANGUAGES = {
  es: "ES",
  en: "EN",
} as const;

export const content = {
  es: {
    meta: {
      title: "Portfolio de Esteban López - Desarrollador Full Stack Junior",
      description:
        "Conoce el perfil, CV y proyectos de Esteban López, desarrollador Full Stack Junior.",
    },
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      languageLabel: "Selecciona idioma",
    },
    hero: {
      name: "Esteban López",
      role: "Programador Full Stack Junior",
      descriptionHtml:
        'Soy <strong>desarrollador Full Stack Junior</strong>. En este portafolio puedes conocer mi perfil, descargar mi CV y explorar proyectos que muestran mi evolución técnica. Cuento con experiencia laboral en <strong>desarrollo, consultoría y QA</strong>, y actualmente estoy fortaleciendo mi perfil con soluciones web full stack desplegadas.',
      imageAlt: "Esteban López",
    },
    about: {
      sectionTitle: "Sobre mí",
      heading: "¿Quién soy?",
      bioHtml:
        '¡Hola! Mi nombre es <strong>Esteban López Campos</strong>, soy <strong>desarrollador Full Stack Junior graduado del Colegio Universitario de Cartago (CUC)</strong> con un Diplomado en Tecnologías de la Información (2025). Durante mi <strong>práctica profesional</strong> desarrollé módulos web con <strong>Blazor (.NET), C#, CSS/Bootstrap y SQL</strong> dentro de un entorno ágil <strong>(Scrum + Jira)</strong>. También cuento con experiencia laboral en <strong>desarrollo, consultoría y QA</strong>. Mi trayectoria me brinda un perfil integral que abarca <strong>desarrollo full-stack, administración de bases de datos, redes Cisco CCNA y soporte técnico</strong>. Apasionado por la mejora continua, estoy listo para seguir aprendiendo y aportar valor en proyectos desafiantes.',
      cvButton: "Descargar CV",
      cvHref: "/CV/Esteban%20Lopez%20Campos.pdf",
    },
    projects: {
      sectionTitle: "Proyectos",
      featuredLabel: "Proyecto destacado",
      title: "Fantasy Land",
      description:
        "Aplicación web full stack para la operación de un parque de atracciones ficticio. Integra experiencia pública, compras y un panel administrativo para gestionar la operación.",
      imageAlt: "Pantalla principal del proyecto Fantasy Land",
      features: [
        "Autenticación, recuperación de contraseña por correo y gestión de perfil.",
        "Catálogo público, brazaletes, atracciones, comidas y testimonios moderados.",
        "Compras con saldo interno o PayPal Sandbox, recibos e historial transaccional.",
        "Panel administrativo e imágenes persistentes mediante Cloudinary.",
      ],
      codeButton: "Código",
      demoButton: "Ver demo",
    },
    footer: {
      rights: "© 2026 Esteban López. Casi todos los derechos reservados.",
      about: "Sobre mí",
      contact: "Contacto",
    },
  },
  en: {
    meta: {
      title: "Esteban López Portfolio - Junior Full Stack Developer",
      description:
        "Explore Esteban López's profile, resume and projects as a Junior Full Stack Developer.",
    },
    nav: {
      about: "About me",
      projects: "Projects",
      contact: "Contact",
      languageLabel: "Select language",
    },
    hero: {
      name: "Esteban López",
      role: "Junior Full Stack Developer",
      descriptionHtml:
        'I am a <strong>Junior Full Stack Developer</strong>. In this portfolio you can learn about my profile, download my resume and explore projects that show my technical growth. I have work experience in <strong>development, consulting and QA</strong>, and I am currently strengthening my profile with deployed full stack web solutions.',
      imageAlt: "Esteban López",
    },
    about: {
      sectionTitle: "About me",
      heading: "Who am I?",
      bioHtml:
        'Hi! My name is <strong>Esteban López Campos</strong>. I am a <strong>Junior Full Stack Developer graduated from Colegio Universitario de Cartago (CUC)</strong> with a Diploma in Information Technologies (2025). During my <strong>professional internship</strong>, I developed web modules with <strong>Blazor (.NET), C#, CSS/Bootstrap and SQL</strong> in an agile environment <strong>(Scrum + Jira)</strong>. I also have work experience in <strong>development, consulting and QA</strong>. My background gives me a well-rounded profile that includes <strong>full-stack development, database administration, Cisco CCNA networking and technical support</strong>. I am passionate about continuous improvement and ready to keep learning while contributing value to challenging projects.',
      cvButton: "Download Resume",
      cvHref: "/CV/Esteban%20Lopez%20Campos%20English.pdf",
    },
    projects: {
      sectionTitle: "Projects",
      featuredLabel: "Featured project",
      title: "Fantasy Land",
      description:
        "Full stack web application for operating a fictional amusement park. It combines a public experience, purchases and an admin panel for managing operations.",
      imageAlt: "Fantasy Land project home screen",
      features: [
        "Authentication, password recovery by email and profile management.",
        "Public catalog, wristbands, attractions, food and moderated testimonials.",
        "Purchases with internal balance or PayPal Sandbox, receipts and transaction history.",
        "Admin panel and persistent images through Cloudinary.",
      ],
      codeButton: "Code",
      demoButton: "Live demo",
    },
    footer: {
      rights: "© 2026 Esteban López. Almost all rights reserved.",
      about: "About me",
      contact: "Contact",
    },
  },
} as const;

export type Language = keyof typeof content;
