import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [HomeComponent, ResultComponent],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
