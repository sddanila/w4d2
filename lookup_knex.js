'use strict';

const firstName = process.argv[2];
const knex = require('knex')({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'development',
        password : 'development',
        database : 'test_db'
    }
});

knex.select('first_name', 'last_name', 'birthdate').from('famous_people')
    .where('first_name', '=', firstName)
    .asCallback(function(err, rows) {
        if (err) return console.error(err);
        console.log('Searching...')
        console.log(`Found ${rows.length} persons(s) by the name '${firstName}':`);
        rows.forEach(function(element, index){
            console.log(`${index + 1}: ${element.first_name} ${element.last_name}, born on '${element.birthdate.toISOString().substr(0, 10)}'`);
        });
    knex.destroy();
});


