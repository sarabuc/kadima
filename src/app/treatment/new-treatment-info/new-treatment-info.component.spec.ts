import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTreatmentInfoComponent } from './new-treatment-info.component';

describe('NewTreatmentInfoComponent', () => {
  let component: NewTreatmentInfoComponent;
  let fixture: ComponentFixture<NewTreatmentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTreatmentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTreatmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
