import User from '../models/users.model.js'
import { v4 } from 'uuid'
import sendMail from '../mailer.js'

class AuthController {
    static async register(req, res) {
        const { name, email } = req.body
        const confirmCode = v4()
        const user = await User.create({ name, email, confirmCode })
        try {
            await sendMail(email, 'Confirm your account', `Please confirm your account http://localhost:5173/auth/confirm/${confirmCode}`)
        } catch (error) {
            console.log(error)
        }
        res.json(user)
    }
    
    static async confirm(req, res) {
        const { confirmCode } = req.body
        const user = await User.findOne({ confirmCode })
        if (!user) {
            res.status(400).json(false)
        }
        user.confirmed = true
        await user.save()
        res.json(true)
    }
}

export default AuthController