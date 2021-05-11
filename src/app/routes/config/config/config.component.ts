import { Component, OnInit } from '@angular/core';
import { MamdaniService } from 'src/app/core/mamdani.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
  public links = ['inputs', 'output', 'rules'];
  constructor(public mamdaniService: MamdaniService) {}

  ngOnInit(): void {}
}
