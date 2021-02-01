import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-pipe-examples',
  template: ` <div class="card card-block">
    <h4 class="card-title">JsonPipe examples</h4>
    <div class="card-text">
      <p>Without JSON pipe:</p>
      <pre>{{ myObject }}</pre>
      <p>With JSON pipe:</p>
      <pre>{{ myObject | json }}</pre>
    </div>
  </div>`,
})
export class JsonPipeExamplesComponent implements OnInit {
  myObject: Object = {
    foo: 'bar',
    baz: 'qux',
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] },
  };

  constructor() {}

  ngOnInit() {}
}
