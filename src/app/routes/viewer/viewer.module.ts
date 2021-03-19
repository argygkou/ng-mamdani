import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewerRoutingModule } from './viewer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigViewerComponent } from './config-viewer/config-viewer.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [ConfigViewerComponent],
  imports: [SharedModule, ViewerRoutingModule, NgxJsonViewerModule],
})
export class ViewerModule {}
