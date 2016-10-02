const express    = require('express');
const bodyParser = require('body-parser')
//make an app that has an instance of express
const app        = express();
const port = 4000;

app.use(bodyParser.json());
//is essentially doing this
// app.use(function(req, res, next){
//   const body = "";
//   req.on('data', function(chunk){
//     body+=chunk
//   })
//   req.on('end', function(){
//     req.body = JSON.parse(body);
//     next()
//   })
// })

const rootRouter = require('./routes').rootRouter;

app.use('/api', rootRouter)


app.listen(port)
console.log(`server listening on port ${port}`);
