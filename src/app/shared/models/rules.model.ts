import { FuzzyArea } from './fuzzy-areas.model';

export interface Rule {
  type: string;
  fuzzyAreas: {
    inputs: SelectedFuzzyArea[];
    output: FuzzyArea;
  };
}

export interface SelectedFuzzyArea {
  name: string;
  area: FuzzyArea;
}
