import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByAreaComponent } from './report-by-area.component';

describe('ReportByAreaComponent', () => {
  let component: ReportByAreaComponent;
  let fixture: ComponentFixture<ReportByAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportByAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
