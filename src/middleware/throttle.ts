import rateLimit from "express-rate-limit";

// Limit to 2 requests per second
export const perSecondLimiter = rateLimit({
  windowMs: 1 * 1000, // 1 second
  max: 2, // limit each IP to 2 requests per windowMs
  message: "Too many requests, please try again later.", // message to send
});

// Limit to 50 requests per hour
export const perHourLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 50, // limit each IP to 50 requests per windowMs
  message: "Too many requests, please try again later.", // message to send
});
