import { describe, expect, test } from "@jest/globals";
import { calculator } from "../../src/modules/calculator";

describe("Calculator", () => {
  test("should add two numbers", () => {
    const result = calculator.add(1, 2);
    expect(result).toBe(3);
  });

  test("should subtract two numbers", () => {
    const result = calculator.subtract(2, 1);
    expect(result).toBe(1);
  });

  test("should multiply two numbers", () => {
    const result = calculator.multiply(2, 3);
    expect(result).toBe(6);
  });

  test("should divide two numbers", () => {
    const result = calculator.divide(6, 2);
    expect(result).toBe(3);
  });
});
