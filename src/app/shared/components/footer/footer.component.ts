import { Component } from '@angular/core';

@Component({
  selector: 'skp-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  downloadResume() {
    const resumeUrl =
      'https://sathish-repos.github.io/assets/pdfs/resume/resume.pdf';

    const link = document.createElement('a');
    link.target = '_blank';
    link.href = resumeUrl;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }
}
