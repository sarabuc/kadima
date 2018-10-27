import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMassageForUserComponent } from './create-massage-for-user.component';

describe('CreateMassageForUserComponent', () => {
  let component: CreateMassageForUserComponent;
  let fixture: ComponentFixture<CreateMassageForUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMassageForUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMassageForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
