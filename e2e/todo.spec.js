import { test, expect } from "@playwright/test";

test("user can add a todo", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.fill('[data-testid="todo-input"]', "E2E Task");
  await page.click("text=Add");

  await expect(page.locator("text=E2E Task")).toBeVisible();
});