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

  it('should subtract two numbers correctly', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });

  it('should multiply two numbers correctly', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
  });

  it('should divide two numbers correctly', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(6, 0)).toThrowError('Cannot divide by zero');
  });
});

