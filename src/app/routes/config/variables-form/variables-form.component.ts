import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
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
  public variableType = new FormControl('input');

  public form = this.formCreatorService.createVariableForm();

  get fuzzyAreasArray(): FormArray {
    return this.form.get('fuzzyAreas') as FormArray;
  }

  private onDestroy$ = new Subject();

  constructor(
    private formCreatorService: FormCreatorService,
    public mamdaniService: MamdaniService
  ) {}

  ngOnInit(): void {
    this.form
      .get('fuzzyAreasCount')
      .valueChanges.pipe(takeUntil(this.onDestroy$))
      .subscribe((value) => {
        const areas = this.form.get('fuzzyAreas') as FormArray;
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

  public addVariable(event: Event): void {
    event.preventDefault();
    if (this.variableType.value === 'input') {
      this.mamdaniService.addInputVariable(this.form.value);
    } else {
      this.mamdaniService.addOutputVariable(this.form.value);
    }
    this.form.reset();
    this.form = this.formCreatorService.createVariableForm();
  }
}
