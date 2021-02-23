import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormCreatorService } from 'src/app/core/form-creator.service';
import { MamdaniService } from 'src/app/core/mamdani.service';

@Component({
  selector: 'app-rules-composer',
  templateUrl: './rules-composer.component.html',
  styleUrls: ['./rules-composer.component.scss'],
})
export class RulesComposerComponent implements OnInit {
  @Output() getResult = new EventEmitter();
  public form: FormGroup;
  get typeControl(): FormControl {
    return this.form.get('type') as FormControl;
  }

  get fuzzyAreas(): FormArray {
    return this.form.get('fuzzyAreas') as FormArray;
  }

  get inputs(): FormArray {
    return this.fuzzyAreas.get('inputs') as FormArray;
  }

  get output(): FormGroup {
    return this.fuzzyAreas.get('output') as FormGroup;
  }

  constructor(
    public mamdaniService: MamdaniService,
    private formCreatorService: FormCreatorService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  public createRule(event: Event): void {
    event.preventDefault();
    const value = this.form.value;
    this.mamdaniService.addRule(value);
    this.form.reset();
  }

  public toggleNorm(): void {
    const newType = this.typeControl.value === 'AND' ? 'OR' : 'AND';
    this.typeControl.setValue(newType);
  }

  private initForm(): void {
    this.form = this.formCreatorService.createRuleForm();
    this.mamdaniService.inputVariables.forEach(() => {
      this.inputs.push(new FormControl(null, Validators.required));
    });
  }
}
