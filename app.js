const express = require("express");
const routes = require("./routes/routes");
const port = process.env.PORT || 5000;
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);


  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

