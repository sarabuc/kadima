import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientsFromExelComponent } from './add-patients-from-exel.component';

describe('AddPatientsFromExelComponent', () => {
  let component: AddPatientsFromExelComponent;
  let fixture: ComponentFixture<AddPatientsFromExelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPatientsFromExelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientsFromExelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
