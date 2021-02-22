import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FUZZYAREATYPES } from 'src/app/core/config';
import { FormCreatorService } from 'src/app/core/form-creator.service';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { Variable } from 'src/app/shared';

@Component({
  selector: 'app-variables-list',
  templateUrl: './variables-list.component.html',
  styleUrls: ['./variables-list.component.scss'],
})
export class VariablesListComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() type: string;
  @Input() variables: Variable[];

  public form: FormGroup;
  get ranges(): FormArray {
    return this.form.get('ranges') as FormArray;
  }
  public fuzzyAreaTypes = Object.keys(FUZZYAREATYPES);
  private onDestroy$ = new Subject();

  constructor(
    public mamdaniService: MamdaniService,
    private formCreatorService: FormCreatorService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public addFuzzyArea(event: Event, variable: Variable, index: number): void {
    event.preventDefault();
    let formValue = this.form.value;
    formValue = {
      ...formValue,
      type: {
        ...formValue.type,
        ranges: formValue.type.ranges.map(
          (range, index) => range[this.getRangeName(index)]
        ),
      },
    };

    variable.fuzzyAreas.push(formValue);

    this.mamdaniService.addFuzzyArea(this.type, index, variable);
    this.form.reset();
    this.initForm();
  }

  private initForm() {
    this.form = this.formCreatorService.createFuzzyAreaForm();
    this.form
      .get('type')
      .valueChanges.pipe(takeUntil(this.onDestroy$))
      .subscribe((value) => {
        this.ranges.clear();
        const numberOfRanges = value === 'Trapezoid' ? 4 : 3;
        for (let index = 0; index < numberOfRanges; index++) {
          const group = this.createRange(index);
          group.get(`range${index}`).setValue(0);
          this.ranges.push(group);
        }
      });
  }

  public getRangeName(index: number): string {
    return `range${index}`;
  }

  private createRange(index: number): FormGroup {
    return this.formCreatorService.createRangeForm(this.getRangeName(index));
  }
}
