import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSurveyBarComponent } from './manage-survey-bar.component';

describe('ManageSurveyBarComponent', () => {
  let component: ManageSurveyBarComponent;
  let fixture: ComponentFixture<ManageSurveyBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSurveyBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSurveyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
