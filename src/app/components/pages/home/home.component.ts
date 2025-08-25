import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
