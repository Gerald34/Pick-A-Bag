import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyBagComponent } from './money-bag.component';

describe('MoneyBagComponent', () => {
  let component: MoneyBagComponent;
  let fixture: ComponentFixture<MoneyBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
