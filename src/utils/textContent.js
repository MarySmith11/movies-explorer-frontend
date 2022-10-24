import portfolioPhoto from '../images/photo.jpg';

export const promoTitle = 'Учебный проект студента факультета Веб-разработки.';
export const aboutTitle = 'О проекте';
export const aboutProjectColumns = [
  {
    title: 'Дипломный проект включал 5 этапов',
    description: 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
  },
  {
    title: 'На выполнение диплома ушло 5 недель',
    description: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
  },
];

export const timeline = {
  left: {
    title: '1 неделя',
    description: 'Back-end',
  },
  right: {
    title: '4 недели',
    description: 'Front-end',
  },
};

export const techsContent = {
  title: 'Технологии',
  subtitle: '7 технологий',
  description: 'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.',
  technologies: [
    'HTML',
    'CSS',
    'JS',
    'React',
    'Git',
    'Express.js',
    'mongoDB',
  ],
};

export const portfolioContent = {
  title: 'Портфолио',
  links: [
    {
      title: 'Статичный сайт',
      href: 'https://github.com/MarySmith11/how-to-learn.git',
    },
    {
      title: 'Адаптивный сайт',
      href: 'https://github.com/MarySmith11/russian-travel.git',
    },
    {
      title: 'Одностраничное приложение',
      href: 'https://github.com/MarySmith11/react-mesto-api-full.git',
    },
  ],
};

export const aboutMeContent = {
  title: 'Студент',
  name: 'Мария',
  activity: 'Фронтенд-разработчик, 24 года',
  photo: portfolioPhoto,
  description: 'Я родилась в Барнауле, но живу в Новосибирске уже 5 лет, закончила факультет экономики РАНХиГС. У меня есть муж. Я люблю заниматься творческой деятельностью и активным видом спорта. С 2017 года работала в компании «МСС» бухгалтером. Недавно начала кодить. В портфолио уже имеется коммерческий проект.',
  link: {
    title: 'Github',
    href: 'https://github.com',
  },
};

export const footerContent = {
  description: 'Учебный проект Яндекс.Практикум х BeatFilm.',
  links: [
    {
      title: 'Яндекс.Практикум',
      href: 'https://praktikum.yandex.ru/',
    },
    {
      title: 'Github',
      href: 'https://github.com/',
    },
  ],
};
