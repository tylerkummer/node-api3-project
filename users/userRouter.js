const express = require("express");

const Users = require("./userDb");
const Posts = require("../posts/postDb");

const router = express.Router();

router.post("/", (req, res) => {
  // do your magic!
  Users.insert(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Error with database" });
    });
});

router.post("/:id/posts", (req, res) => {
  // do your magic!
  Posts.insert(req.body)
    .then((post) => {
      res.status(201).post;
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Error with database" });
    });
});

router.get("/", (req, res) => {
  // do your magic!
  Users.get()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Error with database" });
    });
});

router.get("/:id", (req, res) => {
  // do your magic!
});

router.get("/:id/posts", (req, res) => {
  // do your magic!
});

router.delete("/:id", (req, res) => {
  // do your magic!
});

router.put("/:id", (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
