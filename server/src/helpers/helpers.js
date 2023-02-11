const jwt = require("jsonwebtoken");
function validateId(id) {
  const idRegex = /[0-9]+/;
  return idRegex.test(id);
}

function createToken(user) {
  return jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );
}

module.exports = {
  validateId,
  createToken
};
