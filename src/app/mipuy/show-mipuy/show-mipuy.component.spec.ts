import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMipuyComponent } from './show-mipuy.component';

describe('ShowMipuyComponent', () => {
  let component: ShowMipuyComponent;
  let fixture: ComponentFixture<ShowMipuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMipuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMipuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
