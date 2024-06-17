import {
  AboutContent,
  ContactSection,
  DescriptionSection,
  DisciplinesSection,
  EducationSection,
  ExperiencesSection,
} from '../models/about.model';

export const ContactSectionMocks: ContactSection = {
  title: 'Contact',
  description: `Feel free to reach out for projects, collaborations, or just to say hello!
    Currently seeking new opportunities.`,
  email: {
    label: 'Email',
    id: 'me.sathish.git@gmail.com',
  },
  phoneNo: {
    label: 'Ph No.: ',
    number: 6380891338,
  },
};

export const DescriptionSectionMocks: DescriptionSection = {
  title: 'Software Developer (Angular & Frontend Technologies)',
  description: [
    '2+ Years of Experience',
    `Proficient in crafting dynamic and responsive user interfaces using Angular
    with state management via NgRx, adept at reactive programming with RxJS.
    Skilled in utilizing Bootstrap for layout and design, while ensuring
    semantic and accessible HTML, along with efficient and scalable CSS.`,
    `Strong JavaScript and TypeScript development skills, with experience in
    integrating designs from Figma into functional applications. Proficient in
    API testing and collaboration using Postman, with solid version control
    practices using Git, GitHub, and GitLab.`,
    `I foster open communication and teamwork, leveraging my technical
    proficiency in design tools and front-end development to challenges and
    learn continuously. I prioritize culture alongside product, believing a
    supportive and collaborative environment is key to success. I excel at
    tackling diverse design challenges and pushing boundaries. Always learning,
    I seek new experiences to improve.`,
  ],
  profile: {
    imageUrl:
      'https://sathish-repos.github.io/assets/images/profile/profile.jpeg',
    altText: 'Profile picture',
  },
};

export const DisciplinesSectionMocks: DisciplinesSection = {
  title: 'Disciplines',
  disciplines: [
    'Front-End',
    'RxJs',
    'NgRX',
    'Bootstrap',
    'Figma',
    'PostMan',
    'Firebase',
    'Github',
  ],
};

export const EducationSectionMocks: EducationSection = {
  title: 'Education',
  educations: [
    {
      study: 'B.E Computer Science and Engineering',
      from: 'From: TCET',
      year: '2017-2021',
      score: '76.5%',
    },
    {
      study: 'Higher Sec School',
      from: 'From: Govt. Hrs School',
      year: '2015-2017',
      score: '87.25%',
    },
    {
      study: 'High School',
      from: 'From: Govt. High School',
      year: '2015-2017',
      score: '76.6%',
    },
  ],
};

export const ExperiencesSectionMocks: ExperiencesSection = {
  title: 'Work Experiences',
  experiences: [
    {
      job_title: 'System Engineer',
      place: `&#64;TCS`,
      year: '2022-Present',
      highlights: {
        label: 'Project Highlights:',
        items: [
          `Led the development of a feature-rich e-commerce platform, enhancing
        user experience and increasing conversion rates by 20%.`,
          `
          Implemented a real-time analytics dashboard using Angular and NgRx,
        providing actionable insights and improving decision-making processes.
        `,
          `Collaborated on a cross-functional team to integrate multiple micro
        front-ends into a cohesive enterprise application, streamlining workflow
        efficiency.`,
        ],
      },
    },
  ],
};

export const AboutContentMocks: AboutContent = {
  contact: ContactSectionMocks,
  description: DescriptionSectionMocks,
  disciplines: DisciplinesSectionMocks,
  educations: EducationSectionMocks,
  experiences: ExperiencesSectionMocks,
};
