const postsController = {};

postsController.GET = (req, res) => {
  console.log('posts GET');
  res.json({
    message: 'posts GET'
  })
}

postsController.POST = (req, res) => {
  console.log('posts POST');
  console.log('req.body = ', req.body);
  res.json({
    message: 'posts POST'
  })
}

module.exports = {
  postsController: postsController
}
