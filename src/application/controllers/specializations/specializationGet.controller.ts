import { Request, Response, NextFunction } from "express";
import { SpecializationRepository } from "../../../repositories/base/specialization.repository";

export async function getSpecializationsController(req: Request, res: Response, next: NextFunction) {
    const specializationRepository = new SpecializationRepository();


    res.status(200).json("In programming");
}