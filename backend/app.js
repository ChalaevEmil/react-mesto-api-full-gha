/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const NotFoundError = require('./error/Not-found-error');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
// eslint-disable-next-line import/order
const bodyParser = require('body-parser');
const auth = require('./middlewares/auth');
const handleError = require('./middlewares/handleError');
// eslint-disable-next-line import/order
const { errors } = require('celebrate');
const { login, createNewUser } = require('./controllers/users');
const {
  createNewUserValidation,
  loginValidation,
} = require('./middlewares/validation');

const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

const app = express();
app.use(requestLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: [], credentials: true,
}));

app.use('/users', auth, userRouter);
app.use('/cards', auth, cardRouter);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.post('/signin', loginValidation, login);
app.post('/signup', createNewUserValidation, createNewUser);

app.use(auth);
app.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});
app.use(errorLogger);
app.use(errors());
app.use(handleError);

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.listen(PORT, () => console.log(PORT));
