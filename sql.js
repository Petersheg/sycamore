// Question: Imagine a single column in a table that is populated with either a single digit (0-9) 
// or a single character (a-z, A-Z). Write a SQL query to print 'Fizz' for a numeric value or 'Buzz' 
// for alphabetical value for all values in that column

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
