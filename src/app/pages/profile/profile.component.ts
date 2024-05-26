import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'skp-profile',
  standalone: true,
  imports: [HeroComponent, ContactComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
