import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinanceComponent } from './binance.component';

describe('BinanceComponent', () => {
  let component: BinanceComponent;
  let fixture: ComponentFixture<BinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
