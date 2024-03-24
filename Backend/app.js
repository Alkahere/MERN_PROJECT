import express from "express"
import { dbconnection } from "./Database/dbconnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRoutetr.js"
import cors from "cors"
const app = express();


dotenv.config({path: "./config/config.env"});
app.use(express.json());
app.use(cors({
    origin: [process.env.FRONTEND_URI],
    methods: ["POST"],
    credentials: true , 
})
);

app.use(express.urlencoded({ extended: true}));

app.use("/api/v1/message" , messageRouter);
dbconnection();

export default app;