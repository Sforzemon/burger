var connection = require('./connection');
var { promisify } = require('util');
var db = promisify(connection.query).bind(connection);

var orm = {
  selectAll: async (tableInput) => {
    try {
      return await db('SELECT * FROM ??', [tableInput]);
    } catch(err) {
      throw err;
    }
  },
  insertOne: async (table, colToSet, newItem) => {
    try {
      return await db('INSERT INTO ?? (??) VALUES (?)', [table, colToSet, newItem]);
    } catch(err) {
      throw err;
    }
  },
  updateOne: async (table, colToSet, updatedValue, condition, match) => {
    try {
      return await db('UPDATE ?? SET ?? = ? WHERE ?? = ?', [table, colToSet, updatedValue, condition, match]);
    } catch(err) {
      throw err;
    }
  }
}

module.exports = orm;