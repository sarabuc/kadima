import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupTreatComponent } from './add-group-treat.component';

describe('AddGroupTreatComponent', () => {
  let component: AddGroupTreatComponent;
  let fixture: ComponentFixture<AddGroupTreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGroupTreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupTreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
