// const connectToMongo = require('./db');
// var cors = require('cors')
// const express = require('express')
// connectToMongo();
// const app = express()

 
// app.use(cors())
// let port = process.env.PORT || 5000;
// app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello Banga !')
// })

// app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))
// app.listen(port, () => {
//   console.log(`iNotebook backend listening at http://localhost:${port}`)
//   // console.log(`iNotebook backend listening at http://localhost:${port}`)
// })
// // const connectToMongo = require("./db");
// // const express = require("express");
// // var cors = require("cors");

// // connectToMongo();
// // const app = express();
// // const port = 5000;

// // app.use(cors());
// // app.use(express.json());

// // // // Available Routes
// // app.use("/api/auth", require("./routes/auth"));
// // app.use("/api/notes", require("./routes/notes"));

// // app.listen(port, () => {
// //   console.log(`iNotebook backend listening at http://localhost:${port}`);
// // });


// // const connectToMongo = require("./db");
// // const express = require("express");
// // var cors = require("cors");

// // connectToMongo();
// // const app = express();
// // const port = 5000;

// // app.use(cors());
// // app.use(express.json());

// // // Available Routes
// // app.use("/api/auth", require("./routes/auth"));
// // app.use("/api/notes", require("./routes/notes"));

// // app.listen(port, () => {
// //   console.log(`iNotebook backend listening at http://localhost:${port}`);
// // });


const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

// connectToMongo();

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
