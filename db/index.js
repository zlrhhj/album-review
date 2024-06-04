// Include your database here
const mongoose = require("mongoose");
const {Schema} = mongoose;

const schema = new Schema ({
  name: {type: String, unique: true},
  rating: Number,
  comment: {type:String, maxLength: 250}
});

mongoose.connect('mongodb://localhost/albums');
const Review = mongoose.model('Review', schema);


module.exports = Review;
