import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-pipe-examples',
  template: ` <div class="card card-block">
    <h4 class="card-title">CurrencyPipe examples</h4>
    <div class="card-text">
    <p>{{ value | currency }}  // Default currency code is USD</p>
      <p>{{ value | currency: 'EUR' }}</p>
      <p>{{ 123456.56 | currency: 'EUR':'code' }}</p>
      <p>{{ value | currency: 'EUR':'symbol' }}</p>
      <p>{{ 123456.56 | currency: 'EUR':'symbol-narrow' }}</p>
      <p>{{ 123456.56 | currency: 'EUR':'ikubinfo-symbol' }}</p>
    </div>
  </div>`,
})
export class CurrencyPipeExamplesComponent implements OnInit {
  value: number = 123456.56;
  constructor() {}

  ngOnInit() {}
}
