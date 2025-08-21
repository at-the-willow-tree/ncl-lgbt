import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EventCardComponent } from '../../shared/event-card/event-card';

@Component({
  selector: 'app-home',
  imports: [EventCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/events')
      .subscribe((res) => console.log(res));
  }
}
