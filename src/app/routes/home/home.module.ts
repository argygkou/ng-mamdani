import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResultComponent } from './result/result.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [HomeComponent, ResultComponent, StarRatingComponent],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
