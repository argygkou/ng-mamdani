import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormCreatorService } from 'src/app/core/form-creator.service';
import { MamdaniService } from 'src/app/core/mamdani.service';

@Component({
  selector: 'app-variables-form',
  templateUrl: './variables-form.component.html',
  styleUrls: ['./variables-form.component.scss'],
})
export class VariablesFormComponent implements OnInit {
  public variableType = new FormControl('input');

  public form = this.formCreatorService.createVariableForm();

  constructor(
    private formCreatorService: FormCreatorService,
    public mamdaniService: MamdaniService
  ) {}

  ngOnInit(): void {}

  public addVariable(event: Event): void {
    event.preventDefault();
    if (this.variableType.value === 'input') {
      this.mamdaniService.addInputVariable(this.form.value);
    } else {
      this.mamdaniService.addOutputVariable(this.form.value);
    }
    this.form.reset();
    this.form = this.formCreatorService.createVariableForm();
  }
}
