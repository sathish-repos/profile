import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppsComponent } from './components/apps/apps.component';

@Component({
  selector: 'skp-profile',
  standalone: true,
  imports: [HeroComponent, ContactComponent, AppsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
