const express = require('express');
const postsRouter = express.Router();

postsRouter.get('/', function(req, res){
  console.log('posts GET');
  res.json({
    message: 'posts GET'
  })
})

module.exports = {
  postsRouter: postsRouter
}
