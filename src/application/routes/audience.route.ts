import { Request, Response, NextFunction, Router } from "express";
import asyncHandler from "express-async-handler";

import { addAudiencesController, getAudiencesController } from "../controllers/audiences/audiences.controller";


const audienceRouter = Router();


audienceRouter
    .use((req: Request, res: Response, next: NextFunction) => {
        console.log("Audience route");


        next();
    })
    .post("/add", asyncHandler(addAudiencesController))
    .get("/getAll", asyncHandler(getAudiencesController));

export {
    audienceRouter
}