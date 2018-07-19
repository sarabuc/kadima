import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTreatmentInfoComponent } from './show-treatment-info.component';

describe('ShowTreatmentInfoComponent', () => {
  let component: ShowTreatmentInfoComponent;
  let fixture: ComponentFixture<ShowTreatmentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTreatmentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTreatmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
