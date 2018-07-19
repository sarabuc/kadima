import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTimeComponent } from './free-time.component';

describe('FreeTimeComponent', () => {
  let component: FreeTimeComponent;
  let fixture: ComponentFixture<FreeTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
