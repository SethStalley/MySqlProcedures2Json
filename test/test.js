'use strict';

var expect = require('chai').expect
var mysqlProcedures2Json = require('../index')

var config = {
    host     : 'localhost',
    port     : '3306',
    user     : 'user',
    password : 'pass',
    database : 'dbName',
    debug    :  false
}

describe('#Gets procedures from MySql DB', function() {
    it ('should be formatted as JSON', function(done) {
        mysqlProcedures2Json(config, function(result) {  
            expect(result)
            done()
        })
    })
});
