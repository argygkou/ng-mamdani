export interface Rules {
  data: any[];
  newRule: Rule;
}

export interface Rule {
  name: string;
  type: string;
  fuzzyAreas: {
    inputs: any[];
    output: {
      value: number;
    };
  };
}
