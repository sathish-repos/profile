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
import { ContentService } from '../../shared/services/content.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'skp-about',
  standalone: true,
  imports: [
    ContactComponent,
    DisciplinesComponent,
    EducationComponent,
    ExperiencesComponent,
    DescriptionComponent,
    AsyncPipe,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export default class AboutComponent {
  content$: Observable<AboutContent> = {} as Observable<AboutContent>;
  constructor(private contentService: ContentService) {
    this.content$ = this.contentService.getAboutContent();
  }
}
