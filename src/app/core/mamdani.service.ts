import { Injectable } from '@angular/core';
import { Rule, Variable } from '../shared';
import { FUZZYAREATYPES } from './config';

import inputsConfig from '../../assets/inputs-config.json';
import outputConfig from '../../assets/output-config.json';
import rulesConfig from '../../assets/rules-config.json';

@Injectable({
  providedIn: 'root',
})
export class MamdaniService {
  public inputVariables: Variable[];
  public outputVariables: Variable[];
  public rules: Rule[];

  constructor() {
    this.rules = rulesConfig;
    this.inputVariables = inputsConfig as Variable[];
    this.outputVariables = [outputConfig] as Variable[];
  }

  public addInputVariable(variable: Variable): void {
    this.inputVariables.push(variable);
  }

  public removeInputVariable(index: number): void {
    this.inputVariables.splice(index, 1);
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

  public removeRule(index: number) {
    this.rules.splice(index, 1);
  }

  public getResult(): number {
    let result = 0;
    this.rules.forEach((rule) => {
      if (rule.result > result) {
        result = result;
      }
    });
    return result;
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
