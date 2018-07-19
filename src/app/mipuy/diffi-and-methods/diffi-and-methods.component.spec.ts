import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffiAndMethodsComponent } from './diffi-and-methods.component';

describe('DiffiAndMethodsComponent', () => {
  let component: DiffiAndMethodsComponent;
  let fixture: ComponentFixture<DiffiAndMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffiAndMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffiAndMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
