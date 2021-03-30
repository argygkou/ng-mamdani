export interface Rule {
  type: string;
  fuzzyAreas: {
    inputs: SelectedFuzzyArea[];
    output: SelectedFuzzyArea;
  };
}

export interface SelectedFuzzyArea {
  name: string;
  area: string;
}
