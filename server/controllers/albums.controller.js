const albumsController = {};

albumsController.GET = (req, res) => {
  console.log('albums GET');
  res.json({
    message: 'albums GET'
  })
}

albumsController.POST = (req, res) => {
  console.log('albums POST');
  console.log('req.body =', req.body);
  res.json({
    message: 'albums POST'
  })
}
module.exports = {
  albumsController: albumsController
}
