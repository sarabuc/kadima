import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTreatmentProgressComponent } from './new-treatment-progress.component';

describe('NewTreatmentProgressComponent', () => {
  let component: NewTreatmentProgressComponent;
  let fixture: ComponentFixture<NewTreatmentProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTreatmentProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTreatmentProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
