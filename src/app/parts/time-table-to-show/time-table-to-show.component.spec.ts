import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableToShowComponent } from './time-table-to-show.component';

describe('TimeTableToShowComponent', () => {
  let component: TimeTableToShowComponent;
  let fixture: ComponentFixture<TimeTableToShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTableToShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableToShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
