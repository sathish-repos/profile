import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProfileContent } from '../../pages/profile/models/profile.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private http = inject(HttpClient);

  getProfileContent(): Observable<ProfileContent> {
    return this.http.get<ProfileContent>(
      'assets/aem-content/profile-page.json'
    );
  }
}
