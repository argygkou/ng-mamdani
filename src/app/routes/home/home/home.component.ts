import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormCreatorService } from 'src/app/core/form-creator.service';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { ExampleValue } from 'src/app/shared/models/selected-values';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('stepper') stepper: MatStepper;
  public form: FormGroup;
  private destroy$ = new Subject();

  constructor(
    public mamdaniService: MamdaniService,
    private formCreatorService: FormCreatorService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getResult(): void {
    const values = this.form.get('variables').value as ExampleValue[];
    const dialogRef = this.dialog.open(ResultComponent, {
      data: { values },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.initForm();
        this.stepper.reset();
      });
  }

  private initForm(): void {
    this.form = this.formCreatorService.initExampleForm();
    this.mamdaniService.inputVariables$
      .pipe(takeUntil(this.destroy$))
      .subscribe((inputVariables) => {
        const variables = this.form.get('variables') as FormArray;
        variables.clear();
        inputVariables.forEach((input) => {
          variables.push(this.formCreatorService.addExample(input));
        });
      });
  }
}
