import rateLimit from "express-rate-limit";

export const authLimiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: true,
    handler: (req, res) => {
        const resetTime = req.rateLimit?.resetTime;
        const resetSeconds = resetTime
            ? Math.ceil((new Date(resetTime).getTime() - Date.now()) / 1000)
            : 120;
        const retryAfter = resetSeconds > 0 ? resetSeconds : 120;

        res.set("Retry-After", String(retryAfter));
        return res.status(429).json({
            message: `Too many requests, please try again after ${retryAfter} seconds.`,
            retryAfter,
            remaining: 0
        });
    }
});

