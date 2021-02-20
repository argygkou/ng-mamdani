import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MamdaniService } from 'src/app/core/mamdani.service';

@Component({
  selector: 'app-variables-form',
  templateUrl: './variables-form.component.html',
  styleUrls: ['./variables-form.component.scss'],
})
export class VariablesFormComponent implements OnInit {
  public variableType = this.fb.control('inputs');

  public variableForm = this.fb.group({
    name: ['', Validators.required],
    start: 0,
    end: 0,
    fuzzyAreasCount: 1,
    fuzzyAreas: this.fb.array([]),
    example: 0,
  });

  constructor(private fb: FormBuilder, public mamdaniService: MamdaniService) {}

  ngOnInit(): void {}

  public addVariable(event: Event): void {
    event.preventDefault();
    this.mamdaniService.addVariable(
      this.variableType.value,
      this.variableForm.value
    );
  }
}
