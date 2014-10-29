#!/usr/bin/env node

console.log("Hello world!");

var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, 'index.html');

var qwerty = fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err){
    console.log('received data: ' + data);
   // response.writeHead(200, {'Content-Type': 'text/html'});
   // response.write(data);
   // response.end();
    }else{
        console.log(err);
    }

console.log(qwerty);

});
