import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { CustomModalComponent } from './custom-modal.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatDialogModule, MatButtonModule],
  exports: [CustomModalComponent],
  declarations: [CustomModalComponent],
  providers: [],
})
export class CustomModalModule {}
