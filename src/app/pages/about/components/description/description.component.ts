import { Component, input } from '@angular/core';
import { DescriptionSection } from '../../models/about.model';

@Component({
  selector: 'skp-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent {
  content = input.required<DescriptionSection>();
}
