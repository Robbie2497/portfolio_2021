const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  name: {
    type: String,
    required: "Name is Required"
  },

  description: {
    type: String,
    required: "Description is Required",
  },

});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
