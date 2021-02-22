import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { matFormFieldAnimations } from '@angular/material/form-field';
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
    this.form = this.formCreatorService.createRuleForm();
  }

  public onSelectionChanged(
    event: MatSelectChange,
    type: string,
    index: 0
  ): void {
    const fuzzyAreaForm = this.formCreatorService.createFuzzyAreaForm();
    fuzzyAreaForm.patchValue(event.value);
    const ranges = fuzzyAreaForm.get('type').get('ranges') as FormArray;
    event.value.type.ranges.forEach((range) => {
      ranges.push(new FormControl(range));
    });

    if (type !== 'input') {
      this.output.setValue(fuzzyAreaForm.value);
      return;
    }

    if (index <= this.inputs.length) {
      this.inputs.removeAt(index);
    }
    this.inputs.push(fuzzyAreaForm);
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
