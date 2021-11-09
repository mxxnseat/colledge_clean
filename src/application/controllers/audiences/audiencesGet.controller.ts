import { NextFunction, Response, Request } from "express";

import { getAudiences } from "../../../domains/useCases/audience/getAudiences.usecase";
import { AudienceRepository } from "../../../repositories/base/audience.repository";

export async function getAudiencesController(req: Request<{}, {}, {}>, res: Response, next: NextFunction) {
    const audienceRepository = new AudienceRepository();
    const audienceGetCommand = getAudiences(audienceRepository);
    const result = await audienceGetCommand.execute();

    res.status(200).json(result);
}