import { NgModule } from '@angular/core';
import { CountRoutingModule } from './count-routing.module';
import { ChildCountComponent } from './child-count-component';
import { CountComponent } from './count.component';
import { CountService } from './count.service';

@NgModule({
  providers: [CountService],
  imports: [CountRoutingModule],
  declarations: [CountComponent, ChildCountComponent],
})
export class CountModule {}
