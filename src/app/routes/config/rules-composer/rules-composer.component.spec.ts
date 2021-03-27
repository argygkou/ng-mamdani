import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesComposerComponent } from './rules-composer.component';

describe('RulesComposerComponent', () => {
  let component: RulesComposerComponent;
  let fixture: ComponentFixture<RulesComposerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesComposerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
