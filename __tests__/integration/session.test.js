const app = require("../../src/app");
const request = require("supertest");
const truncate = require("../utils/truncate");
const { User } = require("../../src/app/models");

const factory = require("../factories");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate with valid credentials", async () => {
    const user = await factory.create("User");

    const response = await request(app).post("/session").send({
      email: user.email,
      password: "abc123",
    });

    expect(response.status).toBe(200);
  });

  it("should not authenticate with invalid credentials", async () => {
    const user = await factory.create("User");

    const response = await request(app).post("/session").send({
      email: user.email,
      password: "123abc",
    });

    expect(response.status).toBe(401);
  });

  it("should return jwt token when authenticated", async () => {
    const user = await factory.create("User");

    const response = await request(app).post("/session").send({
      email: user.email,
      password: "abc123",
    });

    expect(response.body).toHaveProperty("token");
  });
});
