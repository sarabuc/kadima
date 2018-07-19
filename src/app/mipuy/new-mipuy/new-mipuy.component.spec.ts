import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMipuyComponent } from './new-mipuy.component';

describe('NewMipuyComponent', () => {
  let component: NewMipuyComponent;
  let fixture: ComponentFixture<NewMipuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMipuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMipuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
