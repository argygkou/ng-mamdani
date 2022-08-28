import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormCreatorService } from 'src/app/core/form-creator.service';
import { MamdaniService } from 'src/app/core/mamdani.service';

@Component({
  selector: 'app-rules-composer',
  templateUrl: './rules-composer.component.html',
  styleUrls: ['./rules-composer.component.scss'],
})
export class RulesComposerComponent implements OnInit, OnDestroy {
  public form: UntypedFormGroup;
  private destroy$ = new Subject<void>();
  get typeControl(): UntypedFormControl {
    return this.form.get('type') as UntypedFormControl;
  }

  get fuzzyAreas(): UntypedFormArray {
    return this.form.get('fuzzyAreas') as UntypedFormArray;
  }

  get inputs(): UntypedFormArray {
    return this.fuzzyAreas.get('inputs') as UntypedFormArray;
  }

  get output(): UntypedFormGroup {
    return this.fuzzyAreas.get('output') as UntypedFormGroup;
  }

  constructor(
    public mamdaniService: MamdaniService,
    private formCreatorService: FormCreatorService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public createRule(event: Event): void {
    event.preventDefault();
    const rule = this.form.value;
    const validRules = rule.fuzzyAreas.inputs.filter((input) => input.area);
    rule.fuzzyAreas.inputs = validRules.map((rule) => {
      return {
        name: rule.name,
        area: rule.area.name,
      };
    });
    if (rule.fuzzyAreas.inputs.length > 0) {
      this.mamdaniService.addRule(rule);
      this.form.reset();
    }
  }

  public toggleNorm(): void {
    const newType = this.typeControl.value === 'AND' ? 'OR' : 'AND';
    this.typeControl.setValue(newType);
  }

  private initForm(): void {
    this.form = this.formCreatorService.createRuleForm();
    this.mamdaniService.inputVariables$
      .pipe(takeUntil(this.destroy$))
      .subscribe((variables) => {
        variables.forEach((input) => {
          this.inputs.push(
            new UntypedFormGroup({
              name: new UntypedFormControl(input.name),
              area: new UntypedFormControl(null),
            })
          );
        });
      });
  }
}
