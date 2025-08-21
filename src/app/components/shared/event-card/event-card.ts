import { Component, input, output } from '@angular/core';

@Component({
  selector: 'ncl-event-card',
  imports: [],
  templateUrl: './event-card.html',
  styleUrl: './event-card.scss',
})
export class EventCardComponent {
  public eventClicked = output();
  public venueClicked = output();
  public title = input<string>('Title');
  public image = input<string>();
  public start = input<Date>(new Date());
  public location = input<{ title: string; id: string }>();
}
