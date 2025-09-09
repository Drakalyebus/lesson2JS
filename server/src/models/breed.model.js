import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: String,
    description: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    }
})

const Breed = mongoose.model('breeds', schema)
export default Breed