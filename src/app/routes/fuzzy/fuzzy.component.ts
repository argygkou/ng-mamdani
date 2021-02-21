import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MamdaniService } from 'src/app/core/mamdani.service';

@Component({
  selector: 'app-fuzzy',
  templateUrl: './fuzzy.component.html',
  styleUrls: ['./fuzzy.component.scss'],
})
export class FuzzyComponent implements OnInit {
  public projectName = 'New Project';

  constructor(
    public mamdaniService: MamdaniService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public getResult(): void {
    let res = { result: 0 };
    this.mamdaniService.rules.forEach((element) => {
      if (+element.result > +res.result) {
        res.result = element.result;
      }
    });
    const message = `Result is ${res.result}`;
    this.openSnackBar(message, 'OK');
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
