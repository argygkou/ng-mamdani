import { Injectable } from '@angular/core';
import { Rule, Variable } from '../shared';
import { FUZZYAREATYPES } from './config';

import inputsConfig from '../../assets/inputs-config.json';
import outputConfig from '../../assets/output-config.json';
import rulesConfig from '../../assets/rules-config.json';
import { ExampleValue } from '../shared/models/selected-values';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MamdaniService {
  public get inputVariables$(): Observable<Variable[]> {
    return this.inputVariablesBS.asObservable();
  }
  public get outputVariable$(): Observable<Variable> {
    return this.outputVariableBS.asObservable();
  }
  public get rules$(): Observable<Rule[]> {
    return this.rulesBS.asObservable();
  }

  private inputVariablesBS = new BehaviorSubject([]);
  private outputVariableBS = new BehaviorSubject(null);
  private rulesBS = new BehaviorSubject([]);

  constructor() {
    this.rulesBS.next(rulesConfig);
    this.inputVariablesBS.next(inputsConfig);
    this.outputVariableBS.next(outputConfig);
  }

  public addInputVariable(variable: Variable): void {
    this.inputVariablesBS.next([...this.inputVariablesBS.value, variable]);
  }

  public removeInputVariable(index: number): void {
    const variables = this.inputVariablesBS.value;
    variables.splice(index, 1);
    this.inputVariablesBS.next(variables);
  }

  public addOutputVariable(variable: Variable): void {
    this.outputVariableBS.next(variable);
  }

  public addFuzzyArea(type: string, index: number, variable: Variable): void {
    if (type === 'inputs') {
      const variables = this.inputVariablesBS.value;
      variables[index] = variable;
      this.inputVariablesBS.next(variables);
      return;
    }
    this.outputVariableBS.next(variable);
  }

  public addRule(rule: Rule): void {
    this.rulesBS.next([...this.rulesBS.value, rule]);
  }

  public removeRule(index: number): void {
    // this.rules.splice(index, 1);
    const rules = this.rulesBS.value;
    rules.splice(index, 1);
    this.rulesBS.next(rules);
  }

  public getResult(values: ExampleValue[]): number {
    let result = 0;
    this.rulesBS.value.forEach((rule) => {
      const res = this.checkValue(rule, values);
      if (res > result) {
        result = res;
      }
    });
    return result;
  }

  public importConfig(result: string | ArrayBuffer): void {
    const config = JSON.parse(result as string);
    this.inputVariablesBS.next(config.inputs);
    this.outputVariableBS.next(config.output);
    this.rulesBS.next(config.rules);
  }
  public exportConfig(): string {
    const config = {
      inputs: this.inputVariablesBS.value,
      output: this.outputVariableBS.value,
      rules: this.rulesBS.value,
    };
    return JSON.stringify(config);
  }

  private checkValue(rule: Rule, values: ExampleValue[]): any {
    const compareFunction = rule.type === 'AND' ? Math.min : Math.max;
    const inputs = rule.fuzzyAreas.inputs;
    const data = [];
    inputs.forEach((element, index) => {
      const selectedValue = values.find((v) => v.name === element.name);
      if (!selectedValue) {
        return;
      }
      data.push(
        FUZZYAREATYPES[element.area.type](
          element.area.ranges,
          selectedValue.example
        )
      );
    });
    if (data.length === 0) {
      return 0;
    }
    const result = data.reduce((next, prev) => compareFunction(next, prev));
    return result;
  }
}
