import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MamdaniService } from 'src/app/core/mamdani.service';
import { Variable, Variables } from 'src/app/shared';

@Component({
  selector: 'app-variables-list',
  templateUrl: './variables-list.component.html',
  styleUrls: ['./variables-list.component.scss'],
})
export class VariablesListComponent implements OnInit {
  @Input() title: string;
  @Input() type: string;
  @Input() variables: Variables[];

  public form = this.fb.group({
    name: [null, Validators.required],
    type: this.fb.group({
      name: null,
      ranges: this.fb.array([]),
      value: null,
    }),
  });

  get typeGroup(): FormGroup {
    return this.form.get('type') as FormGroup;
  }

  get ranges(): FormArray {
    return this.typeGroup.get('ranges') as FormArray;
  }

  constructor(public mamdaniService: MamdaniService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.typeGroup.get('name').valueChanges.subscribe((value) => {
      const selectedType = this.mamdaniService.fuzzyAreas.find(
        (area) => area.name === value
      );
      this.typeGroup.get('value').setValue(selectedType.type.value);
      this.ranges.clear();

      selectedType.type.ranges.forEach((range, index) => {
        const group = this.createRange(index);
        group.get(`range${index}`).setValue(range);
        this.ranges.push(group);
      });
    });
  }

  public addFuzzyArea(event: Event, variable: Variable, index: number): void {
    event.preventDefault();
    let formValue = this.form.value;
    formValue = {
      ...formValue,
      type: {
        ...formValue.type,
        ranges: formValue.type.ranges.map((r, i) => r[this.getRangeName(i)]),
      },
    };

    variable.fuzzyAreas.push(formValue);

    this.mamdaniService.addFuzzyArea(this.type, index, variable);
  }

  public getRangeName(index: number): string {
    return `range${index}`;
  }

  private createRange(index: number): FormGroup {
    return this.fb.group({
      [this.getRangeName(index)]: [0, Validators.required],
    });
  }
}
