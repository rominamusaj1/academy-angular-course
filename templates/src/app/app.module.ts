
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextInterpolationExamplesComponent } from './text-interpolation-examples.component';
import { ItemDetailComponent } from './item-detail.component';
import { PropertyBindingExamplesComponent } from './property-binding-examples.component';
import { AttributeBindingExamplesComponent } from './attribute-binding-examples.component';
import { ClassBindingExamplesComponent } from './class-binding-examples.component';
import { ClickDirective } from './click.directive';
import { EventBindingExamplesComponent } from './event-binding-examples.component';
import { SizerComponent } from './size.component';
import { TwoWayBindingExamplesComponent } from './two-way-binding-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInterpolationExamplesComponent,
    ItemDetailComponent,
    PropertyBindingExamplesComponent,
    AttributeBindingExamplesComponent,
    ClassBindingExamplesComponent,
    ClickDirective,
    EventBindingExamplesComponent,
    SizerComponent,
    TwoWayBindingExamplesComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
