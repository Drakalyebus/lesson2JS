import express from "express";

import filePath from "../controllers/filePath.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(filePath("index"));
});

export default router;