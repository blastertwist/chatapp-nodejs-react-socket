const express = require('express')
const cors = require('cors')
const app = express()
const PORT_API = 3001 || process.env.PORT_API
const mainRouter = require('./Routes/index')

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(cors())

app.use("/api/v1", mainRouter)

//  socket io
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
    // ...
});

const { sendMessage } = require("./socketHandlers/chatHandler")

const users = []

const onConnection = (socket) => {
    socket.on("message:send", sendMessage)
}

io.on("connection", onConnection);

httpServer.listen(PORT_API, () => {
    console.log(`Server is listening at port ${PORT_API}`)
});


// Mongoose
//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/chat-app';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));