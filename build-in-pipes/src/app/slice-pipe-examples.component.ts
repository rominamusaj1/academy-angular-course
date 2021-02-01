import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice-pipe-examples',
  template: `<div class="card card-block">
    <h4 class="card-title">SlicePipe examples</h4>
    <div class="card-text">
      <ul>
        <li *ngFor="let i of collection | slice: 1:3">{{ i }}</li>
      </ul>
      <p>{{stringValue | slice: 1:3}}</p>
    </div>
  </div>`,
})
export class SlicePipeExamplesComponent implements OnInit {
  collection: string[] = ['a', 'b', 'c', 'd'];
  stringValue = "abcd";
  constructor() {}

  ngOnInit() {}
}
