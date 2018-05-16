import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGradComponent } from './update-grad.component';

describe('UpdateGradComponent', () => {
  let component: UpdateGradComponent;
  let fixture: ComponentFixture<UpdateGradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
