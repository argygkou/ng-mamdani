import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuzzyArea, Variable } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class FormCreatorService {
  constructor(private fb: FormBuilder) {}

  public createVariableForm(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      start: [0, Validators.required],
      end: [0, Validators.required],
      fuzzyAreasCount: [
        1,
        Validators.compose([Validators.required, Validators.min(1)]),
      ],
      fuzzyAreas: this.fb.array([this.createFuzzyAreaForm()]),
    });
  }

  public createFuzzyAreaForm(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      type: [null, Validators.required],
      ranges: this.fb.array([]),
    });
  }

  public createRuleForm(): FormGroup {
    return this.fb.group({
      type: ['AND'],
      fuzzyAreas: this.fb.group({
        inputs: this.fb.array([]),
        output: this.fb.control(null, Validators.required),
      }),
    });
  }

  public initExampleForm(): FormGroup {
    return this.fb.group({
      variables: this.fb.array([]),
    });
  }

  public addExample(input: Variable): FormGroup {
    return this.fb.group({
      name: [input.name],
      example: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(this.calculateMaxMin('min', input.fuzzyAreas)),
          Validators.max(this.calculateMaxMin('max', input.fuzzyAreas)),
        ]),
      ],
    });
  }

  public calculateMaxMin(type: 'max' | 'min', fuzzyAreas: FuzzyArea[]): number {
    const ranges = [];
    fuzzyAreas.forEach((area) => {
      ranges.push(...area.ranges);
    });

    return type === 'max' ? Math.max(...ranges) : Math.min(...ranges);
  }
}
