let orm = require('../config/orm');

let burgers = {
    create: function(value, callback){
        orm.insertInto('burgers', {
            column: 'burger_name',
            value: value
        }, callback);
    },
    selectAll: function(column, value, callback) {
        orm.selectWhere('burgers', column, value, callback);
    },
    select: function(callback){
        orm.select('burgers', callback)
    },
    update: function(value, id, callback){
        orm.updateWhere('burgers', 'devoured', value, 'id', id, callback);
    },
    delete: function (id, callback) {
        orm.deleteWhere('burgers', 'id', id, callback);
    }
}

module.exports = burgers;
