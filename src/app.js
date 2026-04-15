require('express-async-errors');
const express = require('express');
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/apiRoutes');
const eventLogger = require('./config/eventLogger');
const { notFound, errorHandler } = require('./middleware/errorHandler');
const cors = require('cors');
const corsOptions = require('./config/cors');

const app = express();

app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.use(eventLogger.logger);
app.get('/', (req, res) => res.send("System is Healthy"));
app.use('/api', ApiRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;