import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    sale: {type: Boolean, required: true}
});

const model = mongoose.model("products", schema);

export default model;