import { Injectable } from '@angular/core';
import { FuzzyArea, Rule, Variable } from '../shared';
import defaultConfig from './config';

@Injectable({
  providedIn: 'root',
})
export class MamdaniService {
  public inputVariables: Variable[];
  public outputVariables: Variable[];
  public rules: Rule[];
  public fuzzyAreas: FuzzyArea[];

  constructor() {
    this.rules = [];
    this.inputVariables = defaultConfig.inputVariables;
    this.outputVariables = defaultConfig.outputVariables;
    this.fuzzyAreas = defaultConfig.fuzzyAreas;
  }

  public addInputVariable(variable: Variable): void {
    this.inputVariables.push(variable);
  }

  public addOutputVariable(variable: Variable): void {
    this.outputVariables = [variable];
  }

  public addFuzzyArea(type: string, index: number, variable: Variable): void {
    if (type === 'inputs') {
      this.inputVariables[index] = variable;
      return;
    }
    this.outputVariables[index] = variable;
  }

  public addRule(rule: Rule): void {
    rule.result = this.checkValue(rule);
    this.rules.push(rule);
  }

  private checkValue(rule: Rule): any {
    const compareFunction = rule.type === 'AND' ? Math.min : Math.max;
    const inputs = rule.fuzzyAreas.inputs;
    const data = [];
    inputs.forEach((element, index) => {
      const example = this.inputVariables[index].example;
      data.push(element.type.value(element.type.ranges, example));
    });
    const result = data.reduce((next, prev) => compareFunction(next, prev));
    return result;
  }
}
