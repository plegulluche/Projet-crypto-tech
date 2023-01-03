const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');
const cryptoRouter = require('./routes/cryptoRoutes');

const app = express();

// GLOBAL MIDDLEWARES

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit the number of request for a given ip
// max : int , number of requests allowed per hour
// windowMs : int , number in Ms when the max value is reset
const limiter = rateLimit({
  max: 50,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour ! ',
});

// Use limiter on login route to prevent from attacks on user accounts
app.use('/api/v1/users/login', limiter);

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES

app.use('/api/v1/users', userRouter);
app.use('/api/v1/', cryptoRouter);

//MIDDLE WARE TO HANDLE NON HANDLED ROUTES
app.all('*', (req, res, next) => {
  next(new AppError(
    `Can't find ${req.originalUrl} on this sever !`, 404));
});

// GLOBAL ERROR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;
