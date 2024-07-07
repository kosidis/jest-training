// test/calculator.test.ts

import { Calculator } from '../src/calculator';

describe('Calculator Class', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it.each([[1,2,3], [2,3,5]])('should add two numbers correctly', (a,b,expected) => {
    expect(calculator.add(a, b)).toBe(expected);
  });

});

