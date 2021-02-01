import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percent-pipe-examples',
  template: `<div class="card card-block">
    <h4 class="card-title">PercentPipe examples</h4>
    <div class="card-text">
      <!--output '26%'-->
      <p>A: {{ a | percent }}</p>

      <!--output '0,134.950%'-->
      <p>B: {{ b | percent: '4.3-5' }}</p>
    </div>
  </div>`,
})
export class PercentPipeExamplesComponent implements OnInit {
  a: number = 0.259;
  b: number = 1.3495;
  constructor() {}

  ngOnInit() {}
}
