import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import MamdaniConfig from 'src/app/core/config';

@Component({
  selector: 'app-variables-list',
  templateUrl: './variables-list.component.html',
  styleUrls: ['./variables-list.component.scss'],
})
export class VariablesListComponent implements OnInit {
  @Input() title: string;
  @Input() variables: any[];
  @Output() addFuzzyArea = new EventEmitter<any>();

  public fuzzyAreas = MamdaniConfig.fuzzyAreas;

  constructor() {}

  ngOnInit(): void {}
}
