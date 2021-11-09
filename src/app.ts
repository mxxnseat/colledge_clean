import dotenv from "dotenv";
dotenv.config({
    path: `${__dirname}/../.env`
})

import express, { Application } from "express"
import bodyParser from "body-parser";

import { studentRouter } from "./application/routes/student.route";
import { audienceRouter } from "./application/routes/audience.route";
import { specializationRouter } from "./application/routes/specialization.route";

import { errorHandler } from "./application/middlewares/errorHandler.middleware";
import { connect } from "./connect";

const app: Application = express();
const PORT = 6000;
const MONGODB_URL = process.env.MONGODB as string;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/student", studentRouter);
app.use("/audience", audienceRouter);
app.use("/specialization", specializationRouter);

app.use(errorHandler);

connect(MONGODB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log("Start server");
        });
    })
    .catch((e: unknown) => {
        console.log(e);

        process.exit(0);
    })
