export interface Variables {
  variableType: 'input' | 'output';
  newVariable: Variable;
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
