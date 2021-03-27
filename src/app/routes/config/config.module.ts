import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './config/config.component';
import { VariablesListComponent } from './variables-list/variables-list.component';
import { ExamplesFormComponent } from './examples-form/examples-form.component';
import { FuzzyAreaFormComponent } from './fuzzy-area-form/fuzzy-area-form.component';
import { RulesComposerComponent } from './rules-composer/rules-composer.component';
import { RulesListComponent } from './rules-list/rules-list.component';
import { VariablesFormComponent } from './variables-form/variables-form.component';
import { VariablesListItemFormComponent } from './variables-list-item-form/variables-list-item-form.component';
import { VariablesListItemComponent } from './variables-list-item/variables-list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ConfigComponent,
    VariablesListComponent,
    RulesComposerComponent,
    VariablesFormComponent,
    FuzzyAreaFormComponent,
    VariablesListItemComponent,
    VariablesListItemFormComponent,
    RulesListComponent,
    ExamplesFormComponent,
  ],
  imports: [SharedModule, ConfigRoutingModule],
})
export class ConfigModule {}
