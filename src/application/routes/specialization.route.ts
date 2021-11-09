import { addSpecializationController, getSpecializationsController } from "../controllers/specializations/specialization.controller";
import { NextFunction, Request, Response, Router } from "express";
import asyncHandler from "express-async-handler";

const specializationRouter = Router();


specializationRouter
    .use((req: Request, res: Response, next: NextFunction) => {
        console.log("specialization router");

        next();
    })
    .post("/add", asyncHandler(addSpecializationController))
    .get("/getAll", asyncHandler(getSpecializationsController))


export {
    specializationRouter
}