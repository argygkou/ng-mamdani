import { Component, Input, OnInit } from '@angular/core';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { Variable } from 'src/app/shared';
import { MatDialog } from '@angular/material/dialog';
import { VariablesFormComponent } from '../variables-form/variables-form.component';

@Component({
  selector: 'app-variables-list',
  templateUrl: './variables-list.component.html',
  styleUrls: ['./variables-list.component.scss'],
})
export class VariablesListComponent implements OnInit {
  @Input() title: string;
  @Input() type: string;
  @Input() variables: Variable[];

  constructor(
    public mamdaniService: MamdaniService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  public openDialog() {
    this.dialog.open(VariablesFormComponent, {
      width: '1200px',
    });
  }

  public onRemoveItem(index: number): void {
    this.mamdaniService.removeInputVariable(index);
  }
}
