import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChainingPipesExamplesComponent } from './chaining-pipes-examples.component';
import { CurrencyPipeExamplesComponent } from './currency-pipe-examples.component';
import { DatePipeExamplesComponent } from './date-pipe-examples.component';
import { DecimalPipeExamplesComponent } from './decimal-pipe-examples.component';
import { JsonPipeExamplesComponent } from './json-pipe-examples.component';
import { LowercasePipeExamplesComponent } from './lowercase-pipe-examples.component';
import { PercentPipeExamplesComponent } from './percent-pipe-examples.component';
import { SlicePipeExamplesComponent } from './slice-pipe-examples.component';
import { TitleCasePipeExamplesComponent } from './titlecase-pipe-examples.component';
import { UppercasePipeExamplesComponent } from './uppercase-pipe-examples.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    DatePipeExamplesComponent,
    UppercasePipeExamplesComponent,
    LowercasePipeExamplesComponent,
    CurrencyPipeExamplesComponent,
    DecimalPipeExamplesComponent,
    PercentPipeExamplesComponent,
    SlicePipeExamplesComponent,
    JsonPipeExamplesComponent,
    TitleCasePipeExamplesComponent,
    ChainingPipesExamplesComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
