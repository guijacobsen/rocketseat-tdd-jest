const app = require("../../src/app");
const request = require("supertest");
const truncate = require("../utils/truncate");
const { User } = require("../../src/app/models");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  test("should authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "Guilherme",
      email: "guijacobsen@gmail.com",
      password: "abc123",
    });

    const response = await request(app).post("/session").send({
      email: user.email,
      password: "abc123",
    });

    expect(response.status).toBe(200);
  });

  test("should not authenticate with invalid credentials", async () => {
    const user = await User.create({
      name: "Guilherme",
      email: "guijacobsen@gmail.com",
      password: "abc123",
    });

    const response = await request(app).post("/session").send({
      email: user.email,
      password: "123abc",
    });

    expect(response.status).toBe(401);
  });
});
