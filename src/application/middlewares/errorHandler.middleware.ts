import { NextFunction, Request, Response } from "express";

export async function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    console.log(`Error in ${req.path} route`);
    console.log(`Error ${err}`);


    res.status(500).json("Ooops");
}