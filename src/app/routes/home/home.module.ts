import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VariablesListComponent } from './variables-list/variables-list.component';
import { RulesComposerComponent } from './rules-composer/rules-composer.component';
import { VariablesFormComponent } from './variables-form/variables-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    VariablesListComponent,
    RulesComposerComponent,
    VariablesFormComponent,
  ],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
