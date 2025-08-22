import { DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { DATE_FORMAT_LONG, PLACEHOLDER_IMAGE } from '@constants/constants';

@Component({
  selector: 'ncl-event-card',
  imports: [DatePipe],
  templateUrl: './event-card.html',
  styleUrl: './event-card.scss',
})
export class EventCardComponent {
  public eventClicked = output();
  public venueClicked = output();

  public title = input<string>('Title');
  public image = input<string>(PLACEHOLDER_IMAGE);
  public start = input<Date>(new Date());
  public location = input<{ title: string; id: string }>({
    title: '',
    id: '',
  });

  public readonly dateFormat = DATE_FORMAT_LONG;
}
