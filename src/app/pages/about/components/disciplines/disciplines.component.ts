import { Component, input } from '@angular/core';
import { DisciplinesSection } from '../../models/about.model';

@Component({
  selector: 'skp-disciplines',
  standalone: true,
  imports: [],
  templateUrl: './disciplines.component.html',
  styleUrl: './disciplines.component.scss',
})
export class DisciplinesComponent {
  content = input.required<DisciplinesSection>();
}
