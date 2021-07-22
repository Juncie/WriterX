router.post('/add-post', authorize, async (req, res) => {

    let newPost = req.body
    newPost.userId = res.locals.user._id
    console.log(res)
    Post.create(newPost).then(post => {
        res.json(post)
    })
})
