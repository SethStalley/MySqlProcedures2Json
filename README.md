# MysqlProcedures2Json
Node tool that gets all stored procedures, including parameters, from a MySql schema as JSON. 

## Instalation

Add this to your node project with `npm i mysql-procedures-2-json -S'.

## Example

```` javascript
//include this module
var mysqlProcedures2Json = require(./index)

/**
* Create an object with your mysql configuration.
* This object will be passed to the 'mysql' npm module, so use the same parameters.
*/
var config = {
    host     : 'localhost',
    port     : '3306',
    user     : 'user',
    password : 'pass',
    database : 'dbName', //NOTE: this property must be defined!
}

//then simply call the function, passing the config json. Result will be in a async callback
mysqlProcedures2Json(config, function(result) { 
  //use 'result'
})
````
