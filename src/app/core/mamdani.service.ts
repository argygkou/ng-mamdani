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
  public get outputVariables$(): Observable<Variable[]> {
    return this.outputVariablesBS.asObservable();
  }
  public get rules$(): Observable<Rule[]> {
    return this.rulesBS.asObservable();
  }

  private inputVariablesBS = new BehaviorSubject<Variable[]>([]);
  private outputVariablesBS = new BehaviorSubject<Variable[]>([]);
  private rulesBS = new BehaviorSubject<Rule[]>([]);

  constructor() {
    this.rulesBS.next(rulesConfig);
    this.inputVariablesBS.next(inputsConfig);
    this.outputVariablesBS.next([outputConfig]);
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
    this.outputVariablesBS.next([variable]);
  }

  removeOutputVariable(index: number) {
    this.outputVariablesBS.next([]);
    this.rulesBS.next([]);
  }

  public addFuzzyArea(
    type: string,
    varialeIndex: number,
    itemIndex: number,
    value: FuzzyArea
  ): void {
    let oldValue = null;
    let variableName = null;
    const variables =
      type === 'inputs'
        ? this.inputVariablesBS.value
        : this.outputVariablesBS.value;
    variableName = variables[varialeIndex].name;
    oldValue = variables[varialeIndex].fuzzyAreas[itemIndex];
    variables[varialeIndex].fuzzyAreas[itemIndex] = value;

    this.updateFuzzyAreaInRule(type, variableName, oldValue, value);

    if (type === 'inputs') {
      this.inputVariablesBS.next(variables);
    } else {
      this.outputVariablesBS.next(variables);
    }
  }

  public addRule(rule: Rule): void {
    this.rulesBS.next([...this.rulesBS.value, rule]);
  }

  public removeRule(index: number): void {
    const rules = this.rulesBS.value;
    rules.splice(index, 1);
    this.rulesBS.next(rules);
  }

  public getResult(values: ExampleValue[]): Rule {
    const rules = this.rulesBS.value;
    if (!rules.length) {
      return null;
    }
    let selectedRule: Rule = rules[0];
    selectedRule.value = this.checkValue(selectedRule, values);
    rules.forEach((rule) => {
      rule.value = this.checkValue(rule, values);
      if (selectedRule.value < rule.value) {
        selectedRule = rule;
      }
    });
    return selectedRule;
  }

  public importConfig(result: string | ArrayBuffer): void {
    const config = JSON.parse(result as string);
    this.inputVariablesBS.next(config.inputs);
    this.outputVariablesBS.next(config.output);
    this.rulesBS.next(config.rules);
  }
  public exportConfig(): string {
    const config = {
      inputs: this.inputVariablesBS.value,
      output: this.outputVariablesBS.value,
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

  private updateFuzzyAreaInRule(
    type: string,
    variableName: string,
    oldValue: FuzzyArea,
    value: FuzzyArea
  ) {
    const rules = this.rulesBS.value;
    rules.forEach((rule) => {
      let area = null;
      if (type === 'inputs') {
        area = rule.fuzzyAreas.inputs.find(
          (input) => input.name === variableName && input.area === oldValue.name
        );
      } else {
        area = rule.fuzzyAreas.output;
      }
      if (area) {
        area.area = value.name;
      }
    });
  }

  private checkValue(rule: Rule, values: ExampleValue[]): any {
    const compareFunction = rule.type === 'AND' ? Math.min : Math.max;
    const inputs = rule.fuzzyAreas.inputs;
    const data = [];
    inputs.forEach((element) => {
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
