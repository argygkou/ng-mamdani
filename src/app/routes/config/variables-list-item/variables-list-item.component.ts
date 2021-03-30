import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { FuzzyArea, Variable } from 'src/app/shared';

@Component({
  selector: 'app-variables-list-item',
  templateUrl: './variables-list-item.component.html',
  styleUrls: ['./variables-list-item.component.scss'],
})
export class VariablesListItemComponent implements OnInit {
  @Input() variable: Variable;
  @Input() type: string;
  @Input() variableIndex: number;
  @Output() removeItem = new EventEmitter<number>();

  public edit: boolean;
  public selectedFuzzyArea: FuzzyArea;
  public itemIndex: number;

  constructor() {}

  ngOnInit(): void {}

  public changeMode(): void {
    this.edit = !this.edit;
    if (!this.selectedFuzzyArea && this.edit) {
      this.selectedFuzzyArea = this.variable.fuzzyAreas[0];
      this.itemIndex = 0;
      return;
    }
  }

  public toggleChanged(event: MatButtonToggleChange, index: number): void {
    this.itemIndex = index;
  }
}
