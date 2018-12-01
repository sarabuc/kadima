import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupTreatmentComponent } from './new-group-treatment.component';

describe('NewGroupTreatmentComponent', () => {
  let component: NewGroupTreatmentComponent;
  let fixture: ComponentFixture<NewGroupTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGroupTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGroupTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
