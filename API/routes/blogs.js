const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const Blog = require("/projects/short-blogs/API/models/blogs");
const User = require("/projects/short-blogs/API/models/users");

const router = express.Router();

router.post("/", jsonParser, async (req, res) => {
  const { authtoken } = req.headers;
  const blog = req.body;

  const user = await validateToken(authtoken);
  if (user) {
    const createBlog = new Blog({ ...blog,userID:user._id });
    await createBlog.save();

    return res.status(200).send(createBlog);
  }
  return res.status(401).send({ msg: "Unauthorized user" });
});

async function validateToken(authtoken) {
  if (!authtoken) {
    return;
  }
  const user = await User.findOne({ authToken: authtoken });
  return user;
}

module.exports = router;
