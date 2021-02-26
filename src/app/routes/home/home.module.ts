import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VariablesListComponent } from './variables-list/variables-list.component';
import { RulesComposerComponent } from './rules-composer/rules-composer.component';
import { VariablesFormComponent } from './variables-form/variables-form.component';
import { FuzzyAreaFormComponent } from './fuzzy-area-form/fuzzy-area-form.component';
import { VariablesListItemComponent } from './variables-list-item/variables-list-item.component';
import { VariablesListItemFormComponent } from './variables-list-item-form/variables-list-item-form.component';
import { RulesListComponent } from './rules-list/rules-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    VariablesListComponent,
    RulesComposerComponent,
    VariablesFormComponent,
    FuzzyAreaFormComponent,
    VariablesListItemComponent,
    VariablesListItemFormComponent,
    RulesListComponent,
  ],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
