const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = 3000;
app.set('view engine', 'ejs');
server.listen(port, () => console.log(`listening on port ${port}`));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use('/css', express.static('views/css'));
app.use('/images', express.static('views/images'));

app.get('/', (req, res) => res.render('index'));