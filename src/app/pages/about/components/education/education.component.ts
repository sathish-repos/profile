import { Component, input } from '@angular/core';
import { EducationSection } from '../../models/about.model';

@Component({
  selector: 'skp-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  content = input.required<EducationSection>();
}
