exports.up = function(knex, Promise) {  
    return Promise.all([
        knex.schema.alterTable('achievements', function(table){
        table.integer('famous_person_id');
        })
    ])
};

exports.down = function(knex, Promise) {  
    return Promise.all([
        knex.schema.table('achievements', function(table){
            table.dropColumn('famous_people_id');
        })
    ])
};
