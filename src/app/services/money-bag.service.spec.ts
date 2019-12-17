import { TestBed } from '@angular/core/testing';

import { MoneyBagService } from './money-bag.service';

describe('MoneyBagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoneyBagService = TestBed.get(MoneyBagService);
    expect(service).toBeTruthy();
  });
});
