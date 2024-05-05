import { Feedback } from "../models/feedback.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addFeedback = asyncHandler(async (req, res) => {
  const newFeedback = new Feedback({
    user: req.user._id,
    chatbotrating: req.body.chatbotrating,
    comment: req.body.comment,
  });

  await newFeedback.save();
  return res
    .status(200)
    .json(ApiResponse.succes("The feedback has been submitted", newFeedback));
});

const getFeedback = asyncHandler(async (req, res) => {
  // Fetch all feedback from the database
  const feedback = await Feedback.find();

  // Check if feedback exists
  if (!feedback) {
    return res.status(404).json(ApiResponse.error("No feedback found"));
  }

  // Return success response with feedback data
  return res.status(200).json(ApiResponse.success("Feedback retrieved", feedback));
});

export { addFeedback,getFeedback };
