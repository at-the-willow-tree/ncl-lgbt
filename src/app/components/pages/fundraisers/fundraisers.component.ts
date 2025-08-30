import { Component } from '@angular/core';
import { FooterComponent } from '@shared/footer/footer.component';
import { HeaderComponent } from '@shared/header/header.component';

@Component({
  selector: 'ncl-fundraisers',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './fundraisers.component.html',
  styleUrl: './fundraisers.component.scss',
})
export class FundraisersComponent {}
