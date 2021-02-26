import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FUZZYAREATYPES } from 'src/app/core/config';
import { FormCreatorService } from 'src/app/core/form-creator.service';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { FuzzyArea, Variable } from 'src/app/shared';

@Component({
  selector: 'app-fuzzy-area-form',
  templateUrl: './fuzzy-area-form.component.html',
  styleUrls: ['./fuzzy-area-form.component.scss'],
})
export class FuzzyAreaFormComponent implements OnInit, OnDestroy {
  @Input() form: FormGroup;

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

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
