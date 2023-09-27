const { sequelize, DataTypes } = require("../database");

const PostModel = sequelize.define(
  "posts",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    img_url: { type: DataTypes.STRING, allowNull: false },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  { tableName: "posts", timestamps: false }
);

sequelize
  .sync({ force: true })
  .then(() => console.log("Modelos Sincronizados"));

module.exports = PostModel;
