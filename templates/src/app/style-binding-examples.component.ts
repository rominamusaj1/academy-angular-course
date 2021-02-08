import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding-examples',
  template: ` <div>
    <h1>Templates</h1>

    <h2>
      The 'style.color' binding overrides any value for the 'color' property in
      'styleExpression'.
    </h2>
    <div [style.color]="color" [style]="styleExpression">Some text.</div>
    <h2>
      If 'styleExpression' has a value for the 'color' property, this value
      overrides the 'style="color: blue"' below
    </h2>
    <div style="color: blue" [style]="styleExpression">Some text.</div>
  </div>`,
})
export class StyleBindingExamplesComponent implements OnInit {
  styleExpression = 'color: red';
  color = 'blue';
  constructor() {}
  ngOnInit() {}
}
