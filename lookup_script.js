const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});


const name = process.argv[2];
client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
    client.query("SELECT * FROM famous_people WHERE first_name = $1", [name], (err, result) => {
      console.log("Searching...")
      if (err) {
        return console.error("error running query", err);
      }
      console.log(`Found (${result.rowCount}) persons(s) by the name '${name}'`)
      let resultArray = result.rows;
      resultArray.forEach(function(element, index){
        console.log(`${index + 1}: ${element.first_name} ${element.last_name}, born on '${element.birthdate.getFullYear()}-${element.birthdate.getMonth()+1}-${element.birthdate.getDate()}'`);
      })
      client.end();
    });
});