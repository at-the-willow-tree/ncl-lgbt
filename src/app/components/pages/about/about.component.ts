import { Component } from '@angular/core';
import { FooterComponent } from '@shared/footer/footer.component';
import { HeaderComponent } from '@shared/header/header.component';

@Component({
  selector: 'ncl-about',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
