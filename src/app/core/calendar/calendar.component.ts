import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap',
    headerToolbar: {
      left: '', // Empty to remove 'prev', 'next', and 'today' buttons
      center: 'title', // Only display the title
      right: '', // Empty to remove 'prev', 'next', and 'today' buttons
    },
    events: [{ title: 'Event 1', date: '2024-07-10' }],
  };
}
