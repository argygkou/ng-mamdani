import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzyAreaFormComponent } from './fuzzy-area-form.component';

describe('FuzzyAreaFormComponent', () => {
  let component: FuzzyAreaFormComponent;
  let fixture: ComponentFixture<FuzzyAreaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuzzyAreaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuzzyAreaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
