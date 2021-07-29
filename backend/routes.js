const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
//const Post = require("./models/Suggetions");
const User = require("./models/User");
const Novels = require("./models/Novels");
const Chapters = require("./models/Chapters");
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

  //CHAPTERS
  router.post("/chapter", authorize, async (req, res) => {
    let chapter = req.body;
    console.log("This is your Chapter", req.body);
    Chapters.create(chapter).then((newChapter) => {
      res.json(newChapter);
    });
  });

  router.get('/getAllChapters/:novelId', authorize, async (req, res)=>{
  console.log(req.params.novelId);
    Chapters.find({novelId: req.params.novelId}).then((allChapters)=>{
      res.json(allChapters)
    })  
  })

  router.post("/chapterArticle", authorize, async (req, res) => {
    let article = req.body;
    console.log("This is your Article", req.body);
    Chapters.findByIdAndUpdate(req.body.novelId, article, {new: true}).then((newArticle) => {
      console.log(newArticle);
      res.json(newArticle);
    });
  });
});

router.get("/chapters/:chapterId", authorize, async (req, res) => {
    console.log(req.params, 'THIS IS 81')
  .findById(req.params.chapterId).then((chapter)=>{
      res.json(chapter)
    })
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
