import { Component, OnInit } from '@angular/core';
import { MamdaniService } from 'src/app/core/mamdani.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  public result: number;

  constructor(private mamdaniService: MamdaniService) {}

  ngOnInit(): void {
    this.result = this.mamdaniService.getResult();
  }
}
