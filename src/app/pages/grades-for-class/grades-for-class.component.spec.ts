import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesForClassComponent } from './grades-for-class.component';

describe('GradesForClassComponent', () => {
  let component: GradesForClassComponent;
  let fixture: ComponentFixture<GradesForClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesForClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesForClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
