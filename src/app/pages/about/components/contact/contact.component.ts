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
  content = input<ContactSection>(mock);
  email = this.content().email ? this.content().email.id : '';

  onCopy() {
    setInterval(() => {
      this.email = this.content() ? this.content().email.id : '';
    }, 1000);
    this.email = 'Copied !!';
  }
}

export const mock: ContactSection = {
  title: 'Contact',
  description: `Feel free to reach out for projects, collaborations, or just to say hello!
    Currently seeking new opportunities.`,
  email: {
    label: 'Email',
    id: 'me.sathish.git@gmail.com',
  },
  phoneNo: {
    label: 'Ph No.: ',
    number: 6380891338,
  },
};
