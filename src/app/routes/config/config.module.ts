import { NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CustomModalModule } from 'src/app/shared';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

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
  imports: [
    ConfigRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatButtonModule,
    CustomModalModule,
  ],
})
export class ConfigModule {}
