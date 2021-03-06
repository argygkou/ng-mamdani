import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { RulesComposerComponent } from '../rules-composer/rules-composer.component';

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.scss'],
})
export class RulesListComponent {
  constructor(
    public mamdaniService: MamdaniService,
    private dialog: MatDialog
  ) {}

  public openDialog() {
    this.dialog.open(RulesComposerComponent, {
      width: '1200px',
    });
  }

  public removeRule(index: number): void {
    this.mamdaniService.removeRule(index);
  }
}
