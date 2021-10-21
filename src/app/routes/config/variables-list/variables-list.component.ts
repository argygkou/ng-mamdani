import { Component, OnInit, ViewChild } from '@angular/core';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { Variable } from 'src/app/shared';
import { MatDialog } from '@angular/material/dialog';
import { VariablesFormComponent } from '../variables-form/variables-form.component';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-variables-list',
  templateUrl: './variables-list.component.html',
  styleUrls: ['./variables-list.component.scss'],
})
export class VariablesListComponent implements OnInit {
  @ViewChild('deleteDialog') deleteDialog: any;
  public title: string;
  public type: string;
  public variables$: Observable<Variable[]>;

  constructor(
    public mamdaniService: MamdaniService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.url.pipe(take(1)).subscribe((url) => {
      const path = url[0].path;
      this.type = path;
      this.handleSubscriptions();
    });
  }
  public handleSubscriptions() {
    if (this.type === 'inputs') {
      this.title = 'Inputs';
      this.variables$ = this.mamdaniService.inputVariables$;
    } else {
      this.title = 'Output';
      this.variables$ = this.mamdaniService.outputVariables$;
    }
  }

  public openDialog(variable?: Variable) {
    this.dialog.open(VariablesFormComponent, {
      data: { type: this.type, variable },
      width: '1200px',
    });
  }

  public onRemoveItem(index: number): void {
    if (this.type === 'inputs') {
      this.mamdaniService.removeInputVariable(index);
      return;
    }
    const dialogRef = this.dialog.open(this.deleteDialog);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.mamdaniService.removeOutputVariable();
      }
    });
  }

  public showAddButton(variables: Variable[]) {
    return this.type === 'inputs' || !variables.length;
  }
}
