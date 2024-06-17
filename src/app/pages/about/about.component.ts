import { Component } from '@angular/core';
import {
  ContactComponent,
  DescriptionComponent,
  DisciplinesComponent,
  EducationComponent,
  ExperiencesComponent,
} from './components';
import { AboutContent } from './models/about.model';
import { AboutContentMocks } from './mocks/about.mocks';

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
export default class AboutComponent {
  content: AboutContent = AboutContentMocks;
}
