const router = require("express").Router();
const Feedback = require("../Models/feedback");

router.get('/feedback', function(req, res) {
    Feedback.find({}).then(function(feedback) {
        res.send(feedback);
    })
    .catch((err) => {
     console.log(err);
 });
 });

router.post("/feedback", ({ body }, res) => {
    const feedback = new Feedback(body);
  
    Feedback.create(feedback)
      .then(dbFeedback => {
        res.json(dbFeedback);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports = router;
