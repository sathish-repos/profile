import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ThemeComponent } from './shared/components/theme/theme.component';
import { ContentService } from './shared/services/content.service';
import { HeaderFooterContent } from './shared/models/shared.interfaces';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'skp-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ThemeComponent,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  content$: Observable<HeaderFooterContent> =
    {} as Observable<HeaderFooterContent>;

  constructor(private contentService: ContentService) {
    this.content$ = this.contentService.getHeaderFooterContent();
  }
}
