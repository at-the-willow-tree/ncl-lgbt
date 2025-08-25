import { FilterOption } from '@model/external.model';

export const PLACEHOLDER_IMAGE = 'assets/images/placeholder.svg';
export const DATE_FORMAT_LONG = 'EEEE, MMMM d, y';

export const DEFAULT_PAGE_LIMIT = 10;

export const COLOURS = {
  PINK: '#F376F9',
};

export enum HttpParams {
  Id = 'id',
  Sort = 'sort',
  Limit = 'limit',
  Page = 'page',
  Status = 'status',
  StartDate = 'startDate',
  CreatedAt = 'createdAt',
  ApprovalStatus = 'approvalStatus',
  Price = 'price',
}

export const FILTER_MOST_RECENT_UPCOMING: FilterOption = {
  id: HttpParams.Sort,
  value: `${HttpParams.StartDate},${HttpParams.CreatedAt}`,
};
