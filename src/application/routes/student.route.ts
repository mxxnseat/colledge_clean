import { Request, Response, NextFunction, Router } from "express";
import asyncHandler from "express-async-handler";

import {
    studentAddController,
    studentKickController,
    studentGetAllController
} from "../controllers/students/student.controller";



const studentRouter = Router();


studentRouter
    .use((req: Request, res: Response, next: NextFunction) => {
        console.log("Students route");


        next();
    })
    .post("/add", asyncHandler(studentAddController))
    .get("/getAll", asyncHandler(studentGetAllController))
    .delete("/kick", asyncHandler(studentKickController));

export {
    studentRouter
}