const express      = require('express');
const usersRouter  = require('./users.router').usersRouter
const albumsRouter = require('./albums.router').albumsRouter
const postsRouter  = require('./posts.router').postsRouter

const rootRouter   = express.Router();

rootRouter.use('/users', usersRouter);
rootRouter.use('/albums', albumsRouter);
rootRouter.use('/posts', postsRouter);



module.exports = {
  rootRouter: rootRouter
};
