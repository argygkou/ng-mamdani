import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormCreatorService {
  constructor(private fb: FormBuilder) {}

  public createVariableForm(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      start: 0,
      end: 0,
      fuzzyAreasCount: 1,
      fuzzyAreas: this.fb.array([]),
      example: 0,
    });
  }

  public createFuzzyAreaForm(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      type: this.fb.group({
        name: null,
        ranges: this.fb.array([]),
        value: null,
      }),
    });
  }

  public createRangeForm(name: string): FormGroup {
    return this.fb.group({
      [name]: [0, Validators.required],
    });
  }

  public createRuleForm(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      type: ['AND'],
      fuzzyAreas: this.fb.group({
        inputs: this.fb.array([]),
        output: null,
      }),
    });
  }
}
