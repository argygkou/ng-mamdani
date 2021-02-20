import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MamdaniService } from 'src/app/core/mamdani.service';

@Component({
  selector: 'app-fuzzy',
  templateUrl: './fuzzy.component.html',
  styleUrls: ['./fuzzy.component.scss'],
})
export class FuzzyComponent implements OnInit {
  public projectName = 'New Project';
  // public variables = this.mamdaniService.variables;
  public fuzzyAreas = this.mamdaniService.fuzzyAreas;
  public rules = this.mamdaniService.rules;

  constructor(private fb: FormBuilder, public mamdaniService: MamdaniService) {}

  ngOnInit(): void {}

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
      const example = this.mamdaniService.variables.inputs[index].example;
      data.push(element.type.value(element.type.ranges, example));
    });
    const result = data.reduce((next, prev) => compareFunction(next, prev));
    return result;
  }
}
