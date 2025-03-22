import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 50,
    headers: true,
    handler: (req, res, next) => {
        res.status(429).set('Content-Type', 'application/json').json({message: "Too many requests"});
    }
});
export default limiter;