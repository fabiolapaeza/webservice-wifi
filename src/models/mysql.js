const environment = require('../environment/environment');
const mysql      = require('mysql');
const pool  = mysql.createPool(environment.mysql);


module.exports = {
  execute: async function (query) {
      return new Promise((resolve, reject) => {
        pool .getConnection((err, connection) => {
              if (err) {
                  console.error('MYSQL error', err);
                  reject(err);
                  return;
              }

              connection.query(query, [], (err, res, fields) => {
                  if (err) {
                      console.error('MYSQL error', err);
                      reject(err);
                      return;
                  }
                  resolve(res);
                  connection.release();
              });
          });
      });
  },
}

// connection.end();