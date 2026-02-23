import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "../src/TodoForm";

test("calls onAdd when button clicked", () => {
  const mockAdd = vi.fn();

  render(<TodoForm onAdd={mockAdd} />);

  fireEvent.change(screen.getByTestId("todo-input"), {
    target: { value: "Test Todo" },
  });

  fireEvent.click(screen.getByText("Add"));

  expect(mockAdd).toHaveBeenCalledWith("Test Todo");
});