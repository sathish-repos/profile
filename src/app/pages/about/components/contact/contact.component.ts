import { Component } from '@angular/core';
import { CdkCopyToClipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'skp-contact',
  standalone: true,
  imports: [CdkCopyToClipboard],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  email: string = 'me.sathish.git@gmail.com';

  async onCopy() {
    await setInterval(() => {
      this.email = 'me.sathish.git@gmail.com';
    }, 800);
    this.email = 'Email Copied !!';
  }
}
