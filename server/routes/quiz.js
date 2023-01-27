import express from 'express';
import { createQuiz, getUserQuiz, deleteQuiz } from "../controllers/quiz.js";
import {verifyToken} from '../middleware/auth.js';

const router = express.Router()

router.post('/:id/create', createQuiz);
router.get('/:id', getUserQuiz)
router.delete("/:id/:quizId/delete", deleteQuiz)


export default router;