import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMethodsComponent } from './show-methods.component';

describe('ShowMethodsComponent', () => {
  let component: ShowMethodsComponent;
  let fixture: ComponentFixture<ShowMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
