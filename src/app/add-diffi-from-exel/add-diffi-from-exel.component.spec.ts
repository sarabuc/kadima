import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiffiFromExelComponent } from './add-diffi-from-exel.component';

describe('AddDiffiFromExelComponent', () => {
  let component: AddDiffiFromExelComponent;
  let fixture: ComponentFixture<AddDiffiFromExelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiffiFromExelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiffiFromExelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
