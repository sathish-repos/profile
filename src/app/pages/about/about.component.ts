import { Component } from '@angular/core';
import {
  ContactComponent,
  DescriptionComponent,
  DisciplinesComponent,
  EducationComponent,
  ExperiencesComponent,
} from './components';

@Component({
  selector: 'skp-about',
  standalone: true,
  imports: [
    ContactComponent,
    DisciplinesComponent,
    EducationComponent,
    ExperiencesComponent,
    DescriptionComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export default class AboutComponent {}
