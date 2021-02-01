import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lowercase-pipe-examples',
  template: ` <div class="card card-block">
    <h4 class="card-title">LowerCasePipe examples</h4>
    <div class="card-text">
      <p>{{ valueToTransform | lowercase }}</p>
      <p>{{ 'IKUBINFO ACADEMY' | lowercase }}</p>
    </div>
  </div>`,
})
export class LowercasePipeExamplesComponent implements OnInit {
  valueToTransform: string = 'IKUBINFO ACADEMY';
  constructor() {}

  ngOnInit() {}
}
