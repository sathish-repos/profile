import { Component, input } from '@angular/core';
import { FooterSection } from '../../models/shared.interfaces';

@Component({
  selector: 'skp-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  content = input.required<FooterSection>();

  downloadResume() {
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = this.content().resume.url;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }
}
