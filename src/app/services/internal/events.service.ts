import { inject, Injectable } from '@angular/core';
import { EventsServiceExternal } from '../external/events.service';
import { Observable } from 'rxjs';
import { Event } from '@model/event.model';
import { FilterOption, ServiceResponseGetDto } from '@model/external.model';
import { DEFAULT_PAGE_LIMIT } from '@constants/constants';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private readonly eventsServiceExternal = inject(EventsServiceExternal);

  public getEventsPaginated(
    page: number = 1,
    limit: number = DEFAULT_PAGE_LIMIT,
    filters: FilterOption[] = [],
    fields: string[] = [],
  ): Observable<ServiceResponseGetDto<Event[]>> {
    return this.eventsServiceExternal.getEventsPaginated(
      page,
      limit,
      filters,
      fields,
    );
  }
}
