import { Component } from '@angular/core';
import { MamdaniService } from 'src/app/core/mamdani.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent {
  public links = ['inputs', 'output', 'rules'];
  constructor(public mamdaniService: MamdaniService) {}
}
