import { Injectable } from '@angular/core';
import { FuzzyArea, Rule, Variable } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class MamdaniService {
  public inputVariables: Variable[];
  public outputVariables: Variable[];
  public rules: Rule[];

  public fuzzyAreas: FuzzyArea[] = [
    {
      name: 'Triangle',
      type: {
        name: 'Triangle',
        ranges: [0, 0, 0],
        value: (ranges, value) => {
          if (value < ranges[0] || value > ranges[2]) {
            return 0;
          }
          if (value < ranges[1]) {
            return (value - ranges[0]) / (ranges[1] - ranges[0]);
          }
          return (ranges[2] - value) / (ranges[2] - ranges[1]);
        },
      },
    },
    {
      name: 'Trapezoid',
      type: {
        name: 'Trapezoid',
        ranges: [0, 0, 0, 0],
        value: (ranges, value) => {
          if (value < ranges[0] || value > ranges[3]) {
            return 0;
          }
          if (value < ranges[1]) {
            return (value - ranges[0]) / (ranges[1] - ranges[0]);
          } else if (value < ranges[2]) {
            return 1;
          }
          return (ranges[3] - value) / (ranges[3] - ranges[2]);
        },
      },
    },
  ];

  private exampleVariables = {
    inputs: [
      {
        name: 'Temperature',
        start: -20,
        end: 40,
        fuzzyAreasCount: 4,
        example: 22,
        fuzzyAreas: [
          {
            name: 'Freezing',
            type: {
              name: 'Triangle',
              ranges: [-20, -10, 0],
              value: this.fuzzyAreas[0].type.value,
            },
          },
          {
            name: 'Breeze',
            type: {
              name: 'Triangle',
              ranges: [-5, 5, 23],
              value: this.fuzzyAreas[0].type.value,
            },
          },
          {
            name: 'Warm',
            type: {
              name: 'Trapezoid',
              ranges: [10, 15, 20, 25],
              value: this.fuzzyAreas[1].type.value,
            },
          },
          {
            name: 'Hot',
            type: {
              name: 'Triangle',
              ranges: [20, 30, 40],
              value: this.fuzzyAreas[0].type.value,
            },
          },
        ],
      },
      {
        name: 'Humidity',
        start: 0,
        end: 100,
        fuzzyAreasCount: 4,
        example: 45,
        fuzzyAreas: [
          {
            name: 'Only air',
            type: {
              name: 'Triangle',
              ranges: [0, 25, 35],
              value: this.fuzzyAreas[0].type.value,
            },
          },
          {
            name: 'Airy',
            type: {
              name: 'Triangle',
              ranges: [20, 35, 55],
              value: this.fuzzyAreas[0].type.value,
            },
          },
          {
            name: 'Comfort',
            type: {
              name: 'Trapezoid',
              ranges: [20, 60, 70, 75],
              value: this.fuzzyAreas[1].type.value,
            },
          },
          {
            name: 'Humid',
            type: {
              name: 'Triangle',
              ranges: [40, 90, 100],
              value: this.fuzzyAreas[0].type.value,
            },
          },
        ],
      },
    ],
    outputs: [
      {
        name: 'Watering',
        start: 0,
        end: 100,
        fuzzyAreasCount: 4,
        fuzzyAreas: [
          {
            name: 'No watering',
            type: {
              name: 'Triangle',
              ranges: [0, 50, 60],
              value: this.fuzzyAreas[0].type.value,
            },
          },
          {
            name: 'Sprinkle',
            type: {
              name: 'Triangle',
              ranges: [30, 70, 80],
              value: this.fuzzyAreas[0].type.value,
            },
          },
          {
            name: 'Tiny watering',
            type: {
              name: 'Trapezoid',
              ranges: [30, 40, 70, 80],
              value: this.fuzzyAreas[1].type.value,
            },
          },
          {
            name: 'Huge watering',
            type: {
              name: 'Triangle',
              ranges: [50, 90, 100],
              value: this.fuzzyAreas[0].type.value,
            },
          },
        ],
      },
    ],
  };

  constructor() {
    this.rules = [];
    this.inputVariables = this.exampleVariables.inputs;
    this.outputVariables = this.exampleVariables.outputs;
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
