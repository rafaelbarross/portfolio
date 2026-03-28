import { Code, HomeIcon } from "lucide-react";
import { Icons } from "@/components/icons";

type Locale = "en" | "pt";

// ─── Shared / locale-independent data ────────────────────────────────────────

const SHARED = {
  name: "Rafael Barros",
  initials: "RB",
  url: "https://rafaelbarros.vercel.app",
  location: "Junqueiro, Brazil",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Flutter",
    "Typescript",
    "Node.js",
    "Nest.js",
    "Go",
    "Postgres",
    "Prisma",
    "Docker",
    "Firebase",
    "AWS",
    "Dart",
    "Python",
    "TailwindCSS",
    "Figma",
    "Zod",
    "TanStack Query",
  ],
  contact: {
    email: "rafaelbarros.contact@gmail.com",
    tel: "+55 (82) 99977-4488",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rafaelbarross",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rafaellbarros",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/rafaelbarrosz",
        icon: Icons.instagram,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rafaelbarro20",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:rafaelbarros.contact@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
} as const;

// ─── Locale-specific content ──────────────────────────────────────────────────

const CONTENT = {
  en: {
    description:
      "Software Engineer. Always persistent. I love unraveling problems and creating solutions!",
    summary:
      "Software Engineer with 4+ years of experience building modern web applications — from internal tools and institutional systems to product-oriented platforms. I work with React, Next.js, Node.js and TypeScript, focusing on clean architecture, component design and REST API integration. Currently working at [Edge Innovation Center](https://www.linkedin.com/company/edge-inovacao/posts/?feedView=all) as a Full Stack Developer. Previously worked for 3+ years as Frontend Developer at [DIT](https://www.linkedin.com/company/dit-ifal). Creator of [Agendime](https://agendime.com.br), a scheduling SaaS built from scratch. Currently pursuing a Bachelor's in Information Systems at [IFAL](https://www.linkedin.com/school/instituto-federal-de-alagoas-if-al).",
    navbar: [
      { href: "/", icon: HomeIcon, label: "Home" },
      { href: "/projects", icon: Code, label: "Projects" },
    ],
    work: [
      {
        company: "Centro de Inovação Edge",
        href: "https://www.linkedin.com/company/edge-inovacao/posts/?feedView=all",
        badges: ["Internship"],
        location: "Arapiraca, Alagoas, Brazil · Remote",
        title: "Full Stack Developer",
        logoUrl: "/EDGE.jpg",
        start: "Feb 2026",
        end: null,
        description:
          "Working as Full Stack Developer at Edge Innovation Center, contributing to end-to-end software development — building and maintaining backend APIs, developing modern frontend interfaces, and delivering mobile applications within R&D initiatives focused on innovation.",
      },
      {
        company: "Nex Tecnologia LTDA",
        href: "",
        badges: ["Freelance"],
        location: "Arapiraca, Alagoas, Brazil · Remote",
        title: "Frontend Engineer",
        logoUrl: "/nex.png",
        start: "Aug 2025",
        end: null,
        description:
          "Frontend Engineer responsible for building and evolving Arena Clash, focused on delivering a fast, scalable, and maintainable web experience. Worked with product and design to transform requirements into polished UI features, ensuring high performance, accessibility, and consistent UX across all devices. Contributed to frontend architecture, component design, and backend API integration, while improving code quality through reviews and best practices.",
      },
      {
        company: "Fábrica de Heróis",
        href: "",
        badges: ["Freelance"],
        location: "Niterói, Rio de Janeiro, Brazil · Remote",
        title: "Full Stack Developer",
        logoUrl: "/HEROI.png",
        start: "Apr 2025",
        end: null,
        description:
          "Full Stack Developer responsible for building and maintaining a training management platform. Worked with Next.js, TypeScript, React Hook Form, Zod, TanStack Query and Tailwind CSS on the frontend, following Clean Architecture and domain-driven design principles.",
      },
      {
        company: "DIT",
        href: "https://www.linkedin.com/company/dit-ifal",
        badges: ["Internship"],
        location: "Arapiraca, Alagoas, Brazil · On-site",
        title: "Frontend Web Developer",
        logoUrl: "/DIT.jpeg",
        start: "Mar 2023",
        end: null,
        description:
          "Working as Frontend Developer at DIT since March 2023, leading the development of modern web applications using React, Next.js, Vite.js and TypeScript. Key contributions include implementing new business features, REST API integration and consumption, and developing responsive interfaces focused on performance and accessibility. Significantly contributed to the project's tech stack modernization, implementing development best practices and code standards, agile methodologies, participating in code reviews, and maintaining effective communication between development teams.",
      },
    ],
    education: [
      {
        school: "Instituto Federal de Alagoas",
        href: "https://www.linkedin.com/school/instituto-federal-de-alagoas-if-al",
        degree: "Bachelor's in Information Systems",
        logoUrl: "/IFAL.jpeg",
        start: "Mar 2025",
        end: "2029",
      },
      {
        school: "Instituto Federal de Alagoas",
        href: "https://www.linkedin.com/school/instituto-federal-de-alagoas-if-al",
        degree: "Technical Degree in Computing",
        logoUrl: "/IFAL.jpeg",
        start: "2021",
        end: "2023",
      },
    ],
    projects: [
      {
        title: "Agendime",
        href: "https://agendime.com.br",
        dates: "Dec 2024 - Jan 2025",
        active: true,
        description:
          "[Agendime](https://agendime.com.br) is a SaaS being developed to revolutionize the way freelancers and small businesses manage their scheduling. The project was born from identifying a clear market need: a simple and efficient solution to automate the scheduling process, eliminating dependence on WhatsApp and spreadsheets.",
        technologies: [
          "Next.js",
          "React.js",
          "Typescript",
          "Firebase",
          "Yup",
          "Zod",
          "TailwindCSS",
          "Stripe",
          "Shadcn UI",
          "Magic UI",
        ],
        links: [
          {
            type: "Website",
            href: "https://agendime.com.br/",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/agendime.png",
        video: "",
      },
      {
        title: "PreparaFlix",
        href: "https://preparaflix.com.br",
        dates: "Oct 2024 - May 2025",
        active: true,
        description:
          "[PreparaFlix](https://preparaflix.com.br) was developed through a research project at [Campus Arapiraca](https://www.linkedin.com/school/instituto-federal-de-alagoas-if-al). It aggregates courses from various fields, with video lessons on topics from the Portuguese and Mathematics syllabus of a public exam, plus mock tests, quizzes, and a leaderboard for participants.",
        technologies: [
          "Next.js",
          "Typescript",
          "React.js",
          "TailwindCSS",
          "CSS",
          "HTML",
          "Material Tailwind",
          "Framer Motion",
          "Cypress",
          "Vitest",
          "Yup",
          "Zod",
          "SWR",
          "Matomo",
          "Sharp",
        ],
        links: [
          {
            type: "Website",
            href: "https://preparaflix.com.br",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/preparaflix.png",
        video: "",
      },
      {
        title: "Café Engenho do Queijo",
        href: "https://cafeengenhodoqueijo.vercel.app",
        dates: "Jan 2025 - Feb 2025",
        active: true,
        description:
          "[Café Engenho do Queijo](https://cafeengenhodoqueijo.vercel.app) is a website developed for a local coffee shop. The main goal was to create an attractive and functional online presence, allowing customers to view information about the café and get in touch easily.",
        technologies: [
          "Next.js",
          "React.js",
          "TypeScript",
          "TailwindCSS",
          "HTML",
          "CSS",
          "Radix UI",
          "Shadcn UI",
          "Embla Carousel",
        ],
        links: [
          {
            type: "Website",
            href: "https://cafeengenhodoqueijo.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/cafeengenho.png",
        video: "",
      },
      {
        title: "English Learning AI",
        href: "https://english-ai.vercel.app",
        dates: "Feb 2025 - Feb 2025",
        active: true,
        description:
          "[English Learning AI](https://english-ai.vercel.app/) is a platform designed to help users learn English interactively and engagingly, using generative AI to provide instant and personalized feedback during the learning process. Features quizzes, chat, and text correction.",
        technologies: [
          "Next.js",
          "Typescript",
          "React.js",
          "TailwindCSS",
          "Google Generative AI",
          "Shadcn UI",
        ],
        links: [
          {
            type: "Website",
            href: "https://english-ai.vercel.app/",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/englishlearn.png",
        video: "",
      },
      {
        title: "Barbershop",
        href: "https://barbearia-site.vercel.app",
        dates: "Jan 2024 - Jan 2024",
        active: true,
        description:
          "[Barbershop](https://barbearia-site.vercel.app) is a website developed for a barbershop. The main goal was to create an attractive and functional online presence, allowing customers to schedule services, view information about the barbershop, and get in touch easily.",
        technologies: [
          "HTML",
          "JavaScript",
          "CSS",
          "TailwindCSS",
          "Alpine.js",
          "AOS",
        ],
        links: [
          {
            type: "Website",
            href: "https://barbearia-site.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/barbershop.png",
        video: "",
      },
      {
        title: "Enviar Sem Salvar",
        href: "https://enviar-sem-salvar.vercel.app",
        dates: "Jan 2024 - Jan 2024",
        active: true,
        description:
          "[Enviar Sem Salvar](https://enviar-sem-salvar.vercel.app) is a website that makes it easy to send WhatsApp messages without saving the number to your contacts, making the process faster and more efficient.",
        technologies: [
          "Next.js",
          "React.js",
          "TypeScript",
          "TailwindCSS",
          "HTML",
          "CSS",
        ],
        links: [
          {
            type: "Website",
            href: "https://enviar-sem-salvar.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/enviarsemsalvar.png",
        video: "",
      },
      {
        title: "Bingo Brasil",
        href: "https://bingobrasil.vercel.app",
        dates: "Apr 2024 - May 2024",
        active: true,
        description:
          "[Bingo Brasil](https://bingobrasil.vercel.app) is an online bingo platform with a login area and admin panel to manage games in real time, allowing administrators to create and manage matches efficiently.",
        technologies: [
          "Vite.js",
          "JavaScript",
          "React.js",
          "TailwindCSS",
          "Firebase",
          "CSS",
          "HTML",
          "Material Tailwind",
        ],
        links: [
          {
            type: "Website",
            href: "https://bingobrasil.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/bingo.png",
        video: "",
      },
      {
        title: "Planeta Mirim",
        href: "https://planetam.vercel.app",
        dates: "Jul 2023 - Dec 2023",
        active: true,
        description:
          "[Planeta Mirim](https://planetam.vercel.app) is an outreach project developed by 3rd-year students of the integrated technical computing course at IFAL, aimed at raising children's awareness about the importance of environmental preservation and promoting actions that encourage sustainability.",
        technologies: [
          "Vite.js",
          "JavaScript",
          "React.js",
          "TailwindCSS",
          "PDF.js",
          "Flowbite",
          "Swiper",
        ],
        links: [
          {
            type: "Website",
            href: "https://planetam.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/planetamirim.png",
        video: "",
      },
    ],
  },

  pt: {
    description:
      "Software Engineer. Sempre persistente. Gosto de desvendar problemas e criar soluções!",
    summary:
      "Software Engineer com mais de 4 anos de experiência construindo aplicações web modernas — de ferramentas internas e sistemas institucionais a plataformas orientadas a produto. Trabalho com React, Next.js, Node.js e TypeScript, com foco em arquitetura limpa, design de componentes e integração com APIs REST. Atualmente atuando no [Centro de Inovação Edge](https://www.linkedin.com/company/edge-inovacao/posts/?feedView=all) como Full Stack Developer. Anteriormente trabalhei por 3+ anos como Frontend Developer no [DIT](https://www.linkedin.com/company/dit-ifal). Criador do [Agendime](https://agendime.com.br), SaaS de agendamentos desenvolvido do zero. Cursando Bacharelado em Sistemas de Informação no [IFAL](https://www.linkedin.com/school/instituto-federal-de-alagoas-if-al).",
    navbar: [
      { href: "/", icon: HomeIcon, label: "Home" },
      { href: "/projects", icon: Code, label: "Projetos" },
    ],
    work: [
      {
        company: "Centro de Inovação Edge",
        href: "https://www.linkedin.com/company/edge-inovacao/posts/?feedView=all",
        badges: ["Estágio"],
        location: "Arapiraca, Alagoas, Brasil · Remoto",
        title: "Full Stack Developer",
        logoUrl: "/EDGE.jpg",
        start: "fev 2026",
        end: null,
        description:
          "Atuando como Full Stack Developer no Centro de Inovação Edge, contribuindo para o desenvolvimento de software ponta a ponta — construindo e mantendo APIs backend, desenvolvendo interfaces frontend modernas e entregando aplicações mobile dentro de iniciativas de P&D focadas em inovação.",
      },
      {
        company: "Nex Tecnologia LTDA",
        href: "",
        badges: ["Freelance"],
        location: "Arapiraca, Alagoas, Brasil · Remoto",
        title: "Frontend Engineer",
        logoUrl: "/nex.png",
        start: "ago 2025",
        end: null,
        description:
          "Frontend Engineer responsável por construir e evoluir o Arena Clash, com foco em entregar uma experiência web rápida, escalável e de fácil manutenção. Trabalhei com produto e design para transformar requisitos em features de UI polidas, garantindo alta performance, acessibilidade e UX consistente em todos os dispositivos. Contribuí para arquitetura frontend, design de componentes e integração com APIs backend, além de melhorar a qualidade do código através de revisões e boas práticas.",
      },
      {
        company: "Fábrica de Heróis",
        href: "",
        badges: ["Freelance"],
        location: "Niterói, Rio de Janeiro, Brasil · Remoto",
        title: "Full Stack Developer",
        logoUrl: "/HEROI.png",
        start: "abr 2025",
        end: null,
        description:
          "Full Stack Developer responsável por construir e manter uma plataforma de gestão de treinamentos. Atuei com Next.js, TypeScript, React Hook Form, Zod, TanStack Query e Tailwind CSS no frontend, seguindo Clean Architecture e princípios de domain-driven design.",
      },
      {
        company: "DIT",
        href: "https://www.linkedin.com/company/dit-ifal",
        badges: ["Estágio"],
        location: "Arapiraca, Alagoas, Brasil · Presencial",
        title: "Frontend Web Developer",
        logoUrl: "/DIT.jpeg",
        start: "mar 2023",
        end: null,
        description:
          "Atuando como Desenvolvedor Front-end no DIT desde março de 2023, lidero o desenvolvimento de aplicações web modernas utilizando React, Next.js, Vite.js e TypeScript. Minhas contribuições principais incluem a implementação de novas funcionalidades para o negócio, integração e consumo de APIs REST, e desenvolvimento de interfaces responsivas com foco em desempenho e acessibilidade. Contribuí significativamente para a modernização da pilha tecnológica do projeto, implementando boas práticas de desenvolvimento e padrões de código, metodologias ágeis, participando de revisões de código e mantendo uma comunicação eficaz entre os times de desenvolvimento.",
      },
    ],
    education: [
      {
        school: "Instituto Federal de Alagoas",
        href: "https://www.linkedin.com/school/instituto-federal-de-alagoas-if-al",
        degree: "Bacharelado em Sistemas de Informação",
        logoUrl: "/IFAL.jpeg",
        start: "mar 2025",
        end: "2029",
      },
      {
        school: "Instituto Federal de Alagoas",
        href: "https://www.linkedin.com/school/instituto-federal-de-alagoas-if-al",
        degree: "Técnico em Informática",
        logoUrl: "/IFAL.jpeg",
        start: "2021",
        end: "2023",
      },
    ],
    projects: [
      {
        title: "Agendime",
        href: "https://agendime.com.br",
        dates: "Dez 2024 - Jan 2025",
        active: true,
        description:
          "[Agendime](https://agendime.com.br) é um SaaS que se desenvolve para revolucionar a forma como profissionais autônomos e pequenas empresas gerenciam seus agendamentos. O projeto nasceu da identificação de uma necessidade clara no mercado: uma solução simples e eficiente para automatizar o processo de agendamentos, eliminando a dependência do WhatsApp e planilhas.",
        technologies: [
          "Next.js",
          "React.js",
          "Typescript",
          "Firebase",
          "Yup",
          "Zod",
          "TailwindCSS",
          "Stripe",
          "Shadcn UI",
          "Magic UI",
        ],
        links: [
          {
            type: "Website",
            href: "https://agendime.com.br/",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/agendime.png",
        video: "",
      },
      {
        title: "PreparaFlix",
        href: "https://preparaflix.com.br",
        dates: "Out 2024 - Mai 2025",
        active: true,
        description:
          "[PreparaFlix](https://preparaflix.com.br) foi desenvolvido por meio de um projeto de pesquisa do [Campus Arapiraca](https://www.linkedin.com/school/instituto-federal-de-alagoas-if-al). Agrupa cursos de várias áreas, com videoaulas sobre tópicos do conteúdo programático de Português e Matemática dispostos no edital do certame, além de simulados, quizzes e a possibilidade dos/as participantes integrarem o ranking de acertos.",
        technologies: [
          "Next.js",
          "Typescript",
          "React.js",
          "TailwindCSS",
          "CSS",
          "HTML",
          "Material Tailwind",
          "Framer Motion",
          "Cypress",
          "Vitest",
          "Yup",
          "Zod",
          "SWR",
          "Matomo",
          "Sharp",
        ],
        links: [
          {
            type: "Website",
            href: "https://preparaflix.com.br",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/preparaflix.png",
        video: "",
      },
      {
        title: "Café Engenho do Queijo",
        href: "https://cafeengenhodoqueijo.vercel.app",
        dates: "Jan 2025 - Fev 2025",
        active: true,
        description:
          "[Café Engenho do Queijo](https://cafeengenhodoqueijo.vercel.app) é um site desenvolvido para uma cafeteria local. O objetivo principal era criar uma presença online atraente e funcional, permitindo que os clientes visualizassem informações sobre a cafeteria e entrassem em contato facilmente.",
        technologies: [
          "Next.js",
          "React.js",
          "TypeScript",
          "TailwindCSS",
          "HTML",
          "CSS",
          "Radix UI",
          "Shadcn UI",
          "Embla Carousel",
        ],
        links: [
          {
            type: "Website",
            href: "https://cafeengenhodoqueijo.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/cafeengenho.png",
        video: "",
      },
      {
        title: "English Learning AI",
        href: "https://english-ai.vercel.app",
        dates: "Fev 2025 - Fev 2025",
        active: true,
        description:
          "[English Learning AI](https://english-ai.vercel.app/) é uma plataforma desenvolvida para ajudar os usuários a aprender inglês de forma interativa e envolvente, utilizando inteligência artificial generativa para fornecer feedback instantâneo e personalizado durante o processo de aprendizado. Conta com quiz, chat e correção de textos.",
        technologies: [
          "Next.js",
          "Typescript",
          "React.js",
          "TailwindCSS",
          "Google Generative AI",
          "Shadcn UI",
        ],
        links: [
          {
            type: "Website",
            href: "https://english-ai.vercel.app/",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/englishlearn.png",
        video: "",
      },
      {
        title: "Barbershop",
        href: "https://barbearia-site.vercel.app",
        dates: "Jan 2024 - Jan 2024",
        active: true,
        description:
          "[Barbershop](https://barbearia-site.vercel.app) é um site desenvolvido para barbearia. O objetivo principal era criar uma presença online atraente e funcional, permitindo que os clientes agendassem serviços, visualizassem informações sobre a barbearia e entrassem em contato facilmente.",
        technologies: [
          "HTML",
          "JavaScript",
          "CSS",
          "TailwindCSS",
          "Alpine.js",
          "AOS",
        ],
        links: [
          {
            type: "Website",
            href: "https://barbearia-site.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/barbershop.png",
        video: "",
      },
      {
        title: "Enviar Sem Salvar",
        href: "https://enviar-sem-salvar.vercel.app",
        dates: "Jan 2024 - Jan 2024",
        active: true,
        description:
          "[Enviar Sem Salvar](https://enviar-sem-salvar.vercel.app) é um site que facilita o envio de mensagens pelo WhatsApp sem a necessidade de salvar o número no contato do celular, tornando o processo mais rápido e eficiente.",
        technologies: [
          "Next.js",
          "React.js",
          "TypeScript",
          "TailwindCSS",
          "HTML",
          "CSS",
        ],
        links: [
          {
            type: "Website",
            href: "https://enviar-sem-salvar.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/enviarsemsalvar.png",
        video: "",
      },
      {
        title: "Bingo Brasil",
        href: "https://bingobrasil.vercel.app",
        dates: "Abr 2024 - Mai 2024",
        active: true,
        description:
          "[Bingo Brasil](https://bingobrasil.vercel.app) é um site para bingo online com área de login e painel administrativo para gerenciar os jogos em tempo real, permitindo que os administradores criem e gerenciem partidas de forma eficiente.",
        technologies: [
          "Vite.js",
          "JavaScript",
          "React.js",
          "TailwindCSS",
          "Firebase",
          "CSS",
          "HTML",
          "Material Tailwind",
        ],
        links: [
          {
            type: "Website",
            href: "https://bingobrasil.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/bingo.png",
        video: "",
      },
      {
        title: "Planeta Mirim",
        href: "https://planetam.vercel.app",
        dates: "Jul 2023 - Dez 2023",
        active: true,
        description:
          "[Planeta Mirim](https://planetam.vercel.app) é um projeto de extensão desenvolvido pelos estudantes do 3° ano do curso técnico integrado em informática do IFAL, com o objetivo de conscientizar crianças sobre a importância da preservação do meio ambiente e promover ações que incentivem a sustentabilidade.",
        technologies: [
          "Vite.js",
          "JavaScript",
          "React.js",
          "TailwindCSS",
          "PDF.js",
          "Flowbite",
          "Swiper",
        ],
        links: [
          {
            type: "Website",
            href: "https://planetam.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/projects/planetamirim.png",
        video: "",
      },
    ],
  },
};

// ─── Public API ───────────────────────────────────────────────────────────────

export function getResumeData(locale: Locale = "en") {
  const content = CONTENT[locale] ?? CONTENT.en;
  return { ...SHARED, ...content };
}

// Default export (English) — used by layout metadata and any non-locale-aware consumers
export const DATA = getResumeData("en");
