"use strict";
const jwt = require("jsonwebtoken");
const firebase = require("../db");
const User = require("../models/user");
const firestore = firebase.firestore();

const addUser = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("users").doc().set(data);
    // res.send("Record saved successfuly");
    const id = req.params.id;
    res.status(201).json({
      id: data.id,
      username: data.username,
      email: data.email,
      token: generateToken(data.id),
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await firestore.collection("users");
    const data = await users.get();
    const usersArray = [];
    if (data.empty) {
      res.status(404).send("No user record found");
    } else {
      data.forEach((doc) => {
        const user = new User(
          doc.id,
          doc.data().username,
          doc.data().email,
          doc.data().password
        );
        usersArray.push(user);
      });
      res.send(usersArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUser = async (req, res, next) => {
  try {
    // Get user name from GET Params
    const username = req.params.username;
    // Reference to Firestore 'users' collection
    const usersCollection = firestore.collection("users");
    // Reference to a QuerySnapshot whith all users that have the requested name
    const userSnapshot = await usersCollection
      .where("username", "==", username)
      .get();

    if (userSnapshot.empty) {
      res.status(404).send("User with the given name not found !");
    } else {
      let user;
      userSnapshot.forEach((doc) => (user = { ...doc.data() }));
      console.log("user from db:", user);
      res.send(user);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = await firestore.collection("users").doc(id);
    await user.update(data);
    res.send("User record updated successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("users").doc(id).delete();
    res.send("Record deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getLoggedUser = async (req, res, next) => {
  try {
    // Get user name from GET Params
    const email = req.params.email;
    const pwd = req.query.pwd;
    // Reference to Firestore 'users' collection
    const usersCollection = firestore.collection('users');
    // Reference to a QuerySnapshot whith all users that have the requested email
    const userSnapshot = await usersCollection
      .where('email', '==', email)
      .get();

    if (userSnapshot.empty) {
      res.status(404).send('User with the given email not found!');
    } else {
      let user;

      userSnapshot.forEach((doc) => (user = { ...doc.data() }));
      console.log('user from db:', user);

      const result = user.password === pwd ? user : null;
      if (result) res.send(result);
      else res.status(404).send('Username or password invalid!');
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  getLoggedUser
};
