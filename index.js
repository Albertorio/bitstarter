var express = require('express')
var app = express();
var fs = require('fs');
var path = require('path');

var filepath = path.join(__dirname, 'index.html');

 fs.readFile(filepath,{encoding:'utf-8'}, function(err,data){
	if (!err){
    	console.log('received data: ' + data);
    	//response.writeHead(200, {'Content-Type': 'text/html'});
    	//response.write(data);
    	//response.end();
    	}else{
        	console.log(err);
    	}
});

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('heloo')})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
