import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { ExampleValue } from 'src/app/shared/models/selected-values';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  public result: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { values: ExampleValue[] },
    private mamdaniService: MamdaniService
  ) {}

  ngOnInit(): void {
    this.result = this.mamdaniService.getResult(this.data.values);
  }
}
