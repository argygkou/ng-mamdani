import { FuzzyArea } from './fuzzy-areas.model';

export interface Rule {
  name: string;
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
