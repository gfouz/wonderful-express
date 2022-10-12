const express = require("express");
const routes = require("./routes/routes");
const port = process.env.PORT || 5000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);


  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

