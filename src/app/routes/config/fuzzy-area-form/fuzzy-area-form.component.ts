import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
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
  @Input() form: UntypedFormGroup;

  get ranges(): UntypedFormArray {
    return this.form.get('ranges') as UntypedFormArray;
  }
  public fuzzyAreaTypes = Object.keys(FUZZYAREATYPES);
  private onDestroy$ = new Subject<void>();

  constructor(public mamdaniService: MamdaniService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['form'] && this.form) {
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
          this.ranges.push(new UntypedFormControl(0, Validators.required));
        }
      });
  }
}
