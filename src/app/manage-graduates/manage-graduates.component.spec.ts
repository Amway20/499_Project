import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGraduatesComponent } from './manage-graduates.component';

describe('ManageGraduatesComponent', () => {
  let component: ManageGraduatesComponent;
  let fixture: ComponentFixture<ManageGraduatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGraduatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGraduatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
