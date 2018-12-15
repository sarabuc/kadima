import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByTherapistComponent } from './report-by-therapist.component';

describe('ReportByTherapistComponent', () => {
  let component: ReportByTherapistComponent;
  let fixture: ComponentFixture<ReportByTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportByTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
