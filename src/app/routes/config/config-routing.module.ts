import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { RulesListComponent } from './rules-list/rules-list.component';
import { VariablesListComponent } from './variables-list/variables-list.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigComponent,
    children: [
      { path: '', redirectTo: 'inputs', pathMatch: 'full' },
      { path: 'inputs', component: VariablesListComponent },
      { path: 'output', component: VariablesListComponent },
      { path: 'rules', component: RulesListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigRoutingModule {}
