const { sequelize } = require("../../src/app/models");

module.exports = async () => {
  return await Promise.all(
    Object.keys(sequelize.models).map((key) => {
      return sequelize.models[key].destroy({ truncate: true, force: true });
    })
  );
};
