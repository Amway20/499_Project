import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoSurveyHeaderComponent } from './do-survey-header.component';

describe('DoSurveyHeaderComponent', () => {
  let component: DoSurveyHeaderComponent;
  let fixture: ComponentFixture<DoSurveyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoSurveyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoSurveyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
