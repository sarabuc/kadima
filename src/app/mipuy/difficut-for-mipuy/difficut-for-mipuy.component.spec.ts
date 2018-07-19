import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficutForMipuyComponent } from './difficut-for-mipuy.component';

describe('DifficutForMipuyComponent', () => {
  let component: DifficutForMipuyComponent;
  let fixture: ComponentFixture<DifficutForMipuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficutForMipuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficutForMipuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
