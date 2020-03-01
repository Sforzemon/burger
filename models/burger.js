var orm = require("../config/orm");

var burger = {
  all: async () => await orm.selectAll("burgers"),
  insert: async (colToSet, newValue) => await orm.insertOne("burgers", colToSet, newValue),
  update: async (colToSet, updatedValue, condition, match) =>
    await orm.updateOne("burgers", colToSet, updatedValue, condition, match)
}

module.exports = burger;