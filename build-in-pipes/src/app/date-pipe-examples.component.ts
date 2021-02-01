import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe-examples',
  template: `
  <div class="card card-block">
    <h4 class="card-title">DatePipe examples</h4>
    <div class="card-text">
      <p>{{ dateValue | date: 'shortTime' }}</p>

      <p>{{ dateValue | date: 'fullDate' }}</p>

      <p>{{ dateValue | date: 'd/M/y' }}</p>
    </div>
  </div>`,
})
export class DatePipeExamplesComponent implements OnInit {
  dateValue: Date = new Date();
  constructor() {}

  ngOnInit() {}
}
