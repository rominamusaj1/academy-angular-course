import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-hero-form-template></app-hero-form-template>
             <hr>
             <app-hero-form-reactive></app-hero-form-reactive>
             <hr>
             <app-reactive-form-builder></app-reactive-form-builder>`
})
export class AppComponent { }
