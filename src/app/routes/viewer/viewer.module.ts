import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewerRoutingModule } from './viewer-routing.module';
import { ConfigViewerComponent } from './config-viewer/config-viewer.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [ConfigViewerComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSlideToggleModule,
    ViewerRoutingModule,
    NgxJsonViewerModule,
  ],
})
export class ViewerModule {}
