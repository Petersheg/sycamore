const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('data.db');

db.each("SELECT * FROM tableName", function(err, row) {
    if(err){
        console.log(err);
    }
    if (isNaN(row.columnName)) {
        console.log("Buzz");
    } else {
        console.log("Fizz");
    }
});

db.close();
