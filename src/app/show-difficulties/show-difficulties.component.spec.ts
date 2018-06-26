import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDifficultiesComponent } from './show-difficulties.component';

describe('ShowDifficultiesComponent', () => {
  let component: ShowDifficultiesComponent;
  let fixture: ComponentFixture<ShowDifficultiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDifficultiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDifficultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
