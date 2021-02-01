import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaining-pipes-examples',
  template: ` <div class="card card-block">
    <h4 class="card-title">Chaining pipes examples</h4>
    <div class="card-text">
      <p>Month is {{ today | date | uppercase | slice: 0:4 }}</p>
    </div>
  </div>`,
})
export class ChainingPipesExamplesComponent implements OnInit {
  today = new Date();

  constructor() {}

  ngOnInit() {}
}
