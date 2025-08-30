import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EventDTO, Event } from '@model/event.model';
import {
  FilterOption,
  ServiceResponseGetDto,
  ServiceResponseStatus,
} from '@model/external.model';
import { map, Observable } from 'rxjs';
import { EventsMapping } from './mappings/events.mappings';

@Injectable({
  providedIn: 'root',
})
export class EventsServiceExternal {
  private readonly http = inject(HttpClient);
  private readonly eventsMapping = inject(EventsMapping);

  public getEventsPaginated(
    page: number = 1,
    limit: number = 10,
    filters: FilterOption[] = [],
    fields: string[] = [],
  ): Observable<ServiceResponseGetDto<Event[]>> {
    let queryUrl =
      environment.backendBaseUrl + '/events?' + `page=${page}&limit=${limit}`;

    if (fields.length) {
      queryUrl += '&fields=' + fields.join(',');
    }

    if (filters.length) {
      filters.forEach(
        (filter) => (queryUrl += `&${filter.id}=${filter.value}}`),
      );
    }

    return this.http.get<ServiceResponseGetDto<EventDTO[]>>(queryUrl).pipe(
      map((response) => {
        if (response.status === ServiceResponseStatus.Success) {
          const mappedData = response.data.data.map((dto) =>
            this.eventsMapping.mapEventDtoToEvent(dto),
          );
          return {
            ...response,
            data: { data: mappedData },
          };
        } else {
          return {
            ...response,
            data: { data: [] },
          };
        }
      }),
    );
  }
}
