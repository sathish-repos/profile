import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ThemeComponent } from './shared/components/theme/theme.component';

@Component({
  selector: 'skp-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'profile';
}
