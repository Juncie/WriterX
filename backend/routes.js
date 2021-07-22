const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
//const Post = require("./models/Suggetions");
const User = require("./models/User");
const Characters = require("./models/Characters");
const Novels = require("./models/Novels");
//const Locations = require('./models/Locations')
// const Plots = require('./models/Plots')
/**ALL OUR BACKEND ROUTES */
console.log("IS 11 WORKING!@#!?");
/**ALL OUR BACKEND ROUTES */
router.get("/", (req, res) => {
    console.log('anything')
  res.json({ serverWorking: true });
});
router.get("/get-the-user", authorize, async (req, res) => {
  let user = await User.findById(res.locals.user._id);
  res.json(user);
});
console.log("IS 21 WORKING?");
router.post("/newCharacters", authorize, async (req, res) => {
    console.log("nw char working");
    let characters = req.body;
    console.log("anything", req.body)
    Characters.create(characters).then((newCharacter) => {
      console.log(newCharacter);
      res.json(newCharacter);
    });
  });

console.log("IS 32 WORKING?");
//former add-post
router.post("/suggestions", authorize, async (req, res) => {
  let newSuggestion = req.body;
  newSuggestion.userId = res.locals.user._id;
  Suggestion.create(newSuggestion).then((post) => {
    console.log(res.data);

    res.json(post);
  });
});
console.log("IS 43 WORKING?");

router.get("/community-board", (req, res) => {
  Post.find()
    .populate("userId")
    .then((posts) => {
      console.log(res);
      res.json(posts);
    });
});
console.log("IS 52 WORKING?");

router.post("/authenticate", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    user = await User.create(req.body);
  }

  jwt.sign({ user }, "secret key", { expiresIn: "5 hours" }, (err, token) => {
    res.json({ user, token });
  });
});

router.post("/add-character", authorize, async (req, res) => {
  console.log("hello");
  let characters = req.body;
  Characters.create(character).then((newCharacter) => {
    console.log(newCharater);
    res.json(newCharacter);
  });
});

//getallCharacters

router.post("/novels", authorize, async (req, res) => {
  console.log("helloooo");
  let newNovels = req.body;
  Novels.create(newNovels).then((novel) => {
    console.log(novel);

    res.json(novel);
  });
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
  console.log("is this authorizingggg");
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
