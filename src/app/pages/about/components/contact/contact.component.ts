import { Component, input } from '@angular/core';
import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import { ContactSection } from '../../models/about.model';

@Component({
  selector: 'skp-contact',
  standalone: true,
  imports: [CdkCopyToClipboard],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  content = input.required<ContactSection>();
  email = this.content().email.id;

  onCopy() {
    setInterval(() => {
      this.email = this.content().email.id;
    }, 1000);
    this.email = 'Copied !!';
  }
}
