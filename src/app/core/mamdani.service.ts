import { Injectable } from '@angular/core';
import { FuzzyArea, Rule, Variable } from '../shared';
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
  public get outputVariable$(): Observable<Variable[]> {
    return this.outputVariableBS.asObservable();
  }
  public get rules$(): Observable<Rule[]> {
    return this.rulesBS.asObservable();
  }

  private inputVariablesBS = new BehaviorSubject<Variable[]>([]);
  private outputVariableBS = new BehaviorSubject<Variable[]>([]);
  private rulesBS = new BehaviorSubject<Rule[]>([]);

  constructor() {
    this.rulesBS.next(rulesConfig);
    this.inputVariablesBS.next(inputsConfig);
    this.outputVariableBS.next([outputConfig]);
  }

  public addInputVariable(variable: Variable): void {
    this.inputVariablesBS.next([...this.inputVariablesBS.value, variable]);
  }

  public removeInputVariable(index: number): void {
    const variables = this.inputVariablesBS.value;
    const variableToRemove = variables[index];
    this.updateRuleContainingRemovedVariable(variableToRemove);
    variables.splice(index, 1);
    this.inputVariablesBS.next(variables);
  }

  public addOutputVariable(variable: Variable): void {
    this.outputVariableBS.next([variable]);
  }

  public addFuzzyArea(
    type: string,
    varialeIndex: number,
    itemIndex: number,
    value: FuzzyArea
  ): void {
    if (type === 'inputs') {
      const variables = this.inputVariablesBS.value;
      variables[varialeIndex].fuzzyAreas[itemIndex] = value;
      this.inputVariablesBS.next(variables);
      return;
    }
    const variables = this.outputVariableBS.value;
    variables[varialeIndex].fuzzyAreas[itemIndex] = value;
    this.outputVariableBS.next(variables);
  }

  public addRule(rule: Rule): void {
    this.rulesBS.next([...this.rulesBS.value, rule]);
  }

  public removeRule(index: number): void {
    const rules = this.rulesBS.value;
    rules.splice(index, 1);
    this.rulesBS.next(rules);
  }

  public getResult(values: ExampleValue[]): number {
    const rules = this.rulesBS.value;
    if (!rules.length) {
      return 0;
    }
    let selectedRule: Rule = rules[0];
    const result = this.checkValue(selectedRule, values);
    rules.forEach((rule) => {
      const res = this.checkValue(rule, values);
      if (res > result) {
        selectedRule = rule;
      }
    });
    const output = this.outputVariableBS.value[0];
    const area = output.fuzzyAreas.find(
      (area) => area.name === selectedRule.fuzzyAreas.output.area
    );
    return area.ranges[1];
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

  private updateRuleContainingRemovedVariable(variableToRemove: Variable) {
    let rules = this.rulesBS.value;
    rules.forEach((rule) => {
      rule.fuzzyAreas.inputs = rule.fuzzyAreas.inputs.filter(
        (input) => input.name !== variableToRemove.name
      );
    });

    rules = rules.filter((rule) => rule.fuzzyAreas.inputs.length > 0);
    this.rulesBS.next(rules);
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
      const variable = this.inputVariablesBS.value.find(
        (variable) => variable.name === element.name
      );
      const fuzzyArea = variable.fuzzyAreas.find(
        (area) => area.name === element.area
      );
      data.push(
        FUZZYAREATYPES[fuzzyArea.type](fuzzyArea.ranges, selectedValue.example)
      );
    });
    if (data.length === 0) {
      return 0;
    }
    const result = data.reduce((next, prev) => compareFunction(next, prev));
    return result;
  }
}
