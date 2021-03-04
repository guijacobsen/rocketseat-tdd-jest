const { User } = require("../models");
class SessionController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(401).json({ message: "User not found" });

      if (!(await user.checkPassword(password)))
        return res.status(401).json({ message: "Invalid credentials" });

      return res.status(200).send();
    } catch (error) {
      console.log("error : ", error);
      return res.status(500).json({ message: "Unexpected error" });
    }
  }
}

module.exports = new SessionController();
