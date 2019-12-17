import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyBagDialogComponent } from './money-bag-dialog.component';

describe('MoneyBagDialogComponent', () => {
  let component: MoneyBagDialogComponent;
  let fixture: ComponentFixture<MoneyBagDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyBagDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyBagDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
