const express = require("express");
const cors = require("cors");

import { generate } from "./generate.js";

const app = express();

app.use(express.json());
//cors is used for cross origin resource sharing - b/w the client and the server.
app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.send("Hello World from our API");
});

app.post("/generate", async (req, res) => {
  const queryDescription = req.body.queryDescription;
  try {
    const sqlQuery = await generate(queryDescription);
    res.json({
      response: sqlQuery,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
