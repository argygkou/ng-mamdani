import { Component, OnInit } from '@angular/core';
import { MamdaniService } from 'src/app/core/mamdani.service';

@Component({
  selector: 'app-examples-form',
  templateUrl: './examples-form.component.html',
  styleUrls: ['./examples-form.component.scss'],
})
export class ExamplesFormComponent implements OnInit {
  constructor(public mamdaniService: MamdaniService) {}

  ngOnInit(): void {}
}
