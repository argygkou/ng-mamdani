export interface FuzzyArea {
  name: string;
  type: FuzzyAreaType;
}

export interface FuzzyAreaType {
  name: string;
  ranges: number[];
  value: (ranges: number[], values: number) => number;
}
