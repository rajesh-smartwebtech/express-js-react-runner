const express = require('express');
const path = require('path');
const app = express();

var appDirectory = require('path').dirname(process.pkg ? process.execPath : (require.main ? require.main.filename : process.argv[0]));
var build_path = path.join(appDirectory, './build');

var port = 3000;
var argv = process.argv;
if( argv.length > 2 ){
  port = argv[2];
}

if( argv.length > 3 ){
  build_path = argv[3];
}

console.log( "Path ", build_path );
console.log( "Port ", port );


app.use(express.static( build_path ));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  return res.redirect("/");
});

app.get('/', function(req, res) {
	res.sendFile( path.join(build_path, 'index.html'));
});


app.listen(port);
console.log("The server started ... local :"+ port );