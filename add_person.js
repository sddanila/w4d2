'use strict';

const firstName = process.argv[2];
const lastName = process.argv[3];
const birthDate = new Date(process.argv[4]).toISOString();

const knex = require('knex')({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'development',
        password : 'development',
        database : 'test_db'
    }
});

// ADD NEW FAMOUS PERSON
knex('famous_people').insert({first_name: `${firstName}`, last_name: `${lastName}`, birthdate: `${birthDate}`})

// DISPLAY TABLE OF FAMOUS PEOPLE
knex.select().from('famous_people')
    .asCallback(function(err, rows) {
        if (err) return console.error(err);
        console.log(rows);
        knex.destroy();
});