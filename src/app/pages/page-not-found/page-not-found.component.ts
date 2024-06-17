import { Component } from '@angular/core';
import { PageNotFoundSection } from './models/page-not-found.interfaces';
import { Observable } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'skp-page-not-found',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export default class PageNotFoundComponent {
  content$: Observable<PageNotFoundSection> =
    {} as Observable<PageNotFoundSection>;

  constructor(private contentService: ContentService) {
    this.content$ = this.contentService.getPageNotFoundContent();
  }
}
