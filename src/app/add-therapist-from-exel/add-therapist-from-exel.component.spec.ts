import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTherapistFromExelComponent } from './add-therapist-from-exel.component';

describe('AddTherapistFromExelComponent', () => {
  let component: AddTherapistFromExelComponent;
  let fixture: ComponentFixture<AddTherapistFromExelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTherapistFromExelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTherapistFromExelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
