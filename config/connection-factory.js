var mysql = require("mysql");
// const { connect } = require("../app/routes/router");


module.exports = function(){
  return mysql.createConnection({
       host: "localhost",
       user: "kalebe",
       password: "2468kalebe",
       database: "academia",
       port: 3306
     });
}

