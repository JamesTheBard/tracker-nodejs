// vim:ts=2:sw=2:sts=2:et
var app = require('express')(),
  swig = require('swig'),
  people;
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('index', { title: "Test Page" });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

http.listen(3000, function(){
  console.log('Listening on port *:3000');
});
