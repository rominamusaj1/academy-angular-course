import { Component, OnInit } from '@angular/core';
import { CountService } from './count.service';

@Component({
  selector: 'app-child-count',
  providers: [CountService],
  template: `<h1>COUNT: {{ count }}</h1>
    <button (click)="increment()">Increment child count component</button> `,
})
export class ChildCountComponent implements OnInit {
  constructor(private countService: CountService) {}

  ngOnInit(): void {}

  get count(): number {
    return this.countService.count;
  }

  increment(): void {
    this.countService.increment();
  }
}
