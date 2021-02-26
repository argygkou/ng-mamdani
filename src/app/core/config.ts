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
