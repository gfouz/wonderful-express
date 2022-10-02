const express = require("express");
const morgan = require('morgan');
const winston = require('winston');
const { combine, timestamp, json } = winston.format;
const routes = require("./routes/routes");
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();


const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine( timestamp( {format: 'YYYY-MM-DD',} ), json() ),
  transports: [
    new winston.transports.File({
      filename: 'requestlog.log',
    }),
  ],
});

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  {
    stream: {
      // Configure Morgan to use our custom logger with the http severity
      write: (message) => logger.info(message.trim()),
    },
  }
);

//logger.info('Info message');
//logger.error('Error message');
//logger.warn('Warning message');


//app.use(logger('dev'));
app.use(morganMiddleware);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(routes);


  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

