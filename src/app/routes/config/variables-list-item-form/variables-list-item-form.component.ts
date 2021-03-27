import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FUZZYAREATYPES } from 'src/app/core/config';
import { FormCreatorService } from 'src/app/core/form-creator.service';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { FuzzyArea, Variable } from 'src/app/shared';

@Component({
  selector: 'app-variables-list-item-form',
  templateUrl: './variables-list-item-form.component.html',
  styleUrls: ['./variables-list-item-form.component.scss'],
})
export class VariablesListItemFormComponent
  implements OnInit, OnDestroy, OnChanges {
  @Input() variable: Variable;
  @Input() fuzzyArea: FuzzyArea;
  @Input() itemIndex: number;
  @Input() index: number;
  @Input() type: string;

  public form = this.formCreatorService.createVariableForm();

  get ranges(): FormArray {
    return this.form.get('ranges') as FormArray;
  }

  private onDestroy$ = new Subject();

  constructor(
    public mamdaniService: MamdaniService,
    private formCreatorService: FormCreatorService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.fuzzyArea) {
      this.initForm();
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public updateFuzzyArea(event: Event): void {
    event.preventDefault();
    const value = this.form.value as FuzzyArea;
    this.mamdaniService.addFuzzyArea(
      this.type,
      this.itemIndex,
      this.index,
      value
    );
  }

  private initForm(): void {
    this.form = this.formCreatorService.createFuzzyAreaForm();
    this.form.patchValue(this.fuzzyArea);
    this.fuzzyArea.ranges.forEach((range) => {
      this.ranges.push(new FormControl(range, Validators.required));
    });
  }
}
