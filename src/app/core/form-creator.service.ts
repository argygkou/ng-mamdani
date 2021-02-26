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
      start: [0, Validators.required],
      end: [0, Validators.required],
      fuzzyAreasCount: [
        1,
        Validators.compose([Validators.required, Validators.min(1)]),
      ],
      fuzzyAreas: this.fb.array([this.createFuzzyAreaForm()]),
      example: 0,
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
      name: [null, Validators.required],
      type: ['AND'],
      result: 0,
      fuzzyAreas: this.fb.group({
        inputs: this.fb.array([]),
        output: this.fb.control(null, Validators.required),
      }),
    });
  }
}
