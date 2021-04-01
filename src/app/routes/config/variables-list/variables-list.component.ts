import { Component, OnInit } from '@angular/core';
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
      this.variables$ = this.mamdaniService.outputVariable$;
    }
  }

  public openDialog() {
    this.dialog.open(VariablesFormComponent, {
      width: '1200px',
    });
  }

  public onRemoveItem(index: number): void {
    this.mamdaniService.removeInputVariable(index);
  }
}
