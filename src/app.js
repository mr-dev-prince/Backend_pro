import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors()
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // storing assets/static files in public directory
app.use(cookieParser())


// routes import

import userRouter from "./routes/user.routes.js"


// route declaration

app.use("/api/v1/users", userRouter);


export default app; 


//middleware: medium or tool to verify req and responses
//next: proceeds the process of further middlewares