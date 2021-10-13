const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");
const { isLoggedIn } = require("../middleware/loginAuth");
const newQuestionValidator = require("../middleware/validators/newQuestion");
const getQuestionValidator = require("../middleware/validators/getQuestion");
const feedController = require("../controllers/feed");

router.get("/", feedController.getLandingPage);

router.get("/about", feedController.getAboutPage);

router.get("/home", feedController.getHomePage);

router.get(
  "/questions",
  getQuestionValidator,
  catchAsync(feedController.getQuestions)
);

router.get(
  "/questions/:id",
  isLoggedIn,
  getQuestionValidator,
  catchAsync(feedController.getQuestion)
);

router.post("/newanswer", isLoggedIn, catchAsync(feedController.postNewAnswer));

router.post(
  "/askquestion",
  isLoggedIn,
  newQuestionValidator,
  catchAsync(feedController.postAskQuestion)
);

router.delete(
  "/question/:id",
  isLoggedIn,
  catchAsync(feedController.deleteQuestion)
);

module.exports = router;
