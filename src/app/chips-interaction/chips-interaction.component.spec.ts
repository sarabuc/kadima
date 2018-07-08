import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsInteractionComponent } from './chips-interaction.component';

describe('ChipsInteractionComponent', () => {
  let component: ChipsInteractionComponent;
  let fixture: ComponentFixture<ChipsInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
