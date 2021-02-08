import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-examples',
  template: ` <div>
    <h1>Property Binding with Angular</h1>
    <h2>Binding the src property of an image:</h2>
    <img [src]="logoUrl" />
    <hr />
    <h2>Binding to a property of a directive</h2>
    <p [ngClass]="classes">
      [ngClass] binding to the classes property making this blue
    </p>
    <hr />
    <h2>Model property of a custom component:</h2>
    <app-item-detail [childItem]="parentItem"></app-item-detail>
    <hr />
  </div>`,
})
export class PropertyBindingExamplesComponent implements OnInit {
  logoUrl = '../assets/logo.jpg';
  classes = 'special';
  parentItem = 'lamp';
  constructor() {}
  ngOnInit() {}
}
