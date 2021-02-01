import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlecase-pipe-examples',
  template: ` <div class="card card-block">
    <h4 class="card-title">TitleCasePipe examples</h4>
    <div class="card-text">
      <p>{{ 'some string' | titlecase }}</p>
      <!-- output is expected to be "Some String" -->
      <p>{{ 'tHIs is mIXeD CaSe' | titlecase }}</p>
      <!-- output is expected to be "This Is Mixed Case" -->
      <p>{{ valueToTransform | titlecase }}</p>
      <!-- output is expected to be "This Is Mixed Case" -->
    </div>
  </div>`,
})
export class TitleCasePipeExamplesComponent implements OnInit {
  valueToTransform = 'oTher Example';

  constructor() {}

  ngOnInit() {}
}
