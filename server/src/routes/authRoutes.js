import AuthController from "../controllers/authController.js";
import express from 'express'
const router = express.Router()

router.post('/register', AuthController.register)
router.post('/confirm', AuthController.confirm)

export default router