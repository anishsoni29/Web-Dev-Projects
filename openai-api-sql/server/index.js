const express = require("express");
const cors = require("cors");
//import statement is used for the ES6 version of JS.

const app = express();

//cors is used for cross origin resource sharing - b/w the client and the server.
app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.send("Hello World from our API");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
