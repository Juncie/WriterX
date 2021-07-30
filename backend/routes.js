const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
//const Post = require("./models/Suggetions");
const User = require("./models/User");
const Novels = require("./models/Novels");
const Chapters = require("./models/Chapters");
const Character = require("./models/Character");
const Note = require('./models/Note');

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
  novel.userId = res.locals.user._id;
  Novels.create(novel).then((newNovel) => {
    res.json(newNovel);
  });
})

router.get("/userNovels", authorize, async (req, res) => {
  Novels.find({ userId: res.locals.user._id }).then((novels) => {
    res.json(novels);
  });
});

router.get("/novel/:novelId", authorize, async (req, res) => {
  Novels.findById(req.params.novelId).then((novel) => {
    Chapters.find({ novelId: req.params.novelId }).then((chapters) => {
      Character.find({ novelId: req.params.novelId }).then((characters) => {
        res.json({ novel, chapters, characters });
      })
    });
  });
})

//CHAPTERS
router.post("/chapter", authorize, async (req, res) => {
  let chapter = req.body;
  chapter.userId = res.locals.user._id
  Chapters.create(chapter).then((newChapter) => {
    res.json(newChapter);
  });
});

router.get("/getAllChapters", authorize, async (req, res) => {
  Chapters.find({ userId: res.locals.user._id }).then((allChapters) => {
    res.json(allChapters)
  })
})


router.get("/getAllCharacters", authorize, async (req, res) => {
  Character.find({ userId: res.locals.user._id }).then((allCharacters) => {
    res.json(allCharacters)
  })
})

router.post("/chapterArticle", authorize, async (req, res) => {
  let article = req.body;
  Chapters.findByIdAndUpdate(req.body.chapterId, article, { new: true }).then((newArticle) => {
    res.json(newArticle);
  });
});
// });

router.get("/chapters/:chapterId", authorize, async (req, res) => {
  Chapters.findById(req.params.chapterId).then((chapter) => {
    res.json(chapter)
  })
});


router.post('/character', authorize, async (req, res) => {
  req.body.userId = res.locals.user._id
  Character.create(req.body).then(character => {
    res.json(character)
  })
})

router.post('/deleteOneNovel', authorize, async (req, res)=>{
  console.log(req.params.novelId);
  Novels.deleteOne({novelId: req.params.novelId}).then((deletedNovel)=>{
    console.log('You Deleted', deletedNovel);
  })
})
router.post('/newNote', authorize, async (req, res)=>{
  note.userId = res.locals.user._id;
  Note.create(req.body).then((newNote)=>{
    console.log('You Created a new note!', deletedNovel);
  })
})

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
