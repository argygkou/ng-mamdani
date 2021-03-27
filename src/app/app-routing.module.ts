import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./routes/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'config',
        loadChildren: () =>
          import('./routes/config/config.module').then((m) => m.ConfigModule),
      },
      {
        path: 'viewer',
        loadChildren: () =>
          import('./routes/viewer/viewer.module').then((m) => m.ViewerModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
