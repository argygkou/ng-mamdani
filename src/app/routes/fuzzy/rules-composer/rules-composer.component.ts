import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { FormCreatorService } from 'src/app/core/form-creator.service';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { FuzzyArea, Rule } from 'src/app/shared';

@Component({
  selector: 'app-rules-composer',
  templateUrl: './rules-composer.component.html',
  styleUrls: ['./rules-composer.component.scss'],
})
export class RulesComposerComponent implements OnInit {
  public form = this.formCreatorService.createRuleForm();

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

  ngOnInit(): void {}

  public onSelectionChanged(event: MatSelectChange, type: string): void {
    const fuzzyAreaForm = this.formCreatorService.createFuzzyAreaForm();
    fuzzyAreaForm.patchValue(event.value);
    fuzzyAreaForm.get('type').patchValue(event.value.type);
    if (type === 'input') {
      this.inputs.push(fuzzyAreaForm);
    } else {
      this.output.patchValue(fuzzyAreaForm);
    }
  }

  public createRule(event: Event): void {
    event.preventDefault();
    const value = this.form.value;
    this.mamdaniService.addRule(value);
  }

  public toggleNorm(): void {
    const newType = this.typeControl.value === 'AND' ? 'OR' : 'AND';
    this.typeControl.setValue(newType);
  }
}
