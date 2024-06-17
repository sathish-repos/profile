import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppsComponent } from './components/apps/apps.component';
import { ContentService } from '../../shared/services/content.service';
import { ProfileContent } from './models/profile.interfaces';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'skp-profile',
  standalone: true,
  imports: [AsyncPipe, HeroComponent, ContactComponent, AppsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  content$: Observable<ProfileContent> = {} as Observable<ProfileContent>;

  constructor(private contentService: ContentService) {
    this.content$ = this.contentService.getProfileContent();
  }
}
