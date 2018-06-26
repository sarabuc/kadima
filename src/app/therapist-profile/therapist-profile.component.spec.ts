import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistProfileComponent } from './therapist-profile.component';

describe('TherapistProfileComponent', () => {
  let component: TherapistProfileComponent;
  let fixture: ComponentFixture<TherapistProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
