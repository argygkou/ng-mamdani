import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-name',
  templateUrl: './project-name.component.html',
  styleUrls: ['./project-name.component.scss'],
})
export class ProjectNameComponent implements OnInit {
  @Input() projectName: string;

  constructor() {}

  ngOnInit(): void {}
}
