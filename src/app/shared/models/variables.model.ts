export interface Variables {
  inputs: Variable[];
  outputs: Variable[];
}

export interface Variable {
  name: string;
  start: number;
  end: number;
  fuzzyAreasCount: number;
  fuzzyAreas: any[];
  example: number;
}
