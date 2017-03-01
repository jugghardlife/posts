const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: { type: String },
    Summary: { type: String },
    author: { type: String },
    content: { type: String }
  }
);
module.exports = mongoose.model('Post', PostSchema);
