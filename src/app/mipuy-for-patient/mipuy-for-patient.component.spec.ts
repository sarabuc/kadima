import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MipuyForPatientComponent } from './mipuy-for-patient.component';

describe('MipuyForPatientComponent', () => {
  let component: MipuyForPatientComponent;
  let fixture: ComponentFixture<MipuyForPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MipuyForPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MipuyForPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
