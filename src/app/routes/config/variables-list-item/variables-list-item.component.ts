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
  @Input() itemIndex: number;
  @Output() removeItem = new EventEmitter<number>();

  public edit: boolean;
  public selectedFuzzyArea: FuzzyArea;
  public index: number;

  constructor() {}

  ngOnInit(): void {}

  public changeMode(): void {
    this.edit = !this.edit;
    if (this.edit) {
      this.selectedFuzzyArea = this.variable.fuzzyAreas[0];
      this.index = 0;
      return;
    }
    this.selectedFuzzyArea = null;
    this.index = null;
  }

  public toggleChanged(event: MatButtonToggleChange, index: number): void {
    this.index = index;
  }
}
