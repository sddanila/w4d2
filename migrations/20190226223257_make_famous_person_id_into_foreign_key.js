exports.up = function(knex, Promise) {  
    return Promise.all([
        knex.schema.table('achievements', function(table){
        table.foreign('famous_person_id').references('id').on('famous_people');
        })
    ])
};

exports.down = function(knex, Promise) {  
    return Promise.all([
        knex.schema.table('achievements', function(table){
            table.dropForeign('famous_person_id');
        })
    ])
};
