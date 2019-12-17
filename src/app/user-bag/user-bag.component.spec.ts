import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBagComponent } from './user-bag.component';

describe('UserBagComponent', () => {
  let component: UserBagComponent;
  let fixture: ComponentFixture<UserBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
