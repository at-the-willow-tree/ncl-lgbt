import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  DEFAULT_PAGE_LIMIT,
  FILTER_MOST_RECENT_UPCOMING,
} from '@constants/constants';
import { EventCardComponent } from '@shared/event-card/event-card.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { HeaderComponent } from '@shared/header/header.component';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';
import { EventsService } from 'src/app/services/internal/events.service';

@Component({
  selector: 'ncl-events',
  imports: [
    AsyncPipe,
    EventCardComponent,
    HeaderComponent,
    FooterComponent,
    InfiniteScrollDirective,
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  private $currentPage = new BehaviorSubject<number>(1);

  public isLoading: boolean = false;
  public $currentPageData = this.$currentPage.pipe(
    switchMap((page: number) =>
      this.eventService.getEventsPaginated(1, page * DEFAULT_PAGE_LIMIT, [
        FILTER_MOST_RECENT_UPCOMING,
      ]),
    ),
    map((response) => response.data.data || []),
    tap(() => {
      this.isLoading = false;
    }),
  );

  constructor(private readonly eventService: EventsService) {}

  public nextPage(): void {
    this.isLoading = true;
    this.$currentPage.next(this.$currentPage.value + 1);
  }

  public previousPage(): void {
    if (this.$currentPage.value > 1) {
      this.$currentPage.next(this.$currentPage.value - 1);
    }
  }
}
