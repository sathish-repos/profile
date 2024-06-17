import { Component, input } from '@angular/core';
import { AppsSection } from '../../models/profile.interfaces';

@Component({
  selector: 'skp-apps',
  standalone: true,
  imports: [],
  templateUrl: './apps.component.html',
  styleUrl: './apps.component.scss',
})
export class AppsComponent {
  content = input.required<AppsSection>();
}
