import { Component } from '@angular/core';
import { MamdaniService } from 'src/app/core/mamdani.service';

@Component({
  selector: 'app-config-viewer',
  templateUrl: './config-viewer.component.html',
  styleUrls: ['./config-viewer.component.scss'],
})
export class ConfigViewerComponent {
  public expanded = true;

  constructor(public mamdaniService: MamdaniService) {}
}
