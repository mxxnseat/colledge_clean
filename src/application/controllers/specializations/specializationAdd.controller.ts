import { addSpecialization } from "../../../domains/useCases/specialization/addSpecialization.usecase";
import { Request, Response, NextFunction } from "express";
import { SpecializationRepository } from "../../../repositories/base/specialization.repository";

interface RequestBody {
    name: string
}

export async function addSpecializationController(req: Request<{}, {}, RequestBody>, res: Response, next: NextFunction) {
    const { name } = req.body;
    const specializationRepository = new SpecializationRepository();
    const addSpecializationCommand = addSpecialization(specializationRepository);

    const result = await addSpecializationCommand.execute(name);

    res.status(200).json(result);
}