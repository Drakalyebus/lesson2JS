import express from "express";
import productModel from "../api/models/product.model.js";

const router = express.Router();

router.get('/products', async (req, res) => {
    if (req.query.onlySale == "true") {
        const products = await productModel.find({sale: true});
        res.json(products);
    } else if (req.query.onlySale == "false") {
        const products = await productModel.find();
        res.json(products);
    }
});

router.post('/products', async (req, res) => {
    const product = new productModel(req.body);
    await product.save();
    res.json({ok: true});
});

router.delete('/products/:id', async (req, res) => {
    await productModel.findByIdAndDelete(req.params.id);
    res.json({ok: true});
});

router.patch('/products/:id', async (req, res) => {
    await productModel.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.json({ok: true});
});

export default router;