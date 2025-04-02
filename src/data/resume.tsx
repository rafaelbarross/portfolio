import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Code } from "lucide-react";

export const DATA = {
  name: "Rafael Barros",
  initials: "RB",
  url: "https://rafaelbarros.vercel.app",
  location: "Junqueiro, Brazil",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Desenvolvedor Frontend Senior. Sou sempre persistente. Gosto de desvendar problemas e criar soluções!",
  summary:
    "No final de 2021, iniciei minha jornada no desenvolvimento web enquanto estudava no [Instituto Federal de Alagoas](https://www.linkedin.com/school/instituto-federal-de-alagoas-if-al). Durante meu tempo lá, tive a oportunidade de ingressar no [DIT](https://www.linkedin.com/company/dit-ifal) como Desenvolvedor Front-end, onde tenho trabalhado com tecnologias modernas como React, Next.js, Vite.js e TypeScript. Também criei o [Agendime](https://agendime.com.br), uma solução SaaS que desenvolvi do zero, colocando em prática tudo o que aprendi ao longo da minha jornada acadêmica e profissional.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Flutter",
    "Typescript",
    "Node.js",
    "Go",
    "Postgres",
    "Docker",
    "Firebase",
    "Dart",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: Code, label: "Projetos" },
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

        navbar: true,
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

  work: [
    {
      company: "DIT",
      href: "https://www.linkedin.com/company/dit-ifal",
      badges: [],
      location: "Remote",
      title: "Desenvolvedor front-end",
      logoUrl: "/DIT.jpeg",
      start: "mar 2023",
      end: "o momento",
      description:
        "Atuando como Desenvolvedor Front-end no DIT desde março de 2023, lidero o desenvolvimento de aplicações web modernas utilizando React, Next.js, Vite.js e TypeScript. Minhas contribuições principais incluem a implementação de novas funcionalidades para o negócio, integração e consumo de APIs REST, e desenvolvimento de interfaces responsivas com foco em desempenho e acessibilidade. Contribuí significativamente para a modernização da pilha tecnológica do projeto, implementando boas práticas de desenvolvimento e padrões de código. metodologias ágeis, participando de revisões de código e mantendo uma comunicação eficaz entre os tempos de desenvolvimento",
    },
  ],
  education: [
    {
      school: "Instituto Federal de Alagoas",
      href: "https://www.linkedin.com/school/instituto-federal-de-alagoas-if-al",
      degree: "Bacharelado em Sistemas de Informação",
      logoUrl: "/IFAL.jpeg",
      start: "2025",
      end: "o momento",
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
        "[Bingo Brasil](https://preparaflix.com.br) foi desenvolvido por meio de um projeto de pesquisa do [Campus Arapiraca](https://www.linkedin.com/school/instituto-federal-de-alagoas-if-al), o invento nomeado PreparaFlix agrupa cursos de varias áreas, com videoaulas sobre tópicos do conteúdo programático de Português e Matemática disposto no edital do certame, além de simulados, quizzes e a possibilidade dos/as participantes integrarem o ranking de acertos com outros/as",
      technologies: [
        "Next.js",
        "Typecript",
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
        "[Café Engenho do Queijo](https://cafeengenhodoqueijo.vercel.app) é um projeto de site desenvolvido para uma cafeteria local. O objetivo principal era criar uma presença online atraente e funcional, permitindo que os clientes visualizassem informações sobre a cafeteria e entrassem em contato facilmente.",
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
        "[English Learning AI](https://english-ai.vercel.app/) é um projeto de site desenvolvido para ajudar os usuários a aprender inglês de forma interativa e envolvente. O objetivo principal era criar uma plataforma que utilizasse inteligência artificial generativa para fornecer feedback instantâneo e personalizado aos usuários durante o processo de aprendizado. Contando com quiz, chat e correção de textos.",
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
        "[Barbershop](https://barbearia-site.vercel.app) é um projeto de site desenvolvido para barbearia. O objetivo principal era criar uma presença online atraente e funcional, permitindo que os clientes agendassem serviços, visualizassem informações sobre a barbearia e entrassem em contato facilmente.",
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
        "[Enviar Sem Salvar](https://enviar-sem-salvar.vercel.app) é um projeto de site desenvolvido com o objetivo de facilitar o envio de mensagens para pessoas do WhatsApp sem a necessidade de salvar o número no contato do celular. O projeto foi desenvolvido com o intuito de simplificar o processo de envio de mensagens, tornando-o mais rápido e eficiente.",
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
        "[Bingo Brasil](https://bingobrasil.vercel.app) é um projeto de site desenvolvido para um bingo online. O objetivo principal era criar uma area de login e um painel administrativo para gerenciar os jogos, permitindo que os administradores criassem e gerenciassem jogos de bingo de forma eficiente em tempo real.",
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
      href: "Planeta Mirim",
      dates: "Jul 2023 - Dez 2023",
      active: true,
      description:
        "[Planeta Mirim](https://planetam.vercel.app) é um projeto de extensão desenvolvido pelos estudantes do 3° ano do curso técnico integrado em informática e tem como objetivo conscientizar as crianças sobre a importância da preservação do meio ambiente e desenvolver ações que promovam a sustentabilidade, assim contribuindo para a formação de cidadãos conscientes e responsáveis, que se preocupam com o futuro do planeta e das próximas gerações.",
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
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
