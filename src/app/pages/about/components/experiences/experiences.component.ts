import { Component, input } from '@angular/core';
import { ExperiencesSection } from '../../models/about.model';

@Component({
  selector: 'skp-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  content = input.required<ExperiencesSection>();
}
