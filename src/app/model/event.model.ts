import { COLOURS } from '@constants/constants';

export class Event {
  _id: string = '';
  createdAt: Date | undefined;
  startDate: Date = new Date();
  title: string = '';
  approvalStatus: EventApprovalStatus = EventApprovalStatus.Pending;
  price: number = 0;
  imageCover: string = '';
  colour: string = COLOURS.PINK;
}

export interface EventDTO {
  _id: string;
  createdAt: string;
  startDate: string;
  title: string;
  price: number;
  approvalStatus: EventApprovalStatus;
  colour: string;
  imageCover: string;
}

export enum EventApprovalStatus {
  Pending = 'pending',
  Approved = 'approved',
  Declined = 'declined',
}
