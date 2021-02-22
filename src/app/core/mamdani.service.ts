import { Injectable } from '@angular/core';
import { Rule, Variable } from '../shared';
import {
  defaultInputVariables,
  defaultOutputVariables,
  FUZZYAREATYPES,
} from './config';

@Injectable({
  providedIn: 'root',
})
export class MamdaniService {
  public inputVariables: Variable[];
  public outputVariables: Variable[];
  public rules: Rule[];

  constructor() {
    this.rules = [];
    this.inputVariables = defaultInputVariables;
    this.outputVariables = defaultOutputVariables;
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
      data.push(FUZZYAREATYPES[element.type](element.ranges, example));
    });
    const result = data.reduce((next, prev) => compareFunction(next, prev));
    return result;
  }
}
