import {
  AppsSection,
  HeroSection,
  ProfileContent,
} from '../models/profile.interfaces';

export const HeroSectionMocks: HeroSection = {
  name: 'Sathishkumar',
  description: 'Front-end Developer. Repo Architect. UI. System Design & More.',
};

export const AppsSectionMocks: AppsSection = {
  title: 'Projects',
  appsList: [
    {
      name: 'Todo',
      description: 'Its an todo application with firebase as a backend',
      imageUrl: {
        mobile: 'assets/app-2.webp',
        desktop: 'assets/todo.png',
      },
      link: {
        url: 'https://todo-firebase-123.web.app/',
        target: '_blank',
      },
    },
    {
      name: 'Todo',
      description: 'Its an todo application with firebase as a backend',
      imageUrl: {
        mobile: 'assets/app-2.webp',
        desktop: 'assets/todo.png',
      },
      link: {
        url: 'https://todo-firebase-123.web.app/',
        target: '_blank',
      },
    },
    {
      name: 'Todo',
      description: 'Its an todo application with firebase as a backend',
      imageUrl: {
        mobile: 'assets/app-2.webp',
        desktop: 'assets/todo.png',
      },
      link: {
        url: 'https://todo-firebase-123.web.app/',
        target: '_blank',
      },
    },
    {
      name: 'Todo',
      description: 'Its an todo application with firebase as a backend',
      imageUrl: {
        mobile: 'assets/app-2.webp',
        desktop: 'assets/todo.png',
      },
      link: {
        url: 'https://todo-firebase-123.web.app/',
        target: '_blank',
      },
    },
  ],
};

export const ProfileContentMocks: ProfileContent = {
  hero: HeroSectionMocks,
  apps: AppsSectionMocks,
};
