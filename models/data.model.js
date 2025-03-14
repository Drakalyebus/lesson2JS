import mongoose from "mongoose";

const schema = new mongoose.Schema({
    data: {type: Array, required: true}
});

const model = mongoose.model('datas', schema);

export default model;