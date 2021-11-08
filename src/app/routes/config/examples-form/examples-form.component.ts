import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { FUZZYAREATYPES } from 'src/app/core/config';
import { FormCreatorService } from 'src/app/core/form-creator.service';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { FuzzyArea, Variable } from 'src/app/shared';
import { ExampleValue } from 'src/app/shared/models/selected-values';

@Component({
  selector: 'app-examples-form',
  templateUrl: './examples-form.component.html',
  styleUrls: ['./examples-form.component.scss'],
})
export class ExamplesFormComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public inputVariables: Variable[];
  private destroy$ = new Subject<void>();

  constructor(
    public mamdaniService: MamdaniService,
    private formCreatorService: FormCreatorService
  ) {}

  ngOnInit(): void {
    this.initExampleForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public calculateValue(fuzzyArea: FuzzyArea, value: number): number {
    if (!value) {
      return 0;
    }
    return FUZZYAREATYPES[fuzzyArea.type](fuzzyArea.ranges, value);
  }

  public getFuzzyAreas(name: string): FuzzyArea[] {
    const input = this.inputVariables.find((inVar) => inVar.name === name);
    return (input && input.fuzzyAreas) || [];
  }

  public getResult(): string {
    const values = this.form.get('variables').value as ExampleValue[];
    const selectedRule = this.mamdaniService.getResult(values);
    return selectedRule
      ? `${selectedRule.fuzzyAreas?.output.name} is ${selectedRule.fuzzyAreas?.output.area}`
      : '';
  }

  private initExampleForm(): void {
    this.form = this.formCreatorService.initExampleForm();
    this.mamdaniService.inputVariables$.pipe().subscribe((inputVariables) => {
      this.inputVariables = inputVariables;
      const variables = this.form.get('variables') as FormArray;
      variables.clear();
      this.inputVariables.forEach((input) => {
        variables.push(this.formCreatorService.addExample(input));
      });
    });
  }
}
