import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FUZZYAREATYPES } from 'src/app/core/config';
import { MamdaniService } from 'src/app/core/mamdani.service';

@Component({
  selector: 'app-fuzzy-area-form',
  templateUrl: './fuzzy-area-form.component.html',
  styleUrls: ['./fuzzy-area-form.component.scss'],
})
export class FuzzyAreaFormComponent implements OnDestroy, OnChanges {
  @Input() form: FormGroup;

  get ranges(): FormArray {
    return this.form.get('ranges') as FormArray;
  }
  public fuzzyAreaTypes = Object.keys(FUZZYAREATYPES);
  private onDestroy$ = new Subject();

  constructor(public mamdaniService: MamdaniService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.form && this.form) {
      this.formTypeChangeSubsciption();
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private formTypeChangeSubsciption() {
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
