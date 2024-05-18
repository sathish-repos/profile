import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'skp-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  version: number = environment.Version;
}
