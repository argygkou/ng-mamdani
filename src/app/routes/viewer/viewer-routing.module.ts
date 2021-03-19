import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigViewerComponent } from './config-viewer/config-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigViewerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewerRoutingModule {}
