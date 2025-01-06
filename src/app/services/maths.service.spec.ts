import { TestBed } from '@angular/core/testing';

import { MathsService } from './maths.service';

describe('MathsService', () => {
  let service: MathsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    const result = service.add(2, 3);
    expect(result).toBe(5);
  })

  it('should add two numbers correctly', () => {
    const result = service.add(4, 3);
    expect(result).toBe(7);
  })

  it('should substract two numbers correctly', () => {
    const result = service.subtract(5, 3);
    expect(result).toBe(2)
  })

  it('should substract two numbers correctly', () => {
    const result = service.subtract(8, 9);
    expect(result).toBe(-1)
  })
});
