import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MamdaniService } from '../core/mamdani.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public downloadJsonHref: SafeUrl;
  constructor(
    private mamdaniService: MamdaniService,
    private sanitizer: DomSanitizer
  ) {}

  public export(): void {
    const config = this.mamdaniService.exportConfig();
    const uri = this.sanitizer.bypassSecurityTrustUrl(
      'data:text/json;charset=UTF-8,' + encodeURIComponent(config)
    );
    this.downloadJsonHref = uri;
  }

  public onFileInput(files: File[]): void {
    if (files.length > 0) {
      const file = files[0];
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const result = fileReader.result;
        this.mamdaniService.importConfig(result);
      };
      fileReader.readAsText(file);
    }
  }
}
