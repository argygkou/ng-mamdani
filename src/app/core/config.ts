import { FuzzyAreaTypes, Variable } from '../shared';

export const FUZZYAREATYPES: FuzzyAreaTypes = {
  Triangle: (ranges, value) => {
    if (value < ranges[0] || value > ranges[2]) {
      return 0;
    }
    if (value < ranges[1]) {
      return (value - ranges[0]) / (ranges[1] - ranges[0]);
    }
    return (ranges[2] - value) / (ranges[2] - ranges[1]);
  },
  Trapezoid: (ranges, value) => {
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
};

export const defaultInputVariables: Variable[] = [
  {
    name: 'Temperature',
    start: -20,
    end: 40,
    fuzzyAreasCount: 4,
    example: 22,
    fuzzyAreas: [
      {
        name: 'Freezing',
        type: 'Triangle',
        ranges: [-20, -10, 0],
      },
      {
        name: 'Breeze',
        type: 'Triangle',
        ranges: [-5, 5, 23],
      },
      {
        name: 'Warm',
        type: 'Trapezoid',
        ranges: [10, 15, 20, 25],
      },
      {
        name: 'Hot',
        type: 'Triangle',
        ranges: [20, 30, 40],
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
        type: 'Triangle',
        ranges: [0, 25, 35],
      },
      {
        name: 'Airy',
        type: 'Triangle',
        ranges: [20, 35, 55],
      },
      {
        name: 'Comfort',
        type: 'Trapezoid',
        ranges: [20, 60, 70, 75],
      },
      {
        name: 'Humid',
        type: 'Triangle',
        ranges: [40, 90, 100],
      },
    ],
  },
];

export const defaultOutputVariables: Variable[] = [
  {
    name: 'Watering',
    start: 0,
    end: 100,
    fuzzyAreasCount: 4,
    fuzzyAreas: [
      {
        name: 'No watering',
        type: 'Triangle',
        ranges: [0, 50, 60],
      },
      {
        name: 'Sprinkle',
        type: 'Triangle',
        ranges: [30, 70, 80],
      },
      {
        name: 'Tiny watering',
        type: 'Trapezoid',
        ranges: [30, 40, 70, 80],
      },
      {
        name: 'Huge watering',
        type: 'Triangle',
        ranges: [50, 90, 100],
      },
    ],
  },
];
