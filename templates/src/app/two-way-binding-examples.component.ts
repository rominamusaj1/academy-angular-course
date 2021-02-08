import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-examples',
  template: ` <div>
    <h1>Two way binding examples</h1>
    <h2>Use of ngModel</h2>
    <label>FontSize (px): <input [(ngModel)]="fontSizePx" /></label>
    <h2>De-sugared two-way binding</h2>
    <app-sizer [(size)]="fontSizePx"></app-sizer>
    <button (click)="showAlert()">click with myClick</button>
  </div>`,
})
export class TwoWayBindingExamplesComponent implements OnInit {
  fontSizePx = 16;
  constructor() {}
  ngOnInit() {}

  showAlert() {
    alert(`Value : ${this.fontSizePx}.`);
  }
}
