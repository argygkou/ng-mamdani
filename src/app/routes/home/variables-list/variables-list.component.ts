import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FUZZYAREATYPES } from 'src/app/core/config';
import { FormCreatorService } from 'src/app/core/form-creator.service';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { FuzzyArea, Variable } from 'src/app/shared';
import { MatDialog } from '@angular/material/dialog';
import { VariablesFormComponent } from '../variables-form/variables-form.component';

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
    private formCreatorService: FormCreatorService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public openDialog() {
    this.dialog.open(VariablesFormComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

  public addFuzzyArea(event: Event, variable: Variable, index: number): void {
    event.preventDefault();
    const value = this.form.value;
    variable.fuzzyAreas.push(value);
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
          this.ranges.push(new FormControl(0, Validators.required));
        }
      });
  }
}
