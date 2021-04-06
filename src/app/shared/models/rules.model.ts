export interface Rule {
  type: string;
  fuzzyAreas: {
    inputs: SelectedFuzzyArea[];
    output: SelectedFuzzyArea;
  };
  value?: number; // calculated value;
}

export interface SelectedFuzzyArea {
  name: string;
  area: string;
}
