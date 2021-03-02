const { User } = require("../../src/app/models");
describe("Simple sum test", () => {
  it("should sum two numbers", () => {
    const x = 2;
    const y = 4;

    const sum = x + y;
    expect(sum).toBe(6);
  });
});

describe("Authentication", () => {
  it("should receive JWT token when authenticated with valid credentials", async () => {
    const user = await User.create({
      name: "Guilherme",
      email: "guilherme.jacobsen@gmail.com",
      password_hash: "abc123",
    });

    console.log("user : ", user);
    expect(user.email).toBe("guilherme.jacobsen@gmail.com");
  });
});
