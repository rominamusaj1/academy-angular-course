import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decimal-pipe-examples',
  template: `<div class="card card-block">
    <h4 class="card-title">DecimalPipe examples</h4>
    <div class="card-text">
      <!--output '2.718'-->
      <p>e (no formatting): {{ e | number }}</p>

      <!--output '002.71828'-->
      <p>e (3.1-5): {{ e | number: '3.1-5' }}</p>

      <!--output '0,002.71828'-->
      <p>e (4.5-5): {{ e | number: '4.5-5' }}</p>


      <!--output '3.14'-->
      <p>pi (no formatting): {{ pi | number }}</p>

      <!--output '003.14'-->
      <p>pi (3.1-5): {{ pi | number: '3.1-5' }}</p>

      <!--output '003.14000'-->
      <p>pi (3.5-5): {{ pi | number: '3.5-5' }}</p>

      <!--output '-3' / unlike '-2' by Math.round()-->
      <p>-2.5 (1.0-0): {{ -2.5 | number: '1.0-0' }}</p>
    </div>
  </div>`,
})
export class DecimalPipeExamplesComponent implements OnInit {
  pi: number = 3.14;
  e: number = 2.718281828459045;
  constructor() {}

  ngOnInit() {}
}
