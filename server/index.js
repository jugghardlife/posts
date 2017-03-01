const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./models/post.js')

app.use(cors());
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/posts');

var db = mongoose.connection;
db.on('error',console.log);
db.once('open', function() {
  console.log('success!')
});

app.post("/api/all-posts",function(req, res){
  Post.find().exec(function(err, posts){
    res.json({posts});
  })
})

app.get('/api/post/:id',function(req,res){
  Post.findById(req.params.id,function(err,post){
    if(err) return console.log(err);
    res.json({post})
  })
})

app.listen(3000, function(err) {
  console.log('Listening at http://localhost:3000');
});
