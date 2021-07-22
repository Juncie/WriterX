const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Post = require("./models/Post");
const User = require("./models/User");
const Characters = require("./models/Characters");
const Novels = require("./models/Novels");
//const Locations = require('./models/Locations')
// const Plots = require('./models/Plots')
/**ALL OUR BACKEND ROUTES */

/**ALL OUR BACKEND ROUTES */
router.get("/", (req, res) => {
  res.json({ serverWorking: true });
});

router.get("/get-the-user", authorize, async (req, res) => {
  let user = await User.findById(res.locals.user._id);
  res.json(user);
});

router.post("/add-character", authorize, async (req, res) => {
  console.log(req);
  let newPost = req.body;
  newPost.userId = res.locals.character._id;
  // console.log(res)
  Character.create(newPost).then((post) => {
    res.json(post);
  });
});

router.post("/add-post", authorize, async (req, res) => {
  let newPost = req.body;
  newPost.userId = res.locals.user._id;
  Post.create(newPost).then((post) => {
    console.log(res.data);

    res.json(post);
  });
});

router.get("/all-the-posts", (req, res) => {
  Post.find()
    .populate("userId")
    .then((posts) => {
      console.log(res);
      res.json(posts);
    });
});

router.post("/authenticate", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    user = await User.create(req.body);
  }

  jwt.sign({ user }, "secret key", { expiresIn: "30min" }, (err, token) => {
    res.json({ user, token });
  });
});

router.post("/add-character", authorize, async (req, res) => {
  console.log("hello");
  let characters = req.body;
  characters.create(characters).then((res) => {
    console.log(res);
    res.json(res);
  });
});

router.post("/", authorize, async (req, res) => {
  Model.Method();
});

// router.post('/add-location', authorize, async (req, res) => {

//     let newLocation = req.body
//     newPost.locationsId = res.locals.loacations._id
//     Location.create(newPost).then(post => {
//         res.json(post)
//     })
// })

// router.post('/add-plot', authorize, async (req, res) => {

//     let newPlot = req.body
//     newPost.plotsId = res.locals.plotss._id
//     Plot.create(newPost).then(post => {
//         res.json(post)
//     })
// })

//Middle ware >>> Put this in the middle of any route where you want to authorize
function authorize(req, res, next) {
  let token = req.headers.authorization.split(" ")[1]; //Token from front end
  if (token) {
    jwt.verify(token, "secret key", (err, data) => {
      if (!err) {
        res.locals.user = data.user; //Set global variable with user data in the backend
        next();
      } else {
        res.status(403).json({ message: err });
        //throw new Error({ message: "ahhh" })
      }
    });
  } else {
    res.status(403).json({ message: "Must be logged in!" });
  }
}

module.exports = router;
