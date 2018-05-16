import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoSurveyComponent } from './add-do-survey.component';

describe('AddDoSurveyComponent', () => {
  let component: AddDoSurveyComponent;
  let fixture: ComponentFixture<AddDoSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
