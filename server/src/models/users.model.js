import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    confirmCode: {
        type: String,
        required: false
    },
    confirmed: {
        type: Boolean,
        required: true,
        default: false
    }
})

const User = mongoose.model('users', schema)
export default User