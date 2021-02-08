import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding-examples',
  template: ` <div>
    <h1>Class Binding with Angular</h1>
    <h2>
      The 'class.special' binding overrides any value for the 'special' class in
      'classExpression'.
    </h2>
    <div [class.special]="isSpecial" [class]="classExpression">Some text.</div>
    <h2>
      If 'classExpression' has a value for the special class, this value
      overrides the 'class="special"' below
    </h2>
    <div class="special" [class]="classExpression">Some text.</div>
  </div>`,
})
export class ClassBindingExamplesComponent implements OnInit {
  isSpecial = true;
  classExpression = 'special clearance';
  constructor() {}
  ngOnInit() {}
}
