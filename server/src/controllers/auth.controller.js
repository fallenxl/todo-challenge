const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const uuid = require("uuid").v4;
const {createToken} = require("../helpers/helpers.js");
require("dotenv").config();

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userFound = await User.findOne({ where: { username } });
    if (userFound)
      return res.status(400).json({ message: "User already exists" });
    const user = await User.create({
      id: uuid(),
      username,
      password: bcrypt.hashSync(password, 10),
      avatar: `https://api.dicebear.com/5.x/pixel-art-neutral/svg?seed=${username}`,
    });
    const token = createToken(user);
    res.status(201).json({ username , avatar: user.avatar ,token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: "User not found" });
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword)
      return res.status(401).json({ token: null, message: "Invalid password" });

    const token = createToken(user);

    res.status(200).json({ username , avatar: user.avatar ,token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getUser = (req, res) => {
  const { username, avatar} = req.user;
  res.status(200).json({ user: { username, avatar }});
}

module.exports = {
  register,
  login,
  getUser
};
