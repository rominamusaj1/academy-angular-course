import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uppercase-pipe-examples',
  template: ` <div class="card card-block">
    <h4 class="card-title">UpperCasePipe examples</h4>
    <div class="card-text">
      <p>{{ valueToTransform | uppercase }}</p>
      <p>{{ 'ikubinfo academy' | uppercase }}</p>
    </div>
  </div>`,
})
export class UppercasePipeExamplesComponent implements OnInit {
  valueToTransform: string = 'ikubinfo academy';
  constructor() {}

  ngOnInit() {}
}
