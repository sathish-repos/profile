import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProfileContent } from '../../pages/profile/models/profile.interfaces';
import { Observable, of } from 'rxjs';
import { AboutContent } from '../../pages/about/models/about.model';
import { AboutContentMocks } from '../../pages/about/mocks/about.mocks';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private http = inject(HttpClient);

  getProfileContent(): Observable<ProfileContent> {
    return this.http.get<ProfileContent>(
      'https://sathish-repos.github.io/assets/aem/profile/profile-page.json'
    );
  }

  getAboutContent(): Observable<AboutContent> {
    return this.http.get<AboutContent>(
      'https://sathish-repos.github.io/assets/aem/profile/about-page.json'
    );
  }
}
