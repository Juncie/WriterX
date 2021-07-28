const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
//const Post = require("./models/Suggetions");
const User = require("./models/User");
const Characters = require("./models/Characters");
const Novels = require("./models/Novels");
const Notes = require("./models/Notes");
const Chapters = require("./models/Chapters");
//const Locations = require('./models/Locations')
const Plots = require("./models/Plots");
/**ALL OUR BACKEND ROUTES */
router.get("/", (req, res) => {
  res.json({ serverWorking: true });
});

router.get("/get-the-user", authorize, async (req, res) => {
  let user = await User.findById(res.locals.user._id);
  res.json(user);
});

//former add-post
router.post("/suggestions", authorize, async (req, res) => {
  let newSuggestion = req.body;
  newSuggestion.userId = res.locals.user._id;
  Suggestion.create(newSuggestion).then((post) => {
    res.json(post);
  });
});

router.get("/community-board", (req, res) => {
  Post.find()
    .populate("userId")
    .then((posts) => {
      res.json(posts);
    });
});

router.post("/authenticate", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    user = await User.create(req.body);
  }

  jwt.sign({ user }, "secret key", { expiresIn: "24 hours" }, (err, token) => {
    res.json({ user, token });
  });
});

//NOVELS

router.post("/novels", authorize, async (req, res) => {
  let novel = req.body;
  console.log(req.body, "This is your Novel");
  novel.userId = res.locals.user._id;
  Novels.create(novel).then((newNovel) => {
    res.json(newNovel);
  });
}),
  router.get("/userNovels", authorize, async (req, res) => {
    Novels.find({ userId: res.locals.user._id }).then((novels) => {
      res.json(novels);
    });
  });

router.get("/novel/:novelId", authorize, async (req, res) => {
  Novels.findById(req.params.novelId).then((novel) => {
    Chapters.find({ novelId: req.params.novelId }).then((chapters) => {
      res.json({ novel, chapters });
    });
  });

  router.post("/chapter", authorize, async (req, res) => {
    let chapter = req.body;
    console.log("This is your Chapter", req.body);
    Chapters.create(chapter).then((newChapter) => {
      res.json(newChapter);
    });
  });

  router.post("/updatechapterArticle", authorize, async (req, res) => {
    let article = req.body;
    console.log("This is your Article", req.body);
    Chapters.findByIdAndUpdate(article).then((newArticle) => {
      res.json(newArticle);
    });
  });

  router.post("/plot", authorize, async (req, res) => {
    let plot = req.body;
    console.log(req.body, "This is your plot");
    Plots.create(plot).then((newPlot) => {
      res.json(newPlot);
    });
  });

  router.get("/plots/:chapterId", authorize, async (req, res) => {
    // console.log(req, 'THIS IS REQ', res, 'THIS IS RES')
    Plots.find({ chapterId: req.params.chapterId }).then((plots) => {
      console.log(plots);
      res.json(plots);
    });
  });
});

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
      }
    });
  } else {
    res.status(403).json({ message: "Must be logged in!" });
  }
}

module.exports = router;
