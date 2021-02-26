import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesListItemComponent } from './variables-list-item.component';

describe('VariablesListItemComponent', () => {
  let component: VariablesListItemComponent;
  let fixture: ComponentFixture<VariablesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariablesListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
