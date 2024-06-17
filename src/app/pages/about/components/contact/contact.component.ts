import {
  Component,
  OnChanges,
  SimpleChanges,
  input,
  signal,
} from '@angular/core';
import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import { ContactSection } from '../../models/about.model';

@Component({
  selector: 'skp-contact',
  standalone: true,
  imports: [CdkCopyToClipboard],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnChanges {
  content = input.required<ContactSection>();
  email = signal('');

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['content']) {
      this.email.set(this.content().email.id);
    }
  }

  onCopy() {
    setInterval(() => {
      this.email.set(this.content().email.id);
    }, 1000);
    this.email.set('Copied !!');
  }
}
