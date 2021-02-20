import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { config } from 'rxjs';
import MamdaniConfig from 'src/app/core/config';

@Component({
  selector: 'app-fuzzy',
  templateUrl: './fuzzy.component.html',
  styleUrls: ['./fuzzy.component.scss'],
})
export class FuzzyComponent implements OnInit {
  public projectName = MamdaniConfig.projectName;
  public variables = MamdaniConfig.variables;
  public fuzzyAreas = MamdaniConfig.fuzzyAreas;
  public rules = MamdaniConfig.rules;

  public variablesForm = this.fb.group({
    name: ['', Validators.required],
    fuzzyAreasCount: 1,
    start: 0,
    end: 0,
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  public get variableType(): any {
    return this.variablesForm.get('variableType').value;
  }

  public addVariable(event: Event): void {
    event.preventDefault();
    this.variables.newVariable = this.variablesForm.value;
    if (this.variables.variableType === 'input') {
      this.variables.inputs = [
        ...this.variables.inputs,
        { ...this.variables.newVariable, fuzzyAreas: [] },
      ];
    } else {
      this.variables.outputs = [
        { ...this.variables.newVariable, fuzzyAreas: [] },
      ];
    }
  }

  public addFuzzyArea(input): void {
    input.fuzzyAreas.push({
      ...this.fuzzyAreas.newFuzzyArea,
      type: {
        ...this.fuzzyAreas.newFuzzyArea.type,
        ranges: [...this.fuzzyAreas.newFuzzyArea.type.ranges],
      },
    });
  }

  public createRule(): void {
    this.rules = {
      ...this.rules,
      data: [
        ...this.rules.data,
        {
          ...this.rules.newRule,
          fuzzyAreas: {
            inputs: [...this.rules.newRule.fuzzyAreas.inputs],
            output: { ...this.rules.newRule.fuzzyAreas.output },
          },
          result: this.checkValue(this.rules.newRule),
        },
      ],
    };
  }

  public toggleNorm(): void {
    let newNorm;
    if (this.rules.newRule.type === 'AND') {
      newNorm = 'OR';
    } else {
      newNorm = 'AND';
    }
    this.rules.newRule = {
      ...this.rules.newRule,
      type: newNorm,
    };
  }

  public getResult(): void {
    let res = { result: 0 };
    this.rules.data.forEach((element) => {
      if (element.result > res.result) {
        res = element;
      }
    });
    // console.log(res.fuzzyAreas.output.type.ranges[0]);
  }

  private checkValue(rule): any {
    const compareFunction = rule.type === 'AND' ? Math.min : Math.max;
    const inputs = rule.fuzzyAreas.inputs;
    const data = [];
    inputs.forEach((element, index) => {
      const example = this.variables.inputs[index].example;
      data.push(element.type.value(element.type.ranges, example));
    });
    const result = data.reduce((next, prev) => compareFunction(next, prev));
    return result;
  }
}
