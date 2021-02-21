import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FuzzyRoutingModule } from './fuzzy-routing.module';
import { FuzzyComponent } from './fuzzy.component';
import { ProjectNameComponent } from './project-name/project-name.component';
import { VariablesListComponent } from './variables-list/variables-list.component';
import { VariablesFormComponent } from './variables-form/variables-form.component';
import { ExamplesFormComponent } from './examples-form/examples-form.component';
import { RulesComposerComponent } from './rules-composer/rules-composer.component';

@NgModule({
  declarations: [FuzzyComponent, ProjectNameComponent, VariablesListComponent, VariablesFormComponent, ExamplesFormComponent, RulesComposerComponent],
  imports: [SharedModule, FuzzyRoutingModule],
})
export class FuzzyModule {}
