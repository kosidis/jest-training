// test/calculator.test.ts

import { Calculator } from '../src/calculator';

describe('Calculator Class', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add two numbers correctly', () => {
    expect(calculator.add(3, 2)).toBe(5);
  });

});

