import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  template: `<p>Your item is: {{ childItem }}</p>
   <button (click)="emitEvent($event)">Delete</button>`,
})
export class ItemDetailComponent implements OnInit {
  @Input() childItem: string;
  @Output() itemEvent = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  emitEvent(event): void {
    this.itemEvent.emit(event);
  }
}
