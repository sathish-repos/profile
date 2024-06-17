import { Component, input } from '@angular/core';
import { HeroSection } from '../../models/profile.interfaces';

@Component({
  selector: 'skp-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  content = input.required<HeroSection>();
}
