import { Component, OnInit } from '@angular/core';
import { FUZZYAREATYPES } from 'src/app/core/config';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { FuzzyArea } from 'src/app/shared';

@Component({
  selector: 'app-examples-form',
  templateUrl: './examples-form.component.html',
  styleUrls: ['./examples-form.component.scss'],
})
export class ExamplesFormComponent implements OnInit {
  constructor(public mamdaniService: MamdaniService) {}

  ngOnInit(): void {}

  public calculateValue(fuzzyArea: FuzzyArea, value: number) {
    return FUZZYAREATYPES[fuzzyArea.type](fuzzyArea.ranges, value);
  }
}
