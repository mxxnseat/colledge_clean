import { Request, Response, NextFunction } from "express";

import { AudienceRepository } from "../../../repositories/base/audience.repository";
import { addAudiences } from "../../../domains/useCases/audience/addAudiences.usecase";

interface RequestBody {
    num: number,
    specialization: string
}

export async function addAudiencesController(req: Request<{}, {}, RequestBody>, res: Response, next: NextFunction) {
    const { num, specialization } = req.body;
    const audienceRepository = new AudienceRepository();
    const addAudiencesCommand = addAudiences(audienceRepository);

    const audienceDoc = await addAudiencesCommand.execute(num, specialization);


    res.status(200).json(audienceDoc);
}