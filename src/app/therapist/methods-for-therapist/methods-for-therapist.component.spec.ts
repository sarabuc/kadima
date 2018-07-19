import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsForTherapistComponent } from './methods-for-therapist.component';

describe('MethodsForTherapistComponent', () => {
  let component: MethodsForTherapistComponent;
  let fixture: ComponentFixture<MethodsForTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodsForTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodsForTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
