import { Component } from '@angular/core';

@Component({
  selector: 'skp-apps',
  standalone: true,
  imports: [],
  templateUrl: './apps.component.html',
  styleUrl: './apps.component.scss',
})
export class AppsComponent {
  content = {
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
}
