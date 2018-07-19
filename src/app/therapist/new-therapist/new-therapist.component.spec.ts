import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTherapistComponent } from './new-therapist.component';

describe('NewTherapistComponent', () => {
  let component: NewTherapistComponent;
  let fixture: ComponentFixture<NewTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
