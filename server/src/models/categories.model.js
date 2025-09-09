import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: String,
    content: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'breeds'
        }
    ]
})

const Category = mongoose.model('categories', schema)
export default Category