import { validateTodo } from "../../src/services/todoService.js";

describe("validateTodo", () => {
  test("throws error for short title", () => {
    expect(() => validateTodo("Hi")).toThrow();
  });

  test("returns true for valid title", () => {
    expect(validateTodo("Study")).toBe(true);
  });
});