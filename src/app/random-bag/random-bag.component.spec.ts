import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomBagComponent } from './random-bag.component';

describe('RandomBagComponent', () => {
  let component: RandomBagComponent;
  let fixture: ComponentFixture<RandomBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
