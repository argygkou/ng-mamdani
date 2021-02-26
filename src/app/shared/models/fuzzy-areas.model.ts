export interface FuzzyArea {
  name: string;
  type: string;
  ranges: number[];
}

export type FuzzyAreaTypes = {
  [key in FuzzyAreaTypeNames]: (ranges: number[], values: number) => number;
};

export type FuzzyAreaTypeNames = 'Triangle' | 'Trapezoid';
