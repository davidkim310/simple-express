const express = require('express');
const albumsRouter = express.Router();
const albumsController = require('../controllers').albumsController

albumsRouter.get('/', function(req, res){
  console.log("albums GET");
  res.json({
    message: 'albums GET'
  })
})

module.exports = {
  albumsRouter: albumsRouter
}
