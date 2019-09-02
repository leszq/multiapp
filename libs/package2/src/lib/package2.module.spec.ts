import { async, TestBed } from '@angular/core/testing';
import { Package2Module } from './package2.module';

describe('Package2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Package2Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Package2Module).toBeDefined();
  });
});
