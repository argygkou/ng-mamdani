export interface FuzzyArea {
  name: string;
  type: FuzzyAreaType;
}

export interface FuzzyAreaType {
  name: string;
  ranges: number[];
  value: (rangesParam: string[], valueParam: string) => number;
}
