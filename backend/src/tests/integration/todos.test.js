import request from "supertest";
import app from "../../app";

describe("POST /todos", () => {
  test("creates a todo", async () => {
    const response = await request(app)
      .post("/todos")
      .send({ title: "New Task" });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe("New Task");
  });
});