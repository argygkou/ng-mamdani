import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { Variable } from 'src/app/shared';
import { ResultComponent } from './result/result.component';

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
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addVariable(input: Variable): FormGroup {
    return this.fb.group({
      name: [input.name],
      example: [input.example, Validators.required],
    });
  }

  public getResult(): void {
    const dialogRef = this.dialog.open(ResultComponent);
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.stepper.reset();
      });
  }

  private initForm(): void {
    this.form = this.fb.group({
      variables: this.fb.array([]),
    });
    this.mamdaniService.inputVariables.forEach((input) => {
      const variables = this.form.get('variables') as FormArray;
      variables.push(this.addVariable(input));
    });
  }
}
