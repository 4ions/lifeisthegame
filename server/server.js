const express = require('express');
const logger = require('morgan');
const router = require('../src/network/routes');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*"
}));


router(app);


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))