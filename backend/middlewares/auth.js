const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../error/Unauthorized-error');

module.exports = (req, res, next) => {
  let token;
  try {
    token = req.cookies.jwt;
  } catch (err) {
    throw new UnauthorizedError('Авторизируйтесь');
  }
  let payload;
  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    throw new UnauthorizedError('Авторизируйтесь');
  }
  req.user = payload;
  next();
};
