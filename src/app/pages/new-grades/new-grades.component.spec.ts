import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGradesComponent } from './new-grades.component';

describe('NewGradesComponent', () => {
  let component: NewGradesComponent;
  let fixture: ComponentFixture<NewGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
