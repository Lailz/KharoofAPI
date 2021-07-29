module.exports = (sequelize, DataTypes) =>
  sequelize.define("Katakeet", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    priority: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  });
