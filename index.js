'use strict';
var mysql = require('mysql');

/**
 * Returns JSON of procedures based;
 * @param {config} JSON mysql configuration
 * @return {JSON}
 */
module.exports = function(config, result) {
    var connection = mysql.createConnection(config)
    var queryString = 'SELECT * '
    queryString +=  'FROM information_schema.parameters '
    queryString +=  'where SPECIFIC_SCHEMA = "'
    queryString +=  config.database + "\" "
    queryString +=  "and routine_type = 'PROCEDURE'"

    connection.connect();
    connection.query(queryString ,function(error,rows){
        connection.end();
        if(error){
            return result(error);
        }else {
            return result(proceduresAsJson(rows));
        }
    });
}

function proceduresAsJson(rows) {
    var data = {}

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i]
        var procedure = row.SPECIFIC_NAME
        var parameter = row.PARAMETER_NAME

        if (data[procedure]) {
            var parameters = data[procedure].parameters;
            parameters.push(parameter);
            
            data[procedure].parameters = parameters
        } else {
            data[procedure] = {parameters : [parameter]}
        }
    }
    return data;
}


