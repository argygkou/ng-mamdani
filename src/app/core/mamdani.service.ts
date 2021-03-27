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
  public outputVariable: Variable;
  public rules: Rule[];

  constructor() {
    this.rules = rulesConfig;
    this.inputVariables = inputsConfig as Variable[];
    this.outputVariable = outputConfig as Variable;
  }

  public addInputVariable(variable: Variable): void {
    this.inputVariables.push(variable);
  }

  public removeInputVariable(index: number): void {
    this.inputVariables.splice(index, 1);
  }

  public addOutputVariable(variable: Variable): void {
    this.outputVariable = variable;
  }

  public addFuzzyArea(type: string, index: number, variable: Variable): void {
    if (type === 'inputs') {
      this.inputVariables[index] = variable;
      return;
    }
    this.outputVariable = variable;
  }

  public addRule(rule: Rule): void {
    this.rules.push(rule);
  }

  public removeRule(index: number): void {
    this.rules.splice(index, 1);
  }

  public getResult(): number {
    let result = 0;
    this.rules.forEach((rule) => {
      const res = this.checkValue(rule);
      if (res > result) {
        result = res;
      }
    });
    return result;
  }

  public importConfig(result: string | ArrayBuffer): void {
    const config = JSON.parse(result as string);
    this.inputVariables = config.inputs;
    this.outputVariable = config.output;
    this.rules = config.rules;
  }
  public exportConfig(): string {
    const config = {
      inputs: this.inputVariables,
      output: this.outputVariable,
      rules: this.rules,
    };
    return JSON.stringify(config);
  }

  private checkValue(rule: Rule): any {
    const compareFunction = rule.type === 'AND' ? Math.min : Math.max;
    const inputs = rule.fuzzyAreas.inputs;
    const data = [];
    inputs.forEach((element, index) => {
      const example = this.inputVariables[index].example;
      data.push(
        FUZZYAREATYPES[element.area.type](element.area.ranges, example)
      );
    });
    const result = data.reduce((next, prev) => compareFunction(next, prev));
    return result;
  }
}
