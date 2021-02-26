import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FUZZYAREATYPES } from 'src/app/core/config';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { FuzzyArea } from 'src/app/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public mamdaniService: MamdaniService) {}

  ngOnInit(): void {}

  public calculateValue(fuzzyArea: FuzzyArea, value: number) {
    return FUZZYAREATYPES[fuzzyArea.type](fuzzyArea.ranges, value);
  }

  public getResult(): number {
    return this.mamdaniService.getResult();
  }
}
