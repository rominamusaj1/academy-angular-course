import { Component, OnInit } from '@angular/core';
import { Item, items } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  canSave = true;
  isSpecial = true;
  isUnchanged = true;
  isActive = true;
  currentCustomer = {
    name: 'Laura',
  };

  item: Item; // defined to demonstrate template context precedence
  items: Item[];
  currentItem: Item;

  currentStyles: {};

  ngOnInit() {
    this.resetItems();
    this.setCurrentStyles();
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }

  isActiveToggle() {
    this.isActive = !this.isActive;
  }

  resetItems() {
    this.items = items;
    this.currentItem = this.items[0];
    this.item = this.currentItem;
  }
}
