import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FUZZYAREATYPES } from 'src/app/core/config';
import { FormCreatorService } from 'src/app/core/form-creator.service';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { FuzzyArea } from 'src/app/shared';
import { ExampleValue } from 'src/app/shared/models/selected-values';

@Component({
  selector: 'app-examples-form',
  templateUrl: './examples-form.component.html',
  styleUrls: ['./examples-form.component.scss'],
})
export class ExamplesFormComponent implements OnInit {
  public form: FormGroup;
  constructor(
    public mamdaniService: MamdaniService,
    private formCreatorService: FormCreatorService
  ) {}

  ngOnInit(): void {
    this.initExampleForm();
  }

  public calculateValue(fuzzyArea: FuzzyArea, value: number): number {
    if (!value) {
      return 0;
    }
    return FUZZYAREATYPES[fuzzyArea.type](fuzzyArea.ranges, value);
  }

  public getFuzzyAreas(name: string): FuzzyArea[] {
    const input = this.mamdaniService.inputVariables.find(
      (inVar) => inVar.name === name
    );
    return (input && input.fuzzyAreas) || [];
  }

  public getResult(): number {
    const values = this.form.get('variables').value as ExampleValue[];
    return this.mamdaniService.getResult(values);
  }

  private initExampleForm(): void {
    this.form = this.formCreatorService.initExampleForm();
    this.mamdaniService.inputVariables.forEach((input) => {
      const variables = this.form.get('variables') as FormArray;
      variables.push(this.formCreatorService.addExample(input));
    });
  }
}
