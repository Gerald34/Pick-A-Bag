import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagRevealDialogComponent } from './bag-reveal-dialog.component';

describe('BagRevealDialogComponent', () => {
  let component: BagRevealDialogComponent;
  let fixture: ComponentFixture<BagRevealDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagRevealDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagRevealDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
