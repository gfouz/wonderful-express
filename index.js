const express = require("express");
const logger = require('morgan');
const routes = require("./routes/routes");
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(routes);


  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

