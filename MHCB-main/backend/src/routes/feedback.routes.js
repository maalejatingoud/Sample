import { Router } from "express";
import { addFeedback,getFeedback } from "../controllers/feedback.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/add-feedback", verifyJWT, addFeedback);

router.get("/get-feedback",verifyJWT, getFeedback);

export default router;
