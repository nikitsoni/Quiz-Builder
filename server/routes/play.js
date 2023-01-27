import express from 'express';
import {getallquiz, getquiz} from '../controllers/getallquiz.js'

const router = express.Router()

router.get('/', getallquiz)
router.get('/:id', getquiz)

export default router;