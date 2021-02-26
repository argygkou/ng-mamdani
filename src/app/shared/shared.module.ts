import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { LayoutModule } from '@angular/cdk/layout';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatChipsModule,
  MatRadioModule,
  MatSnackBarModule,
  MatDialogModule,
  MatButtonToggleModule,
];

const MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const COMPONENTS = [CustomModalComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES, MATERIAL_MODULES],
  exports: [MODULES, MATERIAL_MODULES, COMPONENTS],
})
export class SharedModule {}
