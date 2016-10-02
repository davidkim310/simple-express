const usersController = require('./users.controller').usersController
const albumsController = require('./albums.controller').albumsController
const postsController = require('./posts.controller').postsController

module.exports = {
  usersController: usersController,
  albumsController: albumsController,
  postsController: postsController
}
