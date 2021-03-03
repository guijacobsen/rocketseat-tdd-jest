const app = require("../../src/app");
const request = require("supertest");
const truncate = require("../utils/truncate");
const { User } = require("../../src/app/models");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });
  it("should authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "Guilherme",
      email: "guilherme.jacobsen@gmail.com",
      password_hash: "abc123",
    });

    const response = await request(app).post("/session").send({
      email: user.email,
      password: "abc123",
    });

    expect(response.status).toBe(200);
  });
});
