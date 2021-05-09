const express = require("express");
const http = require("http");
const msgSocket = require('./controlers/msg-socket');
const indexRoute = require("./routes/index");

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, Content-Type, Authorization, account',
    );
    next();
});

app.use('/', indexRoute);

const server = http.createServer(app);
msgSocket(server);

const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`Listening on port ${port}`));
