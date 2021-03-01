import { Component, OnInit } from '@angular/core';

import { CountService } from './count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private countService: CountService) {}

  ngOnInit(): void {
  }

  get count(): number {
    return this.countService.count;
  }

  get total(): number {
    return CountService.total;
  }

  incremnt() {
    this.countService.increment();
  }
}
