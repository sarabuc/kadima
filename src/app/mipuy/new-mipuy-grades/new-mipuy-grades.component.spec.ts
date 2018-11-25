import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMipuyGradesComponent } from './new-mipuy-grades.component';

describe('NewMipuyGradesComponent', () => {
  let component: NewMipuyGradesComponent;
  let fixture: ComponentFixture<NewMipuyGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMipuyGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMipuyGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
