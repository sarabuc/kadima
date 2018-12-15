import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMipuyFromExelComponent } from './new-mipuy-from-exel.component';

describe('NewMipuyFromExelComponent', () => {
  let component: NewMipuyFromExelComponent;
  let fixture: ComponentFixture<NewMipuyFromExelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMipuyFromExelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMipuyFromExelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
