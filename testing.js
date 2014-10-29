#!/usr/bin/env node

//console.log("Hello world!");

var fs = require('fs');
var path = require('path');
var buf = new Buffer(256);

var filePath = path.join(__dirname, 'index.html');

fs.readFile(filePath,{encoding:'utf-8'}, function(err,data){
    if (!err){
    console.log(data);
//	console.log(buf.toString(data));
   // response.writeHead(200, {'Content-Type': 'text/html'});
   // response.write(data);
   // response.end();
    }else{
        console.log(err);
    }


});

