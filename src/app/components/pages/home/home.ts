import { Component } from '@angular/core';
import { EventCardComponent } from '../../shared/event-card/event-card';

@Component({
  selector: 'app-home',
  imports: [EventCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
