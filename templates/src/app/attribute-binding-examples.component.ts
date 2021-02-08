import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding-examples',
  template: `
  <div>
    <h1>Attribute Binding examples</h1>
    <h2>expression calculates colspan=2</h2>
    <table border="1">
      <tr>
        <td [attr.colspan]="1 + 1">One-Two</td>
      </tr>
      <tr>
        <td>Five</td>
        <td>Six</td>
      </tr>
    </table>
    <h2>create and set an aria attribute for assistive technology</h2>
    <!-- create and set an aria attribute for assistive technology -->
    <button [attr.aria-label]="actionName">{{ actionName }} with Aria</button>
  </div>`,
})
export class AttributeBindingExamplesComponent implements OnInit {
  actionName = 'Go for it';
  constructor() {}
  ngOnInit() {}
}
