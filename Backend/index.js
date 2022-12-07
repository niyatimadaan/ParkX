require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("etag", false);
app.use(bodyParser.json());

const dataRouter = require("./routes/dataRouter");
const frontendRouter = require("./routes/frontendRouter");
app.use("/api/data", dataRouter);
app.use("/api/frontend", frontendRouter);

app.all("*", (req, res) =>
  res.json({
    error: "404",
  })
);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
