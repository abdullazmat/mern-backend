import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Enable (CORS) to allow requests from other origins
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Parse incoming JSON requests with a size limit of 16KB
app.use(
  express.json({
    limit: "16KB",
  })
);

// Parse URL-encoded data from forms and requests
app.use(
  express.urlencoded({
    extended: true,
    limit: "16KB",
  })
);

// Serve static files from the "public" directory
app.use(express.static("public"));

// Access and edit user cookies
app.use(cookieParser);
export { app };
