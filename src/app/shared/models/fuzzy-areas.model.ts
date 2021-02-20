export interface FuzzyAreas {
  newFuzzyArea: FuzzyArea;
  types: FuzzyAreaTypes;
}

export interface FuzzyArea {
  name: string;
  type: any;
}

export interface FuzzyAreaTypes {
  triangle: Type;
  trapezoid: Type;
}

export interface Type {
  name: string;
  ranges: number[];
  value: (rangesParam: string[], valueParam: string) => number;
}
