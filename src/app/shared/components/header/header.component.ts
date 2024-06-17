import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderSection } from '../../models/shared.interfaces';

@Component({
  selector: 'skp-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  content = input.required<HeaderSection>();
}
