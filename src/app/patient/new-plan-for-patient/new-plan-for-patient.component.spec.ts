import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlanForPatientComponent } from './new-plan-for-patient.component';

describe('NewPlanForPatientComponent', () => {
  let component: NewPlanForPatientComponent;
  let fixture: ComponentFixture<NewPlanForPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlanForPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlanForPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
