import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormArray, FormControl, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormCreatorService } from 'src/app/core/form-creator.service';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { Variable } from 'src/app/shared';

@Component({
  selector: 'app-variables-form',
  templateUrl: './variables-form.component.html',
  styleUrls: ['./variables-form.component.scss'],
})
export class VariablesFormComponent implements OnInit, OnDestroy {
  public form = this.formCreatorService.createVariableForm();

  get fuzzyAreasArray(): UntypedFormArray {
    return this.form.get('fuzzyAreas') as UntypedFormArray;
  }

  get fuzzyAreasControls() {
    return this.fuzzyAreasArray.controls as UntypedFormGroup[];
  }

  private onDestroy$ = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { type: string; variable: Variable },
    private formCreatorService: FormCreatorService,
    public mamdaniService: MamdaniService
  ) {}

  ngOnInit(): void {
    this.form
      .get('fuzzyAreasCount')
      .valueChanges.pipe(takeUntil(this.onDestroy$))
      .subscribe((value) => {
        const areas = this.form.get('fuzzyAreas') as UntypedFormArray;
        areas.clear();
        for (let index = 0; index < value; index++) {
          areas.push(this.formCreatorService.createFuzzyAreaForm());
        }
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public getDialogTitle() {
    return this.data.type === 'inputs'
      ? 'Add Input Variable'
      : 'Edit Output Variable';
  }

  public addVariable(event: Event): void {
    event.preventDefault();
    if (this.data.type === 'inputs') {
      this.mamdaniService.addInputVariable(this.form.value);
    } else {
      this.mamdaniService.addOutputVariable(this.form.value);
    }
    this.form.reset();
    this.form = this.formCreatorService.createVariableForm();
  }
}
