import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-examples',
  template: ` <div>
    <h1>Event binding examples</h1>
    <h2>Target event</h2>
    <button (click)="showAlert('Target event')">Save</button>
    <h2>myClick is an event on the custom ClickDirective:</h2>
    <button (myClick)="showAlert('Event on a custom directive')" clickable>
      click with myClick
    </button>
    <h2>Custom events with EventEmitter</h2>
    <app-item-detail
      (itemEvent)="showAlert('Custom events with EventEmitter')"
      [childItem]="currentItem"
    ></app-item-detail>
  </div>`,
})
export class EventBindingExamplesComponent implements OnInit {
  currentItem = 'teapot';
  constructor() {}
  ngOnInit() {}

  showAlert(message) {
    alert(`The message is : ${message}.`);
  }
}
