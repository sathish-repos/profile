import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProfileContent } from '../../pages/profile/models/profile.interfaces';
import { Observable } from 'rxjs';
import { AboutContent } from '../../pages/about/models/about.model';
import { HeaderFooterContent } from '../models/shared.interfaces';
import { PageNotFoundSection } from '../../pages/page-not-found/models/page-not-found.interfaces';

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

  getHeaderFooterContent(): Observable<HeaderFooterContent> {
    return this.http.get<HeaderFooterContent>(
      'https://sathish-repos.github.io/assets/aem/profile/header-footer.json'
    );
  }

  getPageNotFoundContent(): Observable<PageNotFoundSection> {
    return this.http.get<PageNotFoundSection>(
      'https://sathish-repos.github.io/assets/aem/profile/page-not-found.json'
    );
  }
}
