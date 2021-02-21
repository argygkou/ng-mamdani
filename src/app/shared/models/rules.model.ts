import { FuzzyArea } from './fuzzy-areas.model';

export interface Rule {
  name: string;
  type: string;
  result?: number;
  fuzzyAreas: {
    inputs: FuzzyArea[];
    output: {
      value: number;
    };
  };
}
