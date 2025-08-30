import { Injectable } from '@angular/core';
import { EventDTO, Event } from '@model/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventsMapping {
  public mapEventDtoToEvent(dto: EventDTO): Event {
    const event = new Event();

    event._id = dto._id;
    event.title = dto.title;
    event.approvalStatus = dto.approvalStatus;
    event.colour = dto.colour;
    event.startDate = new Date(dto.startDate);
    event.createdAt = new Date(dto.createdAt);
    event.imageCover = dto.imageCover;
    event.price = dto.price;

    return event;
  }
}
