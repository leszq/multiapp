import { async, TestBed } from '@angular/core/testing';
import { Package1Module } from './package1.module';

describe('Package1Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Package1Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Package1Module).toBeDefined();
  });
});
