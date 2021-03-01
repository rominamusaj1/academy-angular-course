import { Component, OnInit } from '@angular/core';
import { CountService } from './count.service';

@Component({
  selector: 'app-count',
  template: `<h1>
  COUNT: {{count}}
 </h1>
 <button (click)="increment()" >Increment Count component</button>
 <app-child-count></app-child-count>`,
})
export class CountComponent implements OnInit {
  constructor(private countService: CountService) {}

  ngOnInit() {}


  get count(): number {
    return this.countService.count;
  }

  increment(): void {
    this.countService.increment();
  }
}
