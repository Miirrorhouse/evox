(function () {
  var T = {
    en: {
      nav: { howItWorks: "How It Works", whoItsFor: "Who It's For", pricing: "Pricing", faq: "FAQ", getStarted: "Get Started" },
      hero: {
        badge: "4.8 rating  |  50,000+ members",
        headline1: "Evolve Wild.",
        headline2: "Live Consciously.",
        sub: "At Evox, every experience is rooted in the body and movement — because real transformation happens when people step out of their comfort zone and into action.",
        cta: "Begin My Journey",
      },
      about: {
        badge: "about EVOX",
        title: "Real Transformation Always<br class=\"hidden sm:block\" /> Starts from Within",
        body: "At Evox we design experiences that move people. We blend adventure and wellness to reconnect teams and individuals with their bodies, their essence, and nature. Through hiking, paddle and kayak outings, via ferrata, retreats, fitness, physiotherapy, and mindfulness, we turn challenge into clarity, trust, and lasting growth. Whether you need a half-day reset or a multi-day evolution, our programs are tailor-made and fully supported end to end. Come for the activity, leave with stronger connection, better performance, and a healthier culture.",
      },
      howItWorks: {
        wellnessBadge: "Evox Wellness",
        wellnessTitle: "Explore Our Wellness Options",
        howBadge: "How It Works",
        howTitle: "Why Evox Works: Challenge the body, calm the mind, connect the team. Results you can feel and measure.",
        benefitsLabel: "Benefits",
        wellness: [
          { title: "Fitness", desc: "group classes, personal training, corporate fitness programs" },
          { title: "Physiotherapy", desc: "massages, rehab, prevention, corporate sessions" },
          { title: "Mindfulness", desc: "meditation, breathwork, stress-reduction workshops" },
          { title: "Active Breaks", desc: "short movement & ergonomic pauses in workplace" },
        ],
        steps: [
          { title: "Transformative Experiences", desc: "We don't just run activities. We design powerful experiences that leave a lasting impact and transform how teams connect, communicate, and grow together." },
          { title: "Challenges that Align Teams", desc: "Through nature, movement, and shared challenges, we help teams strengthen trust, collaboration, and alignment toward common goals." },
          { title: "Well-being as the Key to Performance", desc: "Our approach integrates fitness, physiotherapy, and mindfulness, helping people live, work, and lead at their best potential." },
          { title: "Tailor-Made Programs", desc: "Every company and team is unique. We co-create personalized programs that adapt to your needs, culture, and objectives." },
        ],
      },
      whoItsFor: {
        badge: "Who It's For",
        title: "Your Team Matters to Us",
        cards: [
          { title: "Companies & Organizations", desc: "For startups to enterprises, coworkings, corporate HQs — offsites, culture & well-being programs." },
          { title: "Educational Institutions", desc: "For universities, business schools, high schools, academies — orientation camps, leadership & resilience days." },
          { title: "Public & Non-Profit", desc: "For municipalities, NGOs, community orgs — team cohesion, burnout prevention, community wellness." },
        ],
      },
      testimonials: {
        badge: "Testimonials",
        title: "What Our Members Say",
        items: [
          { quote: "I always focused on my physical training, thinking that was enough. Evox revealed the mental side — motivation, focus, mindset — and that’s what changed my game. I now train smarter, not just harder.", role: "Track Athlete" },
          { quote: "Simple, quick, but so powerful. I’ve never had such clarity about my strengths and weaknesses. Being able to track my mindset, motivation, and confidence gives me real insight to push my limits safely and effectively.", role: "Tennis Player" },
          { quote: "It felt like the program was describing me better than I could describe myself. Evox showed me patterns in my training habits and mental approach that I didn’t realize. Now I know why I train the way I do, and how to stay consistent.", role: "Swimmer" },
        ],
      },
      pricing: {
        badge: "Pricing Plans",
        title: "Start Your Journey",
        subtitle: "Packages start at $5k. Every program is fully custom — reach out and we’ll build the right experience for your team.",
        allCustom: "All Plans Completely Custom",
        getStarted: "Get Started",
        popularBadge: "Most Popular",
        packages: [
          { name: "Connection", desc: "Half-day experience — snacks, group dynamics, activities like hiking & paddle surf." },
          { name: "Evolution", desc: "2–4 day retreat — full transport, lodging, food, fitness & mindfulness workshops, adventure activities." },
          { name: "Transformation", desc: "Full-day experience — meals, transfers, group dynamics, activities like via ferrata, kayak & rafting." },
        ],
        form: {
          title: "Get a Custom Quote",
          subtitle: "Tell us about your team and we’ll craft the perfect experience for you.",
          name: "Full Name", namePlaceholder: "Jane Smith",
          companySize: "Company Size", companySizePlaceholder: "Select team size",
          companySizeOptions: ["1–10 employees", "11–50 employees", "51–200 employees", "201–500 employees", "500+ employees"],
          email: "Email Address", emailPlaceholder: "jane@company.com",
          phone: "Phone Number", phonePlaceholder: "+1 (555) 000-0000",
          interested: "I'm Interested In",
          services: ["Outdoor Experiences", "Team Training", "Team Mindfulness", "Retreats"],
          message: "Message", messageOptional: "(optional)",
          messagePlaceholder: "Tell us about your team’s goals, preferred dates, or any questions you have…",
          submit: "Send My Inquiry",
        },
      },
      faq: {
        badge: "FAQ",
        title: "Frequently Asked Questions",
        subtitle: "Have more questions?",
        reachOut: "Reach out to us.",
        items: [
          { question: "How long does a program take?", answer: "It depends on the experience tier. Connection experiences are half-day, Transformation is a full day, and Evolution spans 2–4 days. All programs are tailored to your schedule and objectives." },
          { question: "Do we need any special experience or fitness level?", answer: "No prior experience is needed. Evox programs are designed to be inclusive and adaptable. Our coaches ensure every participant feels supported regardless of fitness level." },
          { question: "Can programs be customized for our team?", answer: "Absolutely. Every program is co-created with you — we adapt activities, intensity, focus areas, and logistics to match your team’s needs, culture, and objectives." },
          { question: "Is our data and feedback private?", answer: "Yes. All assessment data and feedback collected during our programs is confidential and only shared in aggregated, anonymized form unless otherwise agreed." },
          { question: "What’s included in the price?", answer: "All logistics — transport, food, lodging (where applicable), materials, and professional coaching are fully handled by Evox. You show up, we take care of the rest." },
        ],
      },
      cta: {
        badge: "Get In Touch",
        title: "Take Control of<br />Your Mindset Today",
        subtitle: "Start your self-discovery journey in minutes and unlock your full potential.",
        button: "Begin My Journey",
      },
      footer: {
        tagline: "Built by athletes, powered by science.",
        navHeading: "Navigation", legalHeading: "Legal", contactHeading: "Contact",
        copyright: "© 2025 Evox. All rights reserved.",
        backToTop: "Back to top",
        howItWorks: "How It Works", whoItsFor: "Who It’s For", pricing: "Pricing", faq: "FAQ",
        privacy: "Privacy Policy", terms: "Terms of Service", refund: "Refund Policy",
      },
    },
    es: {
      nav: { howItWorks: "Cómo Funciona", whoItsFor: "Para Quién", pricing: "Precios", faq: "Preguntas", getStarted: "Comenzar" },
      hero: {
        badge: "Valoración 4.8  |  50,000+ miembros",
        headline1: "Evoluciona Salvaje.",
        headline2: "Vive Conscientemente.",
        sub: "En Evox, cada experiencia tiene raíces en el cuerpo y el movimiento — porque la transformación real ocurre cuando las personas salen de su zona de confort y pasan a la acción.",
        cta: "Comenzar Mi Viaje",
      },
      about: {
        badge: "sobre EVOX",
        title: "La Transformación Real Siempre<br class=\"hidden sm:block\" /> Comienza Desde Adentro",
        body: "En Evox diseñamos experiencias que mueven a las personas. Combinamos aventura y bienestar para reconectar equipos e individuos con sus cuerpos, su esencia y la naturaleza. A través de senderismo, paseos en paddle y kayak, vía ferrata, retiros, fitness, fisioterapia y mindfulness, convertimos el desafío en claridad, confianza y crecimiento duradero. Ya sea que necesites un reset de medio día o una evolución de varios días, nuestros programas son hechos a medida y totalmente asistidos de principio a fin. Ven por la actividad, sal con una conexión más fuerte, mejor rendimiento y una cultura más saludable.",
      },
      howItWorks: {
        wellnessBadge: "Bienestar Evox",
        wellnessTitle: "Explora Nuestras Opciones de Bienestar",
        howBadge: "Cómo Funciona",
        howTitle: "Por Qué Funciona Evox: Desafía el cuerpo, calma la mente, conecta al equipo. Resultados que puedes sentir y medir.",
        benefitsLabel: "Beneficios",
        wellness: [
          { title: "Fitness", desc: "clases grupales, entrenamiento personal, programas de fitness corporativo" },
          { title: "Fisioterapia", desc: "masajes, rehabilitación, prevención, sesiones corporativas" },
          { title: "Mindfulness", desc: "meditación, respiración, talleres de reducción del estrés" },
          { title: "Pausas Activas", desc: "pausas cortas de movimiento y ergonomía en el lugar de trabajo" },
        ],
        steps: [
          { title: "Experiencias Transformadoras", desc: "No solo realizamos actividades. Diseñamos experiencias poderosas que dejan un impacto duradero y transforman cómo los equipos se conectan, comunican y crecen juntos." },
          { title: "Desafíos que Alinean Equipos", desc: "A través de la naturaleza, el movimiento y los desafíos compartidos, ayudamos a los equipos a fortalecer la confianza, la colaboración y la alineación hacia objetivos comunes." },
          { title: "El Bienestar como Clave del Rendimiento", desc: "Nuestro enfoque integra fitness, fisioterapia y mindfulness, ayudando a las personas a vivir, trabajar y liderar en su máximo potencial." },
          { title: "Programas a Medida", desc: "Cada empresa y equipo es único. Co-creamos programas personalizados que se adaptan a tus necesidades, cultura y objetivos." },
        ],
      },
      whoItsFor: {
        badge: "Para Quién",
        title: "Tu Equipo nos Importa",
        cards: [
          { title: "Empresas y Organizaciones", desc: "Para startups hasta grandes empresas, coworkings, sedes corporativas — retiros, programas de cultura y bienestar." },
          { title: "Instituciones Educativas", desc: "Para universidades, escuelas de negocios, institutos, academias — campamentos de orientación, días de liderazgo y resiliencia." },
          { title: "Sector Público y Sin Fines de Lucro", desc: "Para municipios, ONGs, organizaciones comunitarias — cohesión de equipo, prevención del burnout, bienestar comunitario." },
        ],
      },
      testimonials: {
        badge: "Testimonios",
        title: "Lo Que Dicen Nuestros Miembros",
        items: [
          { quote: "Siempre me enfoqué en mi entrenamiento físico, pensando que era suficiente. Evox reveló el lado mental — motivación, enfoque, mentalidad — y eso fue lo que cambió mi juego. Ahora entreno de manera más inteligente, no solo más duro.", role: "Atleta de Pista" },
          { quote: "Simple, rápido, pero tan poderoso. Nunca había tenido tanta claridad sobre mis fortalezas y debilidades. Poder rastrear mi mentalidad, motivación y confianza me da información real para superar mis límites de forma segura y efectiva.", role: "Jugadora de Tenis" },
          { quote: "Sentí que el programa me describía mejor de lo que yo podría describirme. Evox me mostró patrones en mis hábitos de entrenamiento y enfoque mental que no me había dado cuenta. Ahora sé por qué entreno como lo hago, y cómo mantenerme constante.", role: "Nadador" },
        ],
      },
      pricing: {
        badge: "Planes de Precios",
        title: "Comienza Tu Viaje",
        subtitle: "Los paquetes comienzan desde $5k. Cada programa es completamente personalizado — contáctanos y crearemos la experiencia perfecta para tu equipo.",
        allCustom: "Todos los Planes Completamente Personalizados",
        getStarted: "Empezar",
        popularBadge: "Más Popular",
        packages: [
          { name: "Conexión", desc: "Experiencia de medio día — snacks, dinámicas grupales, actividades como senderismo y paddle surf." },
          { name: "Evolución", desc: "Retiro de 2–4 días — transporte completo, alojamiento, comida, talleres de fitness y mindfulness, actividades de aventura." },
          { name: "Transformación", desc: "Experiencia de día completo — comidas, traslados, dinámicas grupales, actividades como vía ferrata, kayak y rafting." },
        ],
        form: {
          title: "Obtén una Cotización Personalizada",
          subtitle: "Cuéntanos sobre tu equipo y crearemos la experiencia perfecta para ti.",
          name: "Nombre Completo", namePlaceholder: "Ana García",
          companySize: "Tamaño de la Empresa", companySizePlaceholder: "Selecciona el tamaño del equipo",
          companySizeOptions: ["1–10 empleados", "11–50 empleados", "51–200 empleados", "201–500 empleados", "500+ empleados"],
          email: "Correo Electrónico", emailPlaceholder: "ana@empresa.com",
          phone: "Número de Teléfono", phonePlaceholder: "+34 600 000 000",
          interested: "Estoy Interesado En",
          services: ["Experiencias al Aire Libre", "Entrenamiento en Equipo", "Mindfulness en Equipo", "Retiros"],
          message: "Mensaje", messageOptional: "(opcional)",
          messagePlaceholder: "Cuéntanos sobre los objetivos de tu equipo, fechas preferidas o cualquier pregunta que tengas…",
          submit: "Enviar Mi Consulta",
        },
      },
      faq: {
        badge: "Preguntas Frecuentes",
        title: "Preguntas Frecuentes",
        subtitle: "¿Tienes más preguntas?",
        reachOut: "Contáctanos.",
        items: [
          { question: "¿Cuánto dura un programa?", answer: "Depende del nivel de experiencia. Las experiencias de Conexión son de medio día, Transformación es de un día completo, y Evolución abarca 2–4 días. Todos los programas se adaptan a tu horario y objetivos." },
          { question: "¿Necesitamos experiencia especial o un nivel de forma física determinado?", answer: "No se necesita experiencia previa. Los programas de Evox están diseñados para ser inclusivos y adaptables. Nuestros coaches garantizan que cada participante se sienta apoyado independientemente de su nivel físico." },
          { question: "¿Se pueden personalizar los programas para nuestro equipo?", answer: "Absolutamente. Cada programa se co-crea contigo — adaptamos actividades, intensidad, áreas de enfoque y logística para adaptarnos a las necesidades, cultura y objetivos de tu equipo." },
          { question: "¿Son privados nuestros datos y feedback?", answer: "Sí. Todos los datos de evaluación y feedback recopilados durante nuestros programas son confidenciales y solo se comparten de forma agregada y anonimizada, salvo acuerdo en contrario." },
          { question: "¿Qué está incluido en el precio?", answer: "Toda la logística — transporte, comida, alojamiento (cuando aplique), materiales y coaching profesional son completamente gestionados por Evox. Tú apareces, nosotros nos encargamos del resto." },
        ],
      },
      cta: {
        badge: "Contáctanos",
        title: "Toma el Control de<br />Tu Mentalidad Hoy",
        subtitle: "Comienza tu viaje de autodescubrimiento en minutos y desbloquea tu máximo potencial.",
        button: "Comenzar Mi Viaje",
      },
      footer: {
        tagline: "Construido por atletas, impulsado por la ciencia.",
        navHeading: "Navegación", legalHeading: "Legal", contactHeading: "Contacto",
        copyright: "© 2025 Evox. Todos los derechos reservados.",
        backToTop: "Volver arriba",
        howItWorks: "Cómo Funciona", whoItsFor: "Para Quién", pricing: "Precios", faq: "Preguntas",
        privacy: "Política de Privacidad", terms: "Términos de Servicio", refund: "Política de Reembolso",
      },
    },
  };

  function resolve(lang, key) {
    var parts = key.split(".");
    var val = T[lang];
    for (var i = 0; i < parts.length; i++) {
      if (val == null) return null;
      val = val[parts[i]];
    }
    return typeof val === "string" ? val : null;
  }

  function applyLang(lang) {
    // textContent
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = resolve(lang, el.getAttribute("data-i18n"));
      if (v !== null) el.textContent = v;
    });
    // innerHTML (for strings with <br> etc.)
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = resolve(lang, el.getAttribute("data-i18n-html"));
      if (v !== null) el.innerHTML = v;
    });
    // placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var v = resolve(lang, el.getAttribute("data-i18n-placeholder"));
      if (v !== null) el.setAttribute("placeholder", v);
    });
    // select option text
    document.querySelectorAll("[data-i18n-option]").forEach(function (el) {
      var v = resolve(lang, el.getAttribute("data-i18n-option"));
      if (v !== null) el.textContent = v;
    });

    // Update switcher buttons
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });

    localStorage.setItem("evox-lang", lang);
  }

  function init() {
    var saved = localStorage.getItem("evox-lang");
    var lang = (saved === "en" || saved === "es") ? saved : "en";

    if (lang !== "en") applyLang(lang);

    // mark active button on load even if lang is en
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang-btn"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
