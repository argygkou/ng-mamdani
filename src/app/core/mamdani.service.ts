import { Injectable } from '@angular/core';
import { FuzzyArea, Rule, Rules, Variable, Variables } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class MamdaniService {
  public variables: Variables = {
    inputs: [],
    outputs: [],
  };

  public fuzzyAreas: FuzzyArea[] = [
    {
      name: 'Triangle',
      type: {
        name: 'Triangle',
        ranges: [0, 0, 0],
        value: (rangesParam, valueParam) => {
          const ranges = rangesParam.map((range) => parseInt(range, 10));
          const value = parseInt(valueParam, 10);
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
        value: (rangesParam, valueParam) => {
          const ranges = rangesParam.map((range) => parseInt(range, 10));
          const value = parseInt(valueParam, 10);
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

  public rules: Rules = {
    data: [],
    newRule: {
      name: 'name',
      type: 'AND',
      fuzzyAreas: {
        inputs: [],
        output: {
          value: 0,
        },
      },
    },
  };

  public exampleVariables: Variables = {
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
    this.variables = this.exampleVariables;
  }

  public addVariable(type: string, variable: Variable): void {
    this.variables[type].push(variable);
  }

  public addFuzzyArea(type: string, index: number, variable: Variable): void {
    this.variables[type][index] = variable;
  }
}
