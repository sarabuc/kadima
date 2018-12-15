import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByClassComponent } from './report-by-class.component';

describe('ReportByClassComponent', () => {
  let component: ReportByClassComponent;
  let fixture: ComponentFixture<ReportByClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportByClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
