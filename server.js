//var app = require('http').createServer(handler)
var express = require('express');
var app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)
  , fs = require('fs')

server.listen(9093);

var nRequest = 0;
var nConnexs = 0;



// Enrutador del servidor node.js + express
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client_app.html');
});

app.get('/2', function (req, res) {
  res.sendfile(__dirname + '/client_app2.html');
});
app.get('/1', function (req, res) {
  res.sendfile(__dirname + '/client_app.html');
});
app.get('/3', function (req, res) {
  res.sendfile(__dirname + '/client_app3.html');
});
app.get('/4', function (req, res) {
  res.sendfile(__dirname + '/client_app4.html');
});
app.get('/5', function (req, res) {
  res.sendfile(__dirname + '/client_app5.html');
});



app.get('/js/jquery-1.10.2.min.js', function (req, res) {
  res.sendfile(__dirname + '/js/jquery-1.10.2.min.js');
});

app.get('/js/processing.js', function (req, res) {
  res.sendfile(__dirname + '/js/processing.js');
});

app.get('/js/dibuja_js.pde', function (req, res) {
  res.sendfile(__dirname + '/js/dibuja_js.pde');
});



// SOCKETS
io.sockets.on('connection', function (socket) {
  console.log("*** Nueva Conexion ****");  

//   var valor = (Math.random()<0.5)? 'news_valor_0':'news_valor_1';
// //  socket.emit('news', { hello: 'world' });
//   socket.emit('news', { hello: valor });


  socket.on('datosWeb', function (data) {
    console.log("Recibo datosWeb: " + data.valorDato);
    oscclient.send('/valor', data.valorDato);
  });


  socket.on('puntosWeb', function (data) {
    // console.log("Recibo puntosWeb: " + data.puntos);
    // console.log("longitud: "+data.puntos.length);
    for(var i=0; i<data.puntos.length; i++) {
      // var msgosc = new osc.Message('/puntos');
      oscclient.send('/valor', i, data.puntos[i].x, data.puntos[i].y);

    }
  });

  socket.on('sliderVal', function (data) {
    // console.log("Recibo puntosWeb: " + data.puntos);
    // console.log("longitud: "+data.puntos.length);
    // for(var i=0; i<data.puntos.length; i++) {
      // var msgosc = new osc.Message('/puntos');
      // oscclient.send('/slider', i, data.puntos[i].x, data.puntos[i].y);
      console.log("hi");
      oscclient.send('/slider', data);

    // }
  });

  socket.on('buttonPress', function () {
    // console.log("Recibo puntosWeb: " + data.puntos);
    // console.log("longitud: "+data.puntos.length);
    // for(var i=0; i<data.puntos.length; i++) {
      // var msgosc = new osc.Message('/puntos');
      // oscclient.send('/slider', i, data.puntos[i].x, data.puntos[i].y);
      oscclient.send('/button1', 'bang1');

    // }
  });

    socket.on('buttonPress2', function () {
    // console.log("Recibo puntosWeb: " + data.puntos);
    // console.log("longitud: "+data.puntos.length);
    // for(var i=0; i<data.puntos.length; i++) {
      // var msgosc = new osc.Message('/puntos');
      // oscclient.send('/slider', i, data.puntos[i].x, data.puntos[i].y);
      oscclient.send('/button2', 'bang2');

    // }
  });

       socket.on('buttonPress3', function () {
    // console.log("Recibo puntosWeb: " + data.puntos);
    // console.log("longitud: "+data.puntos.length);
    // for(var i=0; i<data.puntos.length; i++) {
      // var msgosc = new osc.Message('/puntos');
      // oscclient.send('/slider', i, data.puntos[i].x, data.puntos[i].y);
      oscclient.send('/button3', 'bang3');

    // }
  });

           socket.on('buttonPress4', function () {
    // console.log("Recibo puntosWeb: " + data.puntos);
    // console.log("longitud: "+data.puntos.length);
    // for(var i=0; i<data.puntos.length; i++) {
      // var msgosc = new osc.Message('/puntos');
      // oscclient.send('/slider', i, data.puntos[i].x, data.puntos[i].y);
      oscclient.send('/button4', 'bang4');

    // }
  });

                     socket.on('buttonPress5', function () {
    // console.log("Recibo puntosWeb: " + data.puntos);
    // console.log("longitud: "+data.puntos.length);
    // for(var i=0; i<data.puntos.length; i++) {
      // var msgosc = new osc.Message('/puntos');
      // oscclient.send('/slider', i, data.puntos[i].x, data.puntos[i].y);
      oscclient.send('/button5', 'bang5');

    // }
  });


  socket.on('index_newConn', function (data) {
    console.log("Nueva Conexion: " + data);
  });

});





// OSC

  var osc = require('node-osc');
  var oscclient = new osc.Client('127.0.0.1', 6666);


