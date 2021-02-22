import { FuzzyArea } from './fuzzy-areas.model';

export interface Variable {
  name: string;
  start: number;
  end: number;
  fuzzyAreasCount: number;
  fuzzyAreas: FuzzyArea[];
  example?: number;
}
