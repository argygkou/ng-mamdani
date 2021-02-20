import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MamdaniService } from 'src/app/core/mamdani.service';

@Component({
  selector: 'app-variables-list',
  templateUrl: './variables-list.component.html',
  styleUrls: ['./variables-list.component.scss'],
})
export class VariablesListComponent implements OnInit {
  @Input() title: string;
  @Input() variables: any[];

  public fuzzyAreas = this.mamdaniService.fuzzyAreas;

  constructor(public mamdaniService: MamdaniService) {}

  ngOnInit(): void {}

  public addFuzzyArea(input): void {
    input.fuzzyAreas.push({
      ...this.fuzzyAreas.newFuzzyArea,
      type: {
        ...this.fuzzyAreas.newFuzzyArea.type,
        ranges: [...this.fuzzyAreas.newFuzzyArea.type.ranges],
      },
    });
  }
}
