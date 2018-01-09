import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinBaseComponent } from './coin-base.component';

describe('CoinBaseComponent', () => {
  let component: CoinBaseComponent;
  let fixture: ComponentFixture<CoinBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
