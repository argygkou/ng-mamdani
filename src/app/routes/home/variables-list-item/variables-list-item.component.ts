import { Component, Input, OnInit } from '@angular/core';
import { FuzzyArea, Variable } from 'src/app/shared';

@Component({
  selector: 'app-variables-list-item',
  templateUrl: './variables-list-item.component.html',
  styleUrls: ['./variables-list-item.component.scss'],
})
export class VariablesListItemComponent implements OnInit {
  @Input() variable: Variable;
  @Input() type: string;
  @Input() index: number;

  public edit: boolean;
  public selectedFuzzyArea: FuzzyArea;

  constructor() {}

  ngOnInit(): void {}

  public changeMode(): void {
    this.selectedFuzzyArea = this.variable.fuzzyAreas[0];
    this.edit = !this.edit;
  }
}
