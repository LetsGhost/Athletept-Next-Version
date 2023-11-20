import express from 'express';

// Import Middlewares
import authenticateToken from "../middleware/AuthenticateToken";

// Import Controllers
import exercisePlanController from "../controllers/ExercisePlanController";
import userController from "../controllers/UserController";
import messageController from "../controllers/MessageController";
import protocolController from "../controllers/ProtocolController";
import checkInController from "../controllers/CheckInController";
import weekDisplayController from '../controllers/WeekDisplayController';
import weightAnalyticsController from '../controllers/WeightAnalyticsController';
import trainingDurationController from '../controllers/TrainingDurationController';

// Import routes
const router = express.Router();

// Exercise Plan
router.get("/getExercisePlan/:userId", exercisePlanController.getExercisePlan ) // Is Documented

// User
router.get("/getUser/:userId", userController.getUserById) // Is Documented
router.patch("/updatePassword/:userId", userController.updatePassword)

// Message
router.get("/getAllMessages/:userId", messageController.getAllMessagesFromUser) // Is Documented
router.get("/getMessageById/:messageId", messageController.getMessageById)

// Protocol
router.post("/createProtocol", protocolController.createProtocol) // Is Documented

// Check-in
router.post("/createCheckIn/:userId", checkInController.createCheckIn) 

// Week Display
router.get("/getWeekDisplay/:userId", weekDisplayController.getWeekDisplay) // Is Documented

// Week Analytics
router.get("/getWeightAnalytics/:userId", weightAnalyticsController.getWeightAnalytics)

// Training Duration
router.get("/getTrainingDuration/:userId", trainingDurationController.getTrainingDuration) 

export default router;
