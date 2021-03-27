import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesListItemFormComponent } from './variables-list-item-form.component';

describe('VariablesListItemFormComponent', () => {
  let component: VariablesListItemFormComponent;
  let fixture: ComponentFixture<VariablesListItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariablesListItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablesListItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
